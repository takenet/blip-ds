import { Component, h, State, Prop, EventEmitter, Event, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail } from '../select-interface';

@Component({
  tag: 'bds-select-chips',
  styleUrl: '../select.scss',
  shadow: true,
})
export class SelectChips {
  private nativeInput?: HTMLBdsInputChipsElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() text? = '';

  @Prop() options?: Array<Option> = [];

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: any | null;

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

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      if (this.value) {
        option.selected = this.value === option.value;
        this.text = option.innerHTML;
      }

      option.addEventListener('optionSelected', this.handler);
    }

    if (this.nativeInput) this.nativeInput.add(this.text);
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('*'));
  }

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
      target,
    } = event;

    const el = target as HTMLBdsSelectOptionElement;
    this.nativeInput.add(el.innerHTML);
    this.value = value;
    this.toggle();
  };

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.setFocus();
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input-chips';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.removeFocus();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'bds-input-chips';

    switch (event.key) {
      case 'Enter':
        if (!this.isOpen && (isSelectElement || isInputElement)) {
          this.toggle();
        }
        break;
    }
  };

  private changedInputValue = (event) => {
    const {
      detail: { value },
    } = event;
    this.text = value;
    this.filterOptions(value);

    if (this.isOpen === false) {
      this.isOpen = true;
    }
  };

  private filterOptions(term) {
    for (const option of this.childOptions) {
      if (term && option.innerHTML.includes(term)) {
        option.removeAttribute('invisible');
      } else {
        option.setAttribute('invisible', 'invisible');
      }
    }
  }

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';

    return (
      <div
        class="select"
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onKeyPress={this.keyPressWrapper}
      >
        <bds-input-chips
          ref={(el) => (this.nativeInput = el as HTMLBdsInputChipsElement)}
          onBdsChange={this.changedInputValue}
          icon={this.icon}
          label={this.label}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.toggle}
          value={this.text}
          danger={this.danger}
        >
          <div slot="input-right" class="select__icon">
            <bds-icon size="small" name={iconArrow} color="inherit"></bds-icon>
          </div>
        </bds-input-chips>
        <div
          class={{
            select__options: true,
            'select__options--open': this.isOpen,
          }}
        >
          <slot />
          <bds-select-option value="add">Criar: {this.text}</bds-select-option>
        </div>
      </div>
    );
  }
}
