# uai-card



<!-- Auto Generated Below -->


## Overview

Structured surface for grouping related information, metrics, charts, and actions.
Use with `heading`, `description`, and named slots (`icon`, `actions`, `media`, `footer`) or `uai-card-*` subcomponents;
pair with `UaiGrid` for multi-card rows; to make a whole card navigable, wrap it in a link or button instead of making the card itself interactive.

## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                           | Type           | Default |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| `dataTest`    | `data-test`   | Automation selector applied to the inner card surface. Use in automated tests; pair with accessible role queries; avoid styling by this attribute.                                                                    | `string`       | `null`  |
| `description` | `description` | Supporting description displayed below `heading` in the card header. Use to clarify metric scope or period; pair with `heading` and `size="md"`; avoid long paragraphs.                                               | `string`       | `''`    |
| `heading`     | `heading`     | Primary title displayed in the card header. Use a short noun phrase; pair with `description` or `slot="actions"`; avoid duplicating a `uai-card-title` inside `slot="header"`.                                        | `string`       | `''`    |
| `height`      | `height`      | Explicit CSS height applied to the card host. Use token-based values or `100%` when stretching in a grid; pair with `width`; avoid hardcoded pixel heights that clip dynamic content.                                 | `string`       | `null`  |
| `imageAlt`    | `image-alt`   | Accessible alternative text for `imageSrc` (empty string when decorative). Use to describe informative media; pair with `imageSrc`; avoid repeating the `heading` text.                                               | `string`       | `''`    |
| `imageSrc`    | `image-src`   | Optional cover image URL rendered in the top media region. Use for illustrated or editorial cards; pair with `imageAlt` when informative; avoid combining with `slot="media"`.                                        | `string`       | `null`  |
| `size`        | `size`        | Spacing preset of the card layout (`sm` or `md`). Use `sm` for compact KPI/indicator cards and `md` for cards with subtitle or full charts; pair with `heading` and `description`; avoid arbitrary padding overrides. | `"md" \| "sm"` | `'sm'`  |
| `width`       | `width`       | Explicit CSS width applied to the card host. Use `100%` or `fit-content` according to layout; pair with `UaiGrid` in multi-column rows; avoid fixed pixel widths in responsive layouts.                               | `string`       | `null`  |


## Slots

| Slot        | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
|             | Main body content of the card (metrics, progress bars, charts, text, or `uai-card-body`). |
| `"actions"` | Optional trailing action controls (such as `uai-icon-button`) in the header.              |
| `"footer"`  | Optional footer content or `uai-card-footer`.                                             |
| `"header"`  | Optional custom header content or `uai-card-header`.                                      |
| `"icon"`    | Optional leading icon or `uai-icon-box` in the header.                                    |
| `"media"`   | Optional top media or cover image.                                                        |


## Shadow Parts

| Part       | Description                            |
| ---------- | -------------------------------------- |
| `"body"`   | The main content slot container.       |
| `"card"`   | The card surface container.            |
| `"footer"` | The footer region when rendered.       |
| `"header"` | The header region when rendered.       |
| `"media"`  | The top media container when rendered. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
