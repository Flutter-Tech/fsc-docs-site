---
layout: default
title: Consensus
article_navigation: true
previous_title: Divisional Independence
previous_url: /how/independence/
next_title: Work Type Analysis
next_url: /how/work-types/
---

# Strategic Consensus

Inner sourced capabilities are shared, and sharing requires consensus. Getting several groups to agree can be hard, often requires compromise and consumes time and effort. Where possible [it should be avoided for low consequence decisions](/how/independence/). However, an effective consensus mechanism is critical to allow divisions or teams to agree and make important decisions promptly. For example:

- Defining the shared forward technical strategy for a capability.
- Planning how to execute a complex change, and working together to do so.
- Deciding who will do a piece of unpopular but critical work (e.g. global risk reduction or new division on-boarding), and then holding each other accountable for that commitment.

## How to Efficiently Agree

For efficient agreement two factors are important:

- do it **asynchronously**.
- be **lazy**.

### Asynchronous

Collaborating across divisions also means collaborating across several global timezones with limited overlap. That overlap is already heavily congested by other activity which further restricts the opportunity for fully inclusive synchronous collaboration. This means attempting this synchronously tends in practice to exclude certain timezones e.g. maintainer meetings in CEST make it unlikely our Melbourne-based colleagues will attend.

Good guidence already exists about how to optimise for asynchronous work:

- [Dropbox Remote Toolkit](https://blog.dropbox.com/topics/work-culture/-virtual-first-toolkit--how-to-communicate-effectively)
- [GitLab All Remote Handbook](https://about.gitlab.com/company/culture/all-remote/asynchronous/)

A brief summary:

- Communicate by writing or recording video (e.g. GitHub Issues).
- Use paragraphs not sentences: an async conversation will be slow if you treat it like a normal conversation.
- Schedule the activity properly: this is hard to do in a last-minute rush.
- Urgent matters are not suited to this (e.g. incident response)
- Ensure all participants are doing multiple things in parallel: async communication requires you to wait, so participants need to be able to pick up other threads while they do so.
- Synchronous time should still be used -- but be saved to prepare for next async period, sensitive issues or particuarly complex/hard to reverse decisions.

A beneficial side effect of asynchronous communication is a quality written record of decision reasoning and the ability for a user to 'catch up' with a discussion they may only have joined half-way through.

### Lazy

> Lazy consensus means that when you are convinced that you know what the community would like to see happen, you can assume that you have consensus in favor of the proposed work and and get on with it. You don’t have to insist people discuss and/or approve your plan, and you certainly don’t need to call a vote to get approval.
>
> <small>Source: [Apache Community](https://community.apache.org/committers/lazyConsensus.html)</small>

Lazy consensus attempts to avoid unnecessary discussion or wasted time by using the following process for agreement:

1. A written proposal is published to an appropriate audience with deadline for feedback/objections.
2. Silence is assumed as agreement.
3. Concerns raised are discussed and addressed; a concern accompanied by an alternative solution is encouraged.
4. After a suitable discussion period if all concerns are addressed approval is assumed.

This approval process is both asynchronous-friendly and time-efficient. It does however require an engaged audience: missing proposals and raising objections late will cause disruption and upset. A skilled proposer will be able to judge the engagement and mitigate this risk by leaving a longer consult time, or socialise the proposal more explicitly with key stakeholders as necessary.

## Example: Significant Change

Planning a significant change is a good example of where using asynchronous written communication and lazy consensus brings many benefits.

A simple but effective convention is simply for the proposer to raise a GitHub issue on the capability repository describing their change, why it is necessary and the alternatives that were considered. An asynchronous written discussion that is accessible to all users can then follow. To ensure the required engagement for lazy consensus, the proposal should be highlighted via a shared community slack channel. GitHub issues allow '+1' type reactions, and the same is available on any Slack message which can be used by the proposer to judge the level of engagement and re-advertise if necessary.

A more advanced approach that has the benefit of producing an edited summary for future reference is to define a request for comment (RFC) process. In this case a proposer will raise a pull request against the capability repository to add a markdown proposal document, usually with a standard template and naming convention. This can be advertised in the same way as a GitHub issue and allows the same asychronous written discussion. However PR review semantics and notifications can also be used, an edited proposal document for future reference is the final result, and the proposal has a clear end point that is either a merge (accepted), or closed (rejected).

For example:

- [Rust RFC repository](https://github.com/rust-lang/rfcs) : a simple but effective RFC process.
- [Golang Proposals](https://github.com/golang/proposal) : interesting use of 'likely accept' and 'likely decline' statuses to prompt the community for final feedback.

## Example: Strategy Planning

Strategy planning for a capability can be treated like significant change, but is often more complex or more expansive and usually deserves a different treatment.

- Goal alignment and ideation sessions are often worth spending some of your limited available synchronous time on. In this case allowing asynchronous preparation (e.g. submitting ideas via a Miro board shared in advance) helps to focus the workshop time and is more inclusive for those who can't attend. For large communities running multiple sessions in different timezone-friendly slots encourages more engagement.
- Often the result of such synchronous sessions is obvious consensus in some areas, and clear contention in others: if this is the case a natural next step is to use your normal process for significant change to reach consensus in each area (e.g. via RFC or written discussion).
- Strategy planning benefits from a clear leader (the capability owner) who will use their judgement to determine which topics can be tackled via a normal asynchronous process; and which are too complex or too politically sensitive and require more direct synchronous engagement to complete the capability's strategy story.

## Example: Unpopular Work Assignment

In this example a challenging priority call must be made across the divisions, examples of which are included in the [work type analysis](/how/work-types/). There are a variety of prioritisation mechanisms within the divisions but all will require the measureable benefits, teams impacted, and effort/cost to make a decision. While the priority decision itself is likely to be made synchronously, the document that informs that decision can be created asynchronously.

- An RFC type process is useful to collaborate asynchronously with lazy consensus on the creation of a document to submit into a division's prioritisation process, e.g. a lean canvas. In some cases a master document can be created (e.g. GitHub markdown) with the required information which can then be re-formatted appropriately (e.g. powerpoint slide) for different priority processes.
- This agreed document can then be submitted for prioritisation into the most appropriate (or multiple) divisions which is is usually co-ordinated between the capability owner, maintainers and product community.
