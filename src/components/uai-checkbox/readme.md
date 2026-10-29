# uai-checkbox



<!-- Auto Generated Below -->


## Overview

Checkbox for selecting any combination of options. Use a visible label, and use indeterminate only to
represent a parent selection whose children are partially selected. Wrap the app in UaiThemeProvider.

## Properties

| Property               | Attribute                | Description                                                                                                                                            | Type                              | Default      |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------ |
| `ariaLabel`            | `aria-label`             | Accessible name used when no visible label is provided.                                                                                                | `string`                          | `null`       |
| `checked`              | `checked`                | If true, the checkbox is selected.                                                                                                                     | `boolean`                         | `false`      |
| `dataTest`             | `data-test`              | Value of the data-test attribute on the native checkbox.                                                                                               | `string`                          | `null`       |
| `disabled`             | `disabled`               | If true, the user cannot interact with the checkbox.                                                                                                   | `boolean`                         | `false`      |
| `indeterminate`        | `indeterminate`          | If true, the checkbox represents a partially selected set of child options.                                                                            | `boolean`                         | `false`      |
| `label`                | `label`                  | Visible label for the checkbox. Use aria-label when no visible label is appropriate.                                                                   | `string`                          | `undefined`  |
| `name`                 | `name`                   | Name used in submitted form data. Without a name, the checkbox is not submitted.                                                                       | `string`                          | `undefined`  |
| `refer`                | `refer`                  | ID applied to the native checkbox. Kept for compatibility with bds-checkbox.                                                                           | `string`                          | `undefined`  |
| `required`             | `required`               | If true, an unchecked checkbox blocks form submission.                                                                                                 | `boolean`                         | `false`      |
| `requiredErrorMessage` | `required-error-message` | Message announced when required validation fails. Defaults to the browser's localized message.                                                         | `string`                          | `undefined`  |
| `size`                 | `size`                   | Control size. Use standard by default; pair with equally sized selection controls. Avoid changing label typography to compensate for the control size. | `"short" \| "standard" \| "tall"` | `'standard'` |
| `value`                | `value`                  | Value submitted when the checkbox is selected.                                                                                                         | `string`                          | `'on'`       |


## Events

| Event       | Description                                                                                                                          | Type                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `uaiChange` | Emitted on a user-initiated change. detail: { checked, indeterminate }.                                                              | `CustomEvent<{ checked: boolean; indeterminate: boolean; }>` |
| `uaiInput`  | <span style="color:red">**[DEPRECATED]**</span> This event was never emitted by bds-checkbox. Listen to uaiChange instead.<br/><br/> | `CustomEvent<KeyboardEvent>`                                 |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native checkbox input.

#### Returns

Type: `Promise<HTMLInputElement>`



### `getValue() => Promise<boolean>`

Returns whether the checkbox is selected.

#### Returns

Type: `Promise<boolean>`



### `toggle() => Promise<void>`

Toggles the checkbox. When indeterminate, the next state is checked.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part          | Description                             |
| ------------- | --------------------------------------- |
| `"control"`   | The native checkbox input.              |
| `"indicator"` | The visual checkbox and selection mark. |
| `"label"`     | The label and control layout.           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
