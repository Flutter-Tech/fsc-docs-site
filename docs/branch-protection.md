---
layout: default
title: Branch Protection
---

# Branch Protection

Branch protection is a feature [provided by GitHub](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) to add constraints to specific repository branches. For example limiting those able to push commits to the branch, or enforcing changes are reviewed before they can be merged into it.

It is an important feature because these protections ensure your contributors follow your desired workflow to produce secure and quality contributions.

## Branching Strategy

A wide variety of repository branching strategy options are documented elsewhere:

- [Atlassian: Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)

Your choice of branching strategy will depend on your context and desired [inner source stage](/how/). Note that for inner source:

- While most GitHub opensource projects use a [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow), this is **not appropriate** for inner source. Inner source repository contents are not public, making unsecured forks in personal accounts unacceptable. It is for this reason that normal GitHub forking shortcuts are disabled.
- Contributors therefore need write access to your repository, so they can push a new branch containing their changes and create a pull request for review. If possible you should grant repository write access to the `all-flutter-global` team which contains all organisation members.
- This is why branch protection configuration is a critical part of inner source repository setup: it allows you to enable contributions from all members by granting repository write access, while remaining confident that your important branches are robustly protected.
- A typical inner source service has multiple deployments from the same shared codebase repository. These deployments are released separately meaning multiple versions are deployed at any time. It is therefore necessary to use a branching model that supports operational hotfix and release for all versions in production.

## Configuring Branch Protection

There are 3 possible ways to configure branch protection rules:

