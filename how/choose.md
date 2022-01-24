---
layout: default
title: Choosing Inner Source
article_navigation: true
previous_title: The Inner Source Pyramid
previous_url: /how/
next_title: Stage 1 - Readable Source
next_url: /how/readable-source/
---

# Choosing Inner Source

Choosing to use inner source for your product should be a deliberate and conscious decision based on its benefits as other options are available. Flutter is a group of independent divisions so from a group perspective there are three patterns for product development:

1. **Independent** : designed, built/bought and operated independently within a division by their teams with no cross-divisional collaboration.
2. **Delegated** : designed, built/bought and operated by one division on behalf of all other divisions.
3. **Inner Source** : designed and built collaboratively by several divisions, with each division operating their own deployment.

Comparing these approaches **from the perspective of a division**:

<table style="table-layout: fixed">
  <tr>
    <th style="width: 140px"></th>
    <th>Independent</th>
    <th>Delegated</th>
    <th>Inner Source</th>
  </tr>
  <tr>
    <th>Predictability</th>
    <td>Velocity and priorities fully controlled.</td>
    <td>Projects depend on an external prioritisation process with other divisions.</td>
    <td>Velocity and priorities controlled, but intent must be agreed with other divisions and cycle time expectation adjusted.</td>
  </tr>
  <tr>
    <th>Efficiency</th>
    <td>Start from scratch. Need to implement all features.</td>
    <td>All features are implemented by another division, just need to use.</td>
    <td>Need to implement specific priorities and deployment, get most features from other divisions.</td>
  </tr>
  <tr>
    <th>Quality</th>
    <td>Aligned with our standards, and can trade-off quality for velocity as desired.</td>
    <td>Aligned with another division's standards and treated as a service dependency.</td>
    <td>Aligned with cross-divisionally agreed standards, limited ability to trade-off quality for velocity.</td>
  </tr>
  <tr>
    <th>Stability</th>
    <td>Operational concerns fully controlled.</td>
    <td>Must be managed as an external service dependency.</td>
    <td>Operational concerns fully controlled.</td>
  </tr>
</table>

## Examples

**Independent** development is the default choice, and is optimum when:

- expected efficiency gain of re-use across divisions is low (e.g. front-end web or app interfaces).
- capability is important but not complex enough to justify cross-divisional collaboration (e.g. content management).
- cost of change from existing divisional capability is too great to consider alternatives (e.g. data services)

**Delegated** development is optimum when:

- capability is required but not strategically important (e.g. identity management, HR system).
- the commercial value of a capability is primarily realised in a single division (e.g. PokerStars).
- 3rd party integrations, dependencies or relationships are optimised by centralised management (e.g. casino games).

**Inner Source** development is optimum when:

- high complexity makes the value of re-use high, and capability is strategically important for many divisions (e.g. betting platform).
- divisional priorities for a capability are naturally complementary (e.g. sports modelling -- where US, UK, Australia and International all prioritise different sports).
- cross-divisional consensus is necessary for an effective capability (e.g. inter-divisional network).

## Inner Source Pyramid

Inner source at Flutter is described as [a pyramid](/how/) with 3 stages: [Readable Source](/how/readable-source/), [Guest Contributions](/how/guest-contributions/) and [Maintainers in Multiple Teams](/how/multiple-teams/). This reflects the reality that there is no single inner source operating model -- it depends on the capability needs & teams. Similarly, Independent and Delegated patterns are families of operating models and the boundaries between the development patterns are blurred.

- **Readable Source** can be **Independent** or **Delegated** capabilities that value development transparency (e.g. for community learning) or plan to accept contributions in future.
- Any **Inner Source** capability can be copied ("forked") and changed into a new **Independent** capability to accelerate start-up.
- **Guest Contribution** capabilities are owned by a divisional host team, and if contribution stops over time can become **Delegated**.
- Some **Inner Source** capabilities that accept cross-divisional contribution still **Delegate** to a single division for a single managed deployment.

Both the inner source pyramid and the 3 development patterns are a simplification: but they provide a powerful language with which to discuss, inform and make decisions about the best way forward within the group for a specific capability.
