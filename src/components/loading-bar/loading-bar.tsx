import { Component, Host, Prop, h } from '@stencil/core';

export type loadingBarSize = 'small' | 'default';

@Component({
  tag: 'bds-loading-bar',
  styleUrl: 'loading-bar.scss',
  shadow: true,
})
export class BdsloadingBar {
  /**
   * Percent, property to enter the loading bar status percentage value.
   */
  @Prop() percent?: number = 0;
  /**
   * Size, property to define size of component.
   */
  @Prop() size?: loadingBarSize = 'default';
  /**
   * Text, property to enable the bar info text.
   */
  @Prop() text?: string = '';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (
      <Host>
        <div class={{ loading_bar: true, [`size_${this.size}`]: true }} data-test={this.dataTest}>
          <div class={{ bar_behind: true }}>
            <div class={{ loading: true }} style={styles}>
              <div class="loader"></div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
