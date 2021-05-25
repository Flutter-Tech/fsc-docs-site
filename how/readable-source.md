---
layout: default
title: Readable Source
article_navigation: true
previous_title: The Inner Source Pyramid
previous_url: /how/
next_title: Stage 2 - Guest Contributions
next_url: /how/guest-contributions/
---

# Stage 1: Readable Source

The first step towards the transparency required for inner source to work. The host team are responsible for developing the service and run their own deployment, with all changes to the service implemented by the host. However, other teams may also be deploying and using the service or including parts of it in their own services -- possible because the host team granted read access to user stories, source code, test suites, CI pipeline and build artifacts to all Flutter engineers.

## What should I share, and to whom?

The crucial question throughout the readable source stage is:

> Can others use this application?

Anyone within the organisation should be able to understand, build, deploy and use your work or create derivatives of it. Typically this is what you will share read access to:

1. application source code
2. build instructions & dependencies (e.g. private npm/maven packages)
3. integration/performance test suites
4. deployment configuration (e.g. terraform, AWS CDK, chef, ansible)
5. manual QA checklists and scripts
6. testing mocks (e.g. a divisional account & wallet dependency)
7. CI pipeline definition and status
8. versioned release notes and artefacts
9. usage documentation
10. design docs or proposals with decision log
11. user stories
12. operational run-books and deployment guides
13. operational post-mortem and learnings

This list will not be complete or indeed many points may not be relevant for your circumstances. The important point to understand is that doing this stage well involves more than simply sharing access to an application's primary source code. That is a good start, but not enough.

Within Flutter the scope of the inner source is sharing across the entire group: so access to your work should be possible across all the engineers in all divisions: International, US, UK&I and Australia.

## "Our work is too sensitive"...

It is sometimes not possible or desirable to share all our work with all of Flutter: some of it may be commercially confidential or employee/customer sensitive. If really necessary, there are two approaches to address this problem:

- Separate the sensitive unshareable elements from the rest of the application: making that unshareable bit as small as possible and sharing a mock so the shared application is runnable.
- Reducing the sharing boundary to a more limited group: this may still be cross-divisional but might be limited to those who have a direct need for this access, or provide access reactively when requested.

For example various pricing models within the inner source risk & trading ecosystem are commercially sensitive and contain specific proprietary IP that needs to be carefully protected. In this case these specific models have reduced access restrictions applied to them, but they are just a small part of the wider ecosystem that is shared to the normal extent.

## How do I share cross-divisionally?

The different companies and divisions within Flutter group still at present have several independent identity management systems that won't be consolidated till 2022. There are 2 shared platforms that all Flutter staff can collaborate through:

- **Slack** : usage of shared slack channels allows multiple divisions to work together across divisional boundaries.
- **GitHub** : the [inner source team](/community/) manage the Flutter-Global GitHub organisation to facilitate cross-divisional inner source working.

In addition a number of on-request cross-divisional access workflows have been created to facilitate cross-divisional sharing: the most commonly used is to access a division's local Atlassian suite (Jira & Confluence). The following table highlights the sharing options and recommended approaches:

| What                    | Recommended                                                    | Alternatives                                      |
| ----------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| Application source code | [GitHub repositories in Flutter-Global](/docs/repo-structure/) |                                                   |
| Build dependencies      | Published as GitHub Packages                                   | Allow access to pull from divisional Artifactory. |
| Test suites and mocks   | [GitHub repositories in Flutter-Global](/docs/repo-structure/) | Allow access to divisional GitLab/BitBucket       |
| Deployment Config       | [GitHub repositories in Flutter-Global](/docs/repo-structure/) |                                                   |
| Documentation           | GitHub repo markdown, wiki or GitHub Pages                     | Allow access to divisional Confluence             |
| CI pipeline             | GitHub Actions                                                 | Allow access to divisional Jenkins                |
| Release Artefacts       | Published as GitHub Packages                                   | Built per-division                                |
| User Stories            | Link/quote from divisional Jira/TargetProcess                  | GitHub Issues and Projects                        |
| Design Docs             | RFCs in GitHub repository                                      | Allow access to divisional Confluence             |
| Design Discussion       | GitHub Issues and Projects                                     | Allow access to divisional Jira                   |
| News Updates            | Slack channel                                                  | GitHub Discussions, Email                         |

Further information and guides on usage for all these recommended approaches can be found in [our technical docs](/docs/).
