import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Close button for custom modal layouts. It is a native button with an accessible name, so it takes the focus and
 * works with Enter and Space. Use it when the default close button of uai-modal is hidden; listen to `click` on it
 * to close the modal; avoid it as the only way to dismiss a modal.
 *
 * @part button - The native close button.
 */
@Component({
  tag: 'uai-modal-close-button',
  styleUrl: 'uai-modal-close-button.scss',
  shadow: true,
})
export class UaiModalCloseButton {
  /** Shows the close button when 'true'. Use to hide it without removing the element; a hidden button leaves the tab order. */
  @Prop({ mutable: true, reflect: true }) active?: boolean = true;

  /** Accessible name of the button. Use a translated label; avoid leaving it generic. */
  @Prop() label?: string = 'Fechar';

  /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtButton?: string = null;

  render(): HTMLElement {
    return (
      <Host>
        <div
          class={{
            'modal__close__button-icon': true,
            'modal__close__button-icon--active': this.active,
          }}
        >
          <button
            type="button"
            class="modal__close__button"
            part="button"
            aria-label={this.label}
            data-test={this.dtButton}
            disabled={!this.active}
          >
            <uai-icon name="close" size="medium" aria-hidden="true"></uai-icon>
          </button>
        </div>
      </Host>
    );
  }
}
