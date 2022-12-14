import { TypeList } from './list-item';

export interface Data {
  value: string;
  text: string;
  secondaryText: string;
  typeList: TypeList;
  avatarName: string;
  avatarThumbnail: string;
  icon: string;
  chips: string[];
  actionsButtons: string[];
}
