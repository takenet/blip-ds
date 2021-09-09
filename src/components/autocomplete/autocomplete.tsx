import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import {
  AutocompleteOption,
  AutocompleteChangeEventDetail,
  AutocompleteSelectedChangeEventDetail,
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

  @State() isFocused?: boolean = false;

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
  @Prop({ mutable: true }) value?: string | null;

  /**
   * the item selected.
   */
  @Prop({ mutable: true }) selected?: HTMLBdsSelectOptionElement | null;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * Search only the title property
   */
  @Prop({ reflect: true }) searchOnlyTitle? = true;

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

  /**
   * If true, the X icon will appear only when component is focused.
   */
  @Prop() clearIconOnFocus?: boolean = false;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<AutocompleteChangeEventDetail>;

  /**
   * Emitted when the selected value has changed.
   */
  @Event() bdsSelectedChange!: EventEmitter<AutocompleteSelectedChangeEventDetail>;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

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

  @Watch('selected')
  itemSelectedChanged(): void {
    this.bdsSelectedChange.emit(this.selected);
  }

  @Watch('value')
  valueChanged(): void {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
    this.selected = this.childOptionSelected;
    this.text = this.getText();
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  @Watch('options')
  parseOptions() {
    if (this.options) {
      this.resetFilterOptions();
      this.internalOptions = typeof this.options === 'string' ? JSON.parse(this.options) : this.options;
    }
  }

  componentWillLoad() {
    this.text = this.getText();
    this.options && this.parseOptions();
  }

  componentDidLoad() {
    if (!this.options) {
      for (const option of this.childOptions) {
        option.selected = this.value === option.value;
        option.addEventListener('optionSelected', this.handler);
      }
    }
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  };

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

  private refNativeInput = (el: HTMLBdsInputElement): void => {
    this.nativeInput = el;
  };

  private onFocus = (): void => {
    this.isFocused = true;
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
      this.isFocused = false;
      this.nativeInput.value = this.getText();
    }
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private getTextFromOption = (opt: HTMLBdsSelectOptionElement): string => {
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

  private getText = (): string => {
    const opt = this.childOptions.find((option) => option.value == this.value);
    return this.getTextFromOption(opt);
  };

  private handler = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;
    this.value = value;
    this.toggle();
  };

  private setFocusWrapper = (): void => {
    if (!this.disabled && this.nativeInput) {
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

      case Keyboard.TAB:
        const indexTabFocus = this.findFocusedElementIndex();
        const visibleTabChildren = this.sliceInvisible(indexTabFocus + 1);
        const elementTabToFocus = visibleTabChildren[0];
        if (!elementTabToFocus) {
          this.toggle();
        }
        break;

      case Keyboard.ARROW_DOWN:
        const indexDownFocus = this.findFocusedElementIndex();
        const visibleChildren = this.sliceInvisible(indexDownFocus + 1);
        const elementToFocus = visibleChildren[0];
        (elementToFocus?.firstElementChild as HTMLInputElement)?.focus();
        break;

      case Keyboard.ARROW_UP:
        let indexUpFocus = this.findFocusedElementIndex();
        const firstVisibleElement = this.childOptions.find((option) => !option.hasAttribute('invisible'));
        if (this.childOptions[indexUpFocus] != firstVisibleElement) {
          indexUpFocus = indexUpFocus > 0 ? indexUpFocus : this.childOptions.length;
          const visibleChildren = this.sliceInvisible(0, indexUpFocus);
          const elementToFocus = visibleChildren[visibleChildren.length - 1];
          (elementToFocus?.firstElementChild as HTMLInputElement)?.focus();
        }
        break;
    }
  };

  private sliceInvisible(index: number, endIndex = this.childOptions.length): HTMLBdsSelectOptionElement[] {
    return this.childOptions.slice(index, endIndex).filter((option) => !option.hasAttribute('invisible'));
  }

  private findFocusedElementIndex(): number {
    return this.childOptions.findIndex((option) => option.firstElementChild.matches(':focus'));
  }

  private cleanInputSelection = async () => {
    if (!this.disabled) {
      this.value = '';
      this.nativeInput.value = '';
      this.isOpen = false;
      await this.resetFilterOptions();
    }
  };

  private changedInputValue = async () => {
    this.bdsChange.emit({ value: this.nativeInput.value });
    if (this.nativeInput.value) {
      await this.filterOptions(this.nativeInput.value);
    } else {
      this.value = '';
      if (this.isOpen) {
        await this.resetFilterOptions();
      } else {
        this.setTimeoutFilter();
      }
    }

    if (this.isOpen === false) {
      this.value = this.getSelectedValue();
      this.setTimeoutFilter();
    }
  };

  private setTimeoutFilter(): void {
    setTimeout(() => {
      this.resetFilterOptions();
    }, 500);
  }

  private async filterOptions(term: string) {
    if (!term) {
      await this.resetFilterOptions();
    }

    for (const option of this.childOptions) {
      const optionTextLowercase = this.searchOnlyTitle
        ? this.getTextFromOption(option).toLowerCase()
        : option.textContent.toLowerCase();

      const termLower = term.toLowerCase();

      optionTextLowercase.includes(termLower)
        ? option.removeAttribute('invisible')
        : option.setAttribute('invisible', 'invisible');
    }
  }

  private async resetFilterOptions() {
    const childOptions = this.childOptions;
    for (const option of childOptions) {
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
          onBdsInput={this.onInput}
          readonly={false}
        >
          <div slot="input-right" class="select__icon">
            <bds-icon
              size="small"
              name="error"
              theme="solid"
              onClick={this.cleanInputSelection}
              class={{
                'icon-hidden': (this.clearIconOnFocus && (!this.isFocused || !this.isOpen)) || !this.value,
              }}
            ></bds-icon>
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
              <bds-select-option
                onOptionSelected={this.handler}
                selected={this.value === option.value}
                value={option.value}
                key={idx}
                bulkOption={option.bulkOption}
                status={option.status}
              >
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
