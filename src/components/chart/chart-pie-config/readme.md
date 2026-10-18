# bds-pie-config



<!-- Auto Generated Below -->


## Overview

PieConfig — Visual configuration slot for bds-chart-pie.

Place as a child of <bds-chart-pie> to override default appearance.
Renders as display:none — parent reads props via getAttribute().

## Properties

| Property       | Attribute       | Description                                                                         | Type     | Default |
| -------------- | --------------- | ----------------------------------------------------------------------------------- | -------- | ------- |
| `cornerRadius` | `corner-radius` | Corner radius of each slice end-cap in pixels (0 = sharp corners). Default: 3       | `number` | `3`     |
| `innerRadius`  | `inner-radius`  | Inner radius as a percentage of the outer radius (0 = pie, 60 = donut). Default: 60 | `number` | `60`    |
| `padAngle`     | `pad-angle`     | Gap between slices in radians. Default: 0.02                                        | `number` | `0.02`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
