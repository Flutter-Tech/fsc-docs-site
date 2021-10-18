---
layout: default
title: Readable Source
article_navigation: true
previous_title: Choosing Inner Source
previous_url: /how/choose/
next_title: Stage 2 - Guest Contributions
next_url: /how/guest-contributions/
---

# Stage 1: Readable Source

The first step towards the transparency required for inner source to work. The host team are responsible for developing the capability and run their own deployment, with all changes to the capability implemented by the host. However, other teams may also be deploying and using the capability or including parts of it in their own capabilities -- possible because the host team granted read access to user stories, source code, test suites, CI pipeline and build artifacts to all Flutter engineers.

## What should I share, and to whom?

The crucial question throughout the readable source stage is:

> Can others use this capability?

Anyone within the organisation should be able to understand, build, deploy and use your work or create derivatives of it. Typically this is what you will share read access to:

- application source code
- build instructions & dependencies (e.g. private npm/maven packages)
- integration/performance test suites
- deployment configuration (e.g. terraform, AWS CDK, chef, ansible)
- manual QA checklists and scripts
- testing mocks (e.g. a divisional account & wallet dependency)
- CI pipeline definition and status
- versioned release notes and artefacts
- usage documentation
- design docs or proposals with decision log
- user stories
- operational run-books and deployment guides
- operational post-mortem and learnings

This list will not be complete or indeed many points may not be relevant for your circumstances. The important point to understand is that doing this stage well involves more than simply sharing access to an capability's primary application source code. That is a good start, but not enough.

Within Flutter the scope of the inner source is sharing across the entire group: so access to your work should be possible across all the engineers in all divisions: International, US, UK&I and Australia.

## How do I share cross-divisionally?

The different companies and divisions within Flutter group still at present have several independent identity management systems that won't be consolidated till 2022. There are 2 shared platforms that all Flutter staff can collaborate through:

- **Slack** : usage of shared slack channels allows multiple divisions to work together across divisional boundaries.
- **GitHub** : the [inner source team](/community/) manage the `Flutter-Global` GitHub organisation to facilitate cross-divisional inner source working.

In addition a number of on-request cross-divisional access workflows have been created to facilitate cross-divisional sharing: the most commonly used is to access a division's local Atlassian suite (Jira & Confluence). The following table highlights the sharing options and recommended approaches:

| What                    | Recommended                                                     | Alternatives                                      |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| Application source code | [GitHub repositories in Flutter-Global](/docs/)                 |                                                   |
| Build dependencies      | [Published as GitHub Packages](/start/setup-ci/)                | Allow access to pull from divisional Artifactory. |
| Test suites and mocks   | [GitHub repositories in Flutter-Global](/docs/)                 | Allow access to divisional GitLab/BitBucket       |
| Deployment Config       | [GitHub repositories in Flutter-Global](/docs/)                 |                                                   |
| Documentation           | GitHub repo markdown, wiki or GitHub Pages                      | Allow access to divisional Confluence             |
| CI pipeline             | [GitHub Actions](/start/setup-ci/)                              | Allow access to divisional Jenkins                |
| Release Artefacts       | [Published as GitHub Packages](/start/setup-ci/)                | Built per-division                                |
| User Stories            | Link/quote from divisional Jira/TargetProcess                   | GitHub Issues and Projects                        |
| Design Docs             | RFCs in GitHub repository                                       | Allow access to divisional Confluence             |
| Design Discussion       | [GitHub Issues and Projects](https://docs.github.com/en/issues) | Allow access to divisional Jira                   |
| News Updates            | Slack channel                                                   | GitHub Discussions, Email                         |

Further information and guides on usage for all these recommended approaches can be found in [our technical docs](/docs/).

## "Our work is too sensitive"...

It is sometimes not possible or desirable to share all your work with all of Flutter: some of it may be commercially confidential or employee/customer sensitive. If really necessary, there are two approaches to address this problem:

- Separate the sensitive unshareable elements from the rest of the capability: making that unshareable bit as small as possible and sharing a mock so the shared capability is runnable.
- Reducing the sharing boundary to a more limited group: this may still be cross-divisional but might be limited to those who have a direct need for this access, or provide access reactively when requested.

For example various pricing models within the inner source risk & trading ecosystem are commercially sensitive and contain specific proprietary IP that needs to be carefully protected. In this case these specific models have reduced access restrictions applied to them, but they are just a small part of the wider ecosystem that is shared to the normal extent.
