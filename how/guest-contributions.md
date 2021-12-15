---
layout: default
title: Guest Contributions
article_navigation: true
previous_title: Stage 1 - Readable Source
previous_url: /how/readable-source/
next_title: Stage 3 - Maintainers in Multiple Teams
next_url: /how/multiple-teams/
---

# Stage 2: Guest Contributions

This page explains the second stage of the [inner source pyramid](/how/).

> The host team retain full accountability for the capability development and encourage and review 'guest' contributions from other teams who need to change it either for their own deployments or projects. If the host team deem the guest contribution to be of sufficient quality it will be accepted and the host team will take forward responsibility for it, otherwise it may be rejected or re-worked.

## What quality of contribution do you need?

The most important consideration for a host team is reducing the risk and on-going maintenance burden of the external contributions they are being asked to accept and take forward responsibility for. The most important consideration for guest teams is the predictability of whether a contribution they make will be accepted in a timely fashion so they can meet their delivery commitments. All these factors depend on the **quality** of the contribution.

### What is quality?

The "quality" of a contribution is defined as:

- Is it **secure**? Is it securely coded? Is the behaviour abusable by users? Are any insecure dependencies introduced?
- Is it **correct**? Does it correctly implement the desired behaviour? Does it break any other existing behaviour? Do unhandled edge cases exist?
- Is it **operable**? Is it observable via existing monitoring? Is is releasable to all deployment topologies? Does it introduce any additional operational complexity?
- Is it **maintainable**? Does the code quality and architecture meet required standards & conventions? Is automated test coverage adequate?

### Agreeing a quality standard

For an inner source capability that is used by multiple divisions agreeing these contribution standards can be complex: security policies vary across divisions; a range of deployment topologies exist; and different divisional priorities on risk or short vs long-term investment.

For a host team just moving into this stage these standards will be the local standards of the hosting team's division. As other divisions start to use and contribute these standards will need to be adjusted to also meet their needs. This usually happens by:

- Using a division's standard as the collective benchmark. For example this is common for capacity and performance requirements where the necessary standard is that of the highest volume user: as long as that most demanding division's standards are met, everyone else will also be satisfied.
- Consensus for each significant change. The relevant standards owner from each consuming division will review and accept for each significant change (this is too inefficient to apply to minor changes). For example, each division's security team might review and risk assess each significant change so multiple standards are applied.
- Use a pre-agreed group-wide minimum standard. If a group-wide inter-divisionally agreed standard exists it can simply be used as the benchmark. For example, the usage of the existing inner source conventions and standards in the GitHub Flutter-Global org are pre-agreed with each division.

## How to achieve the desired quality of contribution?

You must enforce your agreed quality standards by reviewing contributions and rejecting those that do not meet the minimum requirements. This is achieved by [accepting contributions as pull requests (PR), and using branch protection to ensure the contribution is reviewed](/docs/branch-protection/) by an expert confident and knowledgeable enough to uphold those standards.

This is simple to say, hard to do consistently, but critical for the success of your inner source product.

If you are finding this difficult it is best to put effort into answering the question "How can I improve the quality of contributions" -- this makes it easier for contributors to have their changes approved while also reducing the work required to review them.

## How do I improve the quality of contributions before review?

As the volume of contributions increase, it is worth putting more effort into improving their quality before they reach a review to save yourself and your contributor's time. You can do this by:

- writing contributing guides
- triage and early engagement
- using automated PR feedback

### Writing Contribution Guides

The `CONTRIBUTING.md` markdown file in each repository has a semantic meaning by GitHub convention: it is linked from various locations as the repository 'contributing guide'. The simplest way to improve the quality of contributions is to use this document to help contributors.

The contents of this guide will depend on the purpose of the repository, commonly included is:

- the required contribution process (triage process, use of issues and pull requests, release and QA process)
- what to expect as a contributor (SLAs for PR review time, change warranty periods after merge)
- hot to get expert help (links to host team or community slack channel)
- how to setup local development environment and build the capability
- how to verify changes with manual or automated tests
- capability software architecture and design ethos to follow
- how to write tests and what coverage is expected
- CI and release setup, what to expect and how a contribution get released

See Also: [Inner Source Commons: Shared Base Documentation Pattern](https://patterns.innersourcecommons.org/p/base-documentation#contributing-md)

### Triage and Early Engagement

Our experience at Flutter is that expert advice before a contribution is started (however brief) is extremely valuable in raising the quality of that contribution and avoid significant rework effort. This experience is also reflected in other organisations, e.g. at PayPal:

> Contributor teams were encouraged to notify the receiving Trusted Committers by filing an issue as soon as an InnerSource contribution is contemplated. This allowed both sides to maximize resource planning. It also allowed the receiving Trusted Committers to fend off any misguided planned contributions. Once we started doing this with all Inner source projects, we saw a higher throughput of contributed and merged lines of code.
> From: [Adopting Inner Source](https://innersourcecommons.org/documents/books/AdoptingInnerSource.pdf)

Some ideas for an effective triage and early engagement process:

- ask contributors to raise GitHub issues to get feedback before starting, and ensure a timely expert response
- define a clear RFC process for significant change, and ensure these are reviewed
- encourage new contributors to ask questions your team or a shared community slack channel
- scheduled 'drop in' calendar slots with capability experts, or an open-invite maintainers or host team meeting

### Using Automated PR Feedback

Automated quality checks that run against a PR using GitHub Actions are a significant help in raising the contribution quality.

- these checks are a transparent set of contribution rules that provide immediate unambiguous feedback
- encourage contributors to raise 'Draft' GitHub PRs as early as possible so these checks can run regularly against the contribution during it's development
- additions or changes to these checks can form part of the contribution

Common tasks undertaken in such checks:

- code lint and compile checks
- automated unit, integration or performance tests
- static analysis for quality or security
- building release packages
- workflow automation like labelling or project inclusion
