/**
 * Registry of all blip-ds components and their Storybook story IDs.
 * Used to systematically generate visual and functional tests.
 */

export interface ComponentStory {
  /** Storybook story ID (e.g., "bds-components-deprecated-button--properties") */
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
    primaryStory: 'bds-components-deprecated-button--properties',
    stories: [
      { storyId: 'bds-components-deprecated-button--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-button--events', label: 'Events' },
      { storyId: 'bds-components-deprecated-button--flexible-layouts', label: 'Flexible Layouts' },
    ],
  },
  {
    tag: 'bds-input',
    name: 'Input',
    primaryStory: 'bds-components-deprecated-input--properties',
    stories: [
      { storyId: 'bds-components-deprecated-input--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-input--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-select',
    name: '[deprecated] Select',
    primaryStory: 'bds-components-deprecated-select--properties',
    stories: [
      { storyId: 'bds-components-deprecated-select--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-select--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-checkbox',
    name: '[deprecated] Checkbox',
    primaryStory: 'bds-components-deprecated-checkbox--properties',
    stories: [
      { storyId: 'bds-components-deprecated-checkbox--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-checkbox--all-states', label: 'All States' },
      { storyId: 'bds-components-deprecated-checkbox--indeterminate-example', label: 'Indeterminate' },
      { storyId: 'bds-components-deprecated-checkbox--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-radio-group',
    name: '[deprecated] Radio Button',
    primaryStory: 'bds-components-deprecated-radio-button--properties',
    stories: [
      { storyId: 'bds-components-deprecated-radio-button--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-radio-button--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-switch',
    name: '[deprecated] Switch',
    primaryStory: 'bds-components-deprecated-switch--properties',
    stories: [
      { storyId: 'bds-components-deprecated-switch--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-switch--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-modal',
    name: '[deprecated] Modal',
    primaryStory: 'bds-components-deprecated-modal--properties',
    stories: [
      { storyId: 'bds-components-deprecated-modal--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-modal--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-toast',
    name: '[deprecated] Toast',
    primaryStory: 'bds-components-deprecated-toast--properties',
    stories: [
      { storyId: 'bds-components-deprecated-toast--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-toast--events', label: 'Events' },
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
    primaryStory: 'bds-components-deprecated-table--properties',
    stories: [{ storyId: 'bds-components-deprecated-table--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-datepicker',
    name: '[deprecated] Datepicker',
    primaryStory: 'bds-components-deprecated-datepicker--properties',
    stories: [
      { storyId: 'bds-components-deprecated-datepicker--properties', label: 'Properties' },
      { storyId: 'bds-components-deprecated-datepicker--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-tabs',
    name: 'Tabs',
    primaryStory: 'bds-components-deprecated-tabs--properties',
    stories: [{ storyId: 'bds-components-deprecated-tabs--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-accordion',
    name: 'Accordion',
    primaryStory: 'bds-components-accordion--properties',
    stories: [
      { storyId: 'bds-components-accordion--properties', label: 'Properties' },
      { storyId: 'bds-components-accordion--events', label: 'Events' },
    ],
  },
  {
    tag: 'bds-sidebar',
    name: 'Sidebar',
    primaryStory: 'bds-components-sidebar--properties',
    stories: [{ storyId: 'bds-components-sidebar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-dropdown',
    name: '[deprecated] Dropdown',
    primaryStory: 'bds-components-deprecated-dropdown--properties',
    stories: [{ storyId: 'bds-components-deprecated-dropdown--properties', label: 'Properties' }],
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
    name: '[deprecated] Card',
    primaryStory: 'bds-components-deprecated-card--properties',
    stories: [{ storyId: 'bds-components-deprecated-card--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-badge--properties',
    stories: [{ storyId: 'bds-components-badge--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-deprecated-banner--properties',
    stories: [{ storyId: 'bds-components-deprecated-banner--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-alert',
    name: 'Alert',
    primaryStory: 'bds-components-alert--properties',
    stories: [{ storyId: 'bds-components-alert--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-tooltip',
    name: '[deprecated] Tooltip',
    primaryStory: 'bds-components-deprecated-tooltip--properties',
    stories: [{ storyId: 'bds-components-deprecated-tooltip--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-skeleton',
    name: 'Skeleton',
    primaryStory: 'bds-components-skeleton--properties',
    stories: [{ storyId: 'bds-components-skeleton--properties', label: 'Properties' }],
  },
];

/**
 * Wave 4: Remaining components
 */
export const WAVE_4: ComponentEntry[] = [
  {
    tag: 'bds-icon',
    name: 'Icon',
    primaryStory: 'bds-components-deprecated-icon--properties',
    stories: [{ storyId: 'bds-components-deprecated-icon--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-illustration--properties',
    stories: [{ storyId: 'bds-components-illustration--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-typo',
    name: 'Typography',
    primaryStory: 'bds-components-typo--properties',
    stories: [{ storyId: 'bds-components-typo--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-progress-bar',
    name: '[deprecated] Progress Bar',
    primaryStory: 'bds-components-deprecated-progress-bar--properties',
    stories: [{ storyId: 'bds-components-deprecated-progress-bar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-spinner',
    name: 'Loading Spinner',
    primaryStory: 'bds-components-loading-spinner--properties',
    stories: [{ storyId: 'bds-components-loading-spinner--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-bar',
    name: 'Loading Bar',
    primaryStory: 'bds-components-loading-bar--properties',
    stories: [{ storyId: 'bds-components-loading-bar--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-loading-page',
    name: 'Loading Page',
    primaryStory: 'bds-components-loading-page--properties',
    stories: [{ storyId: 'bds-components-loading-page--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-divider',
    name: 'Divider',
    primaryStory: 'bds-components-divider--properties',
    stories: [{ storyId: 'bds-components-divider--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-deprecated-breadcrumb--properties',
    stories: [{ storyId: 'bds-components-deprecated-breadcrumb--properties', label: 'Properties' }],
  },
  {
    tag: 'uai-breadcrumb',
    name: 'UAI Breadcrumb',
    primaryStory: 'uai-components-breadcrumb--playground',
    stories: [
      { storyId: 'uai-components-breadcrumb--playground', label: 'Playground' },
      { storyId: 'uai-components-breadcrumb--usage', label: 'Usage' },
    ],
  },
  {
    tag: 'uai-page-header',
    name: 'UAI Page Header',
    primaryStory: 'uai-components-page-header--playground',
    stories: [
      { storyId: 'uai-components-page-header--playground', label: 'Playground' },
      { storyId: 'uai-components-page-header--usage', label: 'Usage' },
    ],
  },
  {
    tag: 'bds-pagination',
    name: '[deprecated] Pagination',
    primaryStory: 'bds-components-deprecated-pagination--properties',
    stories: [{ storyId: 'bds-components-deprecated-pagination--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-navbar',
    name: '[deprecated] NavBar',
    primaryStory: 'bds-components-deprecated-navbar--properties',
    stories: [{ storyId: 'bds-components-deprecated-navbar--properties', label: 'Properties' }],
  },
  {
    tag: 'uai-navbar',
    name: 'Navbar',
    primaryStory: 'uai-components-navbar--playground',
    stories: [{ storyId: 'uai-components-navbar--playground', label: 'Playground' }],
  },
  {
    tag: 'uai-button',
    name: 'UaiButton',
    primaryStory: 'uai-components-button--variants-and-colors',
    stories: [
      { storyId: 'uai-components-button--variants-and-colors', label: 'Variants and colors' },
      { storyId: 'uai-components-button--sizes', label: 'Sizes' },
      { storyId: 'uai-components-button--states', label: 'States' },
      { storyId: 'uai-components-button--icons', label: 'Icons' },
    ],
  },
  {
    tag: 'uai-typo',
    name: 'UaiTypo',
    primaryStory: 'uai-components-typo--text-styles',
    stories: [
      { storyId: 'uai-components-typo--text-styles', label: 'Text styles' },
      { storyId: 'uai-components-typo--letter-spacing', label: 'Letter spacing' },
    ],
  },
  {
    tag: 'uai-emoji',
    name: 'UaiEmoji',
    primaryStory: 'uai-components-emoji--playground',
    stories: [
      { storyId: 'uai-components-emoji--playground', label: 'Playground' },
      { storyId: 'uai-components-emoji--catalog', label: 'Catalog' },
    ],
  },
  {
    tag: 'uai-icon',
    name: 'UaiIcon',
    primaryStory: 'uai-components-icon--colors',
    stories: [
      { storyId: 'uai-components-icon--sizes', label: 'Sizes' },
      { storyId: 'uai-components-icon--colors', label: 'Colors' },
      { storyId: 'uai-components-icon--themes', label: 'Themes' },
    ],
  },
  {
    tag: 'uai-logo',
    name: 'UaiLogo',
    primaryStory: 'uai-components-logo--playground',
    stories: [
      { storyId: 'uai-components-logo--playground', label: 'Playground' },
      { storyId: 'uai-components-logo--catalog', label: 'Catalog' },
    ],
  },
  {
    tag: 'uai-theme-provider',
    name: 'UaiThemeProvider',
    primaryStory: 'uai-components-theme-provider--playground',
    stories: [{ storyId: 'uai-components-theme-provider--playground', label: 'Playground' }],
  },
  {
    tag: 'uai-navbar-content',
    name: 'UaiNavbarContent',
    primaryStory: 'uai-components-navbar--playground',
    stories: [{ storyId: 'uai-components-navbar--playground', label: 'Playground' }],
  },
  {
    tag: 'bds-stepper',
    name: '[deprecated] Stepper',
    primaryStory: 'bds-components-deprecated-stepper--properties',
    stories: [{ storyId: 'bds-components-deprecated-stepper--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-slider',
    name: 'Slider',
    primaryStory: 'bds-components-slider--properties',
    stories: [{ storyId: 'bds-components-slider--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-upload',
    name: 'Upload',
    primaryStory: 'bds-components-upload--properties',
    stories: [{ storyId: 'bds-components-upload--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-carousel',
    name: 'Carousel',
    primaryStory: 'bds-components-carousel--properties',
    stories: [{ storyId: 'bds-components-carousel--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-image--properties',
    stories: [{ storyId: 'bds-components-image--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-deprecated-input-chips--properties',
    stories: [{ storyId: 'bds-components-deprecated-input-chips--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-editable',
    name: 'Input Editable',
    primaryStory: 'bds-components-deprecated-input-editable--properties',
    stories: [{ storyId: 'bds-components-deprecated-input-editable--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-password',
    name: 'Input Password',
    primaryStory: 'bds-components-deprecated-input-password--properties',
    stories: [{ storyId: 'bds-components-deprecated-input-password--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-input-phone-number',
    name: 'Input Phone Number',
    primaryStory: 'bds-components-deprecated-input-phone-number--properties',
    stories: [{ storyId: 'bds-components-deprecated-input-phone-number--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-clickable',
    name: 'Chip Clickable',
    primaryStory: 'bds-components-chip-clickable--properties',
    stories: [{ storyId: 'bds-components-chip-clickable--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-selected',
    name: 'Chip Selected',
    primaryStory: 'bds-components-chip-selected--properties',
    stories: [{ storyId: 'bds-components-chip-selected--properties', label: 'Properties' }],
  },
  {
    tag: 'bds-chip-tag',
    name: '[deprecated] Chip Tag',
    primaryStory: 'bds-components-deprecated-chip-tag--properties',
    stories: [{ storyId: 'bds-components-deprecated-chip-tag--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-list--properties',
    stories: [{ storyId: 'bds-components-list--properties', label: 'Properties' }],
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
    primaryStory: 'bds-components-avatar-group--properties',
    stories: [{ storyId: 'bds-components-avatar-group--properties', label: 'Properties' }],
  },
];

/** All components across all waves */
export const ALL_COMPONENTS: ComponentEntry[] = [...WAVE_1, ...WAVE_2, ...WAVE_3, ...WAVE_4];
