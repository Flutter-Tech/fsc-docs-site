---
layout: default
title: Activity Level
toc: false
---

# Activity Level

The activity level of a repository represents the frequency of changes to it.

- **Daily**: There is typically a change every day.
- **Weekly**: There is typically a change every week.
- **Monthly**: There are changes in the last six months, but they were not enough to classify it as either weekly or daily.
- **Stale**: There is no activity in the last six months.

Pull requests, reviews and commits are all considered to be changes.

## How It Is Calculated

The activity level is inferred by calculating the median number of changes in the repository per week.

- If the median (i.e. "usual") number of changes per week is greater or equal to 5 the activity is **daily**.
- Otherwise if the median is greater than 0, the activity is **weekly**.
- If there is no activity at all in the last 6 months the activity is **stale**, otherwise it is classed as **monthly**.
