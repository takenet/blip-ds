# bds-x-axis



<!-- Auto Generated Below -->


## Overview

XAxis Component - Configuration for X-axis

Must be used as a child of bds-chart-line or bds-chart-bar

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                               | Type      | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `axisLine`      | `axis-line`      | Show axis line                                                                                                                                                                                            | `boolean` | `true`      |
| `dataKey`       | `data-key`       | Key from data object to use for X-axis labels                                                                                                                                                             | `string`  | `'label'`   |
| `show`          | `show`           | Show X-axis labels                                                                                                                                                                                        | `boolean` | `true`      |
| `tickCount`     | `tick-count`     | Number of ticks to display on the Y-axis (default: 5) Note: This applies only to numeric axes with calculated scales                                                                                      | `number`  | `5`         |
| `tickFormatter` | `tick-formatter` | Format function for tick labels (receives value, returns formatted string) Note: In HTML attributes, use comma-separated string for simple transformations Example: "slice,0,3" to get first 3 characters | `string`  | `undefined` |
| `tickLine`      | `tick-line`      | Show tick lines                                                                                                                                                                                           | `boolean` | `true`      |
| `tickMargin`    | `tick-margin`    | Margin between tick and label (in pixels)                                                                                                                                                                 | `number`  | `10`        |


## Dependencies

### Used by

 - [bds-test-component](../../test-component)

### Graph
```mermaid
graph TD;
  bds-test-component --> bds-x-axis
  style bds-x-axis fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
