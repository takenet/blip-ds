import type { Color } from '../grid/color-grid-interface';
import type { alignItems, breakpoint, direction, flexWrap, gap, justifyContent } from '../grid/grid-interface';
/**
 * UAI layout grid. The legacy bds-grid remains available; this component keeps
 * its layout props while using UAI dimensions and theme-aware color tokens.
 *
 * @slot - Grid items, including nested uai-grid elements.
 */
export declare class UaiGrid {
    /** Sets an explicit height on the grid container. */
    height?: string;
    /** Controls the flex direction of children. */
    direction?: direction;
    /** Controls how children are distributed along the main axis. */
    justifyContent?: justifyContent;
    /** Controls whether children wrap to another line. */
    flexWrap?: flexWrap;
    /** Controls the alignment of children along the cross axis. */
    alignItems?: alignItems;
    /** Applies a centered container capped by the UAI width-content token. */
    container?: boolean;
    /** Applies the wider responsive fluid-container max widths compatible with bds-grid. */
    containerFluid?: boolean;
    /** Base 12-column span. */
    xxs?: breakpoint;
    /** 12-column span from the legacy xs breakpoint. */
    xs?: breakpoint;
    /** 12-column span from the legacy sm breakpoint. */
    sm?: breakpoint;
    /** 12-column span from the legacy md breakpoint. */
    md?: breakpoint;
    /** 12-column span from the legacy lg breakpoint. */
    lg?: breakpoint;
    /** 12-column span from the legacy xg breakpoint. */
    xg?: breakpoint;
    /** Base left offset in the 12-column grid. */
    xxsOffset?: breakpoint;
    /** Left offset from the legacy xs breakpoint. */
    xsOffset?: breakpoint;
    /** Left offset from the legacy sm breakpoint. */
    smOffset?: breakpoint;
    /** Left offset from the legacy md breakpoint. */
    mdOffset?: breakpoint;
    /** Left offset from the legacy lg breakpoint. */
    lgOffset?: breakpoint;
    /** Left offset from the legacy xg breakpoint. */
    xgOffset?: breakpoint;
    /** Gap token alias retained for compatibility with bds-grid. */
    gap?: gap;
    /**
     * Padding token aliases retained for compatibility with bds-grid. Accepts one value or a
     * space-separated list, for example `"t-2 x-3"`. Values: `none`, `half`, `1` to `12`, optionally
     * prefixed by a side (`l-`, `r-`, `t-`, `b-`) or an axis (`x-`, `y-`). When values overlap, the more
     * specific one wins: single side over axis, axis over all sides.
     */
    padding?: string;
    /**
     * Margin token aliases retained for compatibility with bds-grid. Accepts one value or a
     * space-separated list, for example `"t-2 x-auto"`. Takes the same values as `padding`, plus `auto`.
     * When values overlap, the more specific one wins: single side over axis, axis over all sides.
     */
    margin?: string;
    /**
     * Legacy color name mapped to the closest semantic UAI background token.
     * Prefer surface tokens in new UAI usage.
     */
    bgColor?: Color;
    render(): any;
}
