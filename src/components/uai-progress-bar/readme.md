# uai-progress-bar



<!-- Auto Generated Below -->


## Overview

Horizontal progress indicator with safe bounds and accessible `progressbar` semantics.
Single visual defined by the UAI Figma: `sizing/2xs` track on `surface/background` with an `accent/ai-start` fill.
Use to communicate completion percentages or quota usage; pair with `text` or `aria-label` so screen readers announce what is progressing;
avoid using it to communicate critical status without accompanying text.

## Properties

| Property         | Attribute         | Description                                                                            | Type     | Default |
| ---------------- | ----------------- | -------------------------------------------------------------------------------------- | -------- | ------- |
| `ariaLabel`      | `aria-label`      | Accessible name forwarded to the `progressbar` element when no visible `text` is used. | `string` | `null`  |
| `ariaLabelledby` | `aria-labelledby` | ID reference forwarded to the `progressbar` element when labelled externally.          | `string` | `null`  |
| `dataTest`       | `data-test`       | Selector attribute applied to the `progressbar` element for automated tests.           | `string` | `null`  |
| `percent`        | `percent`         | Completion percentage clamped safely between 0 and 100 (`NaN` is treated as 0).        | `number` | `0`     |
| `text`           | `text`            | Optional descriptive label rendered alongside the progress bar.                        | `string` | `''`    |


## Shadow Parts

| Part      | Description                                       |
| --------- | ------------------------------------------------- |
| `"fill"`  | The filled portion representing current progress. |
| `"track"` | The background track of the progress bar.         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
