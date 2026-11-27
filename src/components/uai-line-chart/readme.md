# uai-line-chart



<!-- Auto Generated Below -->


## Overview

Responsive multi-series line chart in SVG with UAI semantic palette, axes, legend, and keyboard/pointer inspection.
Use to visualize temporal evolution across one or more series; pair with `series`, `tooltipTitle`, and `format`;
avoid plotting unrelated scales on a single vertical axis.

## Properties

| Property       | Attribute       | Description                                                                                                          | Type                                  | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------- |
| `currency`     | `currency`      | ISO 4217 currency code used when `format` is `currency`.                                                             | `string`                              | `'BRL'`     |
| `data`         | `data`          | Data points (`Record<string, string \| number>`) as an array or a JSON-encoded array string.                         | `UaiLineChartDatum[] \| string`       | `[]`        |
| `dataTest`     | `data-test`     | Optional test identifier placed on the chart container.                                                              | `string`                              | `null`      |
| `emptyText`    | `empty-text`    | Optional custom message displayed when `data` or `series` is empty.                                                  | `string`                              | `undefined` |
| `format`       | `format`        | Value formatting mode applied to vertical axis ticks and tooltip rows (`number`, `currency`, or `percent`).          | `"currency" \| "number" \| "percent"` | `'number'`  |
| `language`     | `language`      | Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`).                                  | `"en_US" \| "es_ES" \| "pt_BR"`       | `'pt_BR'`   |
| `series`       | `series`        | Series definitions (`{ key, label, color? }`) as an array or a JSON-encoded array string.                            | `UaiLineChartSeries[] \| string`      | `[]`        |
| `showLegend`   | `show-legend`   | Controls whether the bottom series legend is rendered.                                                               | `boolean`                             | `true`      |
| `tooltipTitle` | `tooltip-title` | Optional title displayed at the top of the inspection tooltip card.                                                  | `string`                              | `''`        |
| `xKey`         | `x-key`         | Property name in each datum used for horizontal axis labels (automatically falls back to `key`, `label`, or `name`). | `string`                              | `'key'`     |


## Events

| Event           | Description                                                                                        | Type                                                        |
| --------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `uaiPointHover` | Emitted when an X index is inspected by pointer or keyboard, or `null` when inspection is cleared. | `CustomEvent<{ index: number; datum: UaiLineChartDatum; }>` |


## Shadow Parts

| Part        | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| `"chart"`   | The outer line chart container.                                               |
| `"empty"`   | The empty state message when `data` or `series` is empty.                     |
| `"legend"`  | The bottom series legend container.                                           |
| `"plot"`    | The focusable interactive SVG plot area.                                      |
| `"tooltip"` | The floating multi-series tooltip card shown on hover or keyboard inspection. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
