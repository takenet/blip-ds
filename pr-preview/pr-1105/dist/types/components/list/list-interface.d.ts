import { TypeList } from './list';
export interface Data {
    value: string;
    text?: string;
    secondaryText?: string;
    typeList?: TypeList;
    avatarName?: string;
    avatarThumbnail?: string;
    checked?: boolean;
    icon?: string;
    chips?: string[];
    actionsButtons?: string[];
    dataTest?: string;
}
