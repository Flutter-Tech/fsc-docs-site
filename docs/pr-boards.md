---
layout: default
title: Capability Pull Request Boards
---

# Capability Pull Request Boards

A capability is a collection of repositories that together do something meaningful. Each capability is governed by a group of maintainers. Maintainers therefore require a view of all the changes ("pull requests" in GitHub) across all repositories in a capability. This view is supported by **capability pull request boards** which can be created for your capability in a few minutes. 

## Creating a Capability PR Board

To create a board:

1. Navigate to the existing project list via the ['Projects' tab in Flutter-Global](https://github.com/orgs/Flutter-Global/projects).
2. Use the 'New Project' button to launch the create project wizard: choose an appropriate name and make sure the repository is private. There is no need to link any repositories. 
3. In the board description field include the repository name of your capability preceeded by a `$`. You may include more than one capability. For example a description of "This board tracks $cap-shared-codebase-documentation $cap-shared-codebase-automation" will track PRs from all repos in both those capabilities. The board description can be changed at any time.
4. Once the project is created, use the 'Add Column' button to create the columns that you would like to use. For the automation to recognise the columns you need to include one of a set of standard snippets in the column name as in the table below.
5. Wait for the board to be populated. All boards are updated by a scheduled job, so it may take up to 30 mins for the board to become fully populated will all your capability PRs. 

| Semantic Meaning                          | Column Name Contains        |
| ----------------------------------------- | --------------------------- |
| Early stub PRs that are in a draft state. | "To do", "Draft", "✏"       |
| PRs that are now ready to review          | "In progress", "Open", "🔍"  |
| PRs that are approved and can be merged   | "Reviewed", "Approved", "👍" |
| Closed or merged PRs that are complete    | "Done", "Closed", "✅"       |

If you prefer to use only 3 columns, PRs that are approved and can be merged will be placed in the same column as ready to review PRs if the approved column does not exist. 

## Understanding the Automated Behaviour

The capability PR boards are populated by automation maintained by the [inner source team](/community/).

* The repos to be included in a capability are gathered from the capability `codebases.json` file that must be well-formed. This automation does not require code governor to be installed. 
* The automation runs on a scheduled basis, every 15-30 minutes so there will be short delays before PR changes of status are reflected in their position on the board. 
* The automation will ignore any cards that are manually placed on the board that reference issues or PRs that are not under it's automation remit.
* For any PRs that are under automation, the card positioning into its correct semantic column is declaratively enforced every scheduled run (i.e. every 30 mins). So while it's ok to move cards around, remove them, and so on they will be restored/re-positioned if appropriate. 
* Any closed PR is removed from the board after 14 days of no activity.
* If a semantically tagged column does not exist for a particular state, then the action to add or move the PR to that column is simply skipped. The exception to this is approved PRs will be moved/added to the same column as ready to review PRs if that column does not exist.

## Troubleshooting a Capability PR Board

Here are some simple checks if the board is not behaving as you expect:

* Check on the status of the [automation scheduled process in the `fsc-cli-tool` repo Action tab](https://github.com/Flutter-Global/fsc-cli-tool/actions). You should be able to see the last run time and whether the process completed OK.
* Is the board an [organisation level board](https://github.com/orgs/Flutter-Global/projects)? Only organisation-level boards are automated this way. 
* The automation does not make any permissions changes to either PRs, or the board itself. If the board is not editable this needs to be resolved in the board settings by the board owner. If the card are not visible this needs the respective repo owner to grant you the correct view permissions.

Feel free to reach out to the [inner source team](/community/) for any assistance. 