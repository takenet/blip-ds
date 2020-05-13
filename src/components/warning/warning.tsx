import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-warning',
  styleUrl: 'warning.scss',
  shadow: true,
})
export class Warning implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="warning__body">
          <bds-icon class="warning__icon" theme="solid" size="small" name="warning"></bds-icon>
          <bds-typo variant="fs-14" tag="span" class="warning__message">
            <slot />
          </bds-typo>
        </div>
      </Host>
    );
  }
}