1. Manually configure per-repository in the GitHub repository settings interface.
2. **RECOMMENDED**: Declare in the capability [codebases.json](/docs/codebases-json/#policy) file and the [code governor automation](/docs/codebase-governor/) will set via GitHub API.
3. Automate yourself via GitHub API.

Option (2) is recommended as it is easier to do than (3), yet can be declared across all repositories in a capability under version control unlike (1). This recommended option requires:

1. Configuring a [codebases.json](/docs/codebases-json/) file in the capability repository.
2. Ensuring [code governor](/docs/codebase-governor/) is installed on your capability.

The following branch protection options can be [configured in a codebases.json policy](/docs/codebases-json/#policy):

<table role="table">
<thead><tr><th>key</th><th>Type</th><th>Default<br/>value</th><th>Description</th></tr></thead><tbody>
 <tr><td><code>branch-name-pattern</code></td><td>string</td><td>false</td><td>You can define a pattern (<a href="https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch" target="_blank">fnmatch</a>) to match all branches, or any branch that matches a naming pattern specified with the fnmatch syntax.<br/><br/>
 <a href="#branch-name-pattern-definition">Learn more...</a></td></tr>
 <tr><td><code>required-reviews</code></td><td>integer</td><td>1</td><td>The number of required approving reviews for the pull request to be accepted.</td></tr>
 <tr><td><code>dismisses-stale-reviews</code></td><td>boolean</td><td>true</td><td>New reviewable commits pushed to a matching branch will dismiss pull request review approvals.</td></tr>
 <tr><td><code>require-review-from-code-owners</code></td><td>boolean</td><td>true</td><td>Require an approved review in pull requests including files with a designated code owner.</td></tr>
 <tr><td><code>restricts-review-dismissals</code></td><td>boolean</td><td>false</td>
 <td>
 Specify users or teams allowed to dismiss pull request reviews.<br/><br/> 
<sup>ℹ️ Information<br/>
 After applying this change you'll have to go to <strong>Settings -> Branches -> &#60;branch_protection_rule&#62;</strong> in each repository and define the list of users and/or teams.</sup>
 </td></tr>
 <tr><td><code>requires-status-checks</code></td><td>boolean</td><td>true</td>
 <td>Activate which status checks must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.<br/><br/> 
<sup>ℹ️ Information<br/>
After applying this change you'll have to go to <strong>Settings -> Branches -> &#60;branch_protection_rule&#62;</strong> in each repository and select the status checks that apply.</sup>
 </td></tr>
 <tr><td><code>requires-strict-status-checks</code></td><td>boolean</td><td>false</td><td>This ensures pull requests targeting a matching branch have been tested with the latest code. This setting will not take effect unless at least one status check is enabled.<br/><br/> 
<sup>ℹ️ Information<br/>
After applying this change you'll have to go to <strong>Settings -> Branches -> &#60;branch_protection_rule&#62;</strong> in each repository and select the status checks that apply.</sup>
 </td></tr>
 <tr><td><code>requires-commit-signatures</code></td><td>boolean</td><td>false</td><td>Commits pushed to matching branches must have verified signatures.</td></tr>
 <tr><td><code>requires-linear-history</code></td><td>boolean</td><td>false</td><td>Prevent merge commits from being pushed to matching branches.</td></tr>
 <tr><td><code>include-administrators</code></td><td>boolean</td><td>true</td><td>Enforce all configured restrictions above for administrators.</td></tr>
 <tr><td><code>restrict-pushes</code></td><td>boolean</td><td>false</td><td>Specify people, teams or apps allowed to push to matching branches. Required status checks will still prevent these people, teams and apps from merging if the checks fail.<br/><br/> 
<sup>ℹ️ Information<br/>
After applying this change you'll have to go to <strong>Settings -> Branches -> &#60;branch_protection_rule&#62;</strong> in each repository and users/teams/apps that are allowed.</sup></td></tr>
 <tr><td><code>allows-force-pushes</code></td><td>boolean</td><td>false</td><td>Permit force pushes for all users with push access.</td></tr>
 <tr><td><code>allows-deletions</code></td><td>boolean</td><td>false</td><td>Allow users with push access to delete matching branches.</td></tr>
</tbody></table>

## Example: GitHub Flow Service

Our first example is a service repository using a simple workflow (e.g. GitHub Flow).

- The repository holds critical code as the service will handle sensitive data and/or directly process customer transactions.
- To meet our security commitments all changes _must_ be reviewed by at least 1 other user.
- To reduce mistakes, all changes _should_ be reviewed by 2 service maintainers.
- The GitHub Flow branching strategy means that all production deployments run the code from the `main` branch.

In this case branch protection is required on the `main` branch:

- To ensure the code must be reviewed via a pull request before merging, `required-reviews` is set to `2`.
- To ensure all changes "must" be reviewed, `dismisses-stale-reviews` & `include-administrators` is set `true`
- `allows-force-pushes` and `allows-deletions` are set to `false` to ensure the `main` branch can be treated as an audit log with immutable history.
- A useful optimisation to encourage maintainer review is to maintain a `CODEOWNERS` file (see [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners)) specifying the maintainer team (`maintainers-cap-...`) and set `require-review-from-code-owners` to `true`.
- These rules protect the `main` branch so write access can be granted to `all-flutter-global` for contribution.

```json
{
  "contributors": [{ "teams": ["all-flutter-global"] }],
  "policy": {
    "branch-protections": {
      "github-flow-service-code": {
        "parameters": {
          "branch-name-pattern": "main",
          "required-reviews-count": 2,
          "dismisses-stale-reviews": true,
          "require-review-from-codeowners": true,
          "include-administrators": true,
          "allows-force-pushes": false,
          "allows-deletions": false
        }
      }
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/an-example-service": {
      "repotype": "service",
      "policy": { "branch-protection": "github-flow-service-code" }
    }
  }
}
```

## Example: GitFlow Service

In this example critical service code is contained in the repository, and the workflow is complex (e.g. GitFlow). The protection required is similar to the previous service code example, but instead of applying protection to a single `main` branch, multiple branches need protection.

- GitHub supports branch name patterns using [fnmatch syntax](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch), although unfortunately the union pattern extension (`{a,b}`) is not included.
- A pattern can therefore be specified in `branch-name-pattern` to match multiple branches e.g. `release-*` to match all release branches.
- Despite pattern support, a complex workflow may require multiple branch protection rules for different patterns: e.g. `main`, `develop`, `release-*`. While such manual configuration is possible using the GitHub settings interface, the [codebases.json `repos` format](https://innersource.flutter.com/docs/codebases-json/#repos) only supports specifying a single branch protection rule per-repository (v1.2). Supporting multiple rules per repo is planned but not yet scheduled.
- Current workarounds are either to prefix all branches to be protected with a common pattern, or to configure additional rules manually with only the most critical rule (e.g. release branches) declared in `codebases.json`.

## Example: Docs Repository

Not all repositories contain critical production service code, and for many repositories more flexible protection is appropriate. For example for a documentation repository using GitHub Flow there are several common options:

1. No branch protection at all.
2. Restrict pushes to `main` to a group of editors, allowing them to push directly, while requiring others to submit pull requests.
3. Relaxed review requirements, allowing stale reviews and administrator override.

### No Protection

No branch protection is similar to a default confluence page (editable by all) although the version history can be re-written with a force push and/or the branch deleted unless this is protected against.

This can be achieved by simply not declaring any branch protection rule for the repository in `codebases.json`. Note that the [code governor automation](/docs/codebase-governor/) will restore or re-configure any manually deleted or edited branch protection rules unless the `codebases.json` is updated. However it _will not delete rules_. This means if relaxing existing protections manual cleanup is required.

```json
{
  "contributors": [{ "teams": ["all-flutter-global"] }],
  "repos": {
    "https://github.com/Flutter-Global/example-docs": {
      "policy": {
        "comment": "no branch protection required"
      }
    }
  }
}
```

### Restricted Push

A branch protection rule can be configured to limit who can push to a branch. This can be used to create a group of "editors" who can push direct un-reviewed edits to `main` to quickly update docs. Non-editors cannot push to `main` so will create a new branch and raise a pull request for an editor to review & merge.

The current code governor release ([v1.2.1](/releases/)) does not support automated creation or declaration of this type of branch protection. Therefore you should declare the repo with no protection in your `codebases.json` and manually configure the branch protection in the GitHub repository settings:

1. Navigate to create/edit a branch protection rule (`Settings` > `Branches` > `Add Rule`).
2. Enter the branch name pattern (e.g. `main`).
3. Ensure `Require pull request reviews before merging` is **NOT** checked.
4. Ensure `Restrict who can push to matching branches` is checked, and specify those who require this access.
5. Save the rule.

### Relaxed Review

For a docs repository where changes should be reviewed similar rules can be used as for production service code. However additional shortcuts and exceptions can be allowed for contributor convenience as they present no security risk:

- `dismisses-stale-reviews` set to `false` means allows approvals to remain valid when the contributor pushes further final changes after the review was completed.
- `require-review-from-codeowners` set to `false` means any `CODEOWNERS.md` specifications are optional optimisations to help direct the review assignees rather than an enforced reviewer group.
- `include-administrators` set to `false` allows those with admin access to the repository (the maintainers) to override the protection and merge anyway.

For example:

```json
{
  "contributors": [{ "teams": ["all-flutter-global"] }],
  "policy": {
    "branch-protections": {
      "github-flow-relaxed-review": {
        "parameters": {
          "branch-name-pattern": "main",
          "required-reviews-count": 1,
          "dismisses-stale-reviews": false,
          "require-review-from-codeowners": false,
          "include-administrators": false
        }
      }
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/example-docs": {
      "policy": { "branch-protection": "github-flow-relaxed-review" }
    }
  }
}
```

## Example: Automated Commits

Some repositories require automated commits: for example a commit to update a release version from a build script. Using [a Github app for authentication](/docs/automated-access/) is recommended but many users also use a service account. These approaches can be complicated by branch protection.

- When using a service account, the recommended approach is to allow repository admins to override the protection by setting `include-administrators` to `false`. By configuring the service account as a maintainer (or manually granting it admin rights) it can make automated commits directly by overriding the branch protection with its elevated privileges. This is not possible using a GitHub App.
- If the branch protection can be configured as [restricted push](#restricted-push) then either GitHub App or the service account can be included in the group with limited access to push directly to the protected branch.

## Example: Capability Protection

Product and capability repositories themselves also require branch protection: the code governor will action any [codebases.json](/docs/codebases-json/) changes merged into the default branch (e.g. `main` or `master`). Since this file configures the access control and branch protection of the other capability repositories, the default branch requires protection.

The recommended setup:

- To ensure the code must be reviewed `required-reviews` is set to `1`, `dismisses-stale-reviews` & `include-administrators` is set `true`
- A `CODEOWNERS` file (see [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners)) is created referencing the maintainer team (`maintainers-cap-...`) as owner of `codebases.json`. With `require-review-from-code-owners` set to `true` this enforces a _maintainer_ review for any `codebases.json` changes.

`CODEOWNERS`:

```
# require maintainer review for capability configuration
codebases.json    @Flutter-Global/maintainers-cap-example
```

`codebases.json` (snippet):

```json
{
  "contributors": [{ "teams": ["all-flutter-global"] }],
  "policy": {
    "branch-protections": {
      "codeowner-review": {
        "parameters": {
          "branch-name-pattern": "main",
          "required-reviews-count": 1,
          "dismisses-stale-reviews": true,
          "require-review-from-codeowners": true,
          "include-administrators": true
        }
      }
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-example": {
      "repotype": "capability",
      "policy": { "branch-protection": "codeowner-review" }
    }
  }
}
```

Note that the capability `codebases.json` specifies the branch protections of its child repositories, and not of itself. A capability is owned by a product, and the capability branch protection will be defined by the owning product. As a root repository, a product's branch protections must be set manually unless it includes itself in its `codebases.json` `repo` list.
