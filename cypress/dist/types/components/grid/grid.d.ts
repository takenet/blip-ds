import { direction, justifyContent, flexWrap, alignItems, breakpoint, gap, padding, margin } from './grid-interface';
export declare class Grid {
  height?: string;
  direction?: direction;
  justifyContent?: justifyContent;
  flexWrap?: flexWrap;
  alignItems?: alignItems;
  container?: boolean;
  containerFluid?: boolean;
  xxs?: breakpoint;
  xs?: breakpoint;
  sm?: breakpoint;
  md?: breakpoint;
  lg?: breakpoint;
  xg?: breakpoint;
  xxsOffset?: breakpoint;
  xsOffset?: breakpoint;
  smOffset?: breakpoint;
  mdOffset?: breakpoint;
  lgOffset?: breakpoint;
  xgOffset?: breakpoint;
  gap?: gap;
  padding?: padding;
  margin?: margin;
  render(): any;
}
