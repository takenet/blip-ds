# uai-tab-item



<!-- Auto Generated Below -->


## Overview

Content panel and configuration of one tab. Use inside UaiTabGroup. Pair with a label;
avoid using open panels as independent navigation controls.

## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                                                                                                                               | Type      | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaLabel`      | `aria-label`      | Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names.                                                                                                                                                                                                                      | `string`  | `null`      |
| `badge`          | `badge`           | Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration.                                                                                                                                                                                                        | `boolean` | `false`     |
| `badgeAnimation` | `badge-animation` | Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction.                                                                                                                                                                                                  | `boolean` | `false`     |
| `badgeColor`     | `badge-color`     | Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors.                                                                                                                                                                                             | `string`  | `'system'`  |
| `badgeIcon`      | `badge-icon`      | Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning.                                                                                                                                                                                                                   | `string`  | `null`      |
| `badgeNumber`    | `badge-number`    | Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts.                                                                                                                                                                                    | `number`  | `null`      |
| `badgePosition`  | `badge-position`  | Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions.                                                                                                                                                                                                                      | `string`  | `'left'`    |
| `badgeShape`     | `badge-shape`     | Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning.                                                                                                                                                                                        | `string`  | `'circle'`  |
| `contentStyle`   | `content-style`   | <span style="color:red">**[DEPRECATED]**</span> Prefer token-based composition around the group. The inherited style string remains functional.<br/><br/>Custom group content styles when this item is open. Use token-based declarations for compatibility; pair with headerStyle; avoid overriding component internals. | `string`  | `null`      |
| `dataTest`       | `data-test`       | Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name.                                                                                                                                                                                           | `string`  | `null`      |
| `disable`        | `disable`         | Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled.                                                                                                                                                                                              | `boolean` | `false`     |
| `error`          | `error`           | Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone.                                                                                                                                                                               | `boolean` | `false`     |
| `headerStyle`    | `header-style`    | <span style="color:red">**[DEPRECATED]**</span> Prefer token-based composition around the group. The inherited style string remains functional.<br/><br/>Custom group header styles when this item is open. Use token-based declarations for compatibility; pair with contentStyle; avoid overriding component internals. | `string`  | `null`      |
| `icon`           | `icon`            | Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name.                                                                                                                                                                                                                 | `string`  | `null`      |
| `iconOnly`       | `icon-only`       | Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions.                                                                                                                                                                                  | `boolean` | `false`     |
| `iconPosition`   | `icon-position`   | Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions.                                                                                                                                                                                                                            | `string`  | `'left'`    |
| `iconTheme`      | `icon-theme`      | Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names.                                                                                                                                                                                                            | `string`  | `'outline'` |
| `label`          | `label`           | Tab label. Use a short name; pair with panel content; avoid unnamed tabs.                                                                                                                                                                                                                                                 | `string`  | `null`      |
| `numberElement`  | `number-element`  | Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID.                                                                                                                                                                                                      | `number`  | `null`      |
| `open`           | `open`            | Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items.                                                                                                                                                                                                          | `boolean` | `false`     |


## Events

| Event         | Description                                                                                                                                               | Type                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `uaiDisabled` | Availability change with the current index. Use for observing disable changes; pair with uaiTabDisabled on the group; avoid confusing it with activation. | `CustomEvent<{ item: number; disable: boolean; }>` |


## Methods

### `reciveNumber(number: number) => Promise<void>`

Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier.

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| `number` | `number` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
|      | Panel content. Use for the selected tab's content; pair with label; avoid putting tab headers here. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
