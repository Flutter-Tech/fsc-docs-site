---
layout: default
title: SDLC
article_navigation: true
next_title: Source
next_url: /sdlc/source/
---

# Development Lifecycle

The process by which you make and release a change to your application is your **Software Development Lifecycle** or SDLC. Within `Flutter-Global` several SDLC patterns are directly supported by tools such as the [`git flutter` CLI](/git-flutter/). Using these standard SDLC patterns is recommended unless you have unusual requirements.

<img src="./overview.drawio.svg" class="w-full max-w-3xl mx-auto">

Typically a change will follow these steps to production:

1. **[Source][source]**: A code edit is applied to a `Flutter-Global` repository with access controls and a branching strategy.
2. **[Validate][validate]**: Check proposed code changes by running a series of tests that must pass.
3. **[Package][package]**: Resolve any external dependencies to build a new version of the desired deployment package(s) e.g. binaries, docker, rpm, jar.
4. **[Component Tests][test]**: Run available tests against the candidate deployment package with other dependent mocked packages.
5. **[Publish][package]**: Publish the tested deployment package to a registry so it is available to all who deploy it.
6. **Deploy**: Configure the package and deploy it to a specific topology (e.g. AWS, on-prem VM, k8s).
7. **Integration Tests**: Run available integration and non-functional checks.
8. **Release**: Promote the deployment through the required environments to rollout to production traffic.
9. **Observe**: Observe the release with heightened operational awareness to confirm success, with rollback invoked on suspicion of failure.

The standard SDLCs patterns cover steps (1)-(5), step (6) onwards is regarded as team/division specific and dependent on local requirements.

## [Source][source]

Your source code is stored in a repository within the `Flutter-Global` organisation. This will have:

1. a branching strategy (where code is contributed to and merged into)
2. an access control strategy (who can access the repository with what permissions)
3. branch protections to ensure the combination of (1) and (2) is secure.

There is a choice of three source control models (multiple teams, service or audited), and three access control strategies (inner source, requested access or closed source).

[Read more about source control ➜][source]

## [Validate][validate]

A proposed code change is validated by a series of checks. Common examples are linters, compile checks, unit tests, and security scans.

- Validation is configured as pull request status checks and defined by GitHub workflow files.
- Self-hosted GitHub runners are available if internal services/dependencies are required.
- 3rd party tools like SonarCloud are integrated with `Flutter-Global` to help.

[Read more about validation ➜][validate]

## [Package & Publish][package]

A new version is **packaged** as a deployable artefact (e.g. a container image). This package must then be **published** to a location from which it can be deployed to relevant environments.

- SemVer git tags and GitHub Releases are used to label builds.
- Releases are published to registries like AWS ECR, GitHub Packages, Artifactory, and so on.

[Read more about packaging and publishing ➜][validate]

[source]: /sdlc/source/
[validate]: /sdlc/validate/
[package]: /sdlc/package/
[test]: /sdlc/test/
