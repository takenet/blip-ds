# uai-table-row



<!-- Auto Generated Below -->


## Overview

Table row laid out on the columns of UaiTable. Use it for header, data and bulk-action rows; pair with
UaiTableCell or UaiTableTh; avoid nesting rows.

## Properties

| Property    | Attribute   | Description                                                                                                                                                                                               | Type             | Default |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| `clickable` | `clickable` | Makes the whole row interactive: hover style, keyboard focus and Enter or Space activation. Use for rows that open details; avoid it when the cells already hold controls.                                | `boolean`        | `false` |
| `dataTest`  | `data-test` | Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it.                                                                                                            | `string`         | `null`  |
| `selected`  | `selected`  | Marks the row as selected and sets aria-selected, with no visual change of its own. Use when the row's selection control is checked; pair with that control; avoid using it as the only selection signal. | `boolean`        | `false` |
| `variant`   | `variant`   | Row appearance. row is a data or header row; bar is a full-width strip for bulk actions. Use bar above the rows; avoid bar for data.                                                                      | `"bar" \| "row"` | `'row'` |


## Slots

| Slot | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
|      | UaiTableCell or UaiTableTh elements, or free content in the bar variant. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
