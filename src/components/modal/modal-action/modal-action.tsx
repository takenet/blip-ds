import { Component, ComponentInterface, h } from '@stencil/core';

/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
@Component({
  tag: 'bds-modal-action',
  styleUrl: 'modal-action.scss',
  shadow: true,
})
export class BdsModalAction implements ComponentInterface {
  render() {
    return (
      <div class="modal__action">
        <slot />
      </div>
    );
  }
}
