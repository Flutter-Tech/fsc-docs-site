---
layout: preview
title: SDLC
---

# Development Lifecycle

The process by which you change the code in your repository is your **Software Development Lifecycle** or SDLC. Within `Flutter-Global` several common SDLCs are directly supported by GitHub automation and the `git flutter` CLI tool to make them easier for you to use. Using one of these standard SDLCs is recommended unless you have unusual requirements.

## Audit SDLC

This SDLC is suitable for documentation, integration test or other non-production deployed repositories where changes do not always require a review. The Audit SDLC ensures previous changes are visible and can be audited at any time, but does not require changes to be reviewed before they are made.

**Documentation is currently a Work In Progress.**

## Service SDLC

This SDLC is suitable for production deployed service code repositories where changes require review. The Service SDLC ensures changes are reviewed before being deployed and is optimised for [Guest Contribution](/how/guest-contributions/) services where there is a single owning team.

**Documentation is currently a Work In Progress.**

## [Parallel Teams SDLC](/sdlc/parallel-teams/)

This SDLC is suitable for production deployed service code repositories where changes require review. The Parallel Teams SDLC ensures changes are reviewed before being deployed and is optimised for [Maintainers in Multiple Teams](/how/multiple-teams/) services where there are multiple teams working in parallel on the service.

**Documentation is currently a Work In Progress.**
