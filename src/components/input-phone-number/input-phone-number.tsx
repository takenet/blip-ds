import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail } from '../selects/select-interface';

@Component({
  tag: 'bds-input-phone-number',
  styleUrl: 'input-phone-number.scss',
  shadow: true,
})
export class InputPhoneNumber {
  private nativeInput?: HTMLBdsInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() text? = '';

  @Prop() options?: Array<Option> = [];

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: any | null = 'user';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value });

    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener('optionSelected', this.handler);
    }
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    // eslint-disable-next-line no-console
    return Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')); // !
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private refNativeInput = (el: any): void => {
    this.nativeInput = el;
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handler = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;
    this.value = value;
    this.toggle();
  };

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.setFocus();
      this.nativeInput.removeFocus();
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.removeFocus();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'bds-input';

    switch (event.key) {
      case 'Enter':
        if (!this.isOpen && (isSelectElement || isInputElement)) {
          this.toggle();
        }
        break;
    }
  };

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';

    return (
      <div
        class="select-phone-number"
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onKeyPress={this.keyPressWrapper}
      >
        <bds-input
          label={this.label}
          ref={this.refNativeInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.text}
          danger={this.danger}
          disabled={this.disabled}
          maxlength={11}
        >
          <div slot="input-left" onClick={this.toggle} class="select-phone-number__icon">
            <bds-icon size="xx-large" name={this.value} color="primary"></bds-icon>
            <bds-icon size="medium" name={iconArrow} color="inherit"></bds-icon>
          </div>
          <div slot="country-select-code" class="select-phone-number__country-code">
            <bds-typo variant="fs-14">{this.value}</bds-typo>
          </div>
        </bds-input>
        <div
          class={{
            'select-phone-number__options': true,
            'select-phone-number__options--open': this.isOpen,
          }}
        >
          <bds-select-option onOptionSelected={this.handler} value="+55">
            Brazil +55
          </bds-select-option>
          <bds-select-option value="+250">Finn Wolfhard</bds-select-option>
        </div>
      </div>
    );
  }
}

// TODO: color icon, estilizar input
