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
  @State() isEditing? = false;

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
   * Add state danger on input, use for use feedback. If true avoid save confirmation.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

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
          {!this.isEditing ? (
            <div class="input__editable--static" onClick={this.handleEditing}>
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
          ) : (
            <div class="input__editable--active">
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
                danger={this.danger}
              ></bds-input>
              <bds-icon
                key="error-icon"
                class="input__editable--active__icon--error"
                theme="solid"
                name="error"
                onClick={this.handleEditing}
              ></bds-icon>
              <bds-icon
                key="checkball-icon"
                class="input__editable--active__icon--checkball"
                theme="solid"
                name="checkball"
                onClick={this.handleSaveText}
              ></bds-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
