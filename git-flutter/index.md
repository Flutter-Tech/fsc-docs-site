---
layout: preview
title: Git Flutter CLI
---

# `git flutter` CLI

The Git Flutter CLI is a tool for using standard inner source development workflows from your computer's command line. When you're working from the command line, you can use the Git Flutter CLI to save time.

```
{{ site.data.cli.usage }}
```

## macOS Install

Download the latest {{ site.data.cli.version }} macOS binary. For Intel macOS:

```
curl https://innersource.flutter.com/git-flutter/git-flutter_macOS_arm64
```

And for macOS on Apple Silicon:

```
curl https://innersource.flutter.com/git-flutter/git-flutter_macOS_amd64
```

(Optional) Validate the binary using the provided checksums:

```
curl -LO "https://innersource.flutter.com/git-flutter/checksums.txt"

Intel macOS:
grep macOS_amd64 checksums.txt | shasum -a 256 --check
mv git-flutter_macOS_amd64 git-flutter

Apple Silicon macOS:
grep macOS_arm64 checksums.txt | shasum -a 256 --check
mv git-flutter_macOS_arm64 git-flutter
```

Make the binary executable:

```
chmod +x ./git-flutter
```

Move to a location on your `PATH`:

```
sudo mv ./git-flutter /usr/local/bin/
sudo chown root: /usr/local/bin/git-flutter
```

Test the command via `git`:

```
git flutter --version
```

## Getting Started

This tool is provided to help you use the standard SDLCs so its usage will depend on your choice of workflow and branching model. This section contains reference documentation for each command, and your chosen SDLC will document its usage for that specific approach.

- `status` : showing you the current status of a repository checkout.
- `feature` : get started on a new feature.
- `hotfix` : get started on a hotfix for the current release.
- `release` : start a new release.
- `tag` : semver tag a branch to trigger further processes like deployment.

## Support

The CLI is supported by the [Inner Source Team](/community/) who can be contacted for help & support. By all means raise bugs/feature requests as GitHub issues in the [fsc-cli-tool](https://github.com/Flutter-Global/fsc-cli-tool/issues) repository. Direct feature or bugfix contributions are also very welcome.
