# How to contribute to the Flutter Documentation site

We welcome contributions! The Flutter Documentation site will be a better resource if everyone joins in the effort to help each other.

To contribute please follow this simple steps:
- If your contribution will change the site structure and/or organization, discuss it first with us on Slack at the [#shared-codebase](https://betfair.slack.com/archives/C0115SW13V5) channel
- Follow the [style guidelines](#) for content tone and display
- Raise a PR for review with a detailed list of changes made

## Overview

The Flutter Documentation Site provides a centralized source for onboarding tutorials, training, ways of working, technical documentation and more. It's built using [Jekyll](https://jekyllrb.com/) and hosted using [GitHub Pages](https://pages.github.com/).

## How can I contribute?

### Pre-requisites

Before you begin contributing you'll need to clone the site GitHub repository into your machine.

To do this, open a terminal and:

1. Navigate to the folder you want to clone the repository to
2. Execute one of the following commands:
   HTTPS: `git clone https://github.com/Flutter-Global/fsc-docs-site.git`
   SSH: `git clone git@github.com:Flutter-Global/fsc-docs-site.git`
3. Create a new branch for the changes with:
   `git checkout -b <name-of-the-branch>`
4. Now you have the files ready to use in your machine

### Creating and adding content

This section guides you through creating and adding new content to the already existing documentation.

There are two main concerns when adding new content:

1. Where the content will be in the site navigation
2. The content itself

#### The content and the site navigation

When creating new content you'll usually create a page to contain it. In the site the sidebar navigation is defined in the file `_data/menus.yml`.

First you'll have to decide where the new page menu option is going to appear. As an example we're going to add the page **How can I contribute** as a child of the menu **Tutorials**.

When opening the file `_data/menus.yml` you'll encounter a structure similar to what's below:

```yaml
main:
  - url: /getting-started/
    title: Getting Started
    identifier: getting-started
  - url: /tutorials/
    title: Tutorials
    identifier: tutorials
    children:
      - url: /tutorials/creating-your-first-repo/
        title: Creating your first repo
        identifier: creating-your-first-repo
      - url: /tutorials/making-your-first-commit/
        title: Making your first commit
        identifier: making-your-first-commit
      - url: /tutorials/running-your-first-tests-on-github/
        title: Running your first tests on GitHub
        identifier: running-your-first-tests-on-github
```

Each menu as 3 attributes:

- ***url***: Defines the link to where the menu option is pointing (this is a relative link and will be appended with the site URL)
- ***title***: The title that will be used in the menu option
- ***identifier***: Unique name of this menu
- ***children***: Set of menu options that belong to this menu

So if we want to add a new option called **How can I contribute** to the menu **Tutorials**, we'll use this menu structure:

```
- url: /tutorials/how-can-i-contribute
  title: How can I contribute
  identifier: how-can-i-caontribute
```

The resulting file will be:

```yaml
main:
  - url: /getting-started/
    title: Getting Started
    identifier: getting-started
  - url: /tutorials/
    title: Tutorials
    identifier: tutorials
    children:
      - url: /tutorials/creating-your-first-repo/
        title: Creating your first repo
        identifier: creating-your-first-repo
      - url: /tutorials/making-your-first-commit/
        title: Making your first commit
        identifier: making-your-first-commit
      - url: /tutorials/running-your-first-tests-on-github/
        title: Running your first tests on GitHub
        identifier: running-your-first-tests-on-github
      - url: /tutorials/how-can-i-contribute
        title: How can I contribute
        identifier: how-can-i-caontribute
```

This will create the option that will appear in the last position of the menu. To change the order just move the new entry to another position before the **- url:** statement within the list.

#### The content

Has previously stated the content will reside inside a page. Continuing to use the previous example, **How can I contribute**, we'll create the page file in the correct folder and add the content to it.

As defined the page will be a child of the Tutorials menu and we have to create the file in the folder that belongs to the parent menu.

The site folder structure is (shortened):

```
|-- fsc-docs-site
    |-- _data
    |-- (...)
    |-- _layouts
    |-- docs
    |-- tutorials
    |   |-- creating-your-first-repo.md
    |   |-- making-your-first-commit.md
    |   |-- (...)
    |   |-- how-can-i-contribute.md
```

So the file for our page will have to be created inside the **tutorials** folder with the **identifier** value defined previously and the .md extension (how-can-i-contribute.md). Inside we'll add the content in [Markdown](https://daringfireball.net/projects/markdown/syntax) format. You can use Markdown or/and HTML as it supports both at the same time. 

Every page file needs to have an header that defines the basic properties and the content to show to the user:

```yaml
---
layout: default
title: <title-of-the-page>
---

<CONTENT>
```

For our example the file could contain:

```
---
layout: default
title: How can I contribute
---

# How to contribute to the Flutter Documentation site

We welcome contributions! The Flutter Documentation site will be a better resource if everyone joins in the effort to help each other.

To contribute please follow this simple steps:
- If your contribution will change the site structure and/or organization, discuss it first with us on Slack at the [#shared-codebase](https://betfair.slack.com/archives/C0115SW13V5) channel
- Follow the [style guidelines](#) for content tone and display
- Raise a PR for review with a detailed list of changes made

## Overview

The Flutter Documentation Site provides a centralized source for onboarding tutorials, training, ways of working, technical documentation and more. It's built using [Jekyll](https://jekyllrb.com/) and hosted using [GitHub Pages](https://pages.github.com/).
```

With the file saved, you can now create the PR for review and when approved and merged it will appear in the site.

------------

If you have questions send us a message in Slack, in the [#shared-codebase](https://betfair.slack.com/archives/C0115SW13V5) channel.








