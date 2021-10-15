---
layout: default
title: GitHub Secrets
toc: true
---

# Using GitHub Secrets

GitHub provides [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to allow you to store sensitive information like AWS or [GitHub service account](/docs/automated-access/) credentials for use with GitHub Actions.

## Classify Your Secret

To determine your storage options, classify its possible use as:

- **read-only** : a secret that provide read-only access to another resource.
- **append-only** : a secret that provides write access to another resource but in a non-destructive append-only format that cannot change existing setup or configuration (e.g. an access key to trigger a build/test, append to a log or send a message).
- **write** : a secret that provides write access to another resource that includes deleting or changing existing configuration or settings (e.g. AWS credentials or [GitHub service account](/docs/automated-access/) with write permissions).

Assess whether you can change the nature of your secret to be safer (e.g. append rather than write), or even remove the need for a secret altogether. For example, GitHub are working on [an Open ID Connect feature](https://github.com/github/roadmap/issues/249) to remove the need to use GitHub secrets for AWS credentials.

## Secrets Storage

There are 3 places you can store secrets to make them available to GitHub Actions:

| Where                  | Recommended For                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------- |
| Repository Environment | Secrets with any **write** permissions.                                             |
| Repository             | A **read-only** or **append-only** secret required by all repository pull requests. |
| Organisation           | A **read-only** or **append-only** secret required by many repositories.            |

Note in particular the recommended use of [repository environments](https://docs.github.com/en/actions/deployment/environments) to store a secret with any write permissions instead of a direct repository secret.

## Environment Secrets

A repository [environment](https://docs.github.com/en/actions/deployment/environments) is a way to restrict the usage of a secret to a specific repository branch where it can be protected by branch protection rules. A repository environment, branch restrictions and the addition of secrets within it can be configured in `Settings > Environments`. The GitHub Action that requires the secret should be [set to target the environment](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) you have configured.

**Example:**

The `fsc-cli-tool` repository uses a scheduled action to update the service catalogue. This requires the credentials of a [GitHub App service account](/docs/automated-access/) that includes **write** permissions. A `prod` environment is configured on the repository, with its use restricted to the `main` branch only. The credentials are stored as secrets in this environment, and referenced in the workflow yaml definition (`environment: prod`) so they [can be used](https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

The repository has a [typical GitHub Flow service branch protection setup](/docs/branch-protection/#example-github-flow-service). The `all-flutter-global` team has write access to enable contribution, with the `main` branch protected by a required codeowner review. Repository secrets can be used by any branch (so anyone with write access). However in this case the secret is restricted by an environment only accessible to the `main` branch, because of this any change to the use of this secret requires codeowner approval.

## Repository Secrets

Repository secrets are configured in `Settings > Secrets > Actions`. They can be used by all branches in the repository. This is appropriate for read-only or access secrets required for pull request automated tests that need to be run on any branch on-demand.

The reason to use repository secrets with caution is:

- The names and nature of any secrets are known to anyone with access to the repository because they can see them being used in the action workflows in `.github/workflows`.
- Repository secrets not protected by an environment are accessible to workflows in all branches.
- Any user with repository write access can create a new branch, modify or create workflows in that branch and use those workflows to capture or reveal the secrets available without any review or approval process.
- A typical inner source access control setup encourages granting `all-flutter-global` team write access which contains all members of the organisation.

**Example:**

Sending Slack messages from an action (e.g. [slack-action-notifier](https://github.com/Flutter-Tech/slack-actions-notifier)) requires a webhook URL. This can only be used to send new messages so is an **append-only** secret. It is usually stored as a repository secret so messages can be triggered from unmerged PRs in any branch.

## Organisation Secrets

Organisation secrets are configured by an organisation owner. The owners of `Flutter-Global` are the [inner source team](/community/) who will manage the access control of these secrets on your behalf. Organisational secrets can be made available to all repositories in the organisation, or to a selected set of repositories. If made available to a repository, they are made available to all branches like a repository secret. At present, they cannot be linked into a single repository environment (which is part of [this GitHub public roadmap item](https://github.com/github/roadmap/issues/52)).

**Example:**

For the access control and analytics automation in `Flutter-Global`, multiple repositories require access to the membership of other division-specific GitHub organisations. The credentials of a [GitHub App service account](/docs/automated-access/) installed by the divisional owners of the orgs must be available to these repositories. The access is **read-only**, needed by multiple repositories and in some of those repositories used in pull request dry run test packs. The credentials are stored as organisation secrets and made available to all branches within selected repositories.

## Codespaces

Secrets can also be separately configured for individual development environments ([GitHub Codespaces](https://docs.github.com/en/codespaces)). These can configured [as personal settings](https://github.com/settings/codespaces), by repository (`Settings > Secrets > Codespaces`) or across the whole organisation (via [inner source team](/community/)). Use of Codespaces repository or organisation secrets should also be restricted to read-only or append-only secrets as they are accessible to all those who have write access to the repository.
