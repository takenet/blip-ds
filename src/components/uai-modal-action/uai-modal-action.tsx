import { Component, Host, h } from '@stencil/core';

/**
 * Row for the buttons of a uai-modal, aligned to the end with spacing/xs between them. Use it with slot="footer" in uai-modal;
 * pair with uai-button (Cancelar, Salvar); avoid putting long content in it.
 *
 * @slot - Action buttons.
 * @part action - The action row.
 */
@Component({
  tag: 'uai-modal-action',
  styleUrl: 'uai-modal-action.scss',
  shadow: true,
})
export class UaiModalAction {
  render(): HTMLElement {
    return (
      <Host>
        <div class="modal__action" part="action">
          <slot />
        </div>
      </Host>
    );
  }
}
