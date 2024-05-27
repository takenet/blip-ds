import { Component, ComponentInterface, h, Prop, Method, Element, Event, EventEmitter } from '@stencil/core';
import {
  ActionType,
  VariantType,
  ButtonActionType,
  CreateToastType,
  IconVariantMap,
  PositionType,
} from './toast-interface';
@Component({
  tag: 'bds-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class BdsToast implements ComponentInterface {
  @Element() el: HTMLBdsToastElement;
  /**
   * used for add the icon. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;
  /**
   * ActionType. Defines if the button should have a button or an icon. Can be one of:
   * 'icon', 'button';
   */
  @Prop() actionType: ActionType = 'button';
  /**
   * Variant. Defines the color of the toast. Can be one of:
   * 'system', 'error', 'success', 'warning', 'undo', 'redo';
   */
  @Prop() variant: VariantType = 'system';
  /**
   * The title of the component:
   */
  @Prop() toastTitle: string;
  /**
   * The text content of the component:
   */
  @Prop() toastText: string;
  /**
   * If the action type is button, this will be the text of the button:
   */
  @Prop() buttonText: string;
  /**
   * Time to close the toast in seconds
   * 0 = never close automatically (default value)
   */
  @Prop() duration = 0;
  /**
   * Define an action to the button toast. Can be one of:
   * 'close', 'custom';
   * if the action type is set to close, the button will close automatically.
   * if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted.
   */
  @Prop() buttonAction: ButtonActionType = 'close';
  /**
   * Controls the open event of the component:
   */
  @Prop() show = false;
  /**
   * Controls the hide event of the component:
   */
  @Prop() hide = false;
  /**
   * The toast position on the screen. Can be one of:
   * 'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);
   */
  @Prop() position: PositionType = 'bottom-left';

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonAction is the data-test to button action.
   */
  @Prop() dtButtonAction?: string = null;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonClose is the data-test to button close.
   */
  @Prop() dtButtonClose?: string = null;
  /**
   * Event used to execute some action when the action button on the toast is clicked
   */
  @Event() toastButtonClick!: EventEmitter;
  /**
   * Sends an event to be used when creating an action when clicking the toast button
   */
  private _buttonClickHandler = () => {
    if (this.buttonAction === 'close') this.close();
    else {
      this.toastButtonClick.emit(this.el);
      this.close();
    }
  };

  private _keyPressHandler(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.buttonAction === 'close') this.close();
      else {
        this.toastButtonClick.emit(this.el);
        this.close();
      }
    }
  }

  /**
   * Can be used outside to open the toast
   */
  @Method()
  async create({
    actionType,
    buttonAction,
    buttonText,
    icon,
    toastText,
    toastTitle,
    variant,
    duration,
  }: CreateToastType) {
    let toastContainer = document.querySelector(
      `bds-toast-container.${variant === 'notification' ? 'top-right' : 'bottom-left'}`,
    );

    if (toastContainer) {
      toastContainer.appendChild(this.el);
      toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
    } else {
      toastContainer = document.createElement('bds-toast-container');
      toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
      document.body.appendChild(toastContainer);
      toastContainer.appendChild(this.el);
    }
    this.el.actionType = actionType || 'button';
    this.el.buttonAction = buttonAction || 'close';
    this.el.buttonText = buttonText;
    this.el.toastText = toastText;
    this.el.toastTitle = toastTitle;
    this.el.variant = variant || 'system';
    this.el.duration = duration * 1000 || 0;
    this.el.position = variant === 'notification' ? 'top-right' : 'bottom-left';

    this.el.icon = icon ?? this.mapIconName[this.variant];

    this.el.show = true;

    if (this.el.duration > 0) {
      setTimeout(() => {
        this.el.hide = true;
        setTimeout(() => {
          this.el.remove();
        }, 400);
      }, this.el.duration);
    }
  }

  /**
   * Can be used outside the component to close the toast
   */
  @Method()
  async close() {
    if (this.el.shadowRoot) {
      this.el.shadowRoot.querySelector('div').classList.remove('show');
      this.el.shadowRoot.querySelector('div').classList.add('hide');
    } else {
      this.el.querySelector('div').classList.remove('show');
      this.el.querySelector('div').classList.add('hide');
    }

    setTimeout(() => {
      this.el.remove();
    }, 400);
  }

  private mapIconName: IconVariantMap = {
    system: 'bell',
    error: 'error',
    success: 'like',
    warning: 'attention',
    undo: 'undo',
    redo: 'redo',
    notification: 'notification',
  };

  render() {
    return (
      <div
        class={{
          toast: true,
          [`toast--${this.variant}`]: true,
          [`toast--action--${this.actionType}`]: true,
          [`show show--${this.position}`]: this.show,
          hide: this.hide,
        }}
      >
        {this.variant === 'notification' && <bds-icon class="toast__ballon" theme="solid" name="blip-chat" size='brand' />}
        {this.icon && <bds-icon class="toast__icon" theme="outline" size="medium" name={this.icon} />}
        <div class="toast__content">
          {this.toastTitle && (
            <bds-typo variant="fs-14" bold="bold">
              {this.toastTitle}
            </bds-typo>
          )}
          {this.toastText && <bds-typo variant="fs-14" innerHTML={this.toastText}></bds-typo>}
        </div>
        <div
          class={{
            toast__action: true,
            [`toast__action__${this.actionType}`]: true,
          }}
        >
          {this.actionType === 'button' ? (
            <bds-button
              onKeyDown={this._keyPressHandler.bind(this)}
              tabindex="0"
              onClick={() => this._buttonClickHandler()}
              variant="secondary"
              size="standard"
              dataTest={this.dtButtonAction}
            >
              {this.buttonText}
            </bds-button>
          ) : (
            <bds-button-icon
              onClick={() => this._buttonClickHandler()}
              size="short"
              onKeyDown={this._keyPressHandler.bind(this)}
              tabindex="0"
              variant="secondary"
              icon="close"
              dataTest={this.dtButtonClose}
            />
          )}
        </div>
      </div>
    );
  }
}
