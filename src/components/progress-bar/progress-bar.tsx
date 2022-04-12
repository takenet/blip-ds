import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'bds-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true,
})
export class BdsProgressBar {
  /**
   * Percent, description.
   */
  @Prop() percent?: number = 0;
  /**
   * Text, description.
   */
  @Prop() text?: boolean = false;

  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (
      <Host>
        <div class={{ bar_bottom: true }}>
          <div class={{ progress: true }} style={styles}></div>
        </div>
        {this.text && (
          <div class={{ typo_progress: true }}>
            <bds-typo>{`${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}% Completo`}</bds-typo>
          </div>
        )}
      </Host>
    );
  }
}
