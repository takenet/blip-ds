import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-action-column',
  scoped: true,
})
export class ActionColumn {
  /**
   * Prop to recive the header and configuration of table.
   */
  @Prop() icon?: string;

  render() {
    return (
      <Host>
        <slot name="action" />
      </Host>
    );
  }
}
