# uai-dropdown

<!-- Auto Generated Below -->


## Overview

Floating panel opened by an activator, with an optional fixed header, a scrollable body and an optional fixed footer.
Use for filters, pickers and short forms next to a trigger; pair with uai-button as the activator and
UaiThemeProvider; avoid it for a plain list of choices (use uai-select) or for blocking tasks (use uai-modal).

## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                                                                                    | Type                                                                     | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ----------- |
| `activeMode` | `active-mode` | <span style="color:red">**[DEPRECATED]**</span> The panel opens on click only.<br/><br/>How the activator opens the panel. Only 'click' is supported; 'hover' is kept for compatibility and behaves as 'click'.                                                                                                                | `"click" \| "hover"`                                                     | `'click'`   |
| `dataTest`   | `data-test`   | Test selector on the panel. Use for automation; pair with semantic queries. Avoid styling by it.                                                                                                                                                                                                                               | `string`                                                                 | `null`      |
| `label`      | `label`       | Accessible name of the panel. Use a short noun phrase when the header has no visible title.                                                                                                                                                                                                                                    | `string`                                                                 | `undefined` |
| `open`       | `open`        | Opens or closes the panel. Use for declarative control; pair with uaiToggle. Avoid toggling it on every render.                                                                                                                                                                                                                | `boolean`                                                                | `false`     |
| `position`   | `position`    | Where the panel opens: 'auto' picks the side and alignment with the room available; the others fix the side (top or bottom) and the alignment with the activator (left aligns to its start, right to its end). The panel still flips or moves when it would leave the screen. Use 'auto' unless the layout needs a fixed side. | `"auto" \| "bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'auto'`    |
| `width`      | `width`       | Panel width in rem, e.g. `24` for 24rem. Use for narrower or wider panels; the panel never exceeds the screen. Defaults to 21.                                                                                                                                                                                                 | `number`                                                                 | `undefined` |


## Events

| Event       | Description                                                                                           | Type                               |
| ----------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `uaiToggle` | Emitted when the panel opens or closes, with `value` true when it opened. Use to sync external state. | `CustomEvent<{ value: boolean; }>` |


## Methods

### `setClose() => Promise<void>`

Closes the panel. Use to close it from an action inside the panel, such as Save.

#### Returns

Type: `Promise<void>`



### `setOpen() => Promise<void>`

Opens the panel. Use when opening from code, for example after an async load.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Opens the panel when closed and closes it when open. Use for imperative control; pair with uaiToggle.

#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
|               | Panel body. It scrolls when the content is taller than the room available.                                       |
| `"activator"` | The element that opens the panel, usually a uai-button. Use a native button or uai-button so it takes the focus. |
| `"footer"`    | Optional fixed footer with the actions. Hidden while empty.                                                      |
| `"header"`    | Optional fixed header, such as a title and a search field. Hidden while empty.                                   |


## Shadow Parts

| Part       | Description          |
| ---------- | -------------------- |
| `"body"`   | The scrollable body. |
| `"footer"` | The footer area.     |
| `"header"` | The header area.     |
| `"panel"`  | The floating panel.  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
