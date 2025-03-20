import { Component, h, Host, Prop, State, Watch, Method } from '@stencil/core';

export type Shape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';
export type IconTheme = 'outline' | 'solid';

export type Color = 'system' | 'danger' | 'warning' | 'success' | 'neutral';

export type Type = 'status' | 'icon' | 'number' | 'empty';

@Component({
  tag: 'bds-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  /**
   * State for keep the value of the type.
   */
  @State() type?: Type = 'status';
  /**
   * Set the color of the component.
   */
  @Prop() color?: string = 'system';
  /**
   * Set the shape of the component.
   */
  @Prop() shape?: Shape = 'circle';
  /**
   * Set witch icon will be render inside the component.
   */
  @Prop() icon?: string = null;
  /**
   * Set the theme of the icon.
   */
  @Prop() iconTheme?: IconTheme = 'outline';
  /**
   * Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render.
   */
  @Prop() number?: number;
  /**
   * If true, activates the pulse animation. This prop only works if the shape prop is set to 'circle'.
   */
  @Prop() animation?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad() {
    if (this.icon === null && this.number) {
      this.type = 'number';
    } else if (!this.number && this.icon) {
      this.type = 'icon';
    } else if (this.number && this.icon) {
      this.type = 'number';
    } else if (this.number === 0) {
      this.type = 'empty';
    }
  }

  @Watch('number')
  numberChanged(newNumber: number) {
    if (newNumber === 0) {
      this.type = 'empty';
    } else if (this.icon === null && newNumber !== null) {
      this.type = 'number';
    }
  }

  @Method()
  async setColor(newColor: Color) {
    this.color = newColor;
  }

  @Method()
  async setIcon(newIcon: string) {
    this.icon = newIcon;
    this.type = 'icon';
  }

  @Method()
  async setIconTheme(newIconTheme: IconTheme) {
    this.iconTheme = newIconTheme;
  }

  @Method()
  async setNumber(newNumber: number) {
    this.number = newNumber;
    this.type = newNumber === 0 ? 'empty' : 'number';
  }

  @Method()
  async setAnimation(newAnimation: boolean) {
    this.animation = newAnimation;
  }

  @Method()
  async setType(newType: Type) {
    this.type = newType;
  }

  @Method()
  async setShape(newShape: Shape) {
    this.shape = newShape;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            chip_badge: true,
            chip_size: this.number !== 0 ? true : false,
            [`chip_badge--${this.shape}`]: true,
            [`chip_badge--${this.color}`]: true,
          }}
          data-test={this.dataTest}
        >
          {this.type === 'status' && (
            <div
              class={{
                status: true,
                [`status--${this.shape}`]: true,
                [`color--${this.color}`]: true,
                [`status--circle-${this.animation}`]: true,
              }}
            ></div>
          )}
          {this.type === 'icon' && (
            <div class={{ icon: true, [`icon--${this.shape}`]: true }}>
              <div class={{ [`color--${this.color}`]: true, trim: true, [`trim-${this.animation}`]: true }}></div>
              <bds-icon size="xxx-small" name={this.icon} theme={this.iconTheme}></bds-icon>
            </div>
          )}
          {this.type === 'number' && (
            <div
              class={{
                number: true,
                [`color--${this.color}`]: true,
                [`number--${this.animation}`]: true,
              }}
            >
              <bds-typo class="number_text" variant="fs-12" bold="bold" margin={false}>
                {this.number >= 999 ? '999+' : this.number}
              </bds-typo>
            </div>
          )}
          {this.type === 'empty' && (
            <div
              class={{
                empty: true,
                [`color--${this.color}`]: true,
                [`empty--${this.shape}`]: true,
                [`empty--${this.animation}`]: true,
              }}
            ></div>
          )}
        </div>
      </Host>
    );
  }
}
