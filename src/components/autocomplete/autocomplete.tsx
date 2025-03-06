import { Component, h, Host, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import {
  AutocompleteOption,
  AutocompleteChangeEventDetail,
  AutocompleteSelectedChangeEventDetail,
  AutocompleteOptionsPositionType,
  AutocompleteMultiSelectedChangeEventDetail,
} from './autocomplete-select-interface';
import { SelectOptionsPositionType } from '../selects/select-interface';
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';

export type SelectionType = 'single' | 'multiple';

@Component({
  tag: 'bds-autocomplete',
  styleUrl: 'autocomplete.scss',
  shadow: true,
})
export class BdsAutocomplete {
  private checkAllInput?: HTMLBdsCheckboxElement;
  private nativeInput?: HTMLInputElement;
  private dropElement?: HTMLElement;
  private iconDropElement?: HTMLBdsIconElement;
  private positionHeightDrop?: SelectOptionsPositionType;

  @Element() el!: HTMLBdsSelectElement;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() intoView?: HTMLElement = null;

  @State() isPressed? = false;

  @State() isOpen? = false;

  @State() text? = '';

  @State() textMultiselect? = '';

  @State() placeholderState?: string = this.placeholder;

  @State() internalOptions: AutocompleteOption[];

  @State() cloneOptions: AutocompleteOption[];

  @State() checkedOptions: AutocompleteOption[];

  @State() isFocused?: boolean = false;

  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger?: boolean = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

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
   * Add state success on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
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
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';
  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';
  /**
   * Indicated to pass an feeback to user.
   */
  @Prop({ mutable: true }) successMessage?: string = '';
  /**
   * Set the placement of the options menu. Can be 'bottom' or 'top'.
   */
  @Prop() optionsPosition?: AutocompleteOptionsPositionType = 'auto';

  /**
   * If true, the X icon will appear only when component is focused.
   */
  @Prop() clearIconOnFocus?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Is Loading, is the prop to enable that the component is loading.
   */
  @Prop() loading?: boolean = false;

  /**
   * Multiselect, Prop to enable multi selections.
   */
  @Prop() selectionType?: SelectionType = 'single';

  /**
   * Selection Title, Prop to enable title to select.
   */
  @Prop() selectionTitle?: string = '';

    /**
   * Selection Title, Prop to enable title to select.
   */
    @Prop() selectedAll?: boolean = true;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<AutocompleteChangeEventDetail>;

  /**
   * Emitted when the selected value has changed.
   */
  @Event() bdsSelectedChange!: EventEmitter<AutocompleteSelectedChangeEventDetail>;

  /**
   * Emitted when the selected value has changed.
   */
  @Event() bdsMultiselectedChange!: EventEmitter<AutocompleteMultiSelectedChangeEventDetail>;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<AutocompleteChangeEventDetail>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  @Watch('isOpen')
  protected isOpenChanged(isOpen: boolean): void {
    if (this.positionHeightDrop == 'bottom') {
      this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
    } else {
      this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
    }
    if (isOpen)
      if (this.optionsPosition != 'auto') {
        this.setDefaultPlacement(this.optionsPosition);
      } else {
        this.validatePositionDrop();
      }
  }

  @Watch('selected')
  itemSelectedChanged(): void {
    this.bdsSelectedChange.emit(this.selected);
  }

  @Watch('value')
  protected valueChanged(): void {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
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

  @Watch('checkedOptions')
  protected changeCheckedOptions() {
    this.placeholderState =
      this.selectionType === 'multiple'
        ? this.checkedOptions?.length === 0 || this.checkedOptions === null
          ? this.placeholder
          : ''
        : this.placeholder;
    this.getTextMultiselect(this.checkedOptions);
    this.bdsMultiselectedChange.emit({ value: this.checkedOptions });
  }

  @Watch('options')
  parseOptions() {
    if (this.options) {
      this.resetFilterOptions();
      try {
        this.internalOptions = typeof this.options === 'string' ? JSON.parse(this.options) : this.options;
      } catch (e) {
        this.internalOptions = [];
      }
    }
  }

  @Watch('selectionType')
  protected changeSelectionType() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        } else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }
  }

  componentWillLoad() {
    this.intoView = getScrollParent(this.el);
    this.options && this.parseOptions();
  }

  componentDidLoad() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        } else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }

    this.text = this.getText();
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  }

  private setDefaultPlacement(value: AutocompleteOptionsPositionType) {
    if (value == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  private validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.el,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.positionHeightDrop = positionValue.y as SelectOptionsPositionType;
    if (positionValue.y == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  private refDropdown = (el: HTMLElement) => {
    this.dropElement = el;
  };

  private refIconDrop = (el: HTMLBdsIconElement) => {
    this.iconDropElement = el;
  };

  private refCheckAllInput = (input: HTMLBdsCheckboxElement): void => {
    this.checkAllInput = input;
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

  private onFocus = (): void => {
    this.isFocused = true;
    this.isPressed = true;
    this.bdsFocus.emit();
  };

  private onFocusout = (): void => {
    if (!this.isOpen) {
      this.nativeInput.value = this.getText();
    }
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
    if (!this.isOpen) {
      this.isFocused = false;
      this.nativeInput.value = this.getText();
      if (this.selectionType == 'multiple') this.cleanInputSelection();
    }
    if (this.selectionType == 'multiple' && this.checkedOptions?.length > 0)
      this.getTextMultiselect(this.checkedOptions);
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    this.toggle();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private getTextFromOption = (opt: HTMLBdsSelectOptionElement): string => {
    if (this.internalOptions) {
      const internalOption = this.internalOptions.find((option) => option.value == opt?.value);
      if (internalOption) {
        return internalOption.label;
      }
    }
    return opt?.titleText ? opt.titleText : (opt?.innerText ?? '');
  };

  private getText = (): string => {
    const opt = this.childOptions.find((option) => option.value == this.value);
    return this.getTextFromOption(opt);
  };

  private getTextMultiselect = (data): void => {
    const valueInput = data?.length > 0 && `${data?.length} selecionados`;
    this.textMultiselect = valueInput;
  };

  private handlerMultiselect = (): void => {
    this.updateListChecked(this.childOptions);
    this.nativeInput.value = '';
    this.value = undefined;
    this.resetFilterOptions();
    if (this.childOptions.length != this.checkedOptions.length) {
      setTimeout(() => {
        this.checkAllInput.checked = false;
      }, 10);
    }
  };

  private handleCheckAll = (event: CustomEvent): void => {
    const {
      detail: { checked },
    } = event;
    for (const option of this.childOptions) {
      if (checked) {
        option.toMark();
      } else {
        option.markOff();
      }
    }
    setTimeout(() => {
      this.updateListChecked(this.childOptions);
    }, 10);
  };

  private updateListChecked = (data: HTMLBdsSelectOptionElement[]): void => {
    for (const option of data) {
      option.checked ? option.classList.add('option-checked') : option.classList.remove('option-checked');
    }
    const defaultCheckedOptions = Array.from(data).filter((item) => item.checked == true);
    const value = defaultCheckedOptions.map((term) => ({
      value: term.value,
      label: term.textContent,
      checked: term.checked,
    }));
    this.checkedOptions = value;
  };

  private handler = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;
    this.value = value;
    this.toggle();
  };

  private keyPressWrapper(event) {
    switch (event.key) {
      case 'Enter':
        this.toggle();
        break;
      case 'ArrowDown':
        if (!this.disabled) {
          this.isOpen = true;
        }
        if (this.childOptionSelected) {
          this.value = (this.childOptionSelected.nextSibling as HTMLBdsSelectOptionElement)?.value;
          return;
        }
        this.value = (this.el.firstElementChild as HTMLBdsSelectOptionElement)?.value;
        break;
      case 'ArrowUp':
        if (this.childOptionSelected) {
          this.value = (this.childOptionSelected.previousSibling as HTMLBdsSelectOptionElement)?.value;
          return;
        }
        this.value = (this.el.lastElementChild as HTMLBdsSelectOptionElement)?.value;
        break;
    }
  }

  private cleanInputSelection = async () => {
    if (!this.disabled) {
      this.value = '';
      this.nativeInput.value = '';
      this.isOpen = false;
      this.bdsCancel.emit({ value: '' });
      await this.resetFilterOptions();
    }
  };

  private changedInputValue = async (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
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

  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label,
          }}
        >
          <bds-icon size={this.label ? 'medium' : 'small'} name={this.icon} color="inherit"></bds-icon>
        </div>
      )
    );
  }

  private renderLabel(): HTMLElement {
    return (
      this.label && (
        <label
          class={{
            input__container__label: true,
            'input__container__label--pressed': this.isPressed && !this.disabled,
          }}
        >
          <bds-typo variant="fs-12" bold="bold">
            {this.label}
          </bds-typo>
        </label>
      )
    );
  }

  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles =
      this.danger || this.validationDanger
        ? 'input__message input__message--danger'
        : this.success
          ? 'input__message input__message--success'
          : 'input__message';

    if (message) {
      return (
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="outline" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  render(): HTMLElement {
    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div
          class={{
            input: true,
            select: true,
            'input--state-primary': !this.danger,
            'input--state-danger': this.danger || this.validationDanger,
            'input--state-success': this.success,
            'input--state-disabled': this.disabled,
            'input--label': !!this.label,
            'input--pressed': this.isPressed,
          }}
          onClick={this.onClickWrapper}
        >
          {this.renderIcon()}
          <div class="input__container" tabindex="0" onFocusout={this.onFocusout}>
            {this.renderLabel()}
            <div class={{ input__container__wrapper: true }}>
              {this.textMultiselect?.length > 0 && (
                <bds-typo variant="fs-14" class="inside-input-left">
                  {this.textMultiselect}
                </bds-typo>
              )}
              <input
                class={{ input__container__text: true }}
                ref={(input) => (this.nativeInput = input)}
                disabled={this.disabled}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onInput={this.changedInputValue}
                placeholder={this.placeholderState}
                type="text"
                value={this.text}
                data-test={this.dataTest}
                onKeyDown={this.keyPressWrapper.bind(this)}
              />
            </div>
          </div>
          <div class="select__icon">
            <bds-icon
              size="small"
              name="error"
              theme="solid"
              onClick={this.cleanInputSelection}
              class={{
                'icon-hidden': (this.clearIconOnFocus && (!this.isFocused || !this.isOpen)) || !this.value,
              }}
            ></bds-icon>
            <bds-icon ref={(el) => this.refIconDrop(el)} size="small" color="inherit"></bds-icon>
          </div>
        </div>
        {this.renderMessage()}
        {this.loading ? (
          <div
            ref={(el) => this.refDropdown(el)}
            class={{
              select__options: true,
              'select__options--open': this.isOpen,
            }}
          >
            <bds-loading-spinner class="load-spinner" size="small"></bds-loading-spinner>
          </div>
        ) : (
          <div
            ref={(el) => this.refDropdown(el)}
            class={{
              select__options: true,
              'select__options--open': this.isOpen,
            }}
          >
            {this.selectionTitle && this.selectionType == 'multiple' && (
              <bds-typo class="selection-title" variant="fs-10" bold="bold">
                {this.selectionTitle}
              </bds-typo>
            )}
            {this.selectionType == 'multiple' && this.selectedAll && this.value == null && (
              <bds-checkbox
                ref={this.refCheckAllInput}
                refer={`refer-multiselect`}
                label={`Selecionar Todos`}
                name="chack-all"
                class="select-all"
                onBdsChange={(ev) => this.handleCheckAll(ev)}
              ></bds-checkbox>
            )}
            {this.checkedOptions?.length > 0 && (
              <span class="content-divisor">
                <span class="divisor"></span>
              </span>
            )}
            {this.internalOptions ? (
              this.internalOptions.map((option, idx) => (
                <bds-select-option
                  onOptionSelected={this.handler}
                  onOptionChecked={this.handlerMultiselect}
                  selected={this.value === option.value}
                  value={option.value}
                  key={idx}
                  bulkOption={option.bulkOption}
                  status={option.status}
                  type-option={this.selectionType == 'multiple' ? 'checkbox' : 'default'}
                >
                  {option.label}
                </bds-select-option>
              ))
            ) : (
              <slot />
            )}
          </div>
        )}
      </Host>
    );
  }
}
