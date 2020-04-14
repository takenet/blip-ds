import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bds-alert-actions',
  styleUrl: 'alert-actions.scss',
  shadow: true,
})
export class AlertActions implements ComponentInterface {
  render() {
    return (
      <div class="alert__actions">
        <slot />
      </div>
    );
  }
}
