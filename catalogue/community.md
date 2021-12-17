---
layout: default
title: Product Catalogue
toc: false
---

# Community

The community of a repository represents the members that contributed the most to the respective repository according to a set of rules developed by the Flutter Inner Source team.

The community was not designed to be a measure of performance since there are other ways that members can contribute to the repositories that are not represented, and simple rules are used so the mechanism is understandable. It has been designed to help inform users about the most likely members who can help them with future changes, especially in a cross-divisional "inner source" context, and how that relates to the formally recognised capability maintainers team.

## Data source

The data used to infer the community is retrieved from the [GitHub GraphQL API](https://docs.github.com/en/graphql). Currently, we retrieve six months of data from the default branch of a repository and we refresh the data every Sunday.

The relevant pieces of information for the community inference are:

- [Organization](https://docs.github.com/en/graphql/reference/objects#organization)
- [Members](https://docs.github.com/en/graphql/reference/objects#organization)
- [Repositories](https://docs.github.com/en/graphql/reference/objects#repositoryconnection)
- [Commits](https://docs.github.com/en/graphql/reference/objects#commithistoryconnection)
- [Pull Requests](https://docs.github.com/en/graphql/reference/objects#pullrequestconnection)
- [Reviews](https://docs.github.com/en/graphql/reference/objects#pullrequestreviewconnection)
- [Comments](https://docs.github.com/en/graphql/reference/objects#issuecommentconnection)

## How it is calculated

We designed an algorithm to infer the community based on a set of simple rules. These rules vary depending on the repository's number of reviews. If the repository has more than ten reviews, the rules used by the algorithm are:

- **Number of successful contributions**: the number of pull requests that have been **approved** and **merged**.
- **Number of contributions without changes**: the number of pull requests that have been **merged** only with reviews of the **approved** type.
- **Number of reviews for a different division**: the number of reviews in a pull request raised by a member of a different division.
- **Number of comment/changes requested reviews**: the number of reviews of the **comment** and **request for changes** type.
- **Number of approved reviews**: the number of reviews of the **approval** type.
- **Percentage of pull requests the member has interacted with**: the percentage of pull requests the member has interacted with over the total amount of the repository's pull requests.

However, if there are less than ten reviews, then the set of rules is reduced to:

- **Number of pull requests**: the total amount of pull requests the member has raised.
- **Number of commits not associated with a pull request**: the total amount of commits the member has directly pushed to the default branch.

Each rule is applied to the data and a maximum of five members is retrieved for each rule, ordered by number of contributions. When the members have the same amount of contributions, they are ordered by alphabetical order.

When all rules are applied, the results of each rule are merged into one list that preserves all members. Thus, it is important to consider that the maximum number of members inferred for a community is **5 \* number of rules**. The final result is a list with all the members inferred by the different rules, ordered by the number of rules they appeared in.
