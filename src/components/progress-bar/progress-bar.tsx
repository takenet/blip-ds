import { Component, Host, Prop, h } from '@stencil/core';

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
   * Text, property to enable the bar info text.
   */
  @Prop() text?: string = '';

  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (
      <Host>
        <div class={{ bar_behind: true }}>
          <div class={{ progress: true }} style={styles}></div>
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
