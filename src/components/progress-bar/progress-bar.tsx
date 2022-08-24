import { Component, Host, Prop, h } from '@stencil/core';

export type progressBarSize = 'short' | 'tall';

export type progressBarStatus = 'default' | 'positive' | 'information' | 'warning';

@Component({
  tag: 'bds-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true,
})
export class BdsProgressBar {
  /**
   * Percent, property to enter the progress bar status percentage value.
   */
  @Prop() percent?: number = 0;
  /**
   * Size, property to define size of component.
   */
  @Prop() size?: progressBarSize = 'short';
  /**
   * Text, property to define status of component.
   */
  @Prop() status?: progressBarStatus = 'default';
  /**
   * Text, property to enable the bar info text.
   */
  @Prop() text?: string = '';

  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (
      <Host>
        <div class={{ progress_bar: true, [`size_${this.size}`]: true }}>
          <div class={{ bar_behind: true }}>
            <div class={{ progress: true, [`status_${this.status}`]: true }} style={styles}></div>
          </div>
        </div>
        {this.text && (
          <div class={{ typo_progress: true }}>
            <bds-typo>{this.text}</bds-typo>
          </div>
        )}
      </Host>
    );
  }
}
