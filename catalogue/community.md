---
layout: default
title: Community
toc: false
---

# Community

The **community** of a repository is an automated guess at the group of GitHub users who are most likely to be able to help you. It is based on the activity of users within the repository.

The community does **not** measure or rank expertise with a repository. It also is likely to be an incomplete list of significant users. This is because there are other ways that members can contribute that are not visible in GitHub, and simple rules are used so the mechanism is understandable.

It has been designed to help inform users about the most likely members who can help them with future changes, especially in a cross-divisional "inner source" context, and how that relates to the formally recognised capability maintainers team.

## How it is calculated

The community is inferred based on a set of simple rules from the last 6 month of GitHub activity data. These rules vary depending on the number of pull request review undertaken within the repository.

If the repository has more than ten PR reviews in the last 6 months the following measurements are calculated per user:

- **Number of successful contributions**: the number of pull requests that have been **approved** and **merged**.
- **Number of contributions without changes**: the number of pull requests that have been **merged** only with reviews of the **approved** type.
- **Number of reviews for a different division**: the number of reviews in a pull request raised by a member of a different division.
- **Number of comment/changes requested reviews**: the number of reviews of the **comment** and **request for changes** type.
- **Number of approved reviews**: the number of reviews of the **approval** type.
- **Percentage of pull requests the member has interacted with**: the percentage of pull requests the member has interacted with over the total amount of the repository's pull requests.

If there are less than ten PR reviews, then the measurements are reduced to:

- **Number of pull requests**: the total amount of pull requests the member has raised.
- **Number of commits not associated with a pull request**: the total amount of commits the member has directly pushed to the default branch.

For each measurement the top five members are included in the community. When two members have the same measurement, they are ordered alphabetically.

When all measurements are calculated, the results of each are merged into one list that preserves all members. Thus, it is important to consider that the maximum number of members inferred for a community is **5 \* number of measurements**. The final result is a list with all the members inferred by the different measurements, ordered by the number of measurements they appeared in.
