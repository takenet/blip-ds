# bds-select



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                                   | Type                 | Default     |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `danger`          | `danger`           | Add state danger on input, use for use feedback.                                                                                                                                                                                                                                              | `boolean`            | `false`     |
| `dataTest`        | `data-test`        | Data test is the prop to specifically test the component action object.                                                                                                                                                                                                                       | `string`             | `null`      |
| `disabled`        | `disabled`         | Disabled input.                                                                                                                                                                                                                                                                               | `boolean`            | `false`     |
| `errorMessage`    | `error-message`    | Indicated to pass an feeback to user.                                                                                                                                                                                                                                                         | `string`             | `''`        |
| `helperMessage`   | `helper-message`   | Indicated to pass a help the user in complex filling.                                                                                                                                                                                                                                         | `string`             | `''`        |
| `icon`            | `icon`             | used for add icon in input left. Uses the bds-icon component.                                                                                                                                                                                                                                 | `string`             | `''`        |
| `label`           | `label`            | label in input, with he the input size increases.                                                                                                                                                                                                                                             | `string`             | `''`        |
| `minWidthMenu`    | `min-width-menu`   | Number to set the minimum width of the menu.                                                                                                                                                                                                                                                  | `number`             | `null`      |
| `options`         | `options`          | The options of the select Should be passed this way: options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]' Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular. | `Option[] \| string` | `undefined` |
| `optionsPosition` | `options-position` | Set the placement of the options menu. Can be 'bottom' or 'top'.                                                                                                                                                                                                                              | `"bottom" \| "top"`  | `'bottom'`  |
| `placeholder`     | `placeholder`      | Placeholder for native input element.                                                                                                                                                                                                                                                         | `string`             | `''`        |
| `value`           | `value`            | the value of the select.                                                                                                                                                                                                                                                                      | `any`                | `undefined` |


## Events

| Event       | Description                              | Type                                   |
| ----------- | ---------------------------------------- | -------------------------------------- |
| `bdsBlur`   | Emitted when the select loses focus.     | `CustomEvent<void>`                    |
| `bdsCancel` | Emitted when the selection is cancelled. | `CustomEvent<void>`                    |
| `bdsChange` | Emitted when the value has changed.      | `CustomEvent<SelectChangeEventDetail>` |
| `bdsFocus`  | Emitted when the select loses focus.     | `CustomEvent<void>`                    |


## Shadow Parts

| Part                | Description |
| ------------------- | ----------- |
| `"input-container"` |             |
| `"input__message"`  |             |


## Dependencies

### Used by

 - [bds-test-component](../../test-component)

### Depends on

- [bds-icon](../../icon)
- [bds-typo](../../typo)
- [bds-select-option](../../select-option)

### Graph
```mermaid
graph TD;
  bds-select --> bds-icon
  bds-select --> bds-typo
  bds-select --> bds-select-option
  bds-select-option --> bds-typo
  bds-test-component --> bds-select
  style bds-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
