#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

gf_has() {
    type "$1" >/dev/null 2>&1
}

gf_echo() {
    command printf %s\\n "$*" 2>/dev/null
}

gf_download() {
    if gf_has "curl"; then
        curl --fail --compressed -q "$@"
    elif gf_has "wget"; then
        # Emulate curl with wget
        ARGS=$(gf_echo "$@" | command sed -e 's/--progress-bar /--progress=bar /' \
            -e 's/--compressed //' \
            -e 's/--fail //' \
            -e 's/-L //' \
            -e 's/-I /--server-response /' \
            -e 's/-s /-q /' \
            -e 's/-sS /-nv /' \
            -e 's/-o /-O /' \
            -e 's/-C - /-c /')
        # shellcheck disable=SC2086
        eval wget $ARGS
    fi
}

gf_default_install_dir() {
    [ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.git-flutter" || printf %s "${XDG_CONFIG_HOME}/git-flutter"
}

gf_try_profile() {
    if [ -z "${1-}" ] || [ ! -f "${1}" ]; then
        return 1
    fi
    gf_echo "${1}"
}

#
# Detect profile file if not specified as environment variable
# (eg: PROFILE=~/.myprofile)
# The echo'ed path is guaranteed to be an existing file
# Otherwise, an empty string is returned
#
gf_detect_profile() {
if [ "${PROFILE-}" = '/dev/null' ]; then
    # the user has specifically requested NOT to have git-flutter touch their profile
    return
fi

if [ -n "${PROFILE}" ] && [ -f "${PROFILE}" ]; then
    gf_echo "${PROFILE}"
    return
fi

local DETECTED_PROFILE
DETECTED_PROFILE=''

if [ "${SHELL#*bash}" != "$SHELL" ]; then
    if [ -f "$HOME/.bashrc" ]; then
        DETECTED_PROFILE="$HOME/.bashrc"
    elif [ -f "$HOME/.bash_profile" ]; then
        DETECTED_PROFILE="$HOME/.bash_profile"
    fi
elif [ "${SHELL#*zsh}" != "$SHELL" ]; then
    if [ -f "$HOME/.zshrc" ]; then
        DETECTED_PROFILE="$HOME/.zshrc"
    elif [ -f "$HOME/.zshenv" ]; then
        DETECTED_PROFILE="$HOME/.zshenv"
    fi
fi

if [ -z "$DETECTED_PROFILE" ]; then
    for EACH_PROFILE in ".profile" ".bashrc" ".bash_profile" ".zshrc"
    do
    if DETECTED_PROFILE="$(gf_try_profile "${HOME}/${EACH_PROFILE}")"; then
        break
    fi
    done
fi

if [ -n "$DETECTED_PROFILE" ]; then
    gf_echo "$DETECTED_PROFILE"
fi
}

gf_archive_suffix() {
    arch=$(arch)
    suffix=""

    case "$arch" in
        arm64)  arch="arm64" ;;
        *)      arch="x86_64" ;;
    esac

    case "$OSTYPE" in
        darwin*)        suffix="_macOS_${arch}.zip" ;; 
        linux*)         suffix="_Linux_${arch}.tar.gz" ;;
        msys*|cygwin*)  suffix="_Windows_${arch}.zip" ;;
        *)              gf_echo >&2 "Unsupported OS: $OSTYPE" return 1 ;;
    esac
    
    printf %s "$suffix"
}

