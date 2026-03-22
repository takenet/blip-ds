export interface SearchAnywhereOption {
  /**
   * Unique identifier for the option
   */
  value: string;
  /**
   * Title of the option (main text displayed)
   */
  title: string;
  /**
   * Optional description (secondary text)
   */
  description?: string;
  /**
   * Optional icon name from bds-icon
   */
  icon?: string;
  /**
   * Optional URL for navigation
   */
  url?: string;
  /**
   * Optional metadata for custom logic
   */
  metadata?: any;
}

export interface SearchAnywhereChangeEventDetail {
  searchText: string;
}

export interface SearchAnywhereSelectEventDetail {
  option: SearchAnywhereOption;
  newTab: boolean;
}
