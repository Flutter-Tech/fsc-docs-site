---
layout: default
title: Maintaining a Repository
article_navigation: true
previous_title: Creating a Repo
previous_url: /docs/create-repo/
next_title: Codebase Governor
next_url: /docs/cbg/
---

# Maintaining a Repo

If you [have created and now own](/docs/create-repo/) a repository in `Flutter-Global` you will need to maintain it or find others to do so. Repositories in `Flutter-Global` are categorised using the [Inner Source Pyramid](/how/) and your activity as a maintainer will depend on what stage you want to operate in.

## All Maintainers

All repositories must be maintained whether they are intended to be inner source or not.

- Configure your repositories as part of a capability using the [Codebase Governor](/docs/cbg/). This allows us to understand who owns a repository.
- Look-up your entry in the [service catalogue](/catalogue/) to detect any mis-configurations.
- Risk assess and define your development lifecycle in the context of the [permissions model of `Flutter-Global`](/docs/branch-protection/). If you are unsure, you can use [an existing common pattern](/sdlc/).
- Document who you are and how you want others to engage with you in `README.md` statements or wherever your users will look for that information.

## Readable Source Maintainer

A [stage 1](/how/readable-source) maintainer is a technical in-team expert who represents the cross-divisional community of users during the development process:

- Understand the scope of "[readable source](/how/readable-source)" and ensure a plan and/or prioritised backlog exists for the areas where transparent cross-divisional access should be improved.
- Pro-actively engage with your users and understand their deployment topologies, release processes and non-functional requirements. You will need to respect these constraints as you guide the forward capability developments to ensure new releases do not break existing deployments.

## Guest Contribution Maintainer

A [stage 2](/how/guest-contributions/) maintainer is a technical in-team expert who represents the wider community of users _and_ helps that community develop and contribute their own changes. In addition to stage 1:

- Understand what [accepting guest contributions means](/how/guest-contributions/) and what quality of contribution you want vs. can currently expect.
- Adjust your development lifecycle to enable contributions from outside your team: e.g. [safely adding `all-flutter-global` write access](/docs/branch-protection/).
- Ensure a plan and/or prioritised backlog exists for how to improve contribution quality in your capability (e.g. `CONTRIBUTING.md` or other guides, better triage or early engagement processes or improved PR feedback).
- Encourage contributions and help get them merged and released quickly (e.g. prompt helpful PR reviews). Time doing this may conflict with your local team priorities so ensure your manager and team understand and agree with the importance of this activity and the level of effort you can dedicate to it.
- Be a guardian of the quality standards your capability needs for a sustainable long-term future: have the confidence to reject PRs for maintainability reasons and use corrections as an opportunity to educate contributors.
- Create new expert maintainers in your capability to help scale both its usage and contributions. e.g. helping on-board individuals and teams, or capturing decisions to share for others to learn from.

## Multiple Teams Maintainer

A [stage 3](/how/multiple-teams/) maintainer acts as part of a distributed team of capability experts across multiple divisions. It is a complex role which requires good collaboration skills as well as technical expertise. To be effective in this role you must [first understand the complexity of a stage 3 capability](/how/multiple-teams/). Beyond your stage 1 & 2 responsibilities your priorities will depend wholly on your capability context but you would be expected to be:

- [helping to maximise divisional independence](/how/independence/)
- [driving consensus for significant change](/how/consensus/)
- [helping to prioritise unpopular work](/how/work-types/)

Good luck!
