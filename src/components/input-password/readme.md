# bds-input-password



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                   | Type                                                                  | Default |
| ---------------- | ----------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- | ------- |
| `autoCapitalize` | `auto-capitalize` | Capitalizes every word's second character.                    | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words"`   | `'off'` |
| `autoComplete`   | `auto-complete`   | Hint for form autofill feature                                | `"current-password" \| "new-password" \| "off" \| "on" \| "username"` | `'off'` |
| `danger`         | `danger`          | Add state danger on input, use for use feedback.              | `boolean`                                                             | `false` |
| `disabled`       | `disabled`        | Disabled input.                                               | `boolean`                                                             | `false` |
| `errorMessage`   | `error-message`   | Indicated to pass an feeback to user.                         | `string`                                                              | `''`    |
| `helperMessage`  | `helper-message`  | Indicated to pass a help the user in complex filling.         | `string`                                                              | `''`    |
| `icon`           | `icon`            | used for add icon in input left. Uses the bds-icon component. | `string`                                                              | `''`    |
| `inputName`      | `input-name`      | Input Name                                                    | `string`                                                              | `''`    |
| `label`          | `label`           | label in input, with he the input size increases.             | `string`                                                              | `''`    |
| `openEyes`       | `open-eyes`       |                                                               | `boolean`                                                             | `false` |
| `value`          | `value`           | The value of the input.                                       | `string`                                                              | `''`    |


## Dependencies

### Depends on

- [bds-input](../input)
- [bds-icon](../icon)

### Graph
```mermaid
graph TD;
  bds-input-password --> bds-input
  bds-input-password --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-icon
  style bds-input-password fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
