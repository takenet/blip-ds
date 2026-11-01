# uai-select-option



<!-- Auto Generated Below -->


## Overview

Declarative option of UaiSelect. Use it as a child of uai-select when the options are written in markup; the text
is the visible label. Pair with value; avoid it together with the options prop, which takes precedence. It renders
nothing by itself.

## Properties

| Property             | Attribute  | Description                                                                                                                                     | Type      | Default     |
| -------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`           | `disabled` | Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all.    | `boolean` | `false`     |
| `icon`               | `icon`     | Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning.               | `string`  | `null`      |
| `value` _(required)_ | `value`    | Value submitted and emitted when the option is chosen. Use a short stable string; pair with the label text; avoid duplicates inside one select. | `string`  | `undefined` |


## Slots

| Slot | Description   |
| ---- | ------------- |
|      | Option label. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
