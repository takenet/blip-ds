# bds-input-chips



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                       | Type                 | Default     |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `chips`          | `chips`            | The chips on the component Should be passed this way: chips='["chip1", "chip2"]'                                  | `string \| string[]` | `[]`        |
| `counterLength`  | `counter-length`   | Passing true to display a counter of available size, it is necessary to pass another maxlength property.          | `boolean`            | `false`     |
| `danger`         | `danger`           | Add state danger on input, use for use feedback.                                                                  | `boolean`            | `false`     |
| `dataTest`       | `data-test`        | Data test is the prop to specifically test the component action object.                                           | `string`             | `null`      |
| `delimiters`     | --                 | The delimiter is used to add multiple chips in the same string.                                                   | `RegExp`             | `/,\|;/`    |
| `disableSubmit`  | `disable-submit`   | If `true`, the user cannot modify the value.                                                                      | `boolean`            | `false`     |
| `disabled`       | `disabled`         | Disabled input                                                                                                    | `boolean`            | `false`     |
| `duplicated`     | `duplicated`       | Do not accept duplicate chip elements.                                                                            | `boolean`            | `false`     |
| `errorMessage`   | `error-message`    | Indicated to pass an feedback to user.                                                                            | `string`             | `''`        |
| `helperMessage`  | `helper-message`   | Indicated to pass a help the user in complex filling.                                                             | `string`             | `''`        |
| `icon`           | `icon`             | used for add icon in input left. Uses the bds-icon component.                                                     | `string`             | `''`        |
| `inputName`      | `input-name`       | Prop to insert the name of the input                                                                              | `string`             | `''`        |
| `label`          | `label`            | label in input, with he the input size increases.                                                                 | `string`             | `''`        |
| `maxChipsLength` | `max-chips-length` | Set maximum length value for chips                                                                                | `number`             | `undefined` |
| `maxlength`      | `maxlength`        | Set maximum length value for the chip content                                                                     | `number`             | `undefined` |
| `placeholder`    | `placeholder`      | A tip for the user who can enter no controls.                                                                     | `string`             | `''`        |
| `success`        | `success`          | Add state success on input, use for use feedback.                                                                 | `boolean`            | `false`     |
| `successMessage` | `success-message`  | Indicated to pass an feeback to user.                                                                             | `string`             | `''`        |
| `type`           | `type`             | Defining the type is important so that it is possible to carry out validations. Can be one of: 'text' and 'email; | `"email" \| "text"`  | `'text'`    |
| `value`          | `value`            | The value of the input.                                                                                           | `string`             | `''`        |


## Events

| Event                | Description                      | Type               |
| -------------------- | -------------------------------- | ------------------ |
| `bdsBlur`            | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsChange`          | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsChangeChips`     | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsInputChipsFocus` | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsInputChipsInput` | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsSubmit`          | Emitted when the chip has added. | `CustomEvent<any>` |


## Methods

### `add(value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `clear() => Promise<void>`

Clear all chips

#### Returns

Type: `Promise<void>`



### `get() => Promise<string[]>`

Return the chips

#### Returns

Type: `Promise<string[]>`



### `isValid() => Promise<boolean>`

Return the validity of the input chips.

#### Returns

Type: `Promise<boolean>`



### `removeFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part                | Description |
| ------------------- | ----------- |
| `"input-container"` |             |
| `"input__message"`  |             |


## Dependencies

### Used by

 - [bds-test-component](../test-component)

### Depends on

- [bds-chip-clickable](../chip-clickable)
- [bds-tooltip](../tooltip)
- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-counter-text](../counter-text)

### Graph
```mermaid
graph TD;
  bds-input-chips --> bds-chip-clickable
  bds-input-chips --> bds-tooltip
  bds-input-chips --> bds-icon
  bds-input-chips --> bds-typo
  bds-input-chips --> bds-counter-text
  bds-chip-clickable --> bds-icon
  bds-chip-clickable --> bds-avatar
  bds-chip-clickable --> bds-typo
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  bds-tooltip --> bds-typo
  bds-counter-text --> bds-typo
  bds-test-component --> bds-input-chips
  style bds-input-chips fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
