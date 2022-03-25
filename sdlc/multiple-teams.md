---
layout: default
title: Multiple Teams SDLC
article_navigation: true
previous_title: Standard SDLCs
previous_url: /sdlc/
next_title: Install Git Flutter
next_url: /git-flutter/install/
---

# Multiple Teams SDLC

This software development lifecycle is optimised for a service with [multiple teams contributing to it concurrently](/how/multiple-teams/).

- Uses a derivative of GitFlow to provide each team with their own `develop` branch with cross-team synchronisation during regular releases.
- SemVer git tagging to label and trigger alpha, beta and production builds.
- Release and support branch flows that allow for several different versions in production any of which may need to be hotfixed.

## Overview

The branching model used in this SDLC is a derivative of [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) with each team having their own `<team>/develop` branch. The complexity of this model is only worthwhile when multiple teams are working on the same service concurrently. The [Service SDLC](/sdlc/service/) provides similar features with a simpler branching model if a single primary team exists that just needs to accept external contributions.

Alpha, beta or production-ready builds are signalled by git tags which conform to [our semantic versioning conventions](/sdlc/semver/). For example:

- `v1.3.3` is the latest production release. The last team feature release was `v1.3.0` since which there have been 3 hotfixes.
- `v1.4.0-opo.beta.2` is the next release driven by the `opo` team. Since the initial release build there have probably been 2 minor bugfixes.
- `v1.5.0-lds.alpha.3` is the alpha version in the `lds/develop` branch that is deployed to one of the Leeds team QA environments with 3 unreleased changes.

[Read more about our SemVer conventions in this document](/sdlc/semver/).

## Development

The key concept in this SDLC is that each team with its own deployment has its own `<team>/develop` branch. The team follows its own development process around their `<team>/develop` branch, typically using short-lived feature branches like `<team>/feature/xxx` for each change.

<img src="../multiple-teams-dev.drawio.svg" class="w-full max-w-3xl mx-auto">

- Changes are triaged by each team's local [maintainer(s)](/how/multiple-teams/#who-are-maintainers)). A **minor** change typically would not require cross-team review. A **major** change into a develop branch will require cross-team review to ensure all-team consensus.
- Each team can tag and build their own `alpha` releases from their `<team>/develop` branch for their local QA environment(s). In this way they can treat their `<team>/develop` branch like an environment branch.
- Each team will integrate **all** changes from every team via **releases**. But between releases each team can conceptually treat other teams `develop` branches similar to their own feature branches: a set of changes that need awareness and timely review but don't yet directly impact.
- If there are 2 teams/deployments in 2 different divisions the team labels might relate to the divisions e.g. `ppb/develop` and `fd/develop` for PPB and FanDuel teams. But the number of develop branches and the names used for teams depends on your context and do not need to relate to divisions.

## Releases

Work from all the `<team>/develop` branches is integrated into a single production branch (`main` or `master`) through team major/minor **releases**. Only one major/minor release can occur at any time. The release changes are synchronised back into all `<team>/develop` branches before the next release.

<img src="../multiple-teams-release.drawio.svg" class="w-full max-w-3xl mx-auto">

The diagram shows an example release:

1. The Porto (`opo`) team starts a release by creating the `opo/release/v1.4` branch from their current `opo/develop` branch. They tag this branch as `v1.4.0-opo.beta.0` which triggers a deployable beta build for QA.
2. Beta testing results in 2 minor bug fixes that are committed to the release branch (or merged from a reviewed PR). After each the release branch is tagged to create an updated beta build.
3. The release branch `opo/release/v1.4` is merged into the `main` production branch via a PR and tagged as `v1.4.0` to denote the final production build.
4. The Leeds team are aware of the Porto release and may be actively involved, but can also continue unaffected in their `lds/develop` branch. Because `1.4` is now an active beta release, they increment their next alpha tag version to indicate the changes are now targeted at the `1.5` release.
5. Once the Porto team have completed the `v1.4.0` release by merging the changes into `main`, the Leeds team synchronise their develop branch by merging the changes from main back into their own `lds/develop` branch.
6. The Porto team also synchronise their develop branch by merging the changes from main back into their own `opo/develop` branch.

## Hotfixing

A hotfix is a change correcting a fault that needs to be released as quickly as possible (often under incident conditions). Hotfixes can be applied at any time as patch releases via a `/hotfix/<name>` branch which is merged directly into the production branch.

<img src="../multiple-teams-hotfix.drawio.svg" class="w-full max-w-xl mx-auto">

This diagram shows an example hotfix. A performance regression is detected on Friday by the Porto team in the latest `v1.4.0` release which is expected to cause capacity problems on Saturday. They take the operational decision to fix forward:

1. The `/hotfix/sat-capacity` hotfix branch is created.
2. A mitigating fix is committed. This is tagged as `v1.4.1-opo.beta.0` to allow beta testing and verification.
3. The hotfix is merged (via reviewed PR) back into `main` and tagged as a patch release `v1.4.1`.
4. Like a major/minor release, the Porto team will synchronise their `opo/develop` branch with `main` to integrate the hotfix.
5. The Leeds team will also synchronise their `lds/develop` branch to integrate the hotfix. They may not do this immediately but must do this before starting their next release.

Hotfixes can be applied during a major/minor release. In such cases the relevant release branch must also be synchronised with `main` to ensure the hotfix is included during beta testing.

## Support

This SDLC expects each team to own and manage their own deployment(s). The deployment process itself will vary by team based on their tools, infrastructure and desired topology. This SDLC simply promotes the use of [semver tags](/sdlc/semver/) to signal that a build should be created and made available for all teams for deployment if desired.

Not all teams will have the same version deployed. Older versions should not be the target of new features, but must be supported until a team has migrated to the latest release. To support older versions hotfixes can be applied to any previous version on a `/support/<version>` branch.

<img src="../multiple-teams-support.drawio.svg" class="w-full max-w-xl mx-auto">

This diagram shows an example support hotfix. The Leeds team realises that the performance regression detected by the Porto team is also present in their currently deployed `v1.2.2` service. As a precaution they decide to also apply the fix but are not yet ready to upgrade to the latest `v1.4.1` version that includes it. So they apply a support hotfix:

1. A `support/v1.2` branch is created from the latest `v1.2.x` release tag (`v1.2.2`). This is the long-running support branch and will be used for all further `v1.2.x` releases.
2. The `/hotfix/sat-capacity-backport` hotfix branch is created, and the mitigating commit is applied. This is tagged as `v1.2.3-lds.beta.0` to allow beta testing and verification.
3. The hotfix is merged (via reviewed PR) back into `support/v1.2` and tagged as a patch release `v1.2.3` which the Leeds team can now deploy to update their older version with an isolated fix.

## Setup

This SDLC is setup using the [`git flutter init` command](/git-flutter/init/). At this early point in its wider adoption the [Inner Source Team](/community/) are providing direct support for setup so please get in touch and we will go through the available options and help you get started.

## git flutter Examples

This SDLC is supported by the [git flutter CLI tool](/git-flutter/). Using this tool helps prevent common mistakes like starting concurrent releases and saves you time by shortening common commands in this workflow.

{% include cli-examples.html topic="gitflow" %}
