import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail, SelectOptionsPositionType } from '../select-interface';
import { getScrollParent, positionAbsoluteElement } from '../../../utils/position-element';
@Component({
  tag: 'bds-select',
  styleUrl: '../select.scss',
  shadow: true,
})
export class Select {
  private nativeInput?: HTMLInputElement;
  private dropElement?: HTMLElement;
  private iconDropElement?: HTMLBdsIconElement;
  private positionHeightDrop?: SelectOptionsPositionType;

  @Element() el!: HTMLBdsSelectElement;

  @State() intoView?: HTMLElement = null;

  @State() isOpen? = false;

  @State() text? = '';

  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger?: boolean = false;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

  @State() internalOptions: Option[];

  /**
   * The options of the select
   * Should be passed this way:
   * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
   * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
   */
  @Prop() options?: string | Option[];

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
   * Add state success on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
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
  @Prop({ mutable: true, reflect: true }) optionsPosition?: SelectOptionsPositionType = 'auto';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

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

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value });

    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }

    this.text = this.getText(this.value);
  }

  @Listen('mousedown', { target: 'window', passive: true, capture: true })
  handleWindow(ev: Event) {
    const path = ev.composedPath();
    if (!path.find((element: HTMLElement) => element == this.el)) {
      this.isOpen = false;
    }
  }

  componentWillLoad() {
    this.options && this.optionsChanged();
    this.intoView = getScrollParent(this.el);
  }

  componentWillRender() {
    this.options && this.updateOptions();
    this.getValueSelected();
  }

  componentDidLoad() {
    this.getValueSelected();
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  }

  private setDefaultPlacement(value: SelectOptionsPositionType) {
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

  @Watch('options')
  optionsChanged() {
    this.updateOptions();
  }

  private getValueSelected() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener('optionSelected', this.handler);
    }
    this.text = this.getText(this.value);
  }

  private updateOptions() {
    if (this.options) {
      if (typeof this.options === 'string') {
        this.internalOptions = JSON.parse(this.options);
      } else {
        this.internalOptions = this.options;
      }
    }
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

  private refDropdown = (el: HTMLElement) => {
    this.dropElement = el;
  };

  private refIconDrop = (el: HTMLBdsIconElement) => {
    this.iconDropElement = el;
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    this.isOpen = true;
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
    this.isPressed = true;
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
  };

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private getText = (value): string => {
    const opt = this.childOptions.find((option) => option.value == value);
    if (this.internalOptions) {
      const internalOption = this.internalOptions.find((option) => option.value == opt?.value);
      if (internalOption) {
        return internalOption.titleText ? internalOption.titleText : internalOption.label;
      }
    }
    return opt?.titleText ? opt?.titleText : (opt?.innerText ?? '');
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
    const isPressed = this.isPressed && !this.disabled;

    return (
      <div class="select">
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null}>
          <div
            class={{
              input: true,
              'input--state-primary': !this.danger && !this.validationDanger,
              'input--state-danger': this.danger || this.validationDanger,
              'input--state-success': this.success,
              'input--state-disabled': this.disabled,
              'input--label': !!this.label,
              'input--pressed': isPressed,
            }}
            onClick={this.onClickWrapper}
            part="input-container"
          >
            {this.renderIcon()}
            <div class="input__container">
              {this.renderLabel()}
              <div class={{ input__container__wrapper: true }}>
                <input
                  ref={this.refNativeInput}
                  class={{ input__container__text: true }}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  value={this.text}
                  disabled={this.disabled}
                  placeholder={this.placeholder}
                  readonly
                  data-test={this.dataTest}
                  onKeyDown={this.keyPressWrapper.bind(this)}
                ></input>
              </div>
            </div>
            <div class="select__icon">
              <bds-icon ref={(el) => this.refIconDrop(el)} size="small" color="inherit"></bds-icon>
            </div>
            {this.success && <bds-icon class="icon-success" name="check" theme="outline" size="xxx-small" />}
          </div>
          {this.renderMessage()}
        </div>
        <div
          ref={(el) => this.refDropdown(el)}
          class={{
            select__options: true,
            'select__options--open': this.isOpen,
          }}
          role="application"
        >
          {this.internalOptions ? (
            this.internalOptions.map((option, idx) =>
              option.icon || option.titleText ? (
                <bds-select-option
                  key={idx}
                  value={option.value}
                  title-text={option.titleText}
                  slot-align={option.slotAlign}
                  bulkOption={option.bulkOption}
                  status={option.status}
                >
                  {option.icon && (
                    <bds-icon slot="input-left" name={option.icon} size="medium" color={option.iconColor}></bds-icon>
                  )}
                  {option.label}
                </bds-select-option>
              ) : (
                <bds-select-option key={idx} value={option.value} bulkOption={option.bulkOption} status={option.status}>
                  {option.label}
                </bds-select-option>
              ),
            )
          ) : (
            <slot />
          )}
        </div>
      </div>
    );
  }
}
