---
layout: default
title: Semantic Versioning
article_navigation: true
---

# Semantic Versioning

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

{% include sdlc/branching-vid.html %}

Using git tags helps to decouple your CI from your branching model, allowing you to adjust that more easily as your requirements change over time.
