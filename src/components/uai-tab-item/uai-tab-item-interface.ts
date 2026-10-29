export interface UaiTabItemOptions {
  numberElement: number;
  label: string;
  icon: string;
  iconPosition: string;
  iconTheme: string;
  badge: boolean;
  badgeShape: string;
  badgeColor: string;
  badgeIcon: string;
  badgeAnimation: boolean;
  badgePosition: string;
  badgeNumber: number;
  disable: boolean;
  error: boolean;
  headerStyle: string;
  contentStyle: string;
  open: boolean;
  dataTest: string;
  ariaLabel: string;
  iconOnly: boolean;
}

export type UaiTabItemElement = HTMLUaiTabItemElement;

export const UAI_TAB_ITEM_PROPS: (keyof UaiTabItemOptions)[] = [
  'numberElement', 'label', 'icon', 'iconPosition', 'iconTheme', 'badge', 'badgeShape', 'badgeColor',
  'badgeIcon', 'badgeAnimation', 'badgePosition', 'badgeNumber', 'disable', 'error', 'headerStyle',
  'contentStyle', 'open', 'dataTest', 'ariaLabel', 'iconOnly',
];
