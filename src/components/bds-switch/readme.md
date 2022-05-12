# bds-switch



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                                                                   | Type                              | Default      |
| -------------------- | ----------- | ----------------------------------------------------------------------------- | --------------------------------- | ------------ |
| `checked`            | `checked`   | If `true`, the switch is selected.                                            | `boolean`                         | `false`      |
| `dataTest`           | `data-test` | Data test is the prop to specifically test the component action object.       | `string`                          | `null`       |
| `disabled`           | `disabled`  | If `true`, the user cannot interact with the switch.                          | `boolean`                         | `false`      |
| `name` _(required)_  | `name`      | The name of the control, which is submitted with the form data.               | `string`                          | `undefined`  |
| `refer` _(required)_ | `refer`     | The refer of the control.                                                     | `string`                          | `undefined`  |
| `size`               | `size`      | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short'; | `"short" \| "standard" \| "tall"` | `'standard'` |


## Events

| Event       | Description                         | Type               |
| ----------- | ----------------------------------- | ------------------ |
| `bdsChange` | Emitted when the value has changed. | `CustomEvent<any>` |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`



#### Returns

Type: `Promise<HTMLInputElement>`



### `getValue() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
