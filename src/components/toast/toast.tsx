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
    position,
  }: CreateToastType) {
    let toastContainer = document.querySelector(`bds-toast-container.${position}`);

    if (toastContainer) {
      toastContainer.appendChild(this.el);
      toastContainer.classList.add(position);
    } else {
      toastContainer = document.createElement('bds-toast-container');
      toastContainer.classList.add(position);
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
    this.el.position = position || 'bottom-left';

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
    undo: 'undo-arrow',
    redo: 'redo-arrow',
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
        {this.icon && <bds-icon theme="outline" size="x-large" color="#fff" name={this.icon} />}
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
            <button onClick={() => this._buttonClickHandler()}>
              <bds-button variant="secondary--white" size="short">
                {this.buttonText}
              </bds-button>
            </button>
          ) : (
            <button onClick={() => this._buttonClickHandler()}>
              <bds-icon-button size="short" variant="secondary--white" icon="close" />
            </button>
          )}
        </div>
      </div>
    );
  }
}
