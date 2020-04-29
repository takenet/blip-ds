import { Component, h, Prop, Method, Element, State } from '@stencil/core';

export type ActionType = 'button'
  | 'icon';

export type ActionVariant = 'system'
  | 'error'
  | 'success'
  | 'warning';

@Component({
  tag: 'bds-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})

export class BdsToast {
  @Element() el: HTMLElement;
  /**
   * used for add the icon. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;
  /**
   * ActionType. Defines if the button should have a button or an icon. Can be one of: 
   * 'icon', 'button';
   */
  @Prop() actionType: ActionType = 'icon';
  /**
   * Variant. Defines the color of the toast. Can be one of: 
   * 'system', 'error', 'success', 'warning';
   */
  @Prop() variant: ActionVariant = 'system';
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
   * Controls the open event of the component: 
   */
  @State() show: boolean;

  /**
   * Can be used outside to open the toast
   */
  @Method()
  async open() {
    const container = document.querySelector('toast-container').shadowRoot;
    container.appendChild(this.el.cloneNode(true));
    
    if (container.childElementCount) {
      setTimeout(() => {
        container.removeChild(container.childNodes[2]);
      }, 2000);
      // TODO: Coloquei o tempo um pouco maior do que a duração da animação para garantir que o elemento será removido no tempo certo.
    }
  }

  componentWillLoad() {
    this.show = true;
  }

  render() {
    return (
      <div class={{
        "toast": true,
        [`toast--${this.variant}`]: true,
        [`toast--action--${this.actionType}`]: true,
        "show": this.show
      }}>
        {this.icon && <bds-icon theme="outline" size="x-large" color="#fff" name={this.icon}></bds-icon>}
        <div class="toast__content">
          {this.toastTitle && <bds-typo variant="fs-14" bold="bold">{this.toastTitle}</bds-typo>}
          {this.text && <bds-typo variant="fs-14">{this.text}</bds-typo>}
        </div>
        <div class={{
          "toast__action": true,
          [`toast__action__${this.actionType}`]: true,
        }}>
          {this.actionType === 'button' ?
            <bds-button variant="secondary" size="short">{this.buttonText}</bds-button> : <bds-icon size="large" name="close"></bds-icon>}
        </div>
      </div>
    );
  }
}
