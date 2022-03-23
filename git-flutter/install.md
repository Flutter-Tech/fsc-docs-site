---
layout: preview
title: Git Flutter Install
article_navigation: true
previous_title: Git Flutter
previous_url: /git-flutter/
next_title: Status Command
next_url: /git-flutter/status/
---

# Install

The `git flutter` extension can be installed on [macOS](#macos), [Linux](#linux) or [Windows](#windows).

## macOS

To install on your MacBook:

1. Download the latest {{ site.data.cli.version }} macOS binary:

```
curl https://innersource.flutter.com/git-flutter/git-flutter_macOS_amd64
```

2. (Optional) Validate the binary using the provided checksums:

```
curl "https://innersource.flutter.com/git-flutter/checksums.txt"
grep macOS_amd64 checksums.txt | shasum -a 256 --check
```

3. Make the binary executable:

```
chmod +x ./git-flutter_macOS_amd64
```

4. Move to a location on your `PATH`:

```
sudo mv ./git-flutter_macOS_amd64 /usr/local/bin/git-flutter
sudo chown root: /usr/local/bin/git-flutter
```

5. Verify the command installation via `git`:

```
git flutter
```

## Linux

To install on a Linux dev or CI machine:

1. Download the latest {{ site.data.cli.version }} Linux binary:

```
curl https://innersource.flutter.com/git-flutter/git-flutter_Linux_amd64
```

2. (Optional) Validate the binary using the provided checksums:

```
curl "https://innersource.flutter.com/git-flutter/checksums.txt"
grep Linux_amd64 checksums.txt | shasum -a 256 --check
```

3. Install the executable:

```
sudo install -o root -g root -m 0755 git-flutter_Linux_amd64 /usr/local/bin/git-flutter
```

If you do not have root access on the target system, you can still install git-flutter to the `~/.local/bin` directory:

```
chmod +x git-flutter_Linux_amd64
mkdir -p ~/.local/bin/
mv ./git-flutter_Linux_amd64 ~/.local/bin/git-flutter
# and then append (or prepend) ~/.local/bin to $PATH
```

5. Verify the command installation via `git`:

```
git flutter
```

## Windows

To install on a Windows machine:

1. Download the [latest release {{ site.data.cli.version }}](https://innersource.flutter.com/git-flutter/git-flutter_Windows_amd64.exe).

Or if you have `curl` installed, use this command:

```
curl https://innersource.flutter.com/git-flutter/git-flutter_Windows_amd64.exe
```

2. (Optional) Validate the binary by comparing [the provided checksum](https://innersource.flutter.com/git-flutter/checksums.txt) with that of the download which you can calculate at the command prompt:

```
CertUtil -hashfile git-flutter_Windows_amd64.exe SHA256
```

3. Rename the binary to `git-flutter.exe`.

4. Append or prepend the `git-flutter.exe` binary folder to your `PATH` environment variable.

5. Verify the command installation via `git`:

```
git flutter
```
