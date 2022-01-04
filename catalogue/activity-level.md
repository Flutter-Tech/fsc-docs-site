---
layout: default
title: Activity Level
toc: false
---

# Activity Level

The activity level of a repository represents the frequency of changes made to a repository in the last six months. The activity level can be classified as:

- **Stale**: There is no activity in the last six months.
- **Monthly**: There are changes in the last six months, but they were not enough to classify it as either weekly or daily.
- **Weekly**: There is typically a change every week.
- **Daily**: There is typically a change every day.

Currently, **pull requests**, **reviews**, **commits** and **comments** are all considered to be changes.

## Data source

The data used to calculate the activity level is retrieved from the [GitHub GraphQL API](https://docs.github.com/en/graphql). Currently, we retrieve six months of data from the default branch of a repository and we refresh the data every Sunday.

The relevant pieces of information for the activity level calculation are:

- [Organization](https://docs.github.com/en/graphql/reference/objects#organization)
- [Repositories](https://docs.github.com/en/graphql/reference/objects#repositoryconnection)
- [Commits](https://docs.github.com/en/graphql/reference/objects#commithistoryconnection)
- [Pull Requests](https://docs.github.com/en/graphql/reference/objects#pullrequestconnection)
- [Reviews](https://docs.github.com/en/graphql/reference/objects#pullrequestreviewconnection)
- [Comments](https://docs.github.com/en/graphql/reference/objects#issuecommentconnection)

## How it is calculated

Our main objective was to design an algorithm that was simple and easy to understand. Thus, we came up with a solution that calculates the activity level based on the median of the weekly total number of changes.

The algorithm can be described in five simple steps:

1.  The first step merges all changes into a bundle. If there are no changes, the activity level is immediately classified as **stale**.
2.  The second step divides the bundle of changes into weekly chunks and calculates the total number of changes in each week.
3.  The third step gathers the total number of changes per week into a bundle and sorts it in ascending order.
4.  The forth step calculates the median value of that bundle.
5.  Finally, the fifth step infers the activity level based on the median. If the median is greater or equal to **5**, then the activity level is classified as **daily**. If the median is not greater or equal to **5**, but it is greater than **0**, then the activity level is classified as **weekly**. If no other classification has been made until this point, then the activity level is classified as **monthly**.
