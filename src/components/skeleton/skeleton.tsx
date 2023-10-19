import { Component, h, Host, Prop } from '@stencil/core';

export type Shape = 'circle' | 'square';

@Component({
  tag: 'bds-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  @Prop() shape?: Shape = 'square';
  @Prop() height?: string = '50px';
  @Prop() width?: string = '100%';
  render() {
    return (
      <Host
        style={{
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          width: this.width,
          height: this.height,
          borderRadius: this.shape === 'circle' ? '50%' : '8px',
        }}
      >
        <bds-grid xxs="12" class={{ skeleton: true, [`skeleton_shape--${this.shape}`]: true }}></bds-grid>
        <div class="animation"></div>
      </Host>
    );
  }
}
