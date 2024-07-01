import { Component, Prop, Element, Event, EventEmitter, h, Host, State, Method } from '@stencil/core';
import { LoadingSpinnerVariant } from '../loading-spinner/loading-spinner';
import { colorsVariants } from '../loading-spinner/loading-spinner';

export type ButtonSize = 'tall' | 'standard' | 'short' | 'medium' | 'large';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'delete'
  | 'secondary--white'
  | 'ghost'
  | 'dashed'
  | 'facebook'
  | 'solid'
  | 'outline'
  | 'text';

export type ButtonType = 'button' | 'submit' | 'reset';

export type IconType = 'icon' | 'logo' | 'emoji';

export type IconTheme = 'outline' | 'solid';

@Component({
  tag: 'bds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() el!: HTMLElement;

  @State() slotText: string;
  @State() active: boolean;
  @State() position: string;
  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() block?: boolean = false;

  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  @Prop() color?: string = 'primary';
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'tall', 'standard', 'short';
   */
  @Prop() size?: ButtonSize = 'medium';

  /**
   * Variant. Entered as one of the variant. Can be one of:
   * 'primary', 'secondary', 'ghost', 'dashed';
   */
  @Prop() variant?: ButtonVariant = 'solid';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) iconLeft?: string = null;

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) iconRight?: string = null;

  /**
   * The arrow button
   */
  @Prop() arrow?: boolean = false;

  /**
   * The type of the button. Can be one of:
   * 'button', 'submit', 'reset';
   */
  @Prop() type: ButtonType = 'button';

  /**
   * The theme of the icon. Can be one of:
   * 'outline', 'solid';
   */
  @Prop({ reflect: true }) iconTheme: IconTheme = 'outline';

  /**
   * The type of the icon. Can be one of:
   * 'icon', 'logo', 'emoji';
   */
  @Prop({ reflect: true }) typeIcon: IconType = 'icon';

  /**
   * 	If true, shows the loading spinner
   */
  @Prop() bdsLoading?: boolean = false;

  /**
   * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
   */
  @Prop() bdsLoadingVariant?: LoadingSpinnerVariant = 'primary';

  /**
   * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
   */
  @Prop() bdsLoadingColor?: colorsVariants = 'main';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Event buttom onClick.
   */
  @Event() bdsClick: EventEmitter;

  @Method()
  async isActive(value) {
    this.active = value;
  }

  @Method()
  async setPosition(position: 'first' | 'last' | 'middle') {
    this.position = position;
  }

  componentDidLoad() {
    this.logSlotText();
  }

  logSlotText() {
    const slot = this.el.shadowRoot.querySelector('slot');
    const onlyIconElement = this.el.shadowRoot.querySelector('button') as HTMLElement;

    if (slot) {
      const assignedNodes = slot.assignedNodes();

      let slotText = '';
      assignedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          slotText += node.textContent;
        }
      });
      if (slotText === '' && this.size === 'medium') {
        onlyIconElement.classList.add('button__only-icon--medium');
      }
      if (slotText === '' && this.size === 'large') {
        onlyIconElement.classList.add('button__only-icon--large');
      }
    }
  }

  renderLoadingSpinner(): HTMLBdsLoadingSpinnerElement {
    const loadingColor = this.color === 'primary' ? 'light' : this.color === 'content' ? 'light' : 'main';
    return <bds-loading-spinner size="small" color={loadingColor}></bds-loading-spinner>;
  }

  private handleClick = (ev) => {
    if (!this.disabled) {
      if (ev.key == 'Enter') {
        this.bdsClick.emit(ev);
      }
      if (ev.type == 'click') {
        this.bdsClick.emit(ev);
      }

      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  render(): HTMLElement {
    return (
      <Host class={{ host: true, block: this.block }}>
        <div tabindex="0" onKeyDown={(ev) => this.handleClick(ev)} class="focus"></div>
        <button
          onClick={(ev) => this.handleClick(ev)}
          disabled={this.disabled}
          tabindex="-1"
          aria-disabled={this.disabled ? 'true' : 'false'}
          aria-live="assertive"
          type={this.type}
          class={{
            button: true,
            'button--block': this.block,
            [`button__position--${this.position}`]: true,
            'button--active': this.active,
            [`button__variant--${this.variant}`]: true,
            [`button__${this.variant}`]: true,
            [`button__color--${this.color}`]: true,
            [`button__${this.variant}--disabled`]: this.disabled,
            [`button__size--${this.size}`]: true,
          }}
          part="button"
          data-test={this.dataTest}
        >
          {this.bdsLoading ? this.renderLoadingSpinner() : ''}
          {this.iconLeft ? (
            <bds-icon
              class={{ icon_buttom: true, hide: this.bdsLoading }}
              name={this.iconLeft}
              theme={this.iconTheme}
              type={this.typeIcon}
              color="inherit"
              size={'medium'}
            ></bds-icon>
          ) : (
            ''
          )}
          <bds-typo
            class={{ typo_buttom: true, hide: this.bdsLoading }}
            variant="fs-14"
            lineHeight="simple"
            bold="bold"
          >
            <slot></slot>
          </bds-typo>
          {this.iconRight ? (
            <bds-icon
              class={{ icon_buttom: true, hide: this.bdsLoading }}
              name={this.iconRight}
              color="inherit"
            ></bds-icon>
          ) : (
            ''
          )}

          {/* {[this.bdsLoading && this.renderLoadingSpinner(), this.renderIcon(), this.renderText(), this.renderArrow()]} */}
        </button>
      </Host>
    );
  }
}
