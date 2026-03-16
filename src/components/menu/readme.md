## Shadow Parts

The `bds-menu` component exposes the following shadow parts for custom styling:

| Part                | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `bds-menu__container` | Positioned menu container element that wraps the menu content and controls menu box styling and positioning. |
# bds-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                               | Type                  | Default   |
| ---------- | ---------- | ------------------------------------------------------------------------- | --------------------- | --------- |
| `menu`     | `menu`     | Menu. Used to link the minus with the action button.                      | `string`              | `null`    |
| `open`     | `open`     | Open. Used to open/close the menu.                                        | `boolean`             | `false`   |
| `position` | `position` | Position. Used to position the Menu. Either on the left or on the bottom. | `"bottom" \| "right"` | `'right'` |


## Events

| Event       | Description                                     | Type                                |
| ----------- | ----------------------------------------------- | ----------------------------------- |
| `bdsToggle` | bdsToggle. Event to return selected date value. | `CustomEvent<{ value?: boolean; }>` |


## Methods

### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part                    | Description |
| ----------------------- | ----------- |
| `"bds-menu__container"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
