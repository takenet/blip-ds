export declare class Breadcrumb {
  items: string | Array<{
    label: string;
    href?: string;
  }>;
  wrapItems: boolean;
  parsedItems: Array<{
    label: string;
    href?: string;
  }>;
  isDropdownOpen: boolean;
  private handleDropdownToggle;
  private handleActivatorPointer;
  parseItems(newValue: string | Array<{
    label: string;
    href?: string;
  }>): void;
  private renderCollapsedDropdown;
  private renderItemContent;
  private renderBreadcrumbItem;
  componentWillLoad(): void;
  render(): any;
}
