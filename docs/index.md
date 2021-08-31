---
layout: default
title: Technical Documentation
toc: false
---

# Technical Documentation

Our entire inner source portfolio is contained in the [Flutter-Global GitHub organisation](https://github.com/Flutter-Global/). GitHub recommends a flat single-org repository structure like this for inner source to simplify access control and consistent team management. At our scale with thousands of inner source repositories extra structure and conventions are required so we:

- group repositories together by 'product' and 'capability'.
- define repository conventions based on the type of content.
- provide automated tooling to work on these repository groups using these conventions.

This section documents each of these areas in more detail.

## Capability

A **capability** is the core building block of our repository structure.

- A capability is a group of related repositories that does something meaningful (e.g. product "feature").
- Each GitHub repository is owned by a _single_ capability.
- A capability has a named owner, and a single team of expert maintainers.
- It is defined as a GitHub repository containing a [codebases.json](/docs/codebases-json/) file with a specific format.
- Like other GitHub repositories, a capability is owned by a _single_ parent: either another capability or a 'product'.

A **product** is simply a special name for a capability with no parent. A product is a collection of capabilities that together form a coherent and named set of features for external or internal use.

**Example**: The Fixed Odds Cashout Quote Service (FCQ) is a service that quotes a price for customers who want to cashout their bet. This repository is part of the Cashout capability. And the Cashout capability is owned by the Global Betting Platform product. You can lookup the `fcq-service`, `cap-cashout` or `product-global-betting-platform` in the [service catalogue](/catalogue/).

## Conventions & Automation

There are a number of conventions and automation across `Flutter-Global` to make our work easier:

- [Standardised repository naming](/docs/naming/)
- [A codebase governor](/docs/codebase-governor/) to enact [access and branch protections](/docs/branch-protections/) that are declared in a [codebases.json](/docs/codebases-json/) file.
- [PR boards](/docs/pr-boards/) to keep track of the changes requested across all repositories in a capability or product.
