import { EventEmitter } from '../../stencil-public-runtime';
import { Data } from './list-interface';
export type TypeList = 'checkbox' | 'radio' | 'switch' | 'default';
export declare class List {
    private itemListElement?;
    private element;
    internalData: Data[];
    /**
     * Typelist. Used to .
     */
    typeList?: TypeList;
    /**
     * The value of the selected radio
     */
    value?: string;
    /**
     * The Data of the list
     * Should be passed this way:
     * data='[{"value": "01","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="true","icon": "settings-builder"}, {"value": "02","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="false","icon": "settings-builder",}]'
     * Data can also be passed as child by using bds-list-item component, but passing as a child you may have some compatibility problems with Angular.
     */
    data?: string | Data[];
    /**
     * Emitted when the value checkboxes has changed because of a click event.
     */
    bdsListCheckboxChange: EventEmitter;
    /**
     * Emitted when the value radios has changed because of a click event.
     */
    bdsListRadioChange: EventEmitter;
    /**
     * Emitted when the value switches has changed because of a click event.
     */
    bdsListSwitchChange: EventEmitter;
    /**
     * Emitted when click in someone actions buttom insert in data.
     */
    bdsClickActionsButtons: EventEmitter;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    dataChanged(): void;
    valueChanged(value: string): void;
    internalDataChanged(): void;
    private setitemListElement;
    private updateData;
    private chagedOptions;
    private setSelectedRadio;
    private setSelectedCheckbox;
    private setSelectedSwitch;
    private onClickActionsButtons;
    render(): any;
}
