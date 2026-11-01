import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Declarative option of UaiSelect. Use it as a child of uai-select when the options are written in markup; the text
 * is the visible label. Pair with value; avoid it together with the options prop, which takes precedence. It renders
 * nothing by itself.
 *
 * @slot - Option label.
 */
@Component({
  tag: 'uai-select-option',
  styleUrl: 'uai-select-option.scss',
  shadow: true,
})
export class UaiSelectOption {
  /** Value submitted and emitted when the option is chosen. Use a short stable string; pair with the label text; avoid duplicates inside one select. */
  @Prop({ reflect: true }) value!: string;

  /** Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all. */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning. */
  @Prop({ reflect: true }) icon?: string = null;

  render(): HTMLElement {
    return (
      <Host hidden>
        <slot />
      </Host>
    );
  }
}
