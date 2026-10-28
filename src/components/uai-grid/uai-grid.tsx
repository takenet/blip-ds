import { Component, h, Host, Prop } from '@stencil/core';
import type { Color } from '../grid/color-grid-interface';
import type {
  alignItems,
  breakpoint,
  direction,
  flexWrap,
  gap,
  justifyContent,
  margin,
  padding,
} from '../grid/grid-interface';

/**
 * UAI layout grid. The legacy bds-grid remains available; this component keeps
 * its layout props while using UAI dimensions and theme-aware color tokens.
 *
 * @slot - Grid items, including nested uai-grid elements.
 */
@Component({
  tag: 'uai-grid',
  styleUrl: 'uai-grid.scss',
  shadow: true,
})
export class UaiGrid {
  /** Sets an explicit height on the grid container. */
  @Prop() height?: string;

  /** Controls the flex direction of children. */
  @Prop() direction?: direction;

  /** Controls how children are distributed along the main axis. */
  @Prop() justifyContent?: justifyContent;

  /** Controls whether children wrap to another line. */
  @Prop() flexWrap?: flexWrap;

  /** Controls the alignment of children along the cross axis. */
  @Prop() alignItems?: alignItems;

  /** Applies a centered container capped by the UAI width-content token. */
  @Prop() container?: boolean;

  /** Applies the wider responsive fluid-container max widths compatible with bds-grid. */
  @Prop() containerFluid?: boolean;

  /** Base 12-column span. */
  @Prop() xxs?: breakpoint;

  /** 12-column span from the legacy xs breakpoint. */
  @Prop() xs?: breakpoint;

  /** 12-column span from the legacy sm breakpoint. */
  @Prop() sm?: breakpoint;

  /** 12-column span from the legacy md breakpoint. */
  @Prop() md?: breakpoint;

  /** 12-column span from the legacy lg breakpoint. */
  @Prop() lg?: breakpoint;

  /** 12-column span from the legacy xg breakpoint. */
  @Prop() xg?: breakpoint;

  /** Base left offset in the 12-column grid. */
  @Prop() xxsOffset?: breakpoint;

  /** Left offset from the legacy xs breakpoint. */
  @Prop() xsOffset?: breakpoint;

  /** Left offset from the legacy sm breakpoint. */
  @Prop() smOffset?: breakpoint;

  /** Left offset from the legacy md breakpoint. */
  @Prop() mdOffset?: breakpoint;

  /** Left offset from the legacy lg breakpoint. */
  @Prop() lgOffset?: breakpoint;

  /** Left offset from the legacy xg breakpoint. */
  @Prop() xgOffset?: breakpoint;

  /** Gap token alias retained for compatibility with bds-grid. */
  @Prop() gap?: gap;

  /** Padding token alias retained for compatibility with bds-grid. */
  @Prop() padding?: padding;

  /** Margin token alias retained for compatibility with bds-grid. */
  @Prop() margin?: margin;

  /**
   * Legacy color name mapped to the closest semantic UAI background token.
   * Prefer surface tokens in new UAI usage.
   */
  @Prop() bgColor?: Color;

  render() {
    const classes: Record<string, boolean> = { host: true };
    const addValueClass = (prefix: string, value?: string) => {
      if (value) classes[`${prefix}${value}`] = true;
    };

    addValueClass('direction--', this.direction);
    addValueClass('justify_content--', this.justifyContent);
    addValueClass('flex_wrap--', this.flexWrap);
    addValueClass('align_items--', this.alignItems);
    addValueClass('xxs--', this.xxs);
    addValueClass('xs--', this.xs);
    addValueClass('sm--', this.sm);
    addValueClass('md--', this.md);
    addValueClass('lg--', this.lg);
    addValueClass('xg--', this.xg);
    addValueClass('xxsoffset--', this.xxsOffset);
    addValueClass('xsoffset--', this.xsOffset);
    addValueClass('smoffset--', this.smOffset);
    addValueClass('mdoffset--', this.mdOffset);
    addValueClass('lgoffset--', this.lgOffset);
    addValueClass('xgoffset--', this.xgOffset);
    addValueClass('gap--', this.gap);
    addValueClass('padding--', this.padding);
    addValueClass('margin--', this.margin);

    if (this.container) classes.container = true;
    if (this.containerFluid) classes['container-fluid'] = true;
    if (this.bgColor) classes[`bg-color--${this.bgColor.slice(1)}`] = true;

    return (
      <Host class={classes} style={{ height: this.height }}>
        <slot />
      </Host>
    );
  }
}
