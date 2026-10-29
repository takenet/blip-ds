# uai-switch



<!-- Auto Generated Below -->


## Overview

Binary setting applied immediately. Use an accessible name; pair with UaiThemeProvider.
Avoid switches for submitting a form or choosing mutually exclusive options.

## Properties

| Property    | Attribute    | Description                                                                                                  | Type                              | Default      |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------ |
| `ariaLabel` | `aria-label` | Accessible setting name when no visible label is provided. Avoid unnamed switches.                           | `string`                          | `null`       |
| `checked`   | `checked`    | Current on/off state. Use for controlled settings; pair with uaiChange. Avoid treating it as an action.      | `boolean`                         | `false`      |
| `dataTest`  | `data-test`  | Test selector on the native input. Use for automation; pair with semantic queries. Avoid styling by it.      | `string`                          | `null`       |
| `disabled`  | `disabled`   | Prevents interaction. Use for unavailable settings; pair with explanatory text. Avoid hiding restrictions.   | `boolean`                         | `false`      |
| `label`     | `label`      | Visible setting name. Use with the control; pair with checked. Avoid unnamed settings.                       | `string`                          | `undefined`  |
| `name`      | `name`       | Submitted field name. Use inside forms; pair with value. Avoid duplicate names for unrelated settings.       | `string`                          | `undefined`  |
| `refer`     | `refer`      | Native input ID. Use for integration; pair with getInputElement. Avoid duplicate IDs.                        | `string`                          | `undefined`  |
| `size`      | `size`       | Relative control size. Use standard by default; pair with adjacent controls. Avoid custom dimensions.        | `"short" \| "standard" \| "tall"` | `'standard'` |
| `value`     | `value`      | Submitted value when on. Use with name; pair with form association. Avoid depending on unchecked submission. | `string`                          | `'on'`       |


## Events

| Event       | Description                                                                                                    | Type                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `uaiChange` | State change, including programmatic changes. Use detail.checked; pair with checked. Avoid duplicate handlers. | `CustomEvent<{ checked: boolean; }>` |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native input. Use for focus; pair with accessible naming. Avoid modifying its visual styles.

#### Returns

Type: `Promise<HTMLInputElement>`



### `getValue() => Promise<boolean>`

Returns the on/off state. Use for imperative consumers; pair with uaiChange. Avoid polling.

#### Returns

Type: `Promise<boolean>`




## Shadow Parts

| Part        | Description                   |
| ----------- | ----------------------------- |
| `"control"` | The native switch input.      |
| `"handle"`  | The moving handle.            |
| `"label"`   | The label and control layout. |
| `"track"`   | The visual track.             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
