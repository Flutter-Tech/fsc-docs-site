---
layout: default
title: Owner
article_navigation: true
previous_title: Maintainers in Multiple Teams
previous_url: /how/multiple-teams/
next_title: Divisional Independence
next_url: /how/independence/
---

# Capability Owners

The Flutter inner source model promotes re-use and cross-team contribution to each capability. Each capability is _shared_, and you may hear the terms _shared codebase_ or _shared development_ to describe them. However, our experience is that almost all successful capabilities in [stage 3](/how/multiple-teams/) have clear ownership with a named individual as a **capability owner**.

## Why

A capability owner has 3 key objectives:

1. Use community leadership, process design and automation to improve the quality & efficiency of maintainer collaboration.
2. Define, agree, communicate and action the capability's technical and functional strategic path.
3. Promote and action the tasks and projects required to optimise the capability sustainability and success in the longer-term.

The need for an owner can also be understood by considering the risks of their absence:

- Without (1) the expertise required to guide change is unavailable or cannot agree and delivery timescales are slow and unpredictable.
- Without (2), the capability is pulled in different directions by each division, or left with no direction at all: and has no benchmark purpose against which to accept or reject change.
- Without (3), the capability is a shared resource that is incrementally ruined by all divisions acting rationally but purely in their own interests.

## Capability, Individual & Role

We know that all capabilities, individuals and roles are different:

- Capabilities have different degrees of **complexity**, different levels of **demand**, and different needs in terms of their **evolution**.
- So what a capability needs from an individual owner will vary. The complexity of a capability will affect the **expertise** of the owner. The demand on a capability affects the time required ("**allocation**") from an owner. The evolution needs of the capability will affect the **impact** an owner is asked to achieve.
- "Capability Owner" is not a job title. All owners hold a recognised divisional role. Their role has an expected set of **competencies** and a **level** aligned with the individual's expertise and impact. Each divisional role also has an **affinity** (or similarity) with the capability owner responsibility. This affinity defines the maximum time an individual can allocate to being an owner.

| Capability                                                                                                | An Individual                                                                                 | Divisional Role                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Complexity** of a capability is how difficult it is to understand and change.                           | **Expertise** of an individual is what they know and can do.                                  | **Competencies** of a role is the expertise that is expected from an individual in this role.                 |
| **Demand** of a capability is the expected effort required for an owner to achieve his or her objectives. | **Allocation** of an individual is the amount of time they can actually spend being an owner. | **Affinity** of a role is the similarity between the divisional role and a cross-divisional capability owner. |
| **Evolution** of a capability is the level of change that is required to ensure its future success.       | **Impact** of an individual is their ability to drive different sizes of change.              | **Level** of a role is the impact that is expected from an individual in this role.                           |

The measures in each row can be matched between capability, role and individual to identify the optimum owner for a capability.

### Complexity, Expertise, Competencies

Capability complexity, individual expertise and divisional role competencies can be expressed by what it relates to:

- **Engineering**: how the capability technical services and tools are built, changed and tested.
- **Architecture**: capability technical design, APIs, external interactions and data flows.
- **Operational**: capability deployment requirements, capacity, performance, resilience, redundancy and service management.
- **Product**: capability features, customer flows and business logic.

A good foundation of people skills (leadership, facilitating collaboration and consensus) is required in all cases.

### Demand, Allocation & Affinity

Capability demand, individual allocation and role affinity can be expressed as the level of effort dedicated to being an owner:

- **Full-time**: dedicates all their effort to ownership.
- **Part-time**: dedicates part of their time to ownership.
- **Reactive**: no dedicated time, only reacts to problem escalation.

### Evolution, Impact & Level

Capability evolution, individual impact and divisional role levels can be expressed as:

- **Optimise**: continuously improve the capability.
- **Change**: lead a series of significant changes within the capability.
- **Transform**: lead disruptive and transformative change to a capability.

## Divisional Roles

To match divisional roles against the needs of a capability we need to know their competency, affinity and level:

