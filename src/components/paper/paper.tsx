import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { PaperElevation, PaperElevationMap } from './paper-interface';

@Component({
  tag: 'bds-paper',
  styleUrl: 'paper.scss',
  shadow: true,
})
export class Paper implements ComponentInterface {
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'static', 'primary', 'secondary';
   */
  @Prop() elevation?: PaperElevation = 'static';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Prop for set the height of the component.
   */
  @Prop() height?: string = null;

  /**
   * Prop for set the width of the component.
   */
  @Prop() width?: string = null;

  private mapElevation: PaperElevationMap = {
    static: 'paper__elevation--static',
    primary: 'paper__elevation--primary',
    secondary: 'paper__elevation--secondary',
  };

  render() {
    const elevation = this.mapElevation[this.elevation];

    return (
      <Host class={{ [elevation]: true }} style={{ height: `${this.height}`, width: `${this.width}` }}>
        <div class="paper__display" data-test={this.dataTest}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
