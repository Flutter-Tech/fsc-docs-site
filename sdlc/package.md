---
layout: default
title: Semantic Versioning
article_navigation: true
previous_title: Validate
previous_url: /sdlc/validate/
next_title: Component Tests
next_url: /sdlc/test/
---

# Package & Publish

Once a code change is validated the updated version can be **packaged** as a deployable artefact. Depending on your application this might be a Docker image, a compiled binary, an rpm or jar file, or simply a bundled and minified source file. This package must then be **published** to a location from which it can be deployed to relevant environments.

- Use [semantic version git tags](#semver-tags) on your repository to label and trigger alpha, beta and production builds.
- Build artifacts (and Change Log) can be attached to a repository via a [GitHub Release](#github-releases).
- Releases can be published to various systems as required: external services (e.g. AWS ECR), GitHub Packages, Artifactory and so on. These choices depend on the requirements of the intended deployments.

## SemVer Tags

Use semantic version git tags on your repository to label and trigger alpha, beta and production builds. Our SemVer conventions are a subset of the [SemVer v2.0.0 spec](https://semver.org/). A semantic version consists of:

`major.minor.patch-team.phase.integration+build`

- `major` is the major version number (integer). A major change for inner source projects is not necessarily a breaking change but rather one that is significant or complex enough to always require cross-team consensus and review.
- `minor` is the minor version number (integer). A minor change for inner source projects is one that simple or routine enough that is can be released by the local in-team maintainer without cross-team consensus.
- `patch` is the patch version number (integer). A patch change is a hotfix usually executed under incident conditions.
- `team` is the team code (string). This can be omitted when there is only a single owning team.
- `phase` is the release phase (`alpha`, `beta` or not present for production).
- `integration` is an integer that indicates pre-release progression e.g. cumulative number of features, commits or similar.
- `build` is an integer that indicates build number (omitted if un-used).

By convention the version number is prefixed by a `v`. For example:

`v2.8.1` is the production `2.8` build after 1 hotfix.

`v1.3.0-lds.beta.3` is a beta build for the intended `v1.3.0` release. It has been created by the `lds` team, and has had several bugfixes applied which can be inferred from the `.3` integration number suffix.

`v3.0.0-alpha.1` is an alpha build for the intended major `v3.0.0` release. It has no team element since all tags are created by a single team in this repository. The `.1` integration number suffix suggests this is an early build without many features yet.

The [`git flutter` CLI](/git-flutter/) tool has various helper features to help you apply these tags easily and consistently to your repository.

## GitHub Releases

GitHub [provide in-built 'release' functionality](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) where you can create a 'release' to package software, along with release notes and links to binary files, for other people to use. Using this feature is recommended.

- supports change logs and a variety of build artifacts if required.
- supports pre-release vs release flags.
- can be both manually created/adjusted and automated via API/workflows.

**COMING SOON**: Some examples how teams create GitHub releases from git tags. This is not Flutter specific so you can use Google to find quality information in the meantime.

## Publish to AWS

A common choice is to publish release artefacts from a repository into AWS for use within that ecosystem. For example, you might choose to publish a Docker image into the AWS container registry for use in AWS deployments:

1. Create a workflow that is triggered by a new GitHub Release ([the `release` event](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release)).
2. Authenticate your workflow [with AWS using OpenID Connect](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).
3. [Login and push image to AWS ECR](https://github.com/aws-actions/amazon-ecr-login).

**COMING SOON**: Case studies of Flutter teams using this flow.

## GitHub Packages

[GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. This is especially useful to publish library packages for re-use across other projects.

**COMING SOON**: Case studies of how teams use GH Packages.

## Artifactory

An internal Artifactory instance is available if using the [self-hosted runners][self-hosted]. This is not always recommended as it has more awkward access requirements across the wider group, but there are cases where it the best choice.

**COMING SOON**: More details about why and when to use Artifactory.

[self-hosted]: /sdlc/validate/#self-hosted-runners
