# bds-step



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                  | Type      | Default |
| ----------- | ----------- | ---------------------------------------------------------------------------- | --------- | ------- |
| `active`    | `active`    | Used to set the step as active                                               | `boolean` | `false` |
| `completed` | `completed` | Used to complete the step                                                    | `boolean` | `false` |
| `dataTest`  | `data-test` | Data test is the prop to specifically test the component action object.      | `string`  | `null`  |
| `disabled`  | `disabled`  | Used to set the step as disabled                                             | `boolean` | `true`  |
| `index`     | `index`     | Used to set the index of the steps                                           | `number`  | `0`     |
| `last`      | `last`      | Used to define the last step component on the list                           | `boolean` | `false` |
| `pointer`   | `pointer`   | Used to set cursor pointer on the step (useful to allow clicks on the steps) | `boolean` | `false` |


## Dependencies

### Depends on

- [bds-icon](../../icon)
- [bds-typo](../../typo)

### Graph
```mermaid
graph TD;
  bds-step --> bds-icon
  bds-step --> bds-typo
  style bds-step fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
