---
layout: default
title: Releases
toc: true
---

# Releases

## Codebase Governor 🎩

---

### **Version** 1.2.1 

<sup>**Released** 22 Apr 2021</sup>&nbsp;&nbsp;&nbsp;&nbsp;<sup>**Pull request** [view](https://github.com/Flutter-Global/flutter-actions/pull/75)</sup>

This version 1.2.1 gives you the ability to manage Collaborators (contributors) and adds more Branch Protections options to fine-tune.

#### NEW

- Ability to add Collaborators (users with `write` permissions) in `codebases.json` <sup><sub>**[learn more](https://github.com/Flutter-Global/RulesOfTheRoad/blob/codebasegovernor-v1-2-docs-update/CodeBasesJson.md#contributors)**</sub></sup>
- Ability to specify additional parameters for each branch protection type:  <sup><sub>**[learn more](https://github.com/Flutter-Global/RulesOfTheRoad/blob/codebasegovernor-v1-2-docs-update/CodeBasesJson.md#policybranch-protectionsbranch_protection_idparameters-keys)**</sub></sup>
  - `dismisses-stale-reviews`
  - `restricts-review-dismissals`
  - `requires-strict-status-checks`
  - `requires-commit-signatures`
  - `requires-linear-history`
  - `restrict-pushes`
  - `allows-force-pushes`
  - `allows-deletions`
<br/><br/><br/>

---

### **Version** 1.1.2

<sup>**Released** 25 Feb 2021</sup>&nbsp;&nbsp;&nbsp;&nbsp;<sup>**Pull request** [view](https://github.com/Flutter-Global/flutter-actions/pull/54)</sup>

Version 1.1.2 is a minor patch release to fix a problem where branch protection rules in unversioned `codebases.json` files would not be cascaded to capability child repositories.

#### FIXED

- The `standard-protected-master-branch` key is now correctly recognized and the branch protection policy will be cascaded to the child repositories when using the unversioned `codebases.json` file structure.
- The new default branch `main` is used by all scripts when creating new Capabilities.
<br/><br/><br/>

---

### **Version** 1.1.1

<sup>**Released** 14 Dec 2020</sup>&nbsp;&nbsp;&nbsp;&nbsp;<sup>**Pull request** [view](https://github.com/Flutter-Global/flutter-actions/pull/32)</sup>

The version 1.1.1 patch applies the new [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) file structure when creating a new Capability using the [Capability Creator template](https://github.com/Flutter-Global/flutter-global-automation/issues/new/choose).

##### Prerequisites

- The release is backwards compatible, so there will be no change in behaviour until you update to the new format of [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md)
- To utilise the new features of v1.1.1 the [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) of your capability has to be updated to the new format, so please review the examples: [live example here](https://github.com/Flutter-Global/cap-shared-codebase/blob/master/codebases.json) and [codebase definition here](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md)

#### FIXED

- When creating a new Capability using the **[Capability Creator template](https://github.com/Flutter-Global/flutter-global-automation/issues/new/choose)**, the v1.1 [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) structure will be used.
<br/><br/><br/>

---

### **Version** 1.1.0

<sup>**Released** 04 Dec 2020</sup>&nbsp;&nbsp;&nbsp;&nbsp;<sup>**Pull request** [view](#)</sup>

This version 1.1.0 aims to give you better control and flexibility over branch protection settings, backward compatibility and improved dry-run messaging in Codebases Governor.

##### Prerequisites

- The release is backwards compatible, so there will be no change in behaviour until you update to the new format of [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md)
- To utilise the new features of v1.1.0 the [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) of your capability has to be updated to the new format, so please review the examples: [live example here](https://github.com/Flutter-Global/cap-shared-codebase/blob/master/codebases.json) and [definition here](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md)

#### NEW

- Ability to use multiple branch protection types within the same capability allowing for different rules to be applied at a repo level, leveraging GitHub-standard patterns
- Ability to specify additional parameters for each branch protection type:
  - `policy.branch-protections` on root level, where we can specify one or more branch protection settings which can be referenced by repositories listed under `repos` <sup><sub>**[learn more](#additional-parameters)**</sub></sup>
  - `repos.<repository>.policy.branch-protection` that allows us to reference one of the root level policies defined on `policy.branch-protections` <sup><sub>**[learn more](#additional-parameters)**</sub></sup>
- Pattern matching using regex is supported in the branch protection settings in [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) <sup><sub>**[learn more](#regex-patterns)**</sub></sup>
- Added a new versioning strategy for [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) to ensure backward compatibility <sup><sub>**[learn more](#versioning)**</sub></sup>
- No inheritance of policies between parent and child repositories

#### IMPROVED

- The automation process no longer overrides the branch protection parameters with unhelpful defaults. Admins are free to apply changes directly in addition to using `codebases.json` to set values
- Detailed messaging in the dry-run comments, prior to merging the changes:
  - Now it distinguishes between create vs update branch protections
  - In the update branch protection comment, it will now include the applicable branch protection setting ID
    ![Screenshot 2020-11-30 at 16 54 33](https://user-images.githubusercontent.com/72739646/100639547-36bf8c80-332d-11eb-877e-d0d24c350a71.png)

#### FIXED

- Added missing branch protection updates for the initial capability repo creation
- Now only the `main` branch is pulled over from the template repository and copied to the capability

#### DETAILED CHANGES

<h5><a href="#" id="additional-parameters"></a>Additional parameters for each branch protection type</h5>

You can create several policies in `policy.branch-protections`, defining the branch protection settings needed for each, and reference them in `repos.<repository>.policy.branch-protection`. This allows you greater flexibility and reduces settings duplication.

```
{
  "policy": {
    "comment": "comment",
    "branch-protections": {
      "bp1": {
        "comment": "This is a description...",
        "parameters": {
            "include-administrators": false
        }
      },
      "bp2": {
        "comment": "This is a description...",
        "parameters": {
          "include-administrators": true
        }
      }
    }
  },
  "repos": {
    "https://github.com/Flutter-Global/sco-service": {
      "nickname": "SCO",
      "repotype": "service",
      "policy": {
        "branch-protection": "bp1"
      }
    },
    "https://github.com/Flutter-Global/sco-service2": {
      "nickname": "SCO2",
      "repotype": "service",
      "policy": {
        "branch-protection": "bp2"
      }
    }
  }
}
```

<h5><a href="#" id="regex-patterns"></a>Branch protection settings using regex pattern matching</h5>

Now you can apply branch protection settings to any branch that match a regex pattern defined in the [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md). Use the `branch-name-pattern` attribute in `policy.branch-protections.<branch protection definition>.parameters`.
For more information about syntax options for branch rules, see **[here](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md)**.

```
{
  "policy": {
    "comment": "Capability policy",
    "branch-protections": {
      "bp1": {
        "comment": "Capability policy - branch protection comment",
        "parameters": {
            "branch-name-pattern": "dev*",
            "include-administrators": true,
            "require-review-from-codeowners": true,
            "required-reviews-count": 5
        }
      }
    }
  }
}
```

<h5><a href="#" id="versioning"></a> Versioning strategy</h5>

There is a new attribute `version` that can be defined. When added to [`codebases.json`](https://github.com/Flutter-Global/RulesOfTheRoad/blob/master/CodeBasesJson.md) it will change the behaviour of the Codebase Governor to the new version.

```
{
  "version": "1.1",
  "comment": ["comments"],
  "description": "Capability description",
  "capability-type": "Capability",
  "name": "Capability name",
  "nickname": "Capability nickname",
  "owner": "flutter",
  "maintainers": ["flutter"]
}
```
