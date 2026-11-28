# uai-sparkline



<!-- Auto Generated Below -->


## Overview

Compact responsive trend sparkline rendered in SVG without axes.
Use inside KPI and summary cards to illustrate directional variation; pair with a visible metric and `label`;
avoid using color alone to communicate positive or negative status.

## Properties

| Property   | Attribute   | Description                                                                                                                       | Type                                    | Default     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `data`     | `data`      | Numeric series as an array of numbers or a JSON-encoded array string.                                                             | `number[] \| string`                    | `[]`        |
| `dataTest` | `data-test` | Optional test identifier placed on the chart container.                                                                           | `string`                                | `null`      |
| `label`    | `label`     | Accessible description announced for the sparkline. Falls back to a localized summary when omitted.                               | `string`                                | `''`        |
| `language` | `language`  | Locale used for fallback accessible announcements (`pt_BR`, `en_US`, or `es_ES`).                                                 | `"en_US" \| "es_ES" \| "pt_BR"`         | `'pt_BR'`   |
| `showArea` | `show-area` | Displays the subtle vertical gradient area under the curve for every variant, including flat `neutral` trends.                    | `boolean`                               | `true`      |
| `smooth`   | `smooth`    | Renders a monotone smooth cubic curve when `true`, or straight segments when `false`.                                             | `boolean`                               | `true`      |
| `variant`  | `variant`   | Semantic color variant (`neutral`, `positive`, or `negative`). Legacy aliases `green` and `red` map to `positive` and `negative`. | `"negative" \| "neutral" \| "positive"` | `'neutral'` |


## Shadow Parts

| Part      | Description                                              |
| --------- | -------------------------------------------------------- |
| `"chart"` | The sparkline container with accessible image semantics. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
