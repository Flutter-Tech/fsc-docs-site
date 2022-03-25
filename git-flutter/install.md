---
layout: default
title: Git Flutter Install
article_navigation: true
previous_title: Git Flutter
previous_url: /git-flutter/
next_title: Status Command
next_url: /git-flutter/status/
---

# Install

The `git flutter` extension can be installed on [macOS](#macos-and-linux), [Linux](#macos-and-linux) or [Windows](#windows).

## macOS and Linux

To install or update `git-flutter` on your MacBook or Linux machine:

1. Run the installation script:

```bash
 curl -o- https://innersource.flutter.com/git-flutter/install.sh | bash
```

2. Close and reopen your terminal to start using `git flutter` or run the following command to use it immediately:

```bash
 [ -d "$HOME/.git-flutter/bin" ] && PATH="$HOME/.git-flutter/bin:$PATH"
```

3. Verify the extension installation via `git`:

```bash
 git flutter
```

## Windows

To install on a Windows machine:

<!-- prettier-ignore -->
1. Download the [latest release {{ site.data.cli.version }}](https://innersource.flutter.com/git-flutter/git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip).

Or if you have `curl` installed, use this command:

```bash
curl https://innersource.flutter.com/git-flutter/git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip
```

2. (Optional) Validate the binary by comparing [the provided checksum](https://innersource.flutter.com/git-flutter/checksums.txt) with that of the download which you can calculate at the command prompt:

```bash
CertUtil -hashfile git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip SHA256
```

3. Extract the `git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip` file and copy the `git-flutter.exe` into `C:\Program Files\Git\usr\bin`.

4. Verify the extension installation via `git`:

```bash
git flutter
```
