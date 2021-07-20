---
layout: default
title: Creating a Repository
article_navigation: true
previous_title: Setup CI on GitHub
previous_url: /start/setup-ci/
next_title: Maintaining a Repository
next_url: /start/maintainer/
---

# Creating a Repository

This guide explains 3 different methods to create a new repository:

- **RECOMMENDED**: Create a pre-configured repository within an existing capability
- Create an ad-hoc repository manually using the GitHub UI
- Create a new capability repository

## Create a Pre-Configured Repo

To create a new pre-configured repository for use within an existing capability, the [codebase governor](/docs/codebase-governor/) automation can be used. Simply raise a pull request in the relevant capability repository to add your new repository to the `codebases.json` file under the `repos` key.

```
...
    "https://github.com/Flutter-Global/existing-repo": {
      "policy": {
        "branch-protection": "bp-standard"
      }
    },
+    "https://github.com/Flutter-Global/my-new-repo": {
+      "policy": {
+        "branch-protection": "bp-standard"
+      }
+    },
...
```

Don't forget to [follow the repo naming conventions](/docs/repo-structure/). The codebase governor will identify that it needs to create a new repository and comment on the PR to confirm that. Once the PR is approved and merged, the repository will be created, and configured with the correct access control and branch protections that you have declared for it.

## Manually Create a Repo

Every user in `Flutter-Global` also has permission to create a new repository in the normal way on the GitHub site:

1. Click the **+** drop-down menu on the top-right corner of a GitHub page and select **New repository**.<br/>
   ![Creating a repository - New repository](/start/create-repo/create-repository.png "Creating a repository - New repository")
2. In the **Owner** drop-down, select the _Flutter-Global_ Organization, this is where our inner source code is shared.<br/>
   ![Creating a repository - Owner](/start/create-repo/owner.png "Creating a repository - Owner")
3. Enter the name of your repo and a description. Please [follow the repo naming conventions](/docs/repo-structure/).<br/>
   ![Creating a repository - Name and Description](/start/create-repo/name.png "Creating a repository - Name and Description")
4. Within _Flutter-Global_, **all repositories have Internal visibility**. If you want something different, please contact the [inner source team](/community/).<br/>
   ![Creating a repository - Visibility](/start/create-repo/visibility.png "Creating a repository - Visibility")
5. Choose whether you want to initialise, with a README, then continue to create the repository.

Creating the repo manually simply gives you an empty repo that you have full admin control over but has not been yet been appropriately configured. You will need to setup the necessary [access and branch protection control](/docs/branch-protection/) yourself depending on your needs, and assign it to a capability by adding an entry to `codebases.json` in the capability repository.

## Creating a Capability Repository

Creating a new capability repo is more complex so this task has some extra automation to help you.

1.  Navigate to the [**Capability creation request**](https://github.com/Flutter-Global/flutter-global-automation/issues) and click the New issue button.
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
    name: cap-your-capability-name
    description: Your description goes here
    owners:
      - the-owner-github-username
    maintainers:
      - a-maintainer-github-username
      - another-github-username
      - and-another
    ```

4.  Select **Submit new issue**. After the submission the automation process will start and will inform you of the progress by adding comments in the created issue.

5.  When the process finishes, open the new Capability repository by searching for it in the Flutter-Global organization or by inputting the URL in the browser address bar. You will see that the repo has a Pull Request.

6.  Select the **Pull requests** tab and open it. Check if all the changes are correct and then select **Merge pull request**.

7.  After merging the Capability repository is updated with your definitions and the **Codebase Governor** workflow will run every time you update the `codebases.json` file.