| Division     | Role                         | Affinity  | Competency   | Level              |
| ------------ | ---------------------------- | --------- | ------------ | ------------------ |
| FDG, ISP     | Senior Engineer              | full-time | engineering  | optimise           |
| PPB          | Senior Engineer              | part-time | engineering  | change             |
| FDG          | Lead Engineer                | part-time | engineering  | change             |
| PPB, ISP     | Principal Engineer           | full-time | engineering  | change             |
| PPB, FT, ISP | Architect                    | part-time | architecture | transform          |
| ISP          | Senior Principal Engineer    | part-time | architecture | transform          |
| ISP          | (Senior) Engineering Manager | reactive  | engineering  | (transform) change |
| FDG          | Senior Devops Engineer       | full-time | operational  | optimise           |
| ISP          | Senior Devops Engineer       | part-time | operational  | optimise           |
| ISP          | Principal DevOps Engineer    | full-time | operational  | change             |
| PPB, FT, ISP | Product Owner                | part-time | product      | optimise           |
| FT           | Inner Source Manager         | part-time | -            | change             |
| ISP          | Distinguished Engineer       | full-time | -            | transform          |
| FDG          | Tech Programme Manager       | full-time | -            | change             |

**Notes**:

- The PPB Senior Engineer role is defined differently to FDG/ISP, and is more closely aligned with a FDG/ISP Lead Engineer.
- No FDG Architect role exists, and FDG Principal or Senior Principal roles are too demand-constrained to be able to support capability ownership.
- Lead Engineer has low affinity because the role also involves leading a divisional team.
- Architect/Senior Principal Engineer has medium affinity because both roles require significant technical community engagement outside the capability to maintain required architectural system knowledge.
- ISP Engineering Manager role has low affinity due to their divisional management commitments, and ownership would likely only be practical if there was significant overlap with their local responsibilities.
- FDG Software Engineering Manager & PPB/ISP Delivery Manager roles are unsuitable because the role's success is judged solely on achieving local divisional delivery goals.
- PPB Senior or Principal Quality Engineer are unsuitable because they are a single point of QA expertise in a team which requires their full focus.
- the DevOps roles are technical but more suitable for operational capabilities which contain deployment tools or configuration.
- PPB Project Manager or ISP Programme Manager roles are unsuitable as they will not have a deep enough domain knowledge.
- Business Analyst roles are unsuitable because the role requires working at a wider remit than a single capability which would be too narrow a focus.

## Usage Examples

Due to the high value to an owner of knowledge and existing experience within a capability, most capability owner appointments are internally recruited. This section describes typical examples of this process to illustrate how the model described in this document is used.

### Requesting a New Owner

A capability has no owner and its parent product maintainers want to recruit one. A group who know the capability well are gathered to agree the needs of the capability:

- The way it is built (the engineering) is more complex than the architecture, product and operational concerns.
- Reviewing PR data shows it is large capability with a high rate of change.
- There are several significant changes to capability technology over the next 1-2 years that the product strategy requires.

This group classifies the capability with **engineering** complexity, **full-time** demand and its evolution requires significant **change**.

The product maintainers review this against divisional roles:

- Senior Engineers can be expected to navigate the engineering complexity and demand, but might struggle to lead the significant change required due to the role level.
- Principal Engineer is a good fit, but none have experience with this capability.
- Architects might be able to navigate the engineering complexity but this is not their primary skillset, but might also struggle to meet the full-time demand due to their part-time affinity.
- Technical Programme Managers could meet the full-time demand to lead the significant change, but might struggle with the engineering complexity due to their competencies.

The product maintainers document the need for a capability owner including suggested divisional roles. They use this document to justify and request candidate proposals from divisional leaders. They use the document to discuss with their teams and any interested candidates. The product maintainers use the expected divisional role costs to secure budget in advance for divisional backfill or direct recruitment (in the case of no divisional proposals).

### Assessing Proposed Owners

Two owner candidates are proposed by different divisions.

- Emily is a Senior Engineer with extensive knowledge of the capability and has several votes of confidence in her ability to lead the significant change required. However she is already committed to a higher priority project that will consume half her time, so her allocation would be part-time.
- Nuno is an Architect with reasonable knowledge of the capability and a proven track record of significant change. However there is uncertainty in the time that he can dedicate to ownership due the part-time role affinity. In addition, his suitability as an owner is in doubt due to the technical complexity being its engineering rather than an architectural.

Further discussion between product maintainers, divisions and the candidates themselves results in Emily appointed as the new capability owner.

### Owner Performance Reflection

Over the last year Emily has proven herself a valuable and highly effective capability owner. In performance reviews with her manager they discuss how she has done so:

- despite the expectations of her role that she might struggle to lead the significant change required.
- despite the constrained time allocation for capability ownership that has limited her impact.

This forms a key part of her manager's justification to recognise her recent achievements with a promotion to Principal Engineer.
