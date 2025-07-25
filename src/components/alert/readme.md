# bds-alert



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                    | Type      | Default   |
| ---------- | ----------- | ------------------------------------------------------------------------------ | --------- | --------- |
| `dataTest` | `data-test` | Data test is the prop to specifically test the component action object.        | `string`  | `null`    |
| `open`     | `open`      | Used to open/close the alert                                                   | `boolean` | `false`   |
| `position` | `position`  | Define whether the component will occupy the entire screen or just the parent. | `string`  | `'fixed'` |


## Events

| Event             | Description                            | Type                                    |
| ----------------- | -------------------------------------- | --------------------------------------- |
| `bdsAlertChanged` | Emitted when modal status has changed. | `CustomEvent<{ alertStatus: string; }>` |


## Methods

### `toggle() => Promise<void>`

Can be used outside to open/close the alert

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
