---
layout: preview
title: Git Flutter CLI
---

# `git flutter` CLI

The Git Flutter CLI is a tool for using standard inner source development workflows from your computer's command line. When you're working from the command line, you can use the Git Flutter CLI to save time.

```
{{ site.data.cli.usage }}
```

## Install

To install the CLI:

1. Download the latest release from the [fsc-cli-tool release page](https://github.com/Flutter-Global/fsc-cli-tool/releases). Builds are available for MacOS, Linux and Windows.
2. Rename the binary to `git-flutter` and place it on your `PATH`. For example on Mac:

```
$ cp ~/Downloads/mac_git-flutter /usr/local/bin/git-flutter
```

3. Check your install by using via `git`:

```
$ git flutter
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
