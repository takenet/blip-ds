import { Component, Prop, Element, Event, EventEmitter, h, Host, State, Method, Watch } from '@stencil/core';
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

export type ButtonJustifyContent = 'center' | 'space-between';

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
  @State() direction: string;
  @State() group = false;
  @State() loadingColor: colorsVariants;
  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() block?: boolean = false;

  /**
   * 	If true, the button will occupy 100% width with centered content.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * 	Controls the horizontal alignment of button content.
   * 	'center' - content is centered (default)
   * 	'space-between' - left content aligned left, right content aligned right
   */
  @Prop() justifyContent?: ButtonJustifyContent = 'center';

  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  @Prop({ mutable: true }) color?: string = 'primary';
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'tall', 'standard', 'short';
   */
  @Prop({ mutable: true }) size?: ButtonSize = 'medium';

  /**
   * Variant. Entered as one of the variant. Can be one of:
   * 'primary', 'secondary', 'ghost', 'dashed';
   */
  @Prop({ mutable: true }) variant?: ButtonVariant = 'solid';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

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
    this.position ? (this.group = true) : false;
  }

  @Method()
  async setDirection(direction: 'row' | 'column') {
    this.direction = direction;
  }

  @Method()
  async setSize(size: ButtonSize) {
    this.size = size;
  }

  @Method()
  async setColor(color: 'primary' | 'content' | 'negative' | 'positive') {
    this.color = color;
  }

  @Method()
  async setVariant(variant: ButtonVariant) {
    this.variant = variant;
  }

  componentDidRender() {
    this.logSlotText();
    this.buttonLegacy();
  }

  buttonLegacy() {
    this.variant === 'facebook' ? this.setVariant('outline') : this.setVariant(this.variant);
    this.size === 'tall'
      ? this.setSize('large')
      : this.size === 'standard'
        ? this.setSize('medium')
        : this.setSize(this.size);
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
      if (slotText === '' && this.size === 'short') {
        onlyIconElement.classList.add('button__only-icon--short');
      }
    }
  }

  @Watch('bdsLoading')
  renderLoadingSpinner(): HTMLBdsLoadingSpinnerElement {
    if (this.variant === 'solid') {
      if (['primary', 'positive', 'negative'].includes(this.color)) {
        this.loadingColor = 'light';
      } else if (this.color === 'content') {
        this.loadingColor = 'content';
      }
    } else if (this.variant === 'outline' || this.variant === 'text') {
      this.loadingColor = this.color === 'positive' ? 'positive' : this.color === 'negative' ? 'negative' : 'main';
    }
    return <bds-loading-spinner size="extra-small" color={this.loadingColor}></bds-loading-spinner>;
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
      <Host class={{ host: true, block: this.block || this.fullWidth, group: this.group }}>
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
            'button--full-width': this.fullWidth,
            'button--group': this.group,
            [`button__justify-content--${this.justifyContent}`]: true,
            [`button__position--${this.direction}--${this.position}`]: true,
            'button--active': this.active,
            [`button__variant--${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
            [`button__${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
            [`button__color--${this.variant === 'delete' ? 'negative' : this.color}`]: true,
            [`button__variant--${this.variant}--disabled`]: this.disabled,
            [`button__size--${this.size}`]: true,
          }}
          part="button"
          data-test={this.dataTest}
        >
          {this.bdsLoading ? this.renderLoadingSpinner() : ''}
          {this.iconLeft || this.icon ? (
            <bds-icon
              class={{ icon_buttom: true, hide: this.bdsLoading }}
              name={this.icon ? this.icon : this.iconLeft}
              theme={this.iconTheme}
              type={this.typeIcon}
              color="inherit"
              size={'medium'}
            ></bds-icon>
          ) : (
            ''
          )}
          <bds-typo
            class={{ typo_buttom: true, button__content:true, hide: this.bdsLoading }}
            variant="fs-14"
            lineHeight="simple"
            bold="bold"
          >
            <slot></slot>
          </bds-typo>
          {this.iconRight || this.arrow ? (
            <bds-icon
              class={{ icon_buttom: true, hide: this.bdsLoading }}
              name={this.arrow ? 'arrow-right' : this.iconRight}
              color="inherit"
              theme={this.iconTheme}
              type={this.typeIcon}
            ></bds-icon>
          ) : (
            ''
          )}
        </button>
      </Host>
    );
  }
}
