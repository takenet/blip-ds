export type UaiListTypeList = 'checkbox' | 'radio' | 'switch' | 'default';

/** One item of uai-list data. Same shape as the bds-list Data. */
export interface UaiListData {
  value: string;
  text?: string;
  secondaryText?: string;
  typeList?: UaiListTypeList;
  avatarName?: string;
  avatarThumbnail?: string;
  checked?: boolean;
  icon?: string;
  chips?: string[];
  actionsButtons?: string[];
  dataTest?: string;
}

/** Item summary sent by the uai-list change events. Same shape as in bds-list. */
export interface UaiListChangeDetail {
  value: string | null;
  text: string | null;
  secondaryText: string | null;
  avatarName: string | null;
  avatarThumbnail: string | null;
  typeList: UaiListTypeList | null;
}

/** Detail of uaiChecked. Same shape as bdsChecked. */
export interface UaiListItemCheckedDetail {
  value: string | null;
  text: string | null;
  secondaryText: string | null;
  typeList: UaiListTypeList | null;
  checked: boolean | null;
}

/** Detail of the action button events. Same shape as bdsClickActionButtom. */
export interface UaiListActionButtonDetail {
  value: string | null;
  icon: string;
  elementButton: EventTarget;
}
