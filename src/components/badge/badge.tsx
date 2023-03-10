import { Component, h, Host, Prop, State } from '@stencil/core';

export type Shape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';

export type Color = 'system' | 'danger' | 'warning' | 'success' | 'neutral';

export type Type = 'status' | 'icon' | 'number';

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
   * Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render.
   */
  @Prop() number?: number = null;
  /**
   * If true, actived the pulse animation.
   */
  @Prop() animation?: boolean = false;

  componentDidLoad() {
    if (this.icon === null && this.number) {
      this.type = 'number';
    } else if (this.number === null && this.icon) {
      this.type = 'icon';
    } else if (this.number && this.icon) {
      this.type = 'number';
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            chip_badge: true,
            [`chip_badge--${this.shape}`]: true,
            [`chip_badge--${this.color}`]: true,
          }}
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
              <bds-icon size="xxx-small" name={this.icon}></bds-icon>
            </div>
          )}
          {this.type === 'number' && (
            <div class={{ number: true, [`color--${this.color}`]: true, [`number--${this.animation}`]: true }}>
              <bds-typo variant="fs-12" bold="bold" margin={false}>
                {this.number >= 999 ? '999+' : this.number}
              </bds-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
