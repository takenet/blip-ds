import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bds-alert-body',
  styleUrl: 'alert-body.scss',
  shadow: true,
})
export class AlertBody implements ComponentInterface {
  render() {
    return (
      <div class="alert__body">
        <bds-typo variant="fs-14" bold="regular" slot="body"><slot /></bds-typo>
      </div>
    );
  }

}
