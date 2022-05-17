---
layout: default
title: init Command
article_navigation: true
previous_title: Git Flutter Install
previous_url: /git-flutter/install/
next_title: feature Command
next_url: /git-flutter/feature/
---

# `init` Command

The `git flutter init` command is used to define and config your chosen [SDLC](/sdlc/). The SDLC configuration is stored in the `this-codebase.json` file in the root directory of your repository. You should not need to edit this file directly yourself, instead using the `init` command to define what you want which will edit this file for you.

```
{{ site.data.cli.commands.init.usage }}
```

Once you have used this command you are responsible for:

- Commiting and merging the change to the `this-codebase.json` file into the default branch (`main` or `master`). This will require you to use your existing review mechanism (e.g. a pull request with approvals)
- You need to create and push the relevant develop branches before you can start working with them.

## Example

To initialise the multiple teams SDLC workflow in your repository with two teams `opo` and `lds` first create the `this-codebase.json` file:

```
$ git flutter init gitflow --team opo --team lds
```

Commit and push it to `main` or `master` (you may need to use a pull request depending on your existing workflow):

```
$ git commit -a -m "Switch to multiple teams branching model"
```

Then create the required develop branches:

```
git branch opo/develop main
git push -u origin opo/develop
git branch lds/develop main
git push -u origin lds/develop
```

It is recommended to create the develop branches **after** merging the `this-codebase.json` file.
