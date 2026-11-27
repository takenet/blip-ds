# uai-bar-chart



<!-- Auto Generated Below -->


## Overview

Responsive horizontal bar chart for comparing ranked categories against a shared numeric domain.
Use inside analytics cards and panels; pair with `seriesLabel` and `format` so axis ticks and keyboard tooltips remain clear;
avoid overcrowding with excessive categories when a paginated table is more appropriate.

## Properties

| Property      | Attribute      | Description                                                                                               | Type                                  | Default     |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------- |
| `currency`    | `currency`     | ISO 4217 currency code used when `format` is `currency`.                                                  | `string`                              | `'BRL'`     |
| `data`        | `data`         | Category items as an array of `{ label, value, formattedValue? }` or a JSON-encoded array string.         | `UaiBarChartItem[] \| string`         | `[]`        |
| `dataTest`    | `data-test`    | Optional test identifier placed on the chart container.                                                   | `string`                              | `null`      |
| `emptyText`   | `empty-text`   | Optional custom message displayed when `data` is empty.                                                   | `string`                              | `undefined` |
| `format`      | `format`       | Value formatting mode applied to horizontal axis ticks and tooltips (`number`, `currency`, or `percent`). | `"currency" \| "number" \| "percent"` | `'number'`  |
| `language`    | `language`     | Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`).                       | `"en_US" \| "es_ES" \| "pt_BR"`       | `'pt_BR'`   |
| `maxValue`    | `max-value`    | Optional explicit upper bound for the horizontal domain; computed automatically when omitted.             | `number`                              | `undefined` |
| `seriesLabel` | `series-label` | Series name displayed in the bottom legend (for example, `ROI`).                                          | `string`                              | `''`        |
| `showLegend`  | `show-legend`  | Controls whether the bottom legend is shown when `seriesLabel` is provided.                               | `boolean`                             | `true`      |


## Events

| Event         | Description                                                                        | Type                           |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------ |
| `uaiBarClick` | Emitted when a bar is activated by pointer click or keyboard (`Enter` or `Space`). | `CustomEvent<UaiBarChartItem>` |
| `uaiBarHover` | Emitted when a bar is hovered or focused, or `null` when inspection is cleared.    | `CustomEvent<UaiBarChartItem>` |


## Shadow Parts

| Part        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `"bars"`    | The list container holding interactive bar items.                 |
| `"chart"`   | The outer chart container.                                        |
| `"empty"`   | The empty state message when `data` has no items.                 |
| `"legend"`  | The bottom series legend container.                               |
| `"tooltip"` | The floating inspection tooltip shown on hover or keyboard focus. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
