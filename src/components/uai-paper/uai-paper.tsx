import { Component, ComponentInterface, Host, h, Prop, State, Watch } from '@stencil/core';
import { PaperElevation, PaperBackground, BorderColor } from './uai-paper-interface';

@Component({
  tag: 'uai-paper',
  styleUrl: 'uai-paper.scss',
  shadow: true,
})
export class UaiPaper implements ComponentInterface {
  @State() hasBorder = true;
  @State() constElevation: string;
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'static', 'primary', 'secondary';
   */
  @Prop({ mutable: true, reflect: true }) elevation?: PaperElevation = 'static';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Prop for set the border of the component.
   */
  @Prop() border?: boolean = false;
  /**
   * Prop for set the height of the component.
   */
  @Prop() height?: string = null;

  /**
   * Prop for set the width of the component.
   */
  @Prop() width?: string = null;

  /**
   * Prop for set the background color.
   */
  @Prop() bgColor?: PaperBackground = 'surface-1';

  /**
   * Prop for set the border color.
   */
  @Prop() borderColor?: BorderColor = null;

  @Watch('border')
  borderChanged() {
    this.hasBorder = this.border !== true;
  }

  componentWillLoad() {
    this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
  }

  render() {
    return (
      <Host
        class={{
          [`paper__elevation--${this.elevation}`]: this.hasBorder,
          border: this.border,
          [`bg-${this.bgColor}`]: true,
          [`border-${this.borderColor}`]: true,
        }}
        style={{ height: `${this.height}`, width: `${this.width}` }}
      >
        <div class="paper__display" data-test={this.dataTest}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
