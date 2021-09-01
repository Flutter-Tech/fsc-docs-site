---
layout: default
title: Getting Started
article_navigation: true
next_title: Using a Repo
next_url: /start/using-a-repo/
---

# Getting Started

Welcome to Flutter inner source! Inner source products within the Flutter group can be used by any internal team, and are open to contribution from any of our engineers, in any division or location. This site provides an introduction to our [inner source way of working](/how/), [technical documentation](/docs/) for our conventions and automation, and a [service catalogue](/catalogue/) of inner source products.

{% unless site.internal %}

## Getting Access

We use GitHub to support our inner source ambitions, with all inner sourced products located in the [`Flutter-Global`](https://github.com/Flutter-Global) organisation to simplify access. If you are a Flutter employee and wish to participate please request access via your divisional service desk (e.g. search JIRA service desk for "GitHub"). If you're not already a member of the Flutter team, [we're likely hiring somewhere near you](https://www.flutter.com/careers).

{% endunless %}

## Orientating within GitHub

[Flutter-Global](https://github.com/Flutter-Global) has thousands of repositories and GitHub does not have any in-built way to group or link them (e.g. like 'projects' in GitLab or Atlassian BitBucket) so the structure is not obvious in the GitHub user interface. You may already know a specific repository you need from colleagues or a work brief so can skip forward to [start using](/start/using-a-repo/) ([or contributing](/start/contribute/)) to that repo. If you want to browse the available applications, they are organised into:

- A **capability** is a group of repositories that collectively fulfills a meaningful purpose for our business.
- A **product** is a group of capabilities that fulfills all the functionality required within a particular domain.

For example the Global Betting Platform (GBP) product consists of capabilities for the product catalogue, bet placement, bet tracking, cashout and so on. A product is not necessarily directly customer facing -- for example the Inter-Divisional Network (IDN) product consists of capabilities for routing, security, DNS and so on.

This structure is defined in GitHub by creating a root repository for each product (named with the `product-` prefix) and capability (`cap-` prefix), and using a special [`codebases.json`](/docs/codesbases-json/) file to define the repositories it claims.

While it is possible to directly navigate to and read the JSON in product and capability repository `codebases.json`, it is easier to view the hierarchy in a human formatted way. We recommend using the [service catalogue](/catalogue/) that is created on this site from these files.

## Making an Impact

Once you've got access and orientated it's time for you to make your impact within the inner source community. To help your next steps there are a series of getting started guides depending on what you need to do:

- [Using a repository](/start/using-a-repo/) helps you to start using an inner source repository for what you need it for.
- [Making a contribution](/start/contribute/) helps you understand the community's conventions on how to contribute changes back to a repository.
- [Setup CI on GitHub](/start/setup-ci/) introduces you to GitHub Actions and Packages, and how to setup continuous integration that is 'inner source friendly'.
- [Creating a repository](/start/create-repo/) outlines how to create a new repository.
- [Maintaining a repository](/start/maintainer/) guides new maintainers how to configure repositories for inner source contributions and further tips on being an impactful maintainer within a inner source product.

## Community

Good luck! Remember when you get stuck, or just want to discuss or share something -- there is an [inner source community within Flutter to help you](/community/). Come and join in!
