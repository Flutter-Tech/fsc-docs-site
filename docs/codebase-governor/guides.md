---
layout: default
title: Guides
article_navigation: true
previous_title: Codebase Governor Reference
previous_url: /docs/codebase-governor/reference/
---
# Guides
## How to install Codebase Governor

The Codebase Governor tool depends on 3 factors to work correctly:

- the action workflow is installed in the repo
- a correctly structured `codebases.json` file present in the repo
- 2 teams exist in the repo following this scheme: owner-\<name-of-the-repo\> and maintainers-\<name-of-the-repo\> with `admin` access
- `APP_ID` and `APP_PRIVATE_KEY` secrets added to the repository

### When you're creating a new Capability

If you're creating a new Capability repository from scratch, you can use the [**Capability creation request**](https://github.com/Flutter-Global/flutter-global-automation/issues) issue template available in the [flutter-global-automation](https://github.com/Flutter-Global/flutter-global-automation/) repository.

1.  Navigate to the [**_Capability creation request_**](https://github.com/Flutter-Global/flutter-global-automation/issues) and click the New issue button.
    ![Capability creation request - New issue](/docs/codebase-governor/codgov-capability-creation-new-issue.jpg "Capability creation request - New issue")

2.  Select **Get Started** in the **Capability creation request** box
    !["Capability creation request - Get started"](/docs/codebase-governor/codgov-capability-creation-select-template.jpg "Capability creation request - Get started")

3.  Fill the text fields with the appropriate information.
    !["Capability creation request - Fill text fields"](/docs/codebase-governor/codgov-capability-creation-fill-template.jpg "Capability creation request - Fill text fields")
    1 - Add the Capability name between []<br/>
    2 - Add the Capability name<br/>
    3 - Add a small description about the Capability<br/>
    4 - Define the owner of the Capability (GitHub usernames only)<br/>
    5 - Define the maintainers of the Capability (GitHub usernames only)

    ```yaml
    action: create-capability
    name: cap-my-new-capability
    description: Adds automation for ease of access
    owners:
      - inner-source-admin
    maintainers:
      - inner-source-maintainer
      - inner-source-maintainer2
      - inner-source-maintainer3
      - inner-source-maintainer4
    ```

4. Select **Submit new issue**. After the submission the automation process will start and will inform you of the progress by adding comments in the created issue.

5. When the process finishes, open the new Capability repository by searching for it in the Flutter-Global organization or by inputting the URL in the browser address bar.
You can see that the repo has a Pull Request.

6. Select the **Pull requests** tab and open it. Check if all the changes are correct and then select **Merge pull request**.

7. After merging the Capability repository is updated with your definitions and the **Codebase Governor** workflow will run every time you update the `codebases.json` file.

This is just the beginning. You can change the behaviour of the **Codebase Governor** by adding options to the `codebases.json` file. If you want to learn more read the [📖 Codebase Governor reference](/docs/codebase-governor/reference.md) guide.

### When a Capability already exists

| ❗️ WARNING                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Before you start to manually add the Codebase Governor to the repository you have to contact the **Inner source team** in Slack ([#inner-source](https://betfair.slack.com/archives/C0115SW13V5)) so the needed secrets by the workflow are added to the repository. |

If the Capability already exists you can add the Codebase Governor action workflow and the `codebases.json` to start managing it from a unique location.

You should also add the owner-\<name-of-the-repo\> and the maintainers-\<name-of-the-repo\> teams to the existing repository. You can follow these guides: [creating a team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team) and [give team access to repository](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository). Both should have the `admin` permission level assigned.

1.  Navigate to your Capability repository

2.  Select **Actions** tab

3.  Select **setup a workflow yourself** (1) if no actions exist or **New workflow** (2) if others exist.
    !["Add workflow"](/docs/codebase-governor/codgov-capability-exists-creation-add-workflow.jpg "Add workflow")

4.  Name the file `codebases-governor.yml`

5.  Delete all the text inside the **Edit new file** tab

6.  Paste the following code in the **Edit new file** tab
    {% raw %}

    ```yaml
    name: Codebase governor

    on:
      # Trigger on push
      push:
        # Trigger only on push to master
        branches:
          - master
          - main
        # Run workflow only if codebases.json has changed
        paths:
          - "codebases.json"
      pull_request:

    jobs:
      run:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2

          - name: Retrieve the admin token
            id: github_app
            uses: machine-learning-apps/actions-app-token@0.21
            with:
              APP_PEM: ${{ secrets.APP_PRIVATE_KEY }}
              APP_ID: ${{ secrets.APP_ID }}

          - name: Checkout the repository to run the automations
            uses: actions/checkout@v2
            with:
              repository: Flutter-Global/flutter-actions
              path: actions
              token: ${{ steps.github_app.outputs.app_token }}

          - name: Run codebases governor
            uses: ./actions/codebases-governor
            with:
              admin_token: ${{ steps.github_app.outputs.app_token }}
              dry_run: ${{ github.event_name == 'pull_request' }}
    ```

    {% endraw %}

7.  Select **Start commit**

8.  Add a commit title (i.e.: Adds Codebase Governor workflow)

9.  Select **Commit new file**

10. Select **Code** tab

11. Select **Add file** and then **Create new file**

12. Add `codebases.json` as file name

13. Copy and paste the following text to **Edit new file** field

{% raw %}

```json
{
  "version": "1.2",
  "description": "INSERT_DESCRIPTION",
  "owner": "INSERT_OWNER_GITHUB_USERNAME",
  "name": "INSERT_REPOSITORY_NAME",
  "maintainers": [
    "INSERT_MAINTAINER_GITHUB_USERNAME",
    "INSERT_MAINTAINER_GITHUB_USERNAME"
  ],
  "policy": {
    "comment": "Defined policies",
    "branch-protections": {
      "bp-standard": {
        "comment": "Policy with standard definitions",
        "parameters": {
          "branch-name-pattern": "master",
          "include-administrators": true,
          "require-review-from-codeowners": true,
          "required-reviews-count": 1
        }
      }
    }
  }
}
```

{% endraw %}

&nbsp;&nbsp;14. Update **<INSERT\_\*>** with your Capability information

&nbsp;&nbsp;15. In **Commit new file** window, add a commit title (i.e.: "Adds codebases.json file")

&nbsp;&nbsp;16. Select **Commit new file**

&nbsp;&nbsp;17. Open **Actions** tab and check if the Codebase Governor workflow is running.

This is just the beginning. You can change the behaviour of the **Codebase Governor** by adding options to the `codebases.json` file. If you want to learn more read the [📖 Codebase Governor reference](/docs/codebase-governor/reference.md) guide.

---

## How to update codebases.json to use Codebase Governor v1.x

With the Codebase Governor v1.x update came new functionalities and a new [codebases.json](/docs/codebase-governor/index.md) structure. This guide aims to help those that want to update their capability [codebases.json](/docs/codebase-governor/index.md) file to take advantage of this and improve their repositories management.

| ℹ️ &nbsp;Information                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| For a complete reference of each option available in codebases.json, please consult this [📖 guide](/docs/codebase-governor/index.md). |

We are going to use an example [codebases.json](/docs/codebase-governor/index.md) file that is based on a real capability and upgrade it to be compatible with the v1.x structure.

The full unversioned file to update is presented below:

```json
{
  "description": "Capability description",
  "owner": "oreilco",
  "name": "product-shared-codebase",
  "nickname": "product-shared-codebase",
  "maintainers": [
    "oreilco",
    "arine-malheiro",
    "tiago-guerra",
    "oneill-jp",
    "crisostomon"
  ],
  "policy": {
    "standard-protected-master-branch": true
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-shared-codebase-documentation": {
      "nickname": "shared-codebase-documentation",
      "repotype": "Application"
    },
    "https://github.com/Flutter-Global/cap-shared-codebase-automation": {
      "nickname": "shared-codebase-automation",
      "repotype": "Application"
    }
  }
}
```

---

#### 1. The inclusion of `version` key

The **`version`** key allows the Codebase Governor identify the logic to use and apply the [codebases.json](/docs/codebase-governor/index.md) definitions to the repository. If it's not present the unversioned logic will be used.

So we have to include it at the top of the file:

```json
{
+  "version": "1.1",
  "description": "Capability description",
  "owner": "oreilco",
}
```

#### 2. Update the `policy` node

The `policy` node has a complete overhauled structure. The previous **`standard-protected-master-branch`** key no longer exists and now we have to define all the branch protections rules set variations needed for our capability to use on the repositories. All the different sets are defined inside the **`branch-protections`** node of **`policy`**.

| ℹ️ &nbsp;Information                                                                                                                                                                                   |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The policy node is not mandatory but when included becomes the source of truth for the definitions set and allows you to control them from a single source that is versioned and has a change history. |

For each branch protection set configuration you can use the **`parameters`** defined in the [📖 Codebase Governor guide](/docs/codebase-governor/index.md).

Below you can see the branch protection rule set, **bp_cap_standard**, defined inside the **`policy.branch-protections`** node:

```json
{
  "version": "1.1",
  "policy": {
+    "comment": "The policy is defined at the capability level and inside it you can define all the branch-protection types you need to apply at the repos level"
+    "branch-protections": {
+      "bp_cap_standard": {
+          "comment": "Branch protection comment",
+          "parameters": {
+            "branch-name-pattern": "master",
+            "include-administrators": true,
+            "require-review-from-codeowners": true,
+            "required-reviews-count": 1
+        }
    }
  },
  "repos": {
  }
}
```

The branch protection will be applied to a branch called **master**.

| ℹ️ &nbsp;Information                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------------------------------- |
| For more details on how to use Regex patterns in `branch-name-pattern` read the [📖 Codebase Governor guide](/docs/codebase-governor/index.md) |

For this rule set to be used we still have to assign it to the repositories.

#### 3. Apply branch protection rule sets to repositories

For each repository we now have to define which of the **`branch-protections`** is to be used in the repositories.

For that we have a new node **`policy`** inside of the **`repos`** node. In it we'll identify the **branch-protection name** to be used.

| ℹ️ &nbsp;Information                                          |
| :------------------------------------------------------------ |
| You can only assign one branch-protection policy to each repo |

```json
{
  "policy": {
    "branch-protections": {
        "bp_cap_standard": {
          "comment": "Branch protection comment",
          "parameters": {
            "branch-name-pattern": "master",
            "include-administrators": true,
            "require-review-from-codeowners": true,
            "required-reviews-count": 1
        },
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-shared-codebase-documentation" : {
      "nickname": "shared-codebase-documentation",
      "repotype": "Application",
+      "policy": {
+        "branch-protection": "bp_cap_standard"
+      }
    },
    "https://github.com/Flutter-Global/cap-shared-codebase-automation": {
      "nickname": "shared-codebase-automation",
      "repotype": "Application"
+      "policy": {
+        "branch-protection": "bp_cap_standard"
+      }
    }
  }
}
```

With this configuration the **cap-shared-codebase-documentation** and **cap-shared-codebase-automation** would use **bp_cap_standard**.

The final v1.x structured file is (with diff):

**Final v1.x**

```json
{
+  "version": "1.1",
  "description": "Capability description",
  "owner": "oreilco",
  "name":"product-shared-codebase",
  "nickname":"product-shared-codebase",
  "maintainers": [
    "oreilco",
    "arine-malheiro",
    "tiago-guerra",
    "oneill-jp",
    "crisostomon"
  ],
  "policy": {
-    "standard-protected-master-branch": true
+    "branch-protections": {
+        "bp_cap_standard": {
+          "comment": "Branch protection comment",
+          "parameters": {
+            "branch-name-pattern": "master",
+            "include-administrators": true,
+            "require-review-from-codeowners": true,
+            "required-reviews-count": 1
+        },
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-shared-codebase-documentation" : {
      "nickname": "shared-codebase-documentation",
      "repotype": "Application",
+      "policy": {
+        "branch-protection": "bp_cap_standard"
+      }
    },
    "https://github.com/Flutter-Global/cap-shared-codebase-automation": {
      "nickname": "shared-codebase-automation",
      "repotype": "Application"
+      "policy": {
+        "branch-protection": "bp_cap_standard"
+      }
    }
  }
}
```

## How to add Contributors in codebases.json

<sup>**Available from**: Codebase Governor v1.2</sup>

The Contributors node was introduced in v1.2 of Codebase Governor. It allows your to easily add, update and remove contributors (users and teams) to your repositories

| ℹ️ &nbsp;Information                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| For a complete reference of each option available in codebases.json, please consult this [📖 guide](/docs/codebase-governor/index.md). |

---

We are going to use an example codebases.json file that is based on a real capability with the v1.x structure.

| ❗️ &nbsp;Warning                                         |
| :-------------------------------------------------------- |
| The version of the codebases.json has to be 1.1 or higher |

---

The full file to update is presented below:

```json
{
  "version": "1.2",
  "description": "Capability description",
  "owner": "oreilco",
  "name":"product-shared-codebase",
  "nickname":"product-shared-codebase",
  "maintainers": [
    "oreilco",
    "arine-malheiro",
    "tiago-guerra",
    "oneill-jp",
    "crisostomon"
  ],
  "policy": {
    "branch-protections": {
        "bp_cap_standard": {
          "comment": "Branch protection comment",
          "parameters": {
            "branch-name-pattern": "master",
            "include-administrators": true,
            "require-review-from-codeowners": true,
           "required-reviews-count": 1
       },
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-shared-codebase-documentation" : {
      "nickname": "shared-codebase-documentation",
      "repotype": "Application",
      "policy": {
        "branch-protection": "bp_cap_standard"
      }
    }
  }
}
```

---

#### 1. The contributors node

The contributors node has 4 available keys, all of which are arrays:

| Key       | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `users`   | Which user(s) the current entry applies to                                                           |
| `teams`   | Which team(s) the current entry applies to                                                           |
| `include` | Limited list of repositories the team(s)/user(s) should be granted permission                        |
| `exclude` | Limited list of repositories where the team(s)/user(s) should NOT be granted access, i.e. exceptions |

**<sub>Example:</sub>**

```json
"contributors": [
  {
    "users": ["oreilco", "tiago-guerra"],
    "teams": ["test-team1"]
  },
  {
    "users": ["oreilco", "tiago-guerra"],
    "exclude": ["repo1"]
  }
]
```

These rules are followed:

- the permission granted to user(s)/team(s) is defaulted to **`write`**
- the contributors entries are evaluated top -> bottom
- users who are not members of the Flutter-Global Organization / GitHub cannot be added
- teams that are not part of the Flutter-Global Organization / GitHub cannot be added

#### 2. Adding a user

To add a user you have to include its Github username inside the **`users`** key. You can add all that you need as long as they exist within the Flutter-Global Org.

```json
{
  "contributors": [
    {
+     "users": ["oreilco", "crisostomon"]
    }
  ]
}
```

#### 2. Adding a team

To add a team you have to include its Github team name inside the **`teams`** key. You can add all that you need as long as they exist within the Flutter-Global Org.

```json
"contributors": [
  {
    "users": ["oreilco", "crisostomon"],
+   "teams": ["shared-codebase"]
  }
]
```

#### 3. Including or excluding repositories

You have the ability to **`include`** or **`exclude`** users and/or teams from contributing to certain repositories.

| ❗️ &nbsp;Warning                                                                                               |
| :-------------------------------------------------------------------------------------------------------------- |
| The two keys are mutually exclusive (**`include`** / **`exclude`**) so you can only use one in each definition. |

If you want to **`include`** users **oreilco** and **crisostomn** and team **shared-codebase** specifically to repositories **repo1** and **repo2** you should assign him as shown below:

```json
"contributors": [
  {
    "users": ["oreilco", "crisostomon"],
    "teams": ["shared-codebase"],
+   "include": ["repo1", "repo2"]
  }
]
```

If you want to **`exclude`** user **oreilco** specifically from repositories **repo1** you should assign them as shown below:

```json
"contributors": [
  {
    "users": ["oreilco", "crisostomon"],
    "teams": ["shared-codebase"],
    "include": ["repo1", "repo2"]
  },
+ {
+    "users": ["oreilco"],
+    "exclude": ["repo1"]
+ }
]
```

You might have noticed that in the example above the user **oreilco** is being included in **repo1** in the first definition and excluded in the second.

In case of a conflicting setting between two entries, the latest entry takes precedence. This means that effectively the user would not be included as a contributor in **repo1**.

The user **crisostomn** and team **shared-codebase** defined in the first entry would keep their permissions

| ℹ️ &nbsp;Information                                                                      |
| :---------------------------------------------------------------------------------------- |
| In case of a conflicting settings between two entries, the latest entry takes precedence. |

#### 4. Conclusion

The final [codebases.json](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) file would be:

```json
{
  "version": "1.2",
  "description": "Capability description",
  "owner": "oreilco",
  "name":"product-shared-codebase",
  "nickname":"product-shared-codebase",
  "maintainers": [
    "oreilco",
    "arine-malheiro",
    "tiago-guerra",
    "oneill-jp",
    "crisostomon"
  ],
+  "contributors": [
+  {
+    "users": ["oreilco", "crisostomon"],
+    "teams": ["shared-codebase"],
+    "include": ["repo1", "repo2"]
+  },
+  {
+    "users": ["oreilco"],
+    "exclude": ["repo1"]
+  }
+ ],
  "policy": {
    "branch-protections": {
        "bp_cap_standard": {
          "comment": "Branch protection comment",
          "parameters": {
            "branch-name-pattern": "master",
            "include-administrators": true,
            "require-review-from-codeowners": true,
           "required-reviews-count": 1
       },
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/cap-shared-codebase-documentation" : {
      "nickname": "shared-codebase-documentation",
      "repotype": "Application",
      "policy": {
        "branch-protection": "bp_cap_standard"
      }
    }
  }
}
```
