import { Component, Prop, State, Event, EventEmitter, Element, h, Host } from '@stencil/core';

export interface InputEditableEventDetail {
  value: string;
  oldValue: string;
}

@Component({
  tag: 'bds-input-editable',
  styleUrl: 'input-editable.scss',
  shadow: true,
})
export class InputEditable {
  @Element() el!: HTMLBdsInputEditableElement;

  /**
   * Emitted when input text confirm.
   */
  @Event() bdsInputEditableSave: EventEmitter<InputEditableEventDetail>;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isEditing = false;

  /**
   * Used to block the confirm icon.
   */
  @State() isValid = true;

  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Error message when input is required
   */
  @Prop() requiredErrorMessage: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number = 0;

  /**
   * Error message when the value is lower than the minlength
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';

  /**
   * Indicated to pass a help to the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Add state danger on input, use for use feedback. If true avoid save confirmation.
   */
  @Prop({ mutable: true, reflect: true }) danger?: boolean = false;

  private onInputChange = (event) => {
    if (event.detail) {
      if (event.detail.value.length < Number(this.minlength)) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    }
  };

  private handleEditing = (): void => {
    this.toggleEditing();
  };

  private toggleEditing = (): void => {
    this.isEditing = !this.isEditing;
  };

  private handleSaveText = (): void => {
    const newValue = this.el.shadowRoot.querySelector('bds-input').value;
    if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
      this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.value });
      this.value = newValue;
      this.toggleEditing();
    }
  };

  render() {
    return (
      <Host>
        <div class="input__editable">
          <div
            class={{ 'input__editable--static': true, 'input__editable--hidden': this.isEditing }}
            onClick={this.handleEditing}
          >
            <bds-typo
              tag="span"
              part="input__editable--static__typo"
              class="input__editable--static__typo"
              variant="fs-24"
            >
              {this.value}
            </bds-typo>
            <bds-icon key="edit-icon" class="input__editable--static__icon" name="edit"></bds-icon>
          </div>
          <div class={{ 'input__editable--active': true, 'input__editable--hidden': !this.isEditing }}>
            <bds-input
              type="text"
              input-name={this.inputName}
              value={this.value}
              minlength={this.minlength}
              minlengthErrorMessage={this.minlengthErrorMessage}
              maxlength={this.maxlength}
              required={true}
              required-error-message={this.requiredErrorMessage}
              error-message={this.errorMessage}
              onBdsChange={this.onInputChange}
              danger={this.danger}
              helperMessage={this.helperMessage}
            ></bds-input>
            <div class="input__editable--active__icon">
              <bds-icon
                key="error-icon"
                class="input__editable--active__icon--error"
                theme="solid"
                name="error"
                onClick={this.handleEditing}
              ></bds-icon>
              <bds-icon
                key="checkball-icon"
                class={{
                  'input__editable--active__icon--checkball': true,
                  'input__editable--active__icon--checkball--error': !this.isValid,
                }}
                theme="solid"
                name="checkball"
                onClick={this.handleSaveText}
              ></bds-icon>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
