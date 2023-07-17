---
title: "Contribute to Docs"
description: "How you can contribute to the FDG Docs"
aside: true
bottom: true
toc: true
---

# Contribute to the FDG Docs

> Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.
> ~ Andrew Carnegie

As an integral part of our gaming community, your expertise and insights can help enhance the gaming experience for all players. By contributing to our documentation, you have the opportunity to share your knowledge, improve clarity, and ensure that fellow gamers can easily access relevant information.

You can contribute by **creating new** documents, **updating old** documents or **fixing mistakes** in current documents. Our documents can be found in a [public repository](https://github.com/fdg-rp/web-landing) on GitHub.

## Design Principles

1. **Clear and Concise Content:** Keep the documents focused, eliminating unnecessary information or ambiguity. Use a straightforward writing style to ensure clarity and readability. Break down complex topics into digestible sections with clear headings and subheadings.
2. **Visual Hierarchy:** Utilise a visual hierarchy to guide readers through the document. Use headings, subheadings, bullet points, and numbered lists to organize the content and make it scannable. Highlight important information, such as tips or warnings, using visual cues like bold text or icons.
3. **Step-by-Step Approach:** Structure guides, tutorials, and articles in a step-by-step format to help users follow instructions easily. Clearly number or label each step, and consider using screenshots or illustrations to illustrate key points or actions.
4. **Visual Aids and Examples:** Incorporate visuals such as screenshots, diagrams, or videos to enhance understanding and demonstrate concepts or processes. Provide relevant examples to illustrate how to implement certain features or resolve common issues.
5. **Cross-Referencing and Linking:** Include cross-references and internal links to related documents, guides, or tutorials within your website. This enables users to easily navigate between different resources, promoting a seamless and interconnected learning experience.

6. **Conformity with Rules:** The contents of a document should comply with the [FDG Community rules](/server-docs/rules/rules-overview) and these design principles.

## Syntax

Documents are written in :icon{name="mdi:language-markdown"} [Markdown](https://www.markdownguide.org/) with support for Markdown Components (MDC) thanks to [Nuxt](https://nuxt.com/), [Nuxt Content](https://content.nuxtjs.org/) and [Docus](https://docus.dev/).

### Metadata

Each doc first contains metadata at its top in YAML format. This data controls what is displayed in the navigation drawer, tab, embeds and search engines. The metadata should look something like this:

```yaml
---
title: "Contribute to Docs"	//The doc's title
description: "How you can contribute to the FDG Docs" //Short description
aside: true //If the navigation drawer should be displayed
bottom: true //If the prev/next buttons at the bottom should be displayed
toc: true //If the table of contents should be displayed
---
```

### Content

The content of a doc is written in extended Markdown. A full list of the extended Markdown language can be found [here](https://www.markdownguide.org/cheat-sheet/). Some common elements to know include:
|Element|MD Syntax|
|--|--|
|Headings|`# Heading One (largest)`<br>`## Heading Two`<br>`### Heading Three`<br>`#### Heading Four (smallest)`|
|Bold|`**This text will be bold**`|
|Italic|`*This text will be italic*`|
|Blockquote|`> This will be a blockquote`|
|Ordered List|`1. Element One`<br>`2. Element Two`<br>`3. Element Three`|
|Unordered List|`- Element One`<br>`- Element Two`<br>`- Element Three`|
|Inline Code|`` `Inline code` `` (without highlighting)<br>`` `Inline code`{lang=ts} `` (with highlighting)|
|Link|`[text to display](https://link.to.go.to.com)`|
|Image|`![alt text](https://link.to.img.com/img.png)`|
|Horizontal Rule|`---`|

Combined, a complete doc would look something like this:

```md [how-to-fish-fake.md]
---
title: "Contribute to Docs"
description: "How you can contribute to the FDG Docs"
aside: true
bottom: true
toc: true
---

# How to Fish

A guide to fishing in FDG

## Equipment

- Fishing rod
- Bait
- Good luck

etc
```

## To Create a New Doc

First, fork the repository. Go to the [reporsitory's content directory](https://github.com/fdg-rp/web-landing/tree/main/content) on GitHub and click `'Add file'`. You can choose to create a file directly in browser or upload a file from your device.

## To Edit an Existing Doc

At the bottom of every document on this site, you can find an `'Edit this page on GitHub'` button. Click this and you'll be navigated to the document editor on GitHub, allowing you to make changes to that document. Note, if you haven't already, you'll need to fork the repository.

---

If you're having trouble using GitHub, [open a ticket](https://support.fatduckgaming.com) or contact us on [Discord](https://discord.gg/fatduckgaming). You're also more than welcome to write material in a Google Doc and submit it for consideration by [opening a ticket](https://support.fatduckgaming.com).
