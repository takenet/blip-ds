import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import {
  AutocompleteOption,
  AutocompleteChangeEventDetail,
  AutocompleteOptionsPositionType,
} from './autocomplete-select-interface';
import { Keyboard } from '../../utils/enums';
@Component({
  tag: 'bds-autocomplete',
  styleUrl: 'autocomplete.scss',
  shadow: true,
})
export class BdsAutocomplete {
  private nativeInput?: HTMLBdsInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() text? = '';

  @State() internalOptions: AutocompleteOption[];

  /**
   * The options of the select
   * Should be passed this way:
   * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
   * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
   */
  @Prop() options?: string | AutocompleteOption[];

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: string | null;

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
  @Event() bdsChange!: EventEmitter<AutocompleteChangeEventDetail>;

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
   * Placeholder for native input element.
   */
  @Prop() placeholder?: string = '';

  /**
   * Set the placement of the options menu. Can be 'bottom' or 'top'.
   */
  @Prop() optionsPosition?: AutocompleteOptionsPositionType = 'bottom';

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value });

    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }

    this.text = this.getText();
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  componentWillLoad() {
    this.options && this.parseOptions();
  }

  @Watch('options')
  parseOptions() {
    if (this.options) {
      if (typeof this.options === 'string') {
        this.internalOptions = JSON.parse(this.options);
      } else {
        this.internalOptions = this.options;
      }
    }
  }

  componentDidLoad() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener('optionSelected', this.handler);
    }
    this.text = this.getText();
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
      : Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  private get childOptionSelected(): HTMLBdsSelectOptionElement {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
      : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private refNativeInput = (el: any): void => {
    this.nativeInput = el;
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
  };

  private onFocusout = (): void => {
    if (!this.isOpen) {
      this.nativeInput.value = this.getText();
    }
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    if (!this.isOpen) {
      this.nativeInput.value = this.getText();
    }
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private getText = (): string => {
    const opt = this.childOptions.find((option) => option.value == this.value);
    if (opt?.status || opt?.bulkOption) {
      if (this.internalOptions) {
        const internalOption = this.internalOptions.find((option) => option.value == opt.value);
        if (internalOption) {
          return internalOption.label;
        }
      }
      return opt.querySelector(`#bds-typo-label-${this.value}`).textContent;
    }
    return opt?.titleText ? opt.titleText : opt?.textContent?.trim() ?? '';
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
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.removeFocus();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    this.isOpen = true;
    switch (event.key) {
      case Keyboard.ENTER:
        this.toggle();
        break;
      case Keyboard.ARROW_DOWN:
        const indexDownFocus = this.childOptions.findIndex((x) => x.firstElementChild.matches(':focus'));
        const visibleChildren = this.childOptions.slice(indexDownFocus + 1).filter((x) => !x.hasAttribute('invisible'));
        const elementToFocus = visibleChildren[0];
        (elementToFocus?.firstElementChild as HTMLInputElement)?.focus();
        break;
      case Keyboard.ARROW_UP:
        let indexUpFocus = this.childOptions.findIndex((x) => x.firstElementChild.matches(':focus'));
        if (this.childOptions[indexUpFocus] != this.childOptions.filter((x) => !x.hasAttribute('invisible'))[0]) {
          indexUpFocus = indexUpFocus > 0 ? indexUpFocus : this.childOptions.length;
          const lastIndex =
            this.childOptions.slice(0, indexUpFocus).filter((x) => !x.hasAttribute('invisible')).length - 1;
          const visibleChildren = this.childOptions.slice(0, indexUpFocus).filter((x) => !x.hasAttribute('invisible'));
          const elementToFocus = visibleChildren[lastIndex];
          (elementToFocus?.firstElementChild as HTMLInputElement)?.focus();
        }
        break;
    }
  };

  private cleanInputSelection = async () => {
    this.value = '';
    this.nativeInput.value = '';
    this.isOpen = false;
    await this.resetFilterOptions();
  };

  private changedInputValue = async () => {
    if (this.nativeInput.value) {
      await this.filterOptions(this.nativeInput.value);
    } else {
      this.value = '';
      await this.resetFilterOptions();
    }

    if (this.isOpen === false) {
      this.value = this.getSelectedValue();
      await this.resetFilterOptions();
    }
  };

  private async filterOptions(term: string) {
    if (!term) {
      await this.resetFilterOptions();
      return;
    }

    for (const option of this.childOptions) {
      const optionTextLower = option.textContent.toLowerCase();
      const termLower = term.toLowerCase();

      if (optionTextLower.includes(termLower)) {
        option.removeAttribute('invisible');
      }

      if (!optionTextLower.includes(termLower)) {
        option.setAttribute('invisible', 'invisible');
      }
    }
  }

  private async resetFilterOptions() {
    for (const option of this.childOptions) {
      option.removeAttribute('invisible');
    }
  }

  private getSelectedValue() {
    return this.childOptionSelected?.value;
  }

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';

    return (
      <div
        class="select"
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onFocusout={this.onFocusout}
        onKeyDown={this.keyPressWrapper}
      >
        <bds-input
          icon={this.icon}
          label={this.label}
          ref={this.refNativeInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.toggle}
          value={this.text}
          danger={this.danger}
          disabled={this.disabled}
          placeholder={this.placeholder}
          onBdsChange={this.changedInputValue}
          readonly={false}
        >
          <div slot="input-right" class="select__icon">
            <bds-icon size="small" theme="solid" name="error" onClick={this.cleanInputSelection}></bds-icon>
            <bds-icon size="small" name={iconArrow} color="inherit"></bds-icon>
          </div>
        </bds-input>
        <div
          class={{
            select__options: true,
            'select__options--position-top': this.optionsPosition === 'top',
            'select__options--open': this.isOpen,
          }}
        >
          {this.internalOptions ? (
            this.internalOptions.map((option, idx) => (
              <bds-select-option value={option.value} key={idx} bulkOption={option.bulkOption} status={option.status}>
                {option.label}
              </bds-select-option>
            ))
          ) : (
            <slot />
          )}
        </div>
      </div>
    );
  }
}
