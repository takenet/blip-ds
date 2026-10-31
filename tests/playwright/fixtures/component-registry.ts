/**
 * Registry of all blip-ds components and their Storybook story IDs.
 * Used to systematically generate visual and functional tests.
 */

export interface ComponentStory {
  /** Storybook story ID (e.g., "components-deprecated-button--properties") */
  storyId: string;
  /** Human-readable label */
  label: string;
}

export interface ComponentEntry {
  /** Component tag name (e.g., "bds-button") */
  tag: string;
  /** Display name */
  name: string;
  /** Stories available in Storybook */
  stories: ComponentStory[];
  /** Primary story used for default visual test */
  primaryStory: string;
}

/**
 * Wave 1: Most used components with the most variants
 */
export const WAVE_1: ComponentEntry[] = [
  {
    tag: 'bds-button',
    name: '[deprecated] Button',
    primaryStory: 'components-deprecated-button--properties',
    stories: [
      { storyId: 'components-deprecated-button--properties', label: 'Properties' },
      { storyId: 'components-deprecated-button--events', label: 'Events' },
      { storyId: 'components-deprecated-button--flexible-layouts', label: 'Flexible Layouts' },
    ],
  },
  {
    tag: 'bds-input',
    name: 'Input',
    primaryStory: 'components-deprecated-input--properties',
    stories: [
      { storyId: 'components-deprecated-input--properties', label: 'Properties' },
      { storyId: 'components-deprecated-input--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-select',
    name: '[deprecated] Select',
    primaryStory: 'components-deprecated-select--properties',
    stories: [
      { storyId: 'components-deprecated-select--properties', label: 'Properties' },
      { storyId: 'components-deprecated-select--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-checkbox',
    name: '[deprecated] Checkbox',
    primaryStory: 'components-deprecated-checkbox--properties',
    stories: [
      { storyId: 'components-deprecated-checkbox--properties', label: 'Properties' },
      { storyId: 'components-deprecated-checkbox--all-states', label: 'All States' },
      { storyId: 'components-deprecated-checkbox--indeterminate-example', label: 'Indeterminate' },
      { storyId: 'components-deprecated-checkbox--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-radio-group',
    name: '[deprecated] Radio Button',
    primaryStory: 'components-deprecated-radio-button--properties',
    stories: [
      { storyId: 'components-deprecated-radio-button--properties', label: 'Properties' },
      { storyId: 'components-deprecated-radio-button--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-switch',
    name: '[deprecated] Switch',
    primaryStory: 'components-deprecated-switch--properties',
    stories: [
      { storyId: 'components-deprecated-switch--properties', label: 'Properties' },
      { storyId: 'components-deprecated-switch--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-modal',
    name: 'Modal',
    primaryStory: 'components-modal--properties',
    stories: [
      { storyId: 'components-modal--properties', label: 'Properties' },
      { storyId: 'components-modal--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-toast',
    name: 'Toast',
    primaryStory: 'components-toast--properties',
    stories: [
      { storyId: 'components-toast--properties', label: 'Properties' },
      { storyId: 'components-toast--events', label: 'Events' },
    ],
  },
];

/**
 * Wave 2: Complex interactive components
 */
export const WAVE_2: ComponentEntry[] = [
  {
    tag: 'bds-table',
    name: '[deprecated] Table',
    primaryStory: 'components-deprecated-table--properties',
    stories: [{ storyId: 'components-deprecated-table--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-datepicker',
    name: 'Datepicker',
    primaryStory: 'components-datepicker--properties',
    stories: [
      { storyId: 'components-datepicker--properties', label: 'Properties' },
      { storyId: 'components-datepicker--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-tabs',
    name: 'Tabs',
    primaryStory: 'components-deprecated-tabs--properties',
    stories: [{ storyId: 'components-deprecated-tabs--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-accordion',
    name: 'Accordion',
    primaryStory: 'components-accordion--properties',
    stories: [
      { storyId: 'components-accordion--properties', label: 'Properties' },
      { storyId: 'components-accordion--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-sidebar',
    name: 'Sidebar',
    primaryStory: 'components-sidebar--properties',
    stories: [{ storyId: 'components-sidebar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-dropdown',
    name: 'Dropdown',
    primaryStory: 'components-dropdown--properties',
    stories: [{ storyId: 'components-dropdown--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-menu',
    name: 'Menu',
    primaryStory: 'components-menu--properties',
    stories: [{ storyId: 'components-menu--properties', label: 'Properties' }],
  },
];

/**
 * Wave 3: Visual/presentational components
 */
export const WAVE_3: ComponentEntry[] = [
  {
    tag: 'bds-card',
    name: 'Card',
    primaryStory: 'components-card--properties',
    stories: [{ storyId: 'components-card--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip',
    name: 'Chip',
    primaryStory: 'components-chip--properties',
    stories: [{ storyId: 'components-chip--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-badge',
    name: 'Badge',
    primaryStory: 'components-badge--properties',
    stories: [{ storyId: 'components-badge--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-avatar',
    name: 'Avatar',
    primaryStory: 'components-avatar--properties',
    stories: [{ storyId: 'components-avatar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-banner',
    name: '[deprecated] Banner',
    primaryStory: 'components-deprecated-banner--properties',
    stories: [{ storyId: 'components-deprecated-banner--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-alert',
    name: 'Alert',
    primaryStory: 'components-alert--properties',
    stories: [{ storyId: 'components-alert--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-tooltip',
    name: '[deprecated] Tooltip',
    primaryStory: 'components-deprecated-tooltip--properties',
    stories: [{ storyId: 'components-deprecated-tooltip--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-skeleton',
    name: 'Skeleton',
    primaryStory: 'components-skeleton--properties',
    stories: [{ storyId: 'components-skeleton--properties', label: 'Properties' }],
  },
];

/**
 * Wave 4: Remaining components
 */
export const WAVE_4: ComponentEntry[] = [
  {
    tag: 'bds-icon',
    name: 'Icon',
    primaryStory: 'components-deprecated-icon--properties',
    stories: [{ storyId: 'components-deprecated-icon--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-icon-button',
    name: 'Icon Button',
    primaryStory: 'components-icon-button--properties',
    stories: [{ storyId: 'components-icon-button--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-illustration',
    name: 'Illustration',
    primaryStory: 'components-illustration--properties',
    stories: [{ storyId: 'components-illustration--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-typo',
    name: 'Typography',
    primaryStory: 'components-typo--properties',
    stories: [{ storyId: 'components-typo--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-progress-bar',
    name: 'Progress Bar',
    primaryStory: 'components-progress-bar--properties',
    stories: [{ storyId: 'components-progress-bar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-spinner',
    name: 'Loading Spinner',
    primaryStory: 'components-loading-spinner--properties',
    stories: [{ storyId: 'components-loading-spinner--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-bar',
    name: 'Loading Bar',
    primaryStory: 'components-loading-bar--properties',
    stories: [{ storyId: 'components-loading-bar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-page',
    name: 'Loading Page',
    primaryStory: 'components-loading-page--properties',
    stories: [{ storyId: 'components-loading-page--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-divider',
    name: 'Divider',
    primaryStory: 'components-divider--properties',
    stories: [{ storyId: 'components-divider--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-paper',
    name: 'Paper',
    primaryStory: 'components-paper--properties',
    stories: [{ storyId: 'components-paper--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-breadcrumb',
    name: '[deprecated] Breadcrumb',
    primaryStory: 'components-deprecated-breadcrumb--properties',
    stories: [{ storyId: 'components-deprecated-breadcrumb--properties', label: 'Properties' }],
  },
  {
    tag: 'uai-breadcrumb',
    name: 'UAI Breadcrumb',
    primaryStory: 'uai-breadcrumb--playground',
    stories: [
      { storyId: 'uai-breadcrumb--playground', label: 'Playground' },
      { storyId: 'uai-breadcrumb--usage', label: 'Usage' },
    ],
  },
  {
    tag: 'uai-page-header',
    name: 'UAI Page Header',
    primaryStory: 'uai-page-header--playground',
    stories: [
      { storyId: 'uai-page-header--playground', label: 'Playground' },
      { storyId: 'uai-page-header--usage', label: 'Usage' },
    ],
  },
  {
    tag: 'bds-pagination',
    name: 'Pagination',
    primaryStory: 'components-pagination--properties',
    stories: [{ storyId: 'components-pagination--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-navbar',
    name: '[deprecated] NavBar',
    primaryStory: 'components-deprecated-navbar--properties',
    stories: [{ storyId: 'components-deprecated-navbar--properties', label: 'Properties' }],
  },
  {
    tag: 'uai-navbar',
    name: 'Navbar',
    primaryStory: 'uai-navbar--playground',
    stories: [{ storyId: 'uai-navbar--playground', label: 'Playground' }],
  },
  {
    tag: 'uai-button',
    name: 'UaiButton',
    primaryStory: 'uai-button--variants-and-colors',
    stories: [
      { storyId: 'uai-button--variants-and-colors', label: 'Variants and colors' },
      { storyId: 'uai-button--sizes', label: 'Sizes' },
      { storyId: 'uai-button--states', label: 'States' },
      { storyId: 'uai-button--icons', label: 'Icons' },
    ],
  },
  {
    tag: 'uai-typo',
    name: 'UaiTypo',
    primaryStory: 'uai-typo--text-styles',
    stories: [
      { storyId: 'uai-typo--text-styles', label: 'Text styles' },
      { storyId: 'uai-typo--letter-spacing', label: 'Letter spacing' },
    ],
  },
  {
    tag: 'uai-icon',
    name: 'UaiIcon',
    primaryStory: 'uai-icon--colors',
    stories: [
      { storyId: 'uai-icon--sizes', label: 'Sizes' },
      { storyId: 'uai-icon--colors', label: 'Colors' },
      { storyId: 'uai-icon--themes', label: 'Themes' },
    ],
  },
  {
    tag: 'uai-theme-provider',
    name: 'UaiThemeProvider',
    primaryStory: 'uai-theme-provider--playground',
    stories: [{ storyId: 'uai-theme-provider--playground', label: 'Playground' }],
  },
  {
    tag: 'uai-navbar-content',
    name: 'UaiNavbarContent',
    primaryStory: 'uai-navbar--playground',
    stories: [{ storyId: 'uai-navbar--playground', label: 'Playground' }],
  },
  {
    tag: 'bds-stepper',
    name: 'Stepper',
    primaryStory: 'components-stepper--properties',
    stories: [{ storyId: 'components-stepper--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-slider',
    name: 'Slider',
    primaryStory: 'components-slider--properties',
    stories: [{ storyId: 'components-slider--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-upload',
    name: 'Upload',
    primaryStory: 'components-upload--properties',
    stories: [{ storyId: 'components-upload--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-carousel',
    name: 'Carousel',
    primaryStory: 'components-carousel--properties',
    stories: [{ storyId: 'components-carousel--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-grid',
    name: 'Grid',
    primaryStory: 'components-grid--properties',
    stories: [{ storyId: 'components-grid--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-image',
    name: 'Image',
    primaryStory: 'components-image--properties',
    stories: [{ storyId: 'components-image--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-warning',
    name: 'Warning',
    primaryStory: 'components-warning--properties',
    stories: [{ storyId: 'components-warning--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-counter-text',
    name: 'Counter Text',
    primaryStory: 'components-counter-text--properties',
    stories: [{ storyId: 'components-counter-text--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-chips',
    name: 'Input Chips',
    primaryStory: 'components-deprecated-input-chips--properties',
    stories: [{ storyId: 'components-deprecated-input-chips--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-editable',
    name: 'Input Editable',
    primaryStory: 'components-deprecated-input-editable--properties',
    stories: [{ storyId: 'components-deprecated-input-editable--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-password',
    name: 'Input Password',
    primaryStory: 'components-deprecated-input-password--properties',
    stories: [{ storyId: 'components-deprecated-input-password--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-phone-number',
    name: 'Input Phone Number',
    primaryStory: 'components-deprecated-input-phone-number--properties',
    stories: [{ storyId: 'components-deprecated-input-phone-number--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-clickable',
    name: 'Chip Clickable',
    primaryStory: 'components-chip-clickable--properties',
    stories: [{ storyId: 'components-chip-clickable--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-selected',
    name: 'Chip Selected',
    primaryStory: 'components-chip-selected--properties',
    stories: [{ storyId: 'components-chip-selected--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-tag',
    name: 'Chip Tag',
    primaryStory: 'components-chip-tag--properties',
    stories: [{ storyId: 'components-chip-tag--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-expansion-panel',
    name: 'Expansion Panel',
    primaryStory: 'components-expansion-panel--properties',
    stories: [{ storyId: 'components-expansion-panel--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-nav-tree',
    name: 'Nav Tree',
    primaryStory: 'components-nav-tree--properties',
    stories: [{ storyId: 'components-nav-tree--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-list',
    name: 'List',
    primaryStory: 'components-list--properties',
    stories: [{ storyId: 'components-list--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-card-color',
    name: 'Card Color',
    primaryStory: 'components-card-color--properties',
    stories: [{ storyId: 'components-card-color--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-avatar-group',
    name: 'Avatar Group',
    primaryStory: 'components-avatar-group--properties',
    stories: [{ storyId: 'components-avatar-group--properties', label: 'Properties' }],
  },
];

/** All components across all waves */
export const ALL_COMPONENTS: ComponentEntry[] = [...WAVE_1, ...WAVE_2, ...WAVE_3, ...WAVE_4];
