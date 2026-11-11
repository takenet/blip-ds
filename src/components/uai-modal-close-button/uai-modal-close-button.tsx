import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Close icon row for custom modal layouts. Use it when the default close button of uai-modal is hidden;
 * pair with a click handler on the host; avoid it as the only way to dismiss a modal.
 *
 * @part icon - The close icon box.
 */
@Component({
  tag: 'uai-modal-close-button',
  styleUrl: 'uai-modal-close-button.scss',
  shadow: true,
})
export class UaiModalCloseButton {
  /** Shows the close icon when 'true'. Use to hide it without removing the element; avoid toggling on every render. */
  @Prop({ mutable: true, reflect: true }) active?: boolean = true;

  render(): HTMLElement {
    return (
      <Host>
        <div
          class={{
            'modal__close__button-icon': true,
            'modal__close__button-icon--active': this.active,
          }}
          part="icon"
        >
          <uai-icon name="close" size="medium" aria-hidden="true"></uai-icon>
        </div>
      </Host>
    );
  }
}
