import { Component, h, Host, Prop } from '@stencil/core';
import { direction, justifyContent, flexWrap, alignItems, breakpoint, gap, padding, margin } from './grid-interface';
@Component({
  tag: 'bds-grid',
  styleUrl: 'grid.scss',
  scoped: true,
})
export class Grid {
  @Prop() height?: string;
  @Prop() direction?: direction;
  @Prop() justifyContent?: justifyContent;
  @Prop() flexWrap?: flexWrap;
  @Prop() alignItems?: alignItems;
  @Prop() container?: boolean;
  @Prop() containerFluid?: boolean;
  @Prop() xxs?: breakpoint;
  @Prop() xs?: breakpoint;
  @Prop() sm?: breakpoint;
  @Prop() md?: breakpoint;
  @Prop() lg?: breakpoint;
  @Prop() xg?: breakpoint;
  @Prop() xxsOffset?: breakpoint;
  @Prop() xsOffset?: breakpoint;
  @Prop() smOffset?: breakpoint;
  @Prop() mdOffset?: breakpoint;
  @Prop() lgOffset?: breakpoint;
  @Prop() xgOffset?: breakpoint;
  @Prop() gap?: gap;
  @Prop() padding?: padding;
  @Prop() margin?: margin;
  render() {
    return (
      <Host
        class={{
          host: true,
          [`direction--${this.direction}`]: true,
          [`justify_content--${this.justifyContent}`]: true,
          [`${this.container === true ? 'container' : ''}`]: true,
          [`${this.containerFluid === true ? 'container-fluid' : ''}`]: true,
          [`flex_wrap--${this.flexWrap}`]: true,
          [`align_items--${this.alignItems}`]: true,
          [`xxs--${this.xxs}`]: true,
          [`xs--${this.xs}`]: true,
          [`sm--${this.sm}`]: true,
          [`md--${this.md}`]: true,
          [`lg--${this.lg}`]: true,
          [`xg--${this.xg}`]: true,
          [`gap--${this.gap}`]: true,
          [`xxsoffset--${this.xxsOffset}`]: true,
          [`xsoffset--${this.xsOffset}`]: true,
          [`smoffset--${this.smOffset}`]: true,
          [`mdoffset--${this.mdOffset}`]: true,
          [`lgoffset--${this.lgOffset}`]: true,
          [`xgoffset--${this.xgOffset}`]: true,
          [`padding--${this.padding}`]: true,
          [`margin--${this.margin}`]: true,
        }}
        style={{ height: this.height }}
      >
        <slot></slot>
      </Host>
    );
  }
}
