---
layout: default
title: Dependabot
article_navigation: true
next_title: Repository Admin
next_url: /security/admin/
previous_title: Security
previous_url: /security/
---

# Code Dependency Vulnerabilities

Most code repositories include external code library dependencies e.g. NPM modules or Java packages. The version of such dependencies are usually "pinned" to ensure repeatable builds and prevent the introduction of un-reviewed 3rd party additions via these dependencies. When a security vulnerability is discovered in one of your pinned dependencies you need to assess its impact on the security of your application and perhaps update the dependency to a more recent version to include a fix.

**Dependabot** is a GitHub tool that helps you do this for opensource dependencies by:

- scanning your repository to determine the dependencies you are using
- checks those packages against a database vulnerabilities (the [GitHub Advisory Database](https://github.com/advisories))
- alerts you of any it finds
- attempts to fix by raising a PR to bump the pinned dependency version (if possible)

## Aggregated Reporting

Dependabot vulnerability alerts are aggregated and presented in the [service catalogue](/catalogue/) for capabilities, products and lists of repositories. Our group security policy which sets target resolution times for different vulnerability severity is applied to help you understand whether you are currently breaching those targets for an individual or portfolio of repositories.

![Aggregated Alerts](/security/dependabot-aggregated.png)

## Detailed Reporting

GitHub displays a detailed list of vulnerability alerts under the "Security" tab of your repository in the GitHub UI. These require elevated repository privileges so are only visible to the maintainers of that repository.

## Data Integration

Vulnerability data is extracted from GitHub APIs into the [Flutter-Global data repository](https://github.com/Flutter-Global/org-data/tree/main/vulns). This machine-readable format allows you to create your own automation, alerting or other local mechanisms to monitor the status of your vulnerability dependencies easily. For example, the PPB InfoSec team integrate this data into their local security scoring and prioritisation mechanisms for for the teams they work with.

## Talking to Dependabot

Maintainers often do not use Dependabot optimally because by default it creates many pull requests that do not make sense or are too risky -- for example bumping the major version of Spring from 3 to 5.

Browsing through our most active repositories it is common to see un-merged, stale looking PRs created by Dependabot because the change requires more careful prioritisation and scheduling due to the effort required. In these situations there are [a set of comment commands](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) that can help improve the experience. For example, if we want to avoid Dependabot constantly updating the major version of some dependency you can comment:

```
@dependabot ignore this major version
```

## Configuring Dependabot

Dependabot is enabled by default on all repositories in `Flutter-Global`. It is configurable using [the dependabot.yml file](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) where you can change the analysis schedule, target branches, how and if it raises pull requests automatically and so on. If dependabot is not currently doing what you want – this is a good place to start to fix that.

## Managing Alerts

The impact of any vulnerability alert should be assessed within the target timescale for the severity. Further details of the target timescale that applies is included in the service catalogue. To resolve the alert either:

1. Apply a fix (e.g. a dependency version bump) and the next dependabot scan will automatically resolve the alert.
2. Use the GitHub UI to "dismiss" the alert if for example the risk does not apply to the way you use this dependency. This must be performed by a repository maintainer as it requires elevated repository permissions.
