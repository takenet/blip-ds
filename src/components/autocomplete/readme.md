# bds-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute             | Description                                                                                                                                                                                                                                                                                   | Type                             | Default     |
| ------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `clearIconOnFocus` | `clear-icon-on-focus` | If true, the X icon will appear only when component is focused.                                                                                                                                                                                                                               | `boolean`                        | `false`     |
| `danger`           | `danger`              | Add state danger on input, use for use feedback.                                                                                                                                                                                                                                              | `boolean`                        | `false`     |
| `dataTest`         | `data-test`           | Data test is the prop to specifically test the component action object.                                                                                                                                                                                                                       | `string`                         | `null`      |
| `disabled`         | `disabled`            | Disabled input.                                                                                                                                                                                                                                                                               | `boolean`                        | `false`     |
| `icon`             | `icon`                | used for add icon in input left. Uses the bds-icon component.                                                                                                                                                                                                                                 | `string`                         | `''`        |
| `label`            | `label`               | label in input, with he the input size increases.                                                                                                                                                                                                                                             | `string`                         | `''`        |
| `options`          | `options`             | The options of the select Should be passed this way: options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]' Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular. | `AutocompleteOption[] \| string` | `undefined` |
| `optionsPosition`  | `options-position`    | Set the placement of the options menu. Can be 'bottom' or 'top'.                                                                                                                                                                                                                              | `"bottom" \| "top"`              | `'bottom'`  |
| `placeholder`      | `placeholder`         | Placeholder for native input element.                                                                                                                                                                                                                                                         | `string`                         | `''`        |
| `searchOnlyTitle`  | `search-only-title`   | Search only the title property                                                                                                                                                                                                                                                                | `boolean`                        | `true`      |
| `selected`         | --                    | the item selected.                                                                                                                                                                                                                                                                            | `HTMLBdsSelectOptionElement`     | `undefined` |
| `value`            | `value`               | the value of the select.                                                                                                                                                                                                                                                                      | `string`                         | `undefined` |


## Events

| Event               | Description                                  | Type                                                 |
| ------------------- | -------------------------------------------- | ---------------------------------------------------- |
| `bdsBlur`           | Emitted when the select loses focus.         | `CustomEvent<void>`                                  |
| `bdsCancel`         | Emitted when the selection is cancelled.     | `CustomEvent<void>`                                  |
| `bdsChange`         | Emitted when the value has changed.          | `CustomEvent<AutocompleteChangeEventDetail>`         |
| `bdsFocus`          | Emitted when the select loses focus.         | `CustomEvent<void>`                                  |
| `bdsInput`          | Emitted when the input has changed.          | `CustomEvent<KeyboardEvent>`                         |
| `bdsSelectedChange` | Emitted when the selected value has changed. | `CustomEvent<AutocompleteSelectedChangeEventDetail>` |


## Dependencies

### Used by

 - [bds-test-component](../test-component)

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-select-option](../select-option)

### Graph
```mermaid
graph TD;
  bds-autocomplete --> bds-icon
  bds-autocomplete --> bds-typo
  bds-autocomplete --> bds-select-option
  bds-select-option --> bds-typo
  bds-test-component --> bds-autocomplete
  style bds-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
