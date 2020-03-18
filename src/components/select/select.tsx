import { Component, h, State, Prop, EventEmitter, Event, Watch, Element } from '@stencil/core';
import { Option, SelectChangeEventDetail } from './select-interface';

@Component({
  tag: 'bds-select',
  styleUrl: 'select.scss',
  shadow: true
})
export class Select {
  private nativeInput?: HTMLBdsInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen?= false;

  @Prop() options?: Array<Option> = [];

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: any | null;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?= false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled?= false;

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
  @Prop() label?= '';

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value })
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener("optionSelected", this.handler);
    }
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll("*"));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private refNativeInput = (el: any): void => {
    this.nativeInput = el
  }

  private onFocus = (): void => {
    this.bdsFocus.emit();
  }

  private onBlur = (): void => {
    this.bdsBlur.emit();
  }

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  private getText = (): string => {
    const opt = this.childOptions.find(option => option.value == this.value)
    return opt ? opt.label : '';
  }

  private handler = (event: CustomEvent): void => {
    const { detail: { value } } = event;
    this.value = value;
    this.toggle();
  }

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.setFocus();
    }
  }

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.removeFocus();
    }
  }

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
  }

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const selectText = this.getText();

    return (
      <div class="select"
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
          onClick={this.toggle}
          value={selectText}
          danger={this.danger}
          disabled={this.disabled}
          readonly
        >
          <div
            slot="input-right"
            class="select__icon"
          >
            <bds-icon
              size="small"
              name={iconArrow}
              color="inherit"
            >
            </bds-icon>
          </div>
        </bds-input>
        <div
          class={{
            "select__options": true,
            "select__options--open": this.isOpen
          }}>
          {/* {this.getSelectOptions()} */}
          {/* {this.childOptions} */}
          <slot />
        </div>
      </div>
    )
  }
}
