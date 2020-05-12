import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Method,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";

export type ActionType = "button" | "icon";

export type VariantType = "system" | "error" | "success" | "warning";

export type ButtonActionType = "close" | "custom";

export type CreateToastType = {
  toastContainer: HTMLToastContainerElement;
  toastElement: HTMLBdsToastElement;
  actionType: ActionType;
  buttonAction: ButtonActionType;
  buttonText?: string;
  icon?: string;
  toastText?: string;
  toastTitle?: string;
  variant?: VariantType;
  duration: number;
}

@Component({
  tag: "bds-toast",
  styleUrl: "toast.scss",
  shadow: true,
})
export class BdsToast implements ComponentInterface {
  @Element() el: HTMLElement;
  /**
   * used for add the icon. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;
  /**
   * ActionType. Defines if the button should have a button or an icon. Can be one of:
   * 'icon', 'button';
   */
  @Prop() actionType: ActionType = "button";
  /**
   * Variant. Defines the color of the toast. Can be one of:
   * 'system', 'error', 'success', 'warning';
   */
  @Prop() variant: VariantType = "system";
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
   * 0 = no auto close (default value)
   */
  @Prop() duration = 0;
  /**
   * Define an action to the button toast. Can be one of:
   * 'close', 'custom';
   * if the action type is set to close, the button will close automatically.
   * if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted.
   */
  @Prop() buttonAction: ButtonActionType = "close";
  /**
   * Controls the open event of the component:
   */
  @Prop() show = false;
    /**
   * Controls the hide event of the component:
   */
  @Prop() hide = false;
  /**
   * Event used to execute some action when the action button on the toast is clicked
   */
  @Event() toastButtonClick!: EventEmitter;
  /**
   * Sends an event to be used when creating an action when clicking the toast button
   */
  private _buttonClickHandler = (event) => {
    const element = event.path.find((item) => item.localName === "bds-toast");

    if (this.buttonAction === "close") this.close(event);
    else this.toastButtonClick.emit({ element });
  };

  /**
   * Can be used outside to open the toast
   */
  @Method()
  async create({
    toastContainer,
    toastElement,
    actionType,
    buttonAction,
    buttonText,
    icon,
    toastText,
    toastTitle,
    variant,
    duration,
  }: CreateToastType) {
    toastElement.actionType = actionType || 'button';
    toastElement.buttonAction = buttonAction;
    toastElement.buttonText = buttonText;
    toastElement.icon = icon || 'info';
    toastElement.toastText= toastText;
    toastElement.toastTitle = toastTitle;
    toastElement.variant = variant || 'system';
    toastElement.duration = duration * 1000 || 0;

    toastContainer.appendChild(toastElement);
    toastElement.show = true;

    if (toastElement.duration > 0) {
      setTimeout(() => {
        toastElement.hide = true;
        setTimeout(() => {
          toastElement.remove();
        }, 400);
      }, toastElement.duration);
    }
  }

  /**
   * Can be used outside the component to close the toast
   */
  @Method()
  async close(event) {
    const element = event.path.find((item) => item.localName === "bds-toast");
    const tElement = await element.shadowRoot.childNodes[1];

    tElement.classList.remove('show');
    tElement.classList.add('hide');

    setTimeout(() => {
      element.remove();
    }, 400);
  }

  render() {
    return (
      <div
        class={{
          toast: true,
          [`toast--${this.variant}`]: true,
          [`toast--action--${this.actionType}`]: true,
          show: this.show,
          hide: this.hide
        }}
      >
        {this.icon && (
          <bds-icon
            theme="outline"
            size="x-large"
            color="#fff"
            name={this.icon}
          />
        )}
        <div class="toast__content">
          {this.toastTitle && (
            <bds-typo variant="fs-14" bold="bold">
              {this.toastTitle}
            </bds-typo>
          )}
          {this.toastText && <bds-typo variant="fs-14">{this.toastText}</bds-typo>}
        </div>
        <div
          class={{
            "toast__action": true,
            [`toast__action__${this.actionType}`]: true,
          }}
        >
          {this.actionType === "button" ? (
            <bds-button
              variant="secondary--white"
              onClick={(event) => this._buttonClickHandler(event)}
              size="short"
            >
              {this.buttonText}
            </bds-button>
          ) : (
            <bds-icon-button
              size="short"
              variant="secondary--white"
              icon="close"
              onClick={(event) => this.close(event)}
            />
          )}
        </div>
      </div>
    );
  }
}
