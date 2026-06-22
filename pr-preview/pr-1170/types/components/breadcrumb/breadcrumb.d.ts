export declare class Breadcrumb {
  hostElement: HTMLElement;
  items: string | Array<{
    label: string;
    href?: string;
  }>;
  wrapItems: boolean | string;
  private wrapItemsBool;
  handleWrapItemsChange(newValue: boolean | string): void;
  parsedItems: Array<{
    label: string;
    href?: string;
  }>;
  isDropdownOpen: boolean;
  parseItems(newValue: string | Array<{
    label: string;
    href?: string;
  }>): void;
  componentWillLoad(): void;
  toggleDropdown(): void;
  render(): any;
}
