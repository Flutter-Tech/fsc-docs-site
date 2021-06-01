---
layout: default
title: Codebase Governor
article_navigation: true
previous_title: Codebase Governor
previous_url: /docs/codebase-governor/
next_title: Codebase Governor Guides
next_url: /docs/codebase-governor/guides/
---

# Codebase Governor reference

Codebase Governor is a tool, developed by GitHub and the Inner source team, that gives you the ability to manage repository owner, maintainers and, collaborators as well as repository branch protections.

## Configuration file

`codebases.json` is a file, placed at the root of every **capability** or **product** repository to describe all of the repositories that make up that capability or product.

This is used as the basis for the **Codebase Governor** automation and to automatically generate artifacts describing the code structure by the rule-checks automation. This ensures that the codebase ownership is setup and compliant with the Inner source rules.

### JSON syntax

At the root level you have the following keys available:

**`version`**

The version of the file so that the Codebase Governor adopts the correct behaviour.

```yaml
{ "version": "1.2" }
```

**`comment`**

Add any comments to detail any need.

```yaml
{ "version": "1.2", "comment": ["version 1.2 codebases.json example"] }
```

**`description`**

The description of what the capability/product is.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
}
```

**`capability-type`**

The type of your capability/product.

| `capability-type` value                                                                                                                                                                               | Description                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `product`                                                                                                                                                                                             | A deployable set of services providing business and technical value                                             |
| `capability`                                                                                                                                                                                          | A capability contained within another product / capability (e.g. cashout is within the global betting platform) |
| `framework`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | A collection of libraries and code artifacts and conventions used by / to create products and services          |

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
}
```

**`name`**

Sets the name of your capability/product for presentation.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
}
```

**`nickname`**

The short name of your capability/product.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
}
```

**`owner`**

The Github username of the capability/product owner.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
}
```

**`maintainers`**

The Github usernames of the capability/product maintainers.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
  "maintainers": ["oreilco", "shanesweeney", "tiago-guerra", "tiagobizzy"],
}
```

**`contributors`**

The Github usernames and teams that are repository contributors These will be added with `write` permissions to all affected repositories.

