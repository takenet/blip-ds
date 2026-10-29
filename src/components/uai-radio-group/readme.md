# uai-radio-group



<!-- Auto Generated Below -->


## Overview

Coordinates a mutually exclusive set of UaiRadio options. Provide an accessible group name with
aria-label or aria-labelledby. The group owns the submitted name and value.

## Properties

| Property               | Attribute                | Description                                                                                    | Type      | Default     |
| ---------------------- | ------------------------ | ---------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaLabel`            | `aria-label`             | Accessible name of the radio group. Use this or aria-labelledby.                               | `string`  | `null`      |
| `ariaLabelledBy`       | `aria-labelledby`        | ID references for the accessible name of the radio group.                                      | `string`  | `undefined` |
| `disabled`             | `disabled`               | If true, all options are disabled.                                                             | `boolean` | `false`     |
| `name`                 | `name`                   | Name used for the selected value in submitted form data.                                       | `string`  | `undefined` |
| `required`             | `required`               | If true, a selection is required before form submission.                                       | `boolean` | `false`     |
| `requiredErrorMessage` | `required-error-message` | Message announced when required validation fails. Defaults to the browser's localized message. | `string`  | `undefined` |
| `value`                | `value`                  | Selected radio value.                                                                          | `string`  | `undefined` |


## Events

| Event                 | Description                                                     | Type                               |
| --------------------- | --------------------------------------------------------------- | ---------------------------------- |
| `uaiRadioGroupChange` | Emitted whenever the selected value changes. detail: { value }. | `CustomEvent<{ value?: string; }>` |


## Slots

| Slot | Description                                              |
| ---- | -------------------------------------------------------- |
|      | UaiRadio options, optionally wrapped by layout elements. |


## Shadow Parts

| Part      | Description               |
| --------- | ------------------------- |
| `"group"` | The radiogroup container. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
