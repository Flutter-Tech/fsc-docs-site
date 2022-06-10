---
layout: default
title: Security
article_navigation: true
next_title: Dependabot
next_url: /security/dependabot/
---

# Security

For inner source application to be used by a new team, the security standards of the application and adherence to those standards must be clear and transparent. This section lists the security controls applied to repositories across the `Flutter-Global` org, and how they are measured and reported.

<div
  class="mb-8 p-5 rounded-lg border border-yellow-400 bg-yellow-300 text-yellow-900 flex"
>
  <span class="mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  </span>
  This is PREVIEW content. These security controls and reporting framework is under construction.  
</div>

## [Code Dependency Vulnerabilities][dependabot]

Most code repositories include external code library dependencies e.g. NPM modules or Java packages. The version of such dependencies are usually "pinned" to ensure repeatable builds and prevent the introduction of un-reviewed 3rd party additions via these dependencies. When a security vulnerability is discovered in one of your pinned dependencies you need to assess its impact on the security of your application and perhaps update the dependency to a more recent version to include a fix.

[Read more about dependency vulnerabilities ➜][dependabot]

## Repository Access Control

Coming soon.

## Secure GitHub Action Workflows

Coming soon.

[dependabot]: /security/dependabot/
