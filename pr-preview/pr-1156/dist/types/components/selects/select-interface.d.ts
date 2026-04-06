export interface Option {
    value: any;
    label: any;
    icon?: any;
    iconColor?: any;
    titleText?: any;
    slotAlign?: any;
    bulkOption?: any;
    status?: any;
}
export interface SelectChangeEventDetail {
    value: any | any[] | undefined | null;
    label?: string[];
    code?: string;
    country?: string;
}
export interface SelectChangeEvent {
    data: {
        value: any | any[] | undefined | null;
        label?: string;
    }[];
}
export type SelectType = 'text' | 'icon';
export type SelectOptionsPositionType = 'auto' | 'top' | 'bottom';
