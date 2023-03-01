# bds-pagination



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                      | Type     | Default     |
| ------------- | -------------- | ------------------------------------------------ | -------- | ----------- |
| `pages`       | `pages`        | Prop to recive the number of pages.              | `number` | `undefined` |
| `startedPage` | `started-page` | When the component are render this page are set. | `number` | `undefined` |


## Events

| Event                 | Description                                                | Type               |
| --------------------- | ---------------------------------------------------------- | ------------------ |
| `bdsPaginationChange` | When de value of component change, the event are dispache. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [bds-button-icon](../icon-button)
- [bds-typo](../typo)
- [bds-icon](../icon)
- [bds-paper](../paper)

### Graph
```mermaid
graph TD;
  bds-pagination --> bds-button-icon
  bds-pagination --> bds-typo
  bds-pagination --> bds-icon
  bds-pagination --> bds-paper
  bds-button-icon --> bds-icon
  bds-button-icon --> bds-loading-spinner
  style bds-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
