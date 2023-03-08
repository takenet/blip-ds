import { Component, h, Host, Prop } from '@stencil/core';

export type Shape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';

export type Color = 'system' | 'danger' | 'warning' | 'success' | 'neutral';

export type Type = 'status' | 'icon' | 'text';

@Component({
  tag: 'bds-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  @Prop() color?: string = 'system';
  @Prop() shape?: Shape;
  @Prop() type?: Type;
  @Prop() icon?: string;
  @Prop() text?: string;

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
              }}
            ></div>
          )}
          {this.type === 'icon' && (
            <div class={{ icon: true, [`icon--${this.shape}`]: true, [`color--${this.color}`]: true }}>
              <bds-icon size="xxx-small" name={this.icon}></bds-icon>
            </div>
          )}
          {this.type === 'text' && (
            <div class={{ text: true, [`color--${this.color}`]: true }}>
              <bds-typo variant="fs-12" bold="bold" margin={false}>
                {this.text}
              </bds-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