| ❗️ WARNING                                                                                                                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When using the `contributors` node, all previously defined users and teams with the `write` permission in the affected repositories will be **removed**. Only the ones defined in the `codebases.json` will remain. |

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
  "maintainers": ["oreilco", "shanesweeney", "tiago-guerra", "tiagobizzy"],
  "contributors":
    [
      { "users": ["shanesweeney"] },
      {
        "users": ["oreilco", "crisostomon"],
        "teams": ["inner-source"],
        "include": ["repo1", "repo2"],
      },
      { "users": ["oreilco"], "exclude": ["repo1"] },
    ],
}
```

The contributors node has 4 available keys, all of which are arrays:

| key           | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`users`**   | Which user(s) the current entry applies to.                                                           |
| **`teams`**   | Which team(s) the current entry applies to.                                                           |
| **`include`** | Limited list of repositories the team(s)/user(s) should be granted permission.                        |
| **`exclude`** | Limited list of repositories where the team(s)/user(s) should NOT be granted access, i.e. exceptions. |

<br/>

| ℹ️ &nbsp;Information                                                                                                                                                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you remove the `contributors` node from the `codebases.json`, all previously defined users and teams in the affected repositories will not be **removed**. As of `v1.2` you will have to remove them by hand. |

**`policy`**

Defines the policy for the capability/product.

```yaml
{
  "version": "1.2",
  "comment": ["version 1.2 codebases.json example"],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
  "maintainers": ["oreilco", "shanesweeney", "tiago-guerra", "tiagobizzy"],
  "contributors":
    [
      { "users": ["shanesweeney"] },
      {
        "users": ["oreilco", "crisostomon"],
        "teams": ["inner-source"],
        "include": ["repo1", "repo2"],
      },
      { "users": ["oreilco"], "exclude": ["repo1"] },
    ],
  "policy":
    {
      "comment": "The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level",
      "branch-protections":
        {
          "bp1":
            {
              "comment": "Capability policy - with pattern matching - it will be applied to any branches that have a name that starts with dev",
              "parameters":
                {
                  "branch-name-pattern": "dev*",
                  "include-administrators": true,
                  "require-review-from-codeowners": true,
                  "required-reviews-count": 5,
                },
            },
        },
    },
}
```

**`policy.comment`**

Add information about the policy.

```yaml
{
  "policy":
    {
      "comment": "The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level",
    },
}
```

**`policy.branch-protections`**

You can create several policies in **`policy.branch-protections`**, defining the branch protection settings needed for each, and reference them in **`repos.<repository>.policy.branch-protection`**. This allows you greater flexibility and reduces settings duplication.

```yaml
{
  "policy":
    {
      "comment": "The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level",
      "branch-protections": {},
    },
}
```

**`policy.branch-protections.<branch_protection_id>`**

To identify a determined set of definitions for a branch-protection you have to define an ID. You can create as many IDs/sets as you need.

```yaml
{
  "policy": {
    "comment":"The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level"
    "branch-protections": {
      "bp_cap_standard": {

      },
     "bp_cap_special": {

      }
    }
  }
}
```

**`policy.branch-protections.<branch_protection_id>.comment`**

The text that adds information about the branch protection.

```yaml
{
  "policy": {
    "comment":"The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level"
    "branch-protections": {
      "bp_cap_standard": {
        "comment": "Branch protection comment"
      }
    }
  }
}
```

**`policy.branch-protections.<branch_protection_id>.parameters`**

There are several keys you can use to tailor the Codebase Governor behaviour when you create branches. You can add them here.

**`policy.branch-protections.<branch_protection_id>.parameters` keys**

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
#### Branch name pattern definition

For example, to require any branch containing the word release to have at least two pull request reviews before merging, you can create a branch rule for release.

You can also set up automatic branch protection for all branches in your repository with the wildcard syntax \*. Because GitHub uses the File::FNMPATHNAME flag for the File.fnmatch syntax, the wildcard does not match directory separators (/). For example, qa/\* will match all branches beginning with qa/ and containing a single slash. You can include multiple slashes with qa/\*\*/\_, and you can extend the qa string with qa**/**/\* to make it more inclusive. For more information about syntax options for branch rules, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name.

**Filter pattern cheat sheet**

You can use special characters in path, branch, and tag filters.

- **`*`**: Matches zero or more characters, but does not match the `/` character. For example, `dev*` matches `development`.
- **`?`**: Matches zero or one single character. For example, `produ?tion` matches `production`.
- **`+`**: Matches one or more of the preceding character.
- **`[]`** Matches one character listed in the brackets or included in ranges. Ranges can only include `a-z`, `A-Z`, and `0-9`. For example, the range`[0-9a-f]` matches any digits or lowercase letter. For example, `[CB]at` matches `Cat` or `Bat` and `[1-2]00` matches `100` and `200`.
- **`!`**: At the start of a pattern makes it negate previous positive patterns. It has no special meaning if not the first character.

**Patterns to match branches**

| Pattern               | Description                                                    | Example matches                              |
| :-------------------- | :------------------------------------------------------------- | :------------------------------------------- |
| `dev-*`               | The `*` wildcard matches any character.                        | -`dev-branch` -`dev-20201201`                |
| `master`              | Matches the exact name of a branch.                            | `master`                                     |
| `'*'`                 | Matches all branches name.                                     | -`main` -`releases`                          |
| `'*feature'`          | Matches branch names that end with feature.                    | -`mona-feature` -`feature` -`ver-10-feature` |
| `v2*`                 | Matches branch names that start with `v2`.                     | -`v2` -`v2.0` -`v2.9`                        |
| `v[12].[0-9]+.[0-9]+` | Matches all semantic versioning tags with major version 1 or 2 | -`v1.10.1` -`v2.0.0`                         |

#### Prioritization of branch rules

If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that matches the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `[]`, are applied in the order they are listed, so rules that are listed first have a higher priority.

```yaml
{
  "policy": {
    "comment":"The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level"
    "branch-protections": {
      "bp_cap_standard": {
        "comment": "Branch protection comment",
        "parameters": {
          "branch-name-pattern": "dev*",
          "required-reviews-count": 5,
          "dismisses-stale-reviews": true,
          "require-review-from-codeowners": true,
          "restricts-review-dismissals": false,
          "requires-status-checks": true,
          "requires-strict-status-checks": false,
          "requires-commit-signatures": false,
          "requires-linear-history": false,
          "include-administrators": true,
          "restrict-pushes": false,
          "allows-force-pushes": false,
          "allows-deletions": false
        }
      }
    }
  }
}
```

**`repos`**

Defines the repositories that belong to the capability/product.

```yaml
{
  "version": "1.2",
  "comment": [
    "version 1.2 codebases.json example"
  ],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
    "maintainers": [
    "oreilco",
    "shanesweeney",
    "tiago-guerra",
    "tiagobizzy"
  ],
  "contributors": [
   {
     "users": ["shanesweeney"]
   },
   {
     "users": ["oreilco", "crisostomon"],
     "teams": ["inner-source"],
     "include": ["repo1", "repo2"]
   },
   {
     "users": ["oreilco"],
     "exclude": ["repo1"]
   }
  ],
  "policy": {
    "comment":"The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level",
    "branch-protections": {
      "bp1": {
        "comment": "Capability policy - with pattern matching - it will be applied to any branches that have a name that starts with dev",
         "parameters": {
           "branch-name-pattern": "dev*",
           "include-administrators": true,
            "require-review-from-codeowners": true,
            "required-reviews-count": 5
          }
      }
  },
  "repos": {

  }
}
```

**`repos.<repository-complete-url>`**

URL of the repository. This key works as an ID to the repoitory and includes all the related data. Can be repeated for the repositories that belong to the capability/product.

```yaml
{ "repos": { "https://github.com/Flutter-Global/sco-service": {} } }
```

**`repos.<repository-complete-url>.nickname`**

The nickname of the repository.

```yaml
{
  "repos":
    { "https://github.com/Flutter-Global/sco-service": { "nickname": "SCO" } },
}
```

**`repos.<repository-complete-url>.repotype`**

The repository type.

| `repotype` value | Description                                                                           |
| :--------------- | :------------------------------------------------------------------------------------ |
| `service`        | A repo containing application code for running services                               |
| `library`        | A repo containing application code for a library used by other services and libraries |
| `tool`           | A repo containing application code for a tool used to manage a service or services    |
| `infra-config`   | A repo containing infrastructure configuration ( e.g. I2 config for PPB )             |
| `ansible-config` | A repo containing ansible configuration                                               |
| `chef-config`    | A repo containing chef cookbooks / configuration                                      |

```yaml
{
  "repos":
    {
      "https://github.com/Flutter-Global/sco-service":
        { "nickname": "SCO", "repotype": "service" },
    },
}
```

**`policy.<repository-complete-url>.policy`**

Allow the setting of a policy for the repository.

```yaml
{
  "repos":
    {
      "https://github.com/Flutter-Global/sco-service":
        { "nickname": "SCO", "repotype": "service", "policy": {} },
    },
}
```

**`policy.<repository-complete-url>.policy.branch-protection`**

Set the policy for the repository. In this key you should use the identifier of the branch-protection setting defined in `policy.branch-protections.<branch_protection_id>`.

```yaml
{
  "repos":
    {
      "https://github.com/Flutter-Global/sco-service":
        {
          "nickname": "SCO",
          "repotype": "service",
          "policy": { "branch-protection": "bp1" },
        },
    },
}
```

**`policy.<repository-complete-url>.policy.config`**

Allows the definition of configuration repositories needed for the parent repository. The structure and allowed keys are the same as the supported on the key `policy.<repository-complete-url>.policy`: `nickname`, `repotype`, `comment` and `policy`.

```yaml
{
  "repos": {
    "https://github.com/Flutter-Global/sco-service": {
      "nickname": "SCO",
      "repotype": "service",
      "policy": {
        "branch-protection": "bp1"
      }
      "config":{
        "https://github.com/Flutter-Global/sco-configrepo-ppb": {
          "repotype":"infra-config",
          "policy": {
            "comment":"This policy is using a different type than the previous",
            "branch-protection": "bp2"
          }
        }
      }
    }
  }
}
```

### Current file structure (**v1.2.0**)

```yaml
{
  "version": "1.2",
  "comment": [
    "Version 1.2.0 codebases.json example"
  ],
  "description": "Services for pricing and transacting cashout offers",
  "capability-type": "capability",
  "name": "Cashout",
  "nickname": "cashout",
  "owner": "oreilco",
  "maintainers": [
    "oreilco",
    "shanesweeney",
    "tiago-guerra",
    "crisostomon"
  ],
  "contributors": [
   {
     "users": ["shanesweeney"]
   },
   {
     "users": ["oreilco", "crisostomon"],
     "teams": ["inner-source"],
     "include": ["repo1", "repo2"]
   },
   {
     "users": ["oreilco"],
     "exclude": ["repo1"]
   }
  ],
  "policy": {
    "comment":"The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level",
    "branch-protections": {
      "bp1": {
        "comment": "Capability policy - with pattern matching - it will be applied to any branches that have a name that starts with dev",
         "parameters": {
           "branch-name-pattern": "dev*",
           "include-administrators": true,
           "require-review-from-codeowners": true,
           "required-reviews-count": 5
          }
      },
      "bp2": {
        "comment": "Capability policy",
        "parameters": {
          "include-administrators": false,
          "require-review-from-codeowners": true,
          "required-reviews-count": 2
        }
      },
      "bp3": {
        "comment": "Capability policy",
        "parameters": {
          "include-administrators": true
        }
      }
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/sco-service": {
      "nickname": "SCO",
      "repotype": "service",
      "policy": {
        "comment":"A policy can be applied by using <branch-protection> and the corresponding branch protection ID that was define at a the root level",
        "branch-protection": "bp1"
      },
      "config":{
        "https://github.com/Flutter-Global/sco-configrepo-ppb": {
          "repotype":"infra-config",
          "policy": {
            "comment":"This policy is using a different type than the previous",
            "branch-protection": "bp2"
          }
        },
        "https://github.com/Flutter-Global/sco-chef-fdnj": {
          "repotype":"chef-config"
        },
        "https://github.com/Flutter-Global/sco-ansible-ppb": {
          "repotype":"ansible-config"
        }
      }
    },
    "https://github.com/Flutter-Global/cashout-margin-lib": {
      "repotype": "library"
    },
    "https://github.com/Flutter-Global/cashout-config-tool": {
      "repotype": "tool"
    },
    "https://github.com/Flutter-Global/obrpt-ansible-pp": {
      "nickname": "OBRPTPP",
      "repotype": "ansible-config",
      "config": {
        "https://github.com/Flutter-Global/obrpt-configrepo-i2-pp": {
          "repotype": "infra-config"
        }
      }
    },
    "https://github.com/Flutter-Global/obrpt-ansible-bf": {
      "nickname": "OBRPTBF",
      "repotype": "ansible-config",
      "config": {
        "https://github.com/Flutter-Global/obrpt-configrepo-i2-bf": {
          "repotype": "infra-config"
        }
      }
    },
    "https://github.com/Flutter-Global/ifz-configrepo-ppb": {
      "repotype": "infra-config"
    }
    "https://github.com/Flutter-Global/bab-chef-ppb": {
      "nickname": "BAB",
      "repotype": "chef-config",
      "config": {
        "https://github.com/Flutter-Global/bab-configrepo-bf": {
          "repotype": "infra-config"
        },
        "https://github.com/Flutter-Global/bab-configrepo-pp": {
          "repotype": "infra-config"
        }
      }
    }
  }
}
```
