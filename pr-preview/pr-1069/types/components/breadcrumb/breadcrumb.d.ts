import { EventEmitter } from '../../stencil-public-runtime';
export interface BreadcrumbCurrentPageChangeEventDetail {
  oldLabel: string;
  newLabel: string;
}
export declare class Breadcrumb {
  items: string | Array<{
    label: string;
    href?: string;
  }>;
  /**
   * Enable editing of the current page label using bds-input-editable
   */
  editableCurrentPage?: boolean;
  parsedItems: Array<{
    label: string;
    href?: string;
  }>;
  isDropdownOpen: boolean;
  /**
   * Emitted when the current page label is changed
   */
  bdsCurrentPageLabelChange: EventEmitter<BreadcrumbCurrentPageChangeEventDetail>;
  parseItems(newValue: string | Array<{
    label: string;
    href?: string;
  }>): void;
  componentWillLoad(): void;
  toggleDropdown(): void;
  private handleCurrentPageLabelSave;
  render(): any;
}
