# uai-toast-container

<!-- Auto Generated Below -->


## Overview

Stack of toasts fixed to a corner or edge of the screen. It opens in the top layer (Popover API), so the toasts
stay above modals, and announces each toast that opens to screen readers. With more than one toast, the older ones
stack behind the newest, peeking out and scaled down; the pointer or the focus on the stack unfolds it, and the
time of every toast pauses while it is unfolded.
Use one per position inside UaiThemeProvider; `uai-toast` `show()` creates it when the page has none.
Avoid placing other content in it.

## Properties

| Property   | Attribute  | Description                                                                                                         | Type                                                                                              | Default          |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| `label`    | `label`    | Accessible name of the notifications region. Use a translated label; avoid leaving it generic.                      | `string`                                                                                          | `'Notificações'` |
| `position` | `position` | Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position. | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "top-center" \| "top-left" \| "top-right"` | `'bottom-left'`  |


## Slots

| Slot | Description             |
| ---- | ----------------------- |
|      | The uai-toast elements. |


## Shadow Parts

| Part      | Description                      |
| --------- | -------------------------------- |
| `"stack"` | The list that stacks the toasts. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
