---
layout: default
title: The Inner Source Pyramid
toc: false
article_navigation: true
next_title: Choosing Inner Source
next_url: /how/choose/
---

# Inner Source Pyramid

Inner source is defined as:

> The use of open source principles and practices for software development within the confines of an organisation.

Inner source products within the Flutter group can be used by any internal team, and are open to contribution from any of our ~4000 engineers in any division or location. For example, a global betting platform is shared across many divisions and brands with each team actioning their own priorities within it ([find out why](/how/choose/)).

At Flutter we divide each inner source product into _capabilities_, with each capability encapsulating something meaningful to us and our customers. Example capabilities within our betting platform are the product catalogue, bet placement, cashout, content filtering, virtual sports and so on. Inner source is a broad term so within Flutter we define 3 stages in the **inner source pyramid**:

<img src="/how/pyramid.svg" width="320px" style="border:none; display:block; margin:auto">

- **Stage 0 · Closed Source** : This is the typical status of a high performing delivery team before their inner source journey begins. A single ('host') team are responsible for maintaining a capability, and all changes to the capability are implemented by this team. The capability may be shared with other teams via API, SDK, or build artefacts for local deployment, but only the owning team have access to source code and CI pipeline.
- **[Stage 1 · Readable Source](/how/readable-source/)** : The first step towards the transparency required for inner source to work. The host team are responsible for developing the capability and run their own deployment, with all changes to the capability implemented by the host. However, other teams may also be deploying and using the capability or including parts of it in their own capabilities -- possible because the host team granted read access to user stories, source code, test suites, CI pipeline and build artifacts to all Flutter engineers.
- **[Stage 2 · Accept Guest Contributions](/how/guest-contributions/)** : The host team retain full accountability for the capability development and encourage and review 'guest' contributions from other teams who need to change it either for their own deployments or projects. If the host team deem the guest contribution to be of sufficient quality it will be accepted and the host team will take forward responsibility for it, otherwise it may be rejected or re-worked.
- **[Stage 3 · Maintainers in Multiple Teams](/how/multiple-teams/)** : Multiple teams need to make regular changes to the capability via a consensus mechanism. For consensus to be fast at least one person in every regularly contributing team must be an expert "maintainer": taking the time to build relationships and trust with the experts in the other teams.

This is visually represented as the Inner source pyramid because:

1. Each stage builds upon the previous one and is not possible without it.
2. It reflects the volume of capabilities at each stage with only a few requiring stage 3.

Higher stages in the pyramid are more complex, and that complexity is only justified if the circumstances require it (e.g. a high volume of contribution). Each inner source capability has an optimum position in the pyramid, the rest of the docs in this section help you reach that optimum.

- [Why choose inner source?](/how/choose/)
- [Understanding Readable Source (stage 1)](/how/readable-source/)
- [Understanding Guest Contributions (stage 2)](/how/guest-contributions/)
- [Understanding Maintainers in Multiple Teams (stage 3)](/how/multiple-teams/)
- [Capability ownership](/how/owner/)
- [How to maximise divisional independence](/how/independence/)
- [How to reach consensus for significant change](/how/consensus/)
- [How to prioritise unpopular work](/how/work-types/)
