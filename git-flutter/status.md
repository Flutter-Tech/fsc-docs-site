---
layout: preview
title: status Command
article_navigation: true
previous_title: Git Flutter Install
previous_url: /git-flutter/install/
next_title: Init Command
next_url: /git-flutter/init/
---

# `status` Command

The `git flutter status` command is used to understand the current state of a repository and your checkout. It is designed as a [standard SDLC](/sdlc/) aware replacement for the `git status` command and shows you:

- your current branch and its relationship to the GitHub origin
- local modifications and their state (e.g. staged, untracked, etc)
- status of other important repository branches (e.g. release or develop branches)
- semver tag status of current and important branches
- sync status of current and important branches

```
{{ site.data.cli.commands.status.usage | strip }}
```

The command adds progressively greater value the more complex [your configured SDLC](/sdlc/).

## Examples

{% include cli-examples.html topic="status" %}
