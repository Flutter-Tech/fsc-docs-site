# Contributing to the Inner Source Docs

We welcome contributions! The inner source docs site will be a better resource if you help us make it better. To contribute please follow this simple steps:

- If your contribution will change the site structure and/or organization, discuss it first with us on Slack in [#inner-source](https://slack.com/app_redirect?channel=C0115SW13V5).
- Raise a PR for review.

## Setup

The site is built using [Jekyll](https://jekyllrb.com/) and hosted using [GitHub Pages](https://pages.github.com/). Follow the instructions in the `README.md` to render the site locally.

## Minor Edits

Minor edits should be straight-forward as the bulk of the site is written in plain markdown. Clone the repo, find the file, make the edit and commit the change in a new branch. You should use [Prettier](https://prettier.io/) to auto-format your markdown to maintain style consistency (this is enforced by a PR linting rule to help remind you). You should have permission to push the branch and raise a PR for review.

## Major Edits: Adding Content

There are two main concerns when adding new content:

1. Where the content will be in the site navigation
2. The content itself

The site navigation is defined in the file `_data/menus.yml`: its format should be self-explanatory.

The new content file itself should be written in [Markdown](https://daringfireball.net/projects/markdown/syntax) and requires the minimum frontmatter:

```yaml
---
layout: default
title: My Page Title
---
This is my new markdown page...
```

### Table of Contents

If you want to add a Table of contents to your documentation page, you've to add the key **toc** with the value `true` in the front matter section at the top of the file.

```
---
layout: default
title: My Page Title
toc: true
---
```

### Removing logical meaning when using chars from HTML

If you want to write something like this, `<ADD_THIS_VALUE>`, you have to remove the logical meaning of **`<`** and **`>`** by adding a **`\`** before the symbol.

Example: `\<ADD_THIS_VALUE\>`

### Removing logical meaning when using chars from Liquid

When using code snippets, commonly GitHub actions workflows yaml, in the Docs you might see that the content isn't rendered correctly. This is because the code inside is has `${{ <SOME_VALUE> }}` in the snippet.

To correct this you've to surround the code snippet like the example below:

````
{% raw %}
    ```yaml

    APP_PEM: ${{ secrets.APP_PRIVATE_KEY }}
    APP_ID: ${{ secrets.APP_ID }}

    ```
{% endraw %}

````

If you have questions send us a message in Slack, in the [#inner-source](https://slack.com/app_redirect?channel=C0115SW13V5) channel.
