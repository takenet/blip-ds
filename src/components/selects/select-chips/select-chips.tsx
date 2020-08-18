/* eslint-disable no-console */
import { Component, h, State, Prop, EventEmitter, Event, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail } from '../select-interface';

@Component({
  tag: 'bds-select-chips',
  styleUrl: '../select.scss',
  shadow: true,
})
export class SelectChips {
  private nativeInput?: HTMLBdsInputChipsElement;

  @Element() el!: HTMLElement;

  @State() isOpen? = false;

  @State() text? = '';

  @Prop() options?: Array<Option> = [];

  /**
   * Used for add prefix on new option select.
   */
  @Prop({ reflect: true }) newPrefix?: string = '';

  /**
   * the value of the select.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;

  /**
   * Indicated to pass an feedback to user.
   */
  @Prop({ mutable: true }) errorMessage? = '';

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

  /**
   * Do not accept duplicate chip elements.
   */
  @Prop() duplicated?: boolean = false;

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.addEventListener('optionSelected', this.handler);
    }
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('*'));
  }

  private get childOptionsEnabled(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('*:not([invisible])'));
  }

  private enableCreateOption(): boolean {
    return !!(this.childOptionsEnabled.length === 0 && this.text);
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

  private handler = async (event: CustomEvent) => {
    const { target } = event;
    const text = (target as HTMLBdsSelectOptionElement).innerHTML;
    await this.addChip(text);
  };

  private handlerNewOption = async (text: string) => {
    await this.addChip(text);
  };

  private async addChip(chip: string) {
    await this.nativeInput.add(chip);
    this.text = '';
    this.nativeInput.value = '';
    this.toggle();
  }

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

    if (this.text && this.isOpen === false) {
      this.isOpen = true;
    }
  };

  private handleChangeChipsValue = () => {
    this.resetFilterOptions();
  };

  private filterOptions(term: string) {
    for (const option of this.childOptions) {
      const isExistsChip = this.existsChip(option.innerHTML, this.nativeInput.chips);

      if (term && option.innerHTML.includes(term) && !isExistsChip) {
        option.removeAttribute('invisible');
      }

      if (term && !option.innerHTML.includes(term) && !isExistsChip) {
        option.setAttribute('invisible', 'invisible');
      }
    }
  }

  private resetFilterOptions() {
    for (const option of this.childOptions) {
      if (this.existsChip(option.innerHTML, this.nativeInput.chips)) {
        option.setAttribute('invisible', 'invisible');
      } else {
        option.removeAttribute('invisible');
      }
    }
  }

  private existsChip(optionChip: string, chips: string[]) {
    return chips.some((chip) => optionChip === chip);
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
          onBdsChangeChips={this.handleChangeChipsValue}
          onBdsChange={this.changedInputValue}
          icon={this.icon}
          label={this.label}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.toggle}
          danger={this.danger}
          error-message={this.errorMessage}
          duplicated={this.duplicated}
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
          {this.enableCreateOption() && (
            <bds-select-option value="add" onClick={() => this.handlerNewOption(this.text)}>
              {this.newPrefix}
              {this.text}
            </bds-select-option>
          )}
        </div>
      </div>
    );
  }
}
