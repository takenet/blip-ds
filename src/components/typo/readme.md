# bds-typo



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                               | Type                                                                                   | Default   |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------- |
| `bold`       | `bold`        | Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';                                           | `"bold" or "extra-bold" or "regular" or "semi-bold"`                                   | `null`    |
| `italic`     | `italic`      | Added font style italic                                                                                                                   | `boolean`                                                                              | `false`   |
| `lineHeight` | `line-height` | Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'                               | `"double" or "none" or "plus" or "simple" or "small"`                                  | `null`    |
| `noWrap`     | `no-wrap`     | Added style no wrap                                                                                                                       | `boolean`                                                                              | `false`   |
| `paragraph`  | `paragraph`   | Tranform text in paragraph                                                                                                                | `boolean`                                                                              | `false`   |
| `tag`        | `tag`         | Define element tag, must be used for acessibilty                                                                                          | `"h1" or "h2" or "h3" or "h4" or "p" or "span"`                                        | `'p'`     |
| `variant`    | `variant`     | Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40'; | `"fs-10" or "fs-12" or "fs-14" or "fs-16" or "fs-20" or "fs-24" or "fs-32" or "fs-40"` | `'fs-16'` |


## Dependencies

### Used by

 - [bds-button](../button)
 - [bds-card-color](../card-color)
 - [bds-checkbox](../checkbox)
 - [bds-counter-text](../counter-text)
 - [bds-input](../input)
 - [bds-menu-list-item](../menu-list-item)
 - [bds-radio](../radio)
 - [bds-select-option](../select-option)

### Graph
```mermaid
graph TD;
  bds-button --> bds-typo
  bds-card-color --> bds-typo
  bds-checkbox --> bds-typo
  bds-counter-text --> bds-typo
  bds-input --> bds-typo
  bds-menu-list-item --> bds-typo
  bds-radio --> bds-typo
  bds-select-option --> bds-typo
  style bds-typo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
