---
layout: default
title: SDLC
article_navigation: true
next_title: SemVer
next_url: /sdlc/semver/
---

# Development Lifecycle

The process by which you change the code in your repository is your **Software Development Lifecycle** or SDLC. Within `Flutter-Global` several common SDLCs are directly supported by the `git flutter` CLI tool to save you time. Using one of these standard SDLCs is recommended unless you have unusual requirements.

## [Multiple Teams SDLC](/sdlc/multiple-teams/)

This SDLC is suitable for production deployed service code repositories where changes MUST be reviewed. The Multiple Teams SDLC is optimised for [Maintainers in Multiple Teams](/how/multiple-teams/) services where there are multiple teams working concurrently on the service. It uses a modified GitFlow branching model and SemVer release tagging to support concurrent team development and several different supported versions in production.

## COMING SOON: Service SDLC

This SDLC is suitable for production deployed service code repositories where changes MUST be reviewed. The Service SDLC is optimised for [Guest Contribution](/how/guest-contributions/) services where there is a clear owning team. It uses a simple GitHub Flow branching model which is easy to understand and SemVer release tagging to signal production-ready builds.

## COMING SOON: Audit SDLC

This SDLC is suitable for documentation, integration test or other non-production deployed supporting repositories where changes CAN be reviewed. The Audit SDLC ensures previous changes are visible and can be audited at any time, but does not require changes to be reviewed before they are made. It uses a simple GitHub Flow or trunk-based development branching model with more relaxed branch protection rules.