gf_install() {
    if ! gf_has curl && ! gf_has wget && ! gf_has arch; then
        gf_echo >&2 'You need curl, or wget to install git-flutter'
        exit 1
    fi

    local ARCHIVE_SUFFIX
    ARCHIVE_SUFFIX=$(gf_archive_suffix)

    local URL
    local LATEST_VERSION

    URL="https://innersource.flutter.com/cli.json"
    gf_echo "=> Downloading git-flutter metadata"
    LATEST_VERSION=$(gf_download -s "$URL" | sed -n 's|.*"latest-version": \{0,1\}"v\([^"]*\)".*|\1|p') || {
        gf_echo >&2 "Failed to download '$URL'"
        return 1
    }
    gf_echo "=> git-flutter latest version: $LATEST_VERSION"

    local INSTALL_DIR
    INSTALL_DIR="$(gf_default_install_dir)"
    local INSTALL_DIR_PKG
    INSTALL_DIR_PKG="$INSTALL_DIR/pkg"
    local INSTALL_DIR_BIN
    INSTALL_DIR_BIN="$INSTALL_DIR/bin"
    local TEMP_ARCHIVE_FILE
    TEMP_ARCHIVE_FILE="$(mktemp -d)/git-flutter${ARCHIVE_SUFFIX}"

    mkdir -p "$INSTALL_DIR_PKG"
    if [ -f "$INSTALL_DIR_PKG/git-flutter" ]; then
        gf_echo "=> git-flutter is already installed in $INSTALL_DIR, trying to update"
    else
        gf_echo "=> Downloading git-flutter archive '$TEMP_ARCHIVE_FILE'"
    fi

    URL="https://innersource.flutter.com/git-flutter/git-flutter_${LATEST_VERSION}${ARCHIVE_SUFFIX}"
    gf_download -s "$URL" -o "$TEMP_ARCHIVE_FILE" || {
        gf_echo >&2 "Failed to download '$URL'"
        return 1
    } &
    for job in $(jobs -p | command sort)
    do
        wait "$job" || return $?
    done

    # Extracttion and file copy
    case "$TEMP_ARCHIVE_FILE" in
        *.tar.gz) tar xzf "$TEMP_ARCHIVE_FILE" -C "$INSTALL_DIR_PKG" ;;
        *.zip) unzip -o -qq "$TEMP_ARCHIVE_FILE" -d "$INSTALL_DIR_PKG" ;;
    esac

    chmod a+x "$INSTALL_DIR_PKG/git-flutter" || {
        gf_echo >&2 "Failed to mark '$INSTALL_DIR_PKG/git-flutter' as executable"
        return 3
    }

    # Create bin symbolic link
    mkdir -p "$INSTALL_DIR_BIN"
    ln -sf "$INSTALL_DIR_PKG/git-flutter" "$INSTALL_DIR_BIN/git-flutter"

    local GF_PROFILE
    GF_PROFILE="$(gf_detect_profile)"
    SOURCE_STR="\\n[ -d $INSTALL_DIR_BIN ] && export PATH=\"$INSTALL_DIR_BIN:\$PATH\"\\n"

    if [ -z "${GF_PROFILE-}" ] ; then
        local TRIED_PROFILE
        if [ -n "${PROFILE}" ]; then
        TRIED_PROFILE="${GF_PROFILE} (as defined in \$PROFILE), "
        fi
        gf_echo "=> Profile not found. Tried ${TRIED_PROFILE-}~/.bashrc, ~/.bash_profile, ~/.zshrc, ~/.zshenv, and ~/.profile."
        gf_echo "=> Create one of them and run this script again"
        gf_echo "   OR"
        gf_echo "=> Append the following lines to the correct file yourself:"
        command printf "${SOURCE_STR}"
        gf_echo
    else
        if ! command grep -qc "$INSTALL_DIR_BIN" "$GF_PROFILE"; then
            gf_echo "=> Appending git-flutter source to $GF_PROFILE"
            command printf "${SOURCE_STR}" >> "$GF_PROFILE"
        else
            gf_echo "=> git-flutter source already in ${GF_PROFILE}"
        fi
    fi

    gf_echo "=> 🎉 git-flutter was installed successfully 🎉"

    if ! command echo "$PATH" | grep -qc "$INSTALL_DIR_BIN"; then
        gf_echo "=> Close and reopen your terminal to start using git-flutter or run the following to use it now:"
        command printf "${SOURCE_STR}"
    fi

    gf_reset
}

#
# Unsets the various functions defined
# during the execution of the install script
#
gf_reset() {
  unset -f gf_has gf_echo gf_download gf_default_install_dir gf_try_profile gf_detect_profile \
    gf_archive_suffix gf_install gf_reset
}

gf_install

} # this ensures the entire script is downloaded #
