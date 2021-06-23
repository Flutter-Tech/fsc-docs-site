# Inner Source Docs Site (External)

This is the External Inner source documentation site data that is published in the URL: [https://innersource.flutter.com](https://innersource.flutter.com).

## To Run Locally

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [jekyll](https://jekyllrb.com/) and `gem install jekyll-remote-theme`
2. Clone the repo and `cd` to the root directory
3. Run `jekyll serve`
4. Navigate to the server address using your web browser (e.g. `http://127.0.0.1:4000`)

If you intend to contribute to the site, please use [Prettier](https://prettier.io/) to auto-format your markdown to maintain style consistency.

## Our Documentation Principles

1. We write plain, simple English.
2. We use an informal & inclusive tone.
3. We are concise. No extra words.
4. We prefer a few long scrollable pages over many short pages.
5. We prefer to use markdown, and avoid embedded HTML.

## Tips

### Table of contents

If you want to add a Table of contents to your documentation page, you've to add the key **toc** with the value `true` in the front matter section at the top of the file.

Example:

```
---
title: Beautiful page title
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
