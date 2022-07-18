---
layout: default
title: Repo Admin
article_navigation: true
next_title: Default Branch Write Access
next_url: /security/default-branch/
previous_title: Dependabot
previous_url: /security/dependabot/
---

# Repository Administration

Users responsible for managing a repository require elevated permissions to manage its setup. Such permissions should be granted only to those who need them, and at the right level for the settings they need to change.

## GitHub Roles

GitHub [define a number of roles][gh-roles] that can be assigned to users of a repository:

> - **Read**: Recommended for non-code contributors who want to view or discuss your project
> - **Triage**: Recommended for contributors who need to proactively manage issues and pull requests without write access
> - **Write**: Recommended for contributors who actively push to your project
> - **Maintain**: Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
> - **Admin**: Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository

Repository administration requires the `Admin` role.

## Who Needs Admin?

The `Admin` role should only be granted to those who need it, usually a small team of maintainers who need to adjust the access, settings or tag/branch protection. The `Admin` role is required to:

- manage individual or team access to the repository
- manage branch protection rules
- merge pull requests on protected branches, even if there are no approving reviews
- manage webhooks and deploy keys
- create and delete tags that match a tag protection rule
- define the CODEOWNERS
- delete or archive the repository

A full list of actions requiring the `Admin` role [is documented by GitHub][gh-roles].

## Risk Severity

The risk severity of granting administrative access to a repository is determined by the number of users it has been granted to:

| Number of Admins | Severity | Why                                                                                                                   |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| <10              | None     | A small group to allow prompt repository management when required is considered normal.                               |
| 10-14            | Low      | 10 to 14 admins is considered more than necessary but remains low risk due to the limited group size.                 |
| 15-19            | Medium   | 15-19 admins is considered significantly more than necessary to manage a repository and is classified as medium risk. |
| 20-24            | High     | 20-24 admins is considered excessive and classified as high risk.                                                     |
| 25+              | Critical | 25+ admins is considered likely to be a mistake and classified as a critical risk.                                    |

This risk is reported for your repository or capability in the [service catalogue](/catalogue/).

## Reducing Severity

To reduce the risk severity you should reduce the number of users with the `Admin` role. All divisional security policies require regular access reviews (e.g. every 6 months) so it is recommended to reduce the size of the group granted such privileges at your next review.

If you use [a capability codebases.json](/docs/codebases-json/) to manage your repository permissions then the configured maintainers will be granted `Admin` role on the repository. If you find the group of maintainers is becoming large you may want to prune inactive maintainers or divide a large capability into several smaller ones with reduced size maintainer teams.

[gh-roles]: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
