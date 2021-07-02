---
layout: default
title: Work Types Analysis
article_navigation: true
previous_title: Strategic Consensus
previous_url: /how/consensus/
---

# Work Type Analysis

One of the challenges of operating a capability at [stage 3](/how/multiple-teams/) of the [inner source pyramid](/how/) is how to manage and prioritise "unpopular" work when that responsibility is distributed across multiple teams. The best course of action is heavily dependent on the context of the capability and teams involved so this page is best used as supporting material for a discussion workshop within your own capability group:

- describe your different work types with examples.
- for each work type challenge yourself with questions about how you manage it.
- prioritise the areas you would most like to improve.

## Work Types

There is usually a need to plan and execute 3 types of work for any product:

1. **BAU** (Business-as-usual): a series of small but essential tasks for a variety of purposes.
2. **Project**: a set of tasks that collectively require significant effort but when done together achieve a specific valuable outcome.
3. **Operational**: size, effort and divisional impact varies, but operational work is characterised by speed and singular focus that may require temporary suspension of normal working rules and practices.

In an inner source model these should be considered in the context of:

1. **Divisional**: work that is a top priority for an single division.
2. **Unpopular but Critical**: work that divisions will collectively agree is essential, but they would prefer for someone else to do.
3. **Quality of Life**: work that is required for the long-term sustainability of the capability but is too easily delayed for shorter-term wins.

Leading to:

| Type            | Divisional                                                                                          | Unpopular but Critical                                                                                                   | Quality of Life                                                                                                                |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **BAU**         | Each division has a series of minor tasks that ideally can be ignored by other divisions.           | A series of minor tasks that are time critical but of equal value to all divisions.                                      | A series of minor tasks that are not time critical but required for long-term sustainability.                                  |
| **Project**     | Division-led project with optimised timeline, high internal visibility and full divisional backing. | Cost or risk reduction based projects that are collectively required but will not be prioritised by any single division. | Technical improvement projects required for the products longer-term sustainability.                                           |
| **Operational** | Emergency changes made at pace under incident conditions by on-call teams.                          | Agreed periods of minimised or no change to proactively reduce risk.                                                     | Mandated period of exclusive focus on operational improvement that results from high profile operational or security failures. |

### Exercise 1

- Is this matrix of work types correct for your capability? Extend and adjust it as necessary.
- Think of recent examples of each work type, this will help you understand the reality of how you manage each type.

## Your Model for Each Work Type

Each capability defines it's own inner source engagement and SDLC model based on it's unique circumstances. This section contains a series of questions about each work type to validate and explore your model, with suggestions of common solutions.

### Divisional BAU

Each division has a series of minor tasks that can usually be ignored by other divisions.

- How do you decide whether a change is 'minor', or whether it can be ignored by other divisions?
- Minor changes can have big implications: how does a minor change escalate as scope/effort changes?
- How to ensure prompt code review from over-stretched maintainers?
- How is a minor change tested to get it into a release candidate?
- What is the release versioning model and how are divisions expected to pull release artefacts?
- How will the change be rolled back if a deployment problem is encountered in a different division?

Suggestions:

- Public capability Slack channel with GitHub activity to raise awareness
- Open "draft" PRs early to express intent and allow time for any concerns to be flagged
- Encourage local maintainer code review (invest in their ability to assert it's harmless)
- Regular maintainer group discussion as an escalation point
- Share all automated lint, compile and tests via a GitHub Action CI pipeline
- [30 day warranty period on contributions](https://patterns.innersourcecommons.org/p/30-day-warranty)

### Unpopular but Critical BAU

A series of minor tasks that are time critical but of equal value to all divisions. e.g. code dependency updates under a security policy SLA.

- How is this work generated and assigned to divisions?
- How do you ensure a release is deployed across all divisions within the time constraint?
- Is an accelerated path available (e.g. CVSS 9+ fixes)?

Suggestions:

- 'Parent' team (or capability owner) generates and assigns this work (similar to [stage 2](/how/guest-contributions/))
- Rota of responsibility between contributing teams.
- Divide and conquer: different teams take on different modules/repos.

### Quality of Life BAU

A series of minor tasks that are not time critical but required for long-term sustainability. e.g. code or test refactoring, CI improvements, minor technology usage changes.

- How does this work get prioritised, and by who?
- How do quality tools (e.g. SonarQube) work effectively cross-divisionally?

Suggestions:

- Contributor code retrospectives to align on improvement areas
- Scheduled Quality of Life team sprints
- Scheduled Maintainer team refactoring days
- High code review standards can reduce some but not all of this workload

### Divisional Project

Division-led project with optimised timeline, high internal visibility and full divisional backing.

- How is the feature scope and common requirements agreed and validated with other divisions?
- How is the high level technical design and solution agreed, and options discussed?
- How is this aligned when the scope affects multiple capabilities?
- How are risk assessment, legal compliance, security audit and data protection topics handled across all divisions?
- Can the leading division contribute and release independently once that agreement is reached?
- Will the leading division need to gain additional time commitment from people outside their control, and if so how?
- When timelines get squeezed and shortcuts are suggested, how is the trade-off of quicker delivery vs sustainable quality decided?
- Who should receive project reporting outside of the leading division?

Suggestions:

- Define a transparent and clear proposal/RFC process for significant change (e.g. [like Rust](https://github.com/rust-lang/rfcs)).
- Assemble a working group to draft the proposal, and use all affected CLTs to validate and accept it.
- Owners from all affected capabilities should be included in project-level steering meetings.
- Project reporting is distributed to all related capability community channels
- Short-cuts are late-stage proposal amendments and should be validated in the same way as the original proposal

### Unpopular but Critical Project

Cost or risk reduction based projects that are collectively required but will not be prioritised by any single division.

- How (or do) you decide which division will lead such a project?
- How does this differ from a Divisional Project once divisional leadership is agreed?
- How will all divisions commit to a released-by date if a critical deadline exists?

Suggestions:

- Define a clear decisioning process to agree divisional project leadership
- Then run this project like a Divisional Project

### Still To-Do!

If you are running a workshop with this context, you'll need to invent your own questions for now to cover:

- Quality of Life Project
- Operational Emergency
- Operational Change Freeze
- Operational Stability Initiative

... and any additional work types you added yourself.

### Exercise 2

By answering the questions included under each work-type, you will have described your inner source contributing model. If you can capture this in a written `CONTRIBUTING.md` file in your capability and share it with your users it will help them know how they should contribute.
