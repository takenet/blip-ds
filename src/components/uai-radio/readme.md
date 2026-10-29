# uai-radio



<!-- Auto Generated Below -->


## Overview

Radio option for one choice in a mutually exclusive group. Pair radios with a labelled UaiRadioGroup.
Wrap the app in UaiThemeProvider.

## Properties

| Property             | Attribute    | Description                                                                                                                                            | Type                              | Default      |
| -------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------ |
| `ariaLabel`          | `aria-label` | Accessible name used when no visible label or slotted content is provided.                                                                             | `string`                          | `null`       |
| `checked`            | `checked`    | If true, the radio is selected.                                                                                                                        | `boolean`                         | `false`      |
| `dataTest`           | `data-test`  | Value of the data-test attribute on the native radio.                                                                                                  | `string`                          | `null`       |
| `disabled`           | `disabled`   | If true, the user cannot interact with the radio.                                                                                                      | `boolean`                         | `false`      |
| `label`              | `label`      | Visible label for the radio.                                                                                                                           | `string`                          | `undefined`  |
| `name`               | `name`       | Name used in submitted form data when the radio is not inside a UaiRadioGroup.                                                                         | `string`                          | `undefined`  |
| `refer`              | `refer`      | ID applied to the native radio. Kept for compatibility with bds-radio.                                                                                 | `string`                          | `undefined`  |
| `size`               | `size`       | Control size. Use standard by default; pair with equally sized selection controls. Avoid changing label typography to compensate for the control size. | `"short" \| "standard" \| "tall"` | `'standard'` |
| `value` _(required)_ | `value`      | Value submitted when this radio is selected.                                                                                                           | `string`                          | `undefined`  |


## Events

| Event            | Description                                                                              | Type                                 |
| ---------------- | ---------------------------------------------------------------------------------------- | ------------------------------------ |
| `uaiChange`      | Emitted whenever checked changes. detail: { checked }.                                   | `CustomEvent<{ checked: boolean; }>` |
| `uaiClickChange` | Emitted once when the radio is activated, including reselecting it. detail: { checked }. | `CustomEvent<{ checked: boolean; }>` |


## Methods

### `activate() => Promise<void>`

Selects this option from a user-driven group action.

#### Returns

Type: `Promise<void>`



### `getInputElement() => Promise<HTMLInputElement>`

Returns the native radio input.

#### Returns

Type: `Promise<HTMLInputElement>`



### `getValue() => Promise<boolean>`

Returns whether the radio is selected.

#### Returns

Type: `Promise<boolean>`



### `setFocus() => Promise<void>`

Moves focus to the native radio input.

#### Returns

Type: `Promise<void>`



### `setGroupDisabled(value: boolean) => Promise<void>`

Applies the disabled state inherited from a UaiRadioGroup.

#### Parameters

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| `value` | `boolean` |             |

#### Returns

Type: `Promise<void>`



### `setTabIndex(value: number) => Promise<void>`

Sets this option's position in the group's tab sequence.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `number` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                       |
| ---- | --------------------------------- |
|      | Additional visible label content. |


## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"control"` | The visual radio control.     |
| `"input"`   | The native radio input.       |
| `"label"`   | The label and control layout. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
