---
layout: default
title: GitHub Repository Naming
toc: false
---

# Repository Naming

A good repository name allows users to accurately guess its contents. Repositories in `Flutter-Global` follow the conventions:

- repository names should be lower case, using a dash (`-`) as a word separator.
- a capability repository is prefixed with `cap-` e.g. `cap-cashout`.
- a product repository is prefixed with `product-` e.g. `product-global-betting-platform`.
- use a common relevant prefix to group several related repos together. e.g. for the fixed odds cashout quote functionality this is `fcq-`.
- for the primary repository of an application use `-service` suffix, e.g. `fcq-service`.
- each division usually maintains its own service deployment with a repository for each specific divisional configuration. These repos contain `config` (preferred), `configrepo`, `chef` or `ansible` to indicate their contents. Since they are owned by a particular division that is indicated by a suffix (`-ppb`, `-fdg`, or `-isp`). e.g. `fcq-config-ppb` contains PPB deployment config for the FCQ service.
- supporting repositories can be referred to as a `lib` (shared library code), `tests` (separate testing code) or `tool` (a supporting utility)

## Overview

<table>
  <tr>
    <td colspan=3><strong>Lower case repository name with a dash (<code>-</code>) word separator</strong></td>
  </tr>
  <tr>
    <td><strong>prefix-</strong></td>
    <td><strong>-body-</strong></td>
    <td><strong>-suffix</strong></td>
  </tr>
  <tr>
    <td>existing abbreviation (e.g. tla name)</td>
    <td><code>service</code> for primary app</td>
    <td>none by default!</td>
  </tr>
  <tr>
    <td><code>cap-</code> for capability</td>
    <td><code>tool</code> for supporting utility, <code>lib</code> for library, <code>tests</code> for tests</td>
    <td><code>-ppb</code>, <code>-fdg</code> or <code>-isp</code> indicates divisional ownership e.g. for deploy config.</td>
  </tr>
  <tr>
    <td><code>product-</code> for product</td>
    <td><code>config</code> for configuration (or <code>chef</code>, <code>ansible</code>)</td>
    <td></td>
  </tr>
</table>

## Examples

For more examples please browse the [service catalogue](/catalogue/) or search the list of repos by name in the organisation itself.
