---
layout: default
title: Setup CI on GitHub
article_navigation: true
previous_title: Make a Contribution
previous_url: /start/contribute/
next_title: Creating a Repository
next_url: /start/create-repo/
---

# Continuous Integration on GitHub

A typical inner source service has:

- multiple teams contributing to a single shared codebase
- several operational deployments (per-team or per-division)

This allows the local team or division to deploy to their preferred topology with their local security, service management and operational response setup and still leverage the value of a shared codebase with contributions from other divisions. This document describes how you can use GitHub continuous integration tools to automate the link between your shared codebase with its many deployments.

## From Source to Production

Typically a service will follow these steps to production:

1. **Source**: A codebase in a `Flutter-Global` repository with [access controls and a branching strategy](/docs/branch-protection/) that allows cross-divisional contribution.
2. **Validate**: Check proposed code changes in a pull request by running a series of tests that must pass: compile and/or lint commands, unit test suites, static analysis and security tool tests.
3. **Package**: Resolve any external dependencies to build a new version of the desired deployment package(s) e.g. docker, rpm.
4. **Integration Test**: Run available integration tests against the candidate deployment package with other dependent mocked packages.
5. **Publish**: Publish the tested deployment package to a registry so it is available to all divisions.
6. **Deploy**: Configure the package and deploy it to a specific topology (e.g. AWS, on-prem VM, k8s).
7. **Deployment Test**: Run available deployment tests including non-functional checks e.g. performance, failover or capacity tests.
8. **Release**: Promote the test deployment through the various required environments to rollout to production traffic.
9. **Warranty**: Observe the release with heightened operational awareness to confirm success, with rapid rollback invoked on suspicion of failure.

## Tools Available

The tools available to all Flutter divisions are currently limited to the [GitHub](https://docs.github.com/en/github) platform:

- **Git** repository code versioning control and access control for step 1.
- [**GitHub Actions**](https://docs.github.com/en/actions) to validate a pull request in step 2, and automate further steps 3-8 as necessary. [Secrets storage](/docs/secrets/) and self-hosted runners are available within specific internal networks where such access is required.
- [**GitHub Packages**](https://docs.github.com/en/packages) to store private build dependencies in step 3, and to publish build artefacts [to a registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry) in step 5.
- [**GitHub Issues**](https://docs.github.com/en/issues) to plan and track your work.

The following tools are _NOT_ available across all divisions, but are used within individual divisions or teams:

- **Jenkins** is used to orchestrate CI pipelines across steps 2-8. Several Jenkins deployments are [integrated with GitHub](/docs/using-jenkins/) but do not provide cross-divisional access. To enable cross-divisional access it is recommended to migrate such workloads to GitHub Actions.
- **Artifactory** is used as a package registry for steps 3 and 5 but can't provide cross-divisional access. It is recommended to either migrate to GitHub Packages for shared access, or simply push to multiple package registries so artefacts are available to all those who need them.
- [**SonarQube**](https://www.sonarqube.org/), [**Snyk**](https://snyk.io/) and other static analysis quality or security tools for step 2 are licenced divisionally at present. This may change in future but the current recommendation is to depend on a divisional licence if required.

## Shared vs Division Context

Each of the steps from source to production can be either:

- **Shared**: a single implementation that is accessible and changeable by all divisions.
- **Divisional**: implemented per-division or per-team using local tools accessible only by members of that division/team.

It is recommended to use a **shared** context for steps 1-5, and a **divisional** context for steps 6-9. These choices will depend on the requirements and history of your specific capability with some common problems encountered with the recommended approach for each step included in the table below:

| Step             | Context    | Typical Problem                                                                                     |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| Source           | Shared     | Branching strategy too simple for multi-division deployment.                                        |
| Validate         | Shared     | Group licenced/deployed static analysis tools or checks not available.                              |
| Package          | Shared     | Private build dependencies only available within a divisional Artifactory.                          |
| Integration Test | Shared     | Tests require access to divisional mock services (e.g. account systems).                            |
| Publish          | Shared     | Immature shared GitHub service account management.                                                  |
| Deploy           | Divisional | Multiple packaging formats required to support divisional preferences.                              |
| Deployment Test  | Divisional | Unclear responsibilities split with "integration test" step results in wasteful duplicated testing. |
| Release          | Divisional | No cross-divisional health/ready endpoints.                                                         |
| Warranty         | Divisional | No cross-divisional observability & telemetry standards.                                            |

Such problems are topics of active experimentation within various of our inner source products.
