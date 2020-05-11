import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Method,
  Element,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";

export type ActionType = "button" | "icon";

export type ActionVariant = "system" | "error" | "success" | "warning";

export type ButtonActionType = "close" | "custom";

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
  @Prop() toastName: string = null;
  /**
   * used for add the icon. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;
  /**
   * ActionType. Defines if the button should have a button or an icon. Can be one of:
   * 'icon', 'button';
   */
  @Prop() actionType: ActionType = "icon";
  /**
   * Variant. Defines the color of the toast. Can be one of:
   * 'system', 'error', 'success', 'warning';
   */
  @Prop() variant: ActionVariant = "system";
  /**
   * The title of the component:
   */
  @Prop() toastTitle: string;
  /**
   * The text content of the component:
   */
  @Prop() text: string;
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
   * Define an action to the button toast
   */
  @Prop() buttonAction: ButtonActionType = "custom";
  /**
   * Controls the open event of the component:
   */
  @State() show: boolean;
  /**
   * Event used to execute some action when the action button on the toast is clicked
   */
  @Event() toastButtonClick!: EventEmitter;
  /***
   * Time used on settimeout function
   * The value is the multiplication of the duration prop to 1000
   */
  private presentetionDurationTime = 0;
  /**
   * Sends an event to be used when creating an action when clicking the toast button
   */
  private _buttonClickHandler = (event) => {
    const element = event.path.find((item) => item.localName === "bds-toast");

    if (this.buttonAction === "close") this.close(event);
    else this.toastButtonClick.emit({ element });
  };
  /**
   * element container fo toast
   */
  private elementContainer = document.querySelector("toast-container")
    .shadowRoot;

  /**
   * Can be used outside to open the toast
   */
  @Method()
  async open() {
    this.presentetionDurationTime = this.duration * 1000;

    const cloneElement: any = this.el.cloneNode(true);
    cloneElement.id = Math.floor(Math.random() * 2000);
    this.elementContainer.appendChild(cloneElement);

    if (this.presentetionDurationTime > 0) {
      setTimeout(() => {
        this.elementContainer.removeChild(this.elementContainer.childNodes[2]);
      }, this.presentetionDurationTime);
    }
  }

  /**
   * Can be used outside the component to close the toast
   */
  @Method()
  async close(event) {
    const element = event.path.find((item) => item.localName === "bds-toast");
    const tElement = await element.shadowRoot.childNodes[1];

    tElement.classList.remove("show");
    tElement.classList.add("hidde");

    setTimeout(() => {
      element.remove();
    }, 400);
  }

  componentWillLoad() {
    this.show = true;
  }

  render() {
    return (
      <div
        class={{
          toast: true,
          [`toast--${this.variant}`]: true,
          [`toast--action--${this.actionType}`]: true,
          show: this.show,
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
          {this.text && <bds-typo variant="fs-14">{this.text}</bds-typo>}
        </div>
        <div
          class={{
            // eslint-disable-next-line @typescript-eslint/camelcase
            toast__action: true,
            [`toast__action__${this.actionType}`]: true,
          }}
        >
          {this.actionType === "button" ? (
            <bds-button
              // variant={this.variant}
              variant="secondary_white"
              onClick={(event) => this._buttonClickHandler(event)}
              size="short"
            >
              {this.buttonText}
            </bds-button>
          ) : (
            <bds-icon-button
              size="standard"
              // variant={this.variant}
              variant="secondary_white"
              icon="close"
              onClick={(event) => this.close(event)}
            />
          )}
        </div>
      </div>
    );
  }
}
