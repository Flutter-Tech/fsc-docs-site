---
layout: default
title: Validate
article_navigation: true
previous_title: Source
previous_url: /sdlc/source/
next_title: Package
next_url: /sdlc/package/
---

# Validate

A proposed code change is validated by a series of automated checks to provide fast feedback to the contributor.

- These checks are triggered as status checks on any pull request. This provides clear UI feedback to both contributor and reviewer. Draft pull requests can be raised for feedback on pre-review work.
- Most checks will be defined in the repository itself as [GitHub Action workflows][workflows]. This allows them to be updated via the same process as source code changes. A high level of customisation is possible, alongside a extensive library of open source and/or 3rd party actions.
- Checks that require access to an internal service or environment can use our self-hosted workflow runners that are connected to the inter-divisional network (IDN).
- In addition to custom workflows, 3rd party tools like [sonarcloud] are integrated and available for all organisational members to use.

## GitHub Action Workflows

[Docs on how to use workflows are available from GitHub][workflows]. Training courses are also available -- contact the [Inner Source Team](/community/) for availability. They provide a flexible way to run linters, compile checks, unit tests and so on on [Linux, macOS or Windows job runners][gh-runners].

Each validation workflow should trigger via the `pull_request` event. For example to run some unit tests:

```
# /.github/workflows/unit-tests.yml
name: Example Test Runner
permissions:
  contents: read
on: [ pull_request ]

jobs:
  unit-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run unit tests
        run: mvn test
```

There are a few security best practices to note:

- if using a 3rd party action in your workflow, [pin the version to a commit SHA](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) to ensure it is immutable.
- [restrict the workflow job permissions](https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs) to only what is necessary (ideally read-only).
- if secrets are required, [consider the use of environments to restrict access to selected protected branches](/docs/secrets/).
- if authenticating to AWS (or any major cloud provider), use [OpenID Connect to manage the workflow auth within AWS IAM directly](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).

## Self-Hosted Runners

GitHub Action workflows run by default on GitHub managed [infrastructure and operating system images][gh-runners] which is suitable for most use-cases. If you have internal network access requirements or need more control over the runner infrastructure you can use the Flutter self-hosted runners. These run on AWS infrastructure and with some internal network routing available through the inter-divisional network (IDN).

Consider using self-hosted runners if:

- you need to access internal services like test environments or an internal Artifactory instance.
- your jobs are exceptionally demanding of compute, memory or other specific requirements.

### Enabling Self-Hosted Runners

Access to the self-hosted runners are not available to your repository by default. To request access contact the [Inner Source Team][team] or [raise a PR directly][runners.csv] on the `runners.csv` file in the root of the `product-inner-source` repository.

### Using Self-Hosted Runners

To use the self hosted runners simply adjust the `runs-on` key in your workflow to:

```
runs-on: self-hosted
```

Note that at present the base images used for self-hosted runners is different from that provided by GitHub for their managed runners so you will need to adjust your workflows e.g. to install tools like maven. These differences are due to be resolved by June 2022 when the self-hosted runners will use the same image as the Linux GitHub managed runners.

## (COMING SOON) SonarCloud

A shared instance of [sonarcloud] is expected to be available to all users by June 2022, details will follow at that point. At present this tool is used via divisional licencing.

## Other 3rd Party Tools

One of the advantages of using a managed GitHub platform is the variety of quality 3rd-party tools that can be integrated. If you have a specific need to work with a 3rd party tool that wotks with GitHub please [raise a proposal][propose] to discuss integrating it.

[runners.csv]: https://github.com/Flutter-Global/product-inner-source/edit/master/runners.csv
[team]: /community/
[propose]: https://github.com/Flutter-Global/product-inner-source#proposals
[workflows]: https://docs.github.com/en/actions/using-workflows
[sonarcloud]: https://sonarcloud.io/
[gh-runners]: https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners
