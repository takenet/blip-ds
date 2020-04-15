import { Component, ComponentInterface, Prop, h } from '@stencil/core';

export type AlertHeaderVariannt = 'system'
  | 'error'
  | 'warning'
  | 'delete';

@Component({
  tag: 'bds-alert-header',
  styleUrl: 'alert-header.scss',
  shadow: true,
})
export class AlertHeader implements ComponentInterface {
  /**
 * Variant. Entered as one of the variant. Can be one of: 
 * 'system', 'error', 'warning', 'delete';
 */
  @Prop() variant?: AlertHeaderVariannt = 'system';

  /**
   * used for add icon the header. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

  render() {
    return (
      <div class={{
        'alert__header': true,
        [`alert__header--${this.variant}`]: true
      }}>
        {this.icon && <bds-icon theme="outline" size="x-large" color="#fff" name={this.icon}></bds-icon>}
        <bds-typo variant="fs-16" bold="bold"><slot /></bds-typo>
      </div>
    );
  }

}
