---
layout: default
title: Using a Repo
article_navigation: true
previous_title: Getting Started
previous_url: /start/
next_title: Contributing to a Repo
next_url: /start/contribute/
---

# Using a Repo

This guide helps you use a typical inner source code repository. It assumes you have already:

- joined the `Flutter-Global` organisation to access our inner source portfolio.
- know which repository you need to work with (if not, see the [service catalogue](/catalogue/)).

For this guide we will use the [fsc-docs-site](https://github.com/Flutter-Global/fsc-docs-site) repository as an example which contains these docs. For any readers not yet part of the Flutter inner source community a [public export of this repository is available](https://github.com/Flutter-Tech/fsc-docs-site).

## Your Permissions

The majority of repositories have `Internal` visibility ([github docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility)). This means that all members of our wider GitHub Enterprise have read permissions on that repository. This allows you to view and clone the repository to start using it.

The example repository [fsc-docs-site](https://github.com/Flutter-Global/fsc-docs-site) is one such `Internal` repository which should be visible to you if you are a member of the Flutter inner source community. If you can view/clone this example, but not the repository you want to access then that repository may be `Private`. `Private` repos are discouraged as it makes inner source more difficult, but are necessary in a few circumstances to protect particularly sensitive intellectual property (e.g. pricing algorithms). For `Private` repos read access is limited to those who need it and you will need to request access from the repository maintainers.

You may also have write permissions on the repository (although some branches will be protected). A simple way to tell if you have write access is whether a small "edit" pencil icon appears on the top right of the `README.md` on the repository homepage. This becomes relevant [once you want to contribute](/start/contribute/).

## Standard Documentation

By convention there are 2 files in the repository to help you:

- `README.md` describes the purpose of the repository, who and how to contact about it's content, how to use/build it and onward links to further docs.
- `CONTRIBUTING.md` describes how to contribute: the process, a code guide, how to verify changes, CI setup and expectations and so on.

These files may not exist in the repository you are using, but are the best place to start your search for quality documentation.

The repository you are using will be part of a [capability](/docs/repo-structure/) (a collection of repositories that do something meaningful for our business). If you can't find the necessary docs in the repository itself, the contributors may have put them in the capability repository instead. You cannot infer the capability a repository is part of from the GitHub user interface, so look up your repository in the [service catalogue](/catalogue/) to find the capability it is part of.

## Access Beyond the Repository Code

While you can clone the repository, to use it effectively you may find the need to access further artefacts or resources outside the repository. For example dependencies from a divisional Artifactory, documentation in a division's Confluence, and so on.

Repository owners and maintainers are encouraged to eliminate such dependencies that require separate access requests where possible by completing [stage 1 ("Readable Source")](/how/readable-source/) of our inner source model. However such dependencies remain common, and instructions on how to access various systems can be found in our [FAQs Access section](/faqs/#access).

## Who to Contact

The best source of information on who & how to contact if you need help is the `README.md` or `CONTRIBUTING.md` files.

If that is unavailable, each inner source repository is part of a capability which has a named owner and a team of maintainers. Links to the GitHub profiles of this group are available if you lookup the repository in the [service catalogue](/catalogue/). Recent repository activity (e.g. pull request reviewers) is also a useful indication of likely experts who could help.

Unfortunately at present there is no reliable way to lookup the internal email or Slack handle from a GitHub username. All GitHub users are encouraged to add their name to their profile page which makes a directory search easier, but some guesswork is often required.
