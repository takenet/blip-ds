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

  private mapElevation: PaperElevationMap = {
    static: 'paper__elevation--static',
    primary: 'paper__elevation--primary',
    secondary: 'paper__elevation--secondary',
  };

  render() {
    const elevation = this.mapElevation[this.elevation];

    return (
      <Host class={{ [elevation]: true }}>
        <div data-test={this.dataTest}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
