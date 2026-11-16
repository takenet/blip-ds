# uai-button-group

<!-- Auto Generated Below -->


## Overview

Set of joined uai-button toggles for picking one option, or several with `multiple`. Selected buttons turn solid and
expose aria-pressed. Use for a few related options such as views or filters; pair each icon-only button with an
aria-label; avoid it for actions that do not keep a selected state (use separate uai-button).

## Properties

| Property    | Attribute   | Description                                                                                                                                                                                     | Type                                                 | Default     |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| `color`     | `color`     | Color of every button in the group. 'content' (default) is the neutral group of UAI Core: items on the page surface separated by border/default. Use the other colors only to stress an accent. | `"content" \| "negative" \| "positive" \| "primary"` | `'content'` |
| `direction` | `direction` | Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars.                                                                                                                     | `"column" \| "row"`                                  | `'row'`     |
| `label`     | `label`     | Accessible name of the group. Use a short noun phrase that says what the buttons choose, such as "Visualização".                                                                                | `string`                                             | `undefined` |
| `multiple`  | `multiple`  | Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views.                                                                                 | `boolean`                                            | `false`     |
| `size`      | `size`      | Size of every button in the group. Use the same size as the controls around the group.                                                                                                          | `"compact" \| "large" \| "medium" \| "short"`        | `'medium'`  |


## Events

| Event               | Description                                                                                                    | Type                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `uaiButtonSelected` | Emitted when a button is clicked, with its id and index, whether it is now selected, and every selected index. | `CustomEvent<UaiButtonGroupSelectedDetail>` |


## Methods

### `activateButton(index: number) => Promise<void>`

Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `index` | `number` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | The uai-button elements of the group. |


## Shadow Parts

| Part      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `"group"` | The container that lays the buttons out in a row or a column. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
