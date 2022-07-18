---
layout: default
title: Security
article_navigation: true
next_title: Dependabot
next_url: /security/dependabot/
---

# Security

For an application to be used by a new team, the security standards of the application and adherence to those standards must be clear and transparent. This section lists the security controls applied to repositories across the `Flutter-Global` org, and how they are measured and reported.

## [Code Dependency Vulnerabilities][dependabot]

Most code repositories include external code library dependencies e.g. NPM modules or Java packages. The version of such dependencies are usually "pinned" to ensure repeatable builds and prevent the introduction of un-reviewed 3rd party additions via these dependencies. When a security vulnerability is discovered in one of your pinned dependencies you need to assess its impact on the security of your application and perhaps update the dependency to a more recent version to include a fix.

[Read more about dependency vulnerabilities ➜][dependabot]

## [Repository Administration][admin]

Users responsible for managing a repository require elevated permissions to manage its setup. Such permissions should be granted only to those who need them, and at the right level for the settings they need to change.

[Read more about repository administration ➜][admin]

## [Default Branch Write Access][default-branch]

The default branch of a repository (`main` or `master`) is typically more important than other temporary branches. It usually contains the code that will be used in production. Write access to the default branch should be protected to reduce the risk of mistakes or subversive contribution.

[Read more about default branch write access ➜][default-branch]

## Coming Soon...

Further organisation security controls under development, please contact the [Inner Source Team](/community/) if you have suggestions or wish to influence the roadmap priority. The next control will focus on the management of GitHub workflow secrets and is expected in Q3 2022.

[default-branch]: /security/default-branch/
[admin]: /security/admin/
[dependabot]: /security/dependabot/
