import { Component, Host, Prop, h } from '@stencil/core';

export type loadingBarSize = 'short' | 'tall';

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
  @Prop() size?: loadingBarSize = 'short';
  /**
   * Text, property to enable the bar info text.
   */
  @Prop() text?: string = '';

  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (
      <Host>
        <div class={{ loading_bar: true, [`size_${this.size}`]: true }}>
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
