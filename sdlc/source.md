---
layout: default
title: Source Control
article_navigation: true
previous_title: Standard SDLCs
previous_url: /sdlc/
next_title: Validate
next_url: /sdlc/validate/
---

# Source Control

Your source code is stored in a repository within the `Flutter-Global` organisation. This will have:

1. a branching strategy: where is the code initially contributed to and then merged into?
2. an access control strategy: who can access the repository, and with what permissions?
3. branch protections to ensure the combination of (1) and (2) is secure.

## Branching Strategy

A choice of three branching strategies are available:

1. [Multiple Teams](/sdlc/multiple-teams/)
2. Service (COMING SOON)
3. Audited (COMING SOON)

If none of these meet your specific requirements [you can also define your own custom setup](/docs/branch-protection/).

### [Multiple Teams](/sdlc/multiple-teams/)

This branching strategy is suitable for production deployed service code repositories where changes MUST be reviewed. Multiple Teams branching is optimised for [Maintainers in Multiple Teams](/how/multiple-teams/) services where there are multiple teams working concurrently on the code. It uses a modified GitFlow branching model and SemVer release tagging to support concurrent team development and several different supported versions in production.

### COMING SOON: Service Branching

This branching strategy is suitable for production deployed service code repositories where changes MUST be reviewed. Service branching is optimised for [Guest Contribution](/how/guest-contributions/) services where there is a clear owning team. It is based on a simple GitHub Flow branching model which is easy to understand and SemVer release tagging to signal production-ready builds.

### COMING SOON: Audit Branching

This branching strategy is suitable for documentation, integration test or other non-production deployed supporting repositories where changes CAN be reviewed. Audit branching ensures previous changes are visible and can be audited at any time, but does not require changes to be reviewed before they are made. It uses a simple GitHub Flow or trunk-based development branching model with more relaxed branch protection rules.

## Repository Owner and Maintainers

Each repository has a named owner and a team of maintainers. It is this group that are permitted elevated admin permissions on their repositories to allow them to manage them effectively. You should ensure your repositories are grouped together into a [capability] which uses [codebases.json] to define owner and maintainers groups. The [codebase governor](/docs/codebase-governor/) will then ensure they have the appropriate permissions on all repositories within a capability.

## Contributor Access Control

A choice of three access control models are available for contributors:

1. Inner Source: all org members are treated as contributors.
2. Requested Access: contributors need to request write access.
3. Closed Source: only a limited group have any access at all.

The default repository visibility is `Internal`. This means all Flutter staff have read access by joining one of the GitHub organisations within the enterprise agreement. This repository visibility is suitable for (1) and (2), but Closed Source repositories need to have `Private` visibility to prevent any default read access. To switch a repository to `Private` you will need to contact the [Inner Source Team](/community/).

In an **Inner Source** model, all members of `Flutter-Global` are treated as contributors. Therefore all members of the organisation are given write access to the repository by granting the `all-flutter-global` team write permissions. You can use your capability [codebases.json] to do this. Note how robust branch protection is required to maintain a secure workflow -- any of the standard branching strategies are suitable and optimised for this setup.

The **Requested Access** model is not recommended as it provided limited security benefit at the expense of contribution friction (no default access), and requires you to maintain your own access request process. However it can be effective when coupled with an automated team maintenance process -- for example if you are syncing teams from Okta or similar. It simply requires you to add a custom contributor team that you maintain to your repositories with write access rather than the `all-flutter-global` team. You can use your capability [codebases.json] to do this.

The **Closed Source** model requires a similar custom contributor team as the "Requested Access" model, but the repository visibility is also set to `Private` to restrict read visibility of this repository to contributors. This is for sensitive content only, and to achieve this outcome you will need to contact the [Inner Source Team](/community/).

[capability]: /docs/#capability
[codebases.json]: /docs/codebases-json/
