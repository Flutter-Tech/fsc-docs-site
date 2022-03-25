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

Once you have used this command you are responsible for commiting and merging the change to the `this-codebase.json` file into the default branch (e.g. `main`) for your intended change to come into effect.

## Example

To initialise the Parallel Teams SDLC workflow in your repository with two teams `opo` and `lds`:

```
$ git flutter init gitflow --team opo --team lds
```
