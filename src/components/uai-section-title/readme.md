# uai-section-title



<!-- Auto Generated Below -->


## Overview

Semantic section header with heading, optional description, and optional trailing actions.
Use to introduce analytical or content blocks beneath `uai-page-header`; pair with `headingTag` matching document hierarchy;
avoid using `h1` here (reserve `h1` for the page title).

## Properties

| Property      | Attribute     | Description                                                                            | Type                   | Default |
| ------------- | ------------- | -------------------------------------------------------------------------------------- | ---------------------- | ------- |
| `dataTest`    | `data-test`   | Selector attribute applied to the container for automated tests.                       | `string`               | `null`  |
| `description` | `description` | Optional supporting description rendered below the heading when non-empty.             | `string`               | `''`    |
| `heading`     | `heading`     | Main text of the section heading.                                                      | `string`               | `''`    |
| `headingTag`  | `heading-tag` | HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy. | `"h2" \| "h3" \| "h4"` | `'h2'`  |


## Slots

| Slot        | Description                |
| ----------- | -------------------------- |
| `"actions"` | Optional trailing actions. |


## Shadow Parts

| Part            | Description                                  |
| --------------- | -------------------------------------------- |
| `"actions"`     | The trailing actions slot wrapper.           |
| `"container"`   | The section header container.                |
| `"description"` | The optional supporting description element. |
| `"heading"`     | The semantic heading element.                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
