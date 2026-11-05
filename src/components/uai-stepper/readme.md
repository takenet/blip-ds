# uai-stepper



<!-- Auto Generated Below -->


## Overview

Sequential steps of a process. Use for flows with ordered stages; pair with UaiStep; avoid it for free navigation between views (use uai-tab-group).
The stepper numbers the steps, marks the last one and sets their orientation.

## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                   | Type                         | Default        |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- |
| `navigable`   | `navigable`   | Lets the person click any enabled step, completed or not, to go back or jump. Use for flows where earlier answers can be reviewed; pair with disabled on unreachable steps; avoid it when order is mandatory. | `boolean`                    | `false`        |
| `orientation` | `orientation` | Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values.                                             | `"horizontal" \| "vertical"` | `'horizontal'` |


## Events

| Event           | Description                                                                                                                                                                                                                                                                                                                                                                   | Type                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `uaiStepChange` | Fires when the person selects a step other than the active one. detail: the new index and the previous one (-1 if none). Cancelable: call preventDefault to veto the change, e.g. while the current step is invalid. Otherwise the stepper activates the step. Completed steps keep their state, so going back never loses progress; keep the panels' data in your own state. | `CustomEvent<{ index: number; previousIndex: number; }>` |


## Methods

### `getActiveStep() => Promise<number>`

Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.

#### Returns

Type: `Promise<number>`



### `resetActiveSteps() => Promise<void>`

Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps.

#### Returns

Type: `Promise<void>`



### `resetCompletedSteps() => Promise<void>`

Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps.

#### Returns

Type: `Promise<void>`



### `setActiveStep(index: number) => Promise<void>`

Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.

#### Parameters

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `index` | `number` | Zero-based index of the step. |

#### Returns

Type: `Promise<void>`



### `setCompletedStep(index: number) => Promise<void>`

Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.

#### Parameters

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `index` | `number` | Zero-based index of the step. |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description              |
| ---- | ------------------------ |
|      | UaiStep items, in order. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
