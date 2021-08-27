---
layout: default
title: Making a Contribution
article_navigation: true
previous_title: Using a Repo
previous_url: /start/using-a-repo/
next_title: SetUp CI on GitHub
next_url: /start/setup-ci/
---

# Contributing on GitHub

After you [start using a service or tool](/start/using-a-repo/) you may find you want to improve or add to it. Repositories in `Flutter-Global` are in one of [several possible stages of inner source](/how/). This means you won't request that change from someone else, you will implement it yourself with agreement from other users. This is known as **contributing** to a repository, and you will be acting as a "**contributor**".

## Who Can Help You?

Unless you are already an experienced contributor or the change is minor you will likely need some help.

Each repository is part of a capability -- a group of related repositories. Each capability has a team of experts who can help known as **maintainers**. These maintainers may all belong in a single delivery team ([stage 2](/how/)), or be distributed across different teams and divisions ([stage 3](/how/multiple-teams/)). The maintainers are led by a capability owner.

You can lookup the capability owner and maintainers for a repository in the [service catalogue](/catalogue/). They are busy people with many demands on their time so will only have limited time to assist you. Please take the time to read and follow any documented routes to seek their help (e.g. a support Slack channel).

## Discovering the Process

A single consistent contribution process does not exist as the steps required differs between repositories. So your first task as a contributor is to discover the contribution process:

- This should be documented in the repository `README.md` or `CONTRIBUTING.md` file. If absent, check in the capability repository instead (located via the [service catalogue](/catalogue/)).
- Use history as a guide: check the timeline and conversation in recent pull requests.
- If in doubt you should ask the maintainers as they are the group that define this process.

You should expect:

1. **Early Engagement**: a way to get feedback on your intentions before you & others commit significant time to it. For example a Slack discussion thread, or creating a GitHub issue or RFC document for feedback.
2. **Propose & Review**: a way to share your changes with others who will then review them. For example raising a pull request of your implemention and sharing it on a capability slack channel for review.
3. **Merge & Release**: a predictable tiemline for the approved change to be tested, merged and included in a release so all users (including you as the contributor) can deploy it and get the value from the improvement.

While it is tempting to jump straight in to the work itself (2), previous experience shows expert feedback (1) often avoids wasted effort and that the complexities/dependencies of test & release (3) should not be under-estimated and are best understood in advance.

## Contribution Access

Whatever the required contribution process, you will need _write_ access to the repository to make a contribution.

- While most GitHub opensource projects use a [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to avoid the need for contributor write access, this is **not appropriate** for inner source. Inner source repository contents are not public, making unsecured forks in personal accounts unacceptable. Forking is disabled by org policy.
- A simple way to tell if you have write access in a repository is whether a small "edit" pencil icon appears on the top right of the `README.md` on the repository homepage.
- Maintainers are repository administrators and grant write access to org members by team. You can check which teams you are part of [on the teams page](https://github.com/orgs/Flutter-Global/teams) by entering `@your-github-username` in the search box.
- As a member of `Flutter-Global` you will have noticed you are a member of the `all-flutter-global` team. Maintainers are encouraged to grant write access to all org members through this team so you are likely to have write access by default. If this is not the case you will need to request access from the maintainers.
