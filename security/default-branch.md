---
layout: default
title: Default Branch Write Access
article_navigation: true
next_title: Overview
next_url: /security/
previous_title: Repo Admin
previous_url: /security/admin/
---

# Default Branch Write Access

The default branch of a repository (`main` or `master`) is typically more important than other temporary branches. It usually contains the code that will be used in production. Write access to the default branch should be protected to reduce the risk of mistakes or subversive contribution.

## Risk Severity

The risk severity of direct write access to a repository is determined by the number of users that can perform this action.

| Number of Admins | Severity | Why                                                                                                                         |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| <200             | None     | There are many workflow setups where direct write to the default branch for a group of editors is normal.                   |
| 200+             | High     | Over 200 contributors with direct write access to the default branch is usually a setup mistake and is typically high risk. |

This risk is reported for your repository or capability in the [service catalogue](/catalogue/).

## Default Branch Protection

GitHub branch protection rules ([GitHub docs][gh-bp]) can restrict the default branch to mitigate this risk. How you use them will depend on your workflow and branching strategy.

If you use a capability `codebases.json` to manage your repository then you can use that [to configure your desired branch protection for the repositories][configure-bp] within that capability.

[gh-bp]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
[configure-bp]: /docs/branch-protection/#configuring-branch-protection
