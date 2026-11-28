import { EventEmitter } from '../../stencil-public-runtime';
import type { UaiListActionButtonDetail, UaiListChangeDetail, UaiListData, UaiListTypeList } from './uai-list-interface';
/**
 * List of uai-list-item rows, from data or from child elements. Use for plain lists and for single (radio),
 * multiple (checkbox) or on/off (switch) selection; pair with typeList; avoid it for tabular data (use uai-table).
 *
 * The host has the list role (radiogroup when typeList is radio) and each row the listitem role.
 *
 * @slot - uai-list-item children. Ignored when data is set.
 */
export declare class UaiList {
    private itemListElement?;
    private element;
    internalData: UaiListData[];
    /** Control of every row: checkbox, radio, switch or default. Use to make the whole list selectable; pair with the change events. When null, each row keeps its own typeList. */
    typeList?: UaiListTypeList;
    /** Value of the selected radio row. Use to read or set the selection of a radio list; pair with uaiListRadioChange. Avoid it in other list types. */
    value?: string;
    /**
     * Rows as a JSON string or an array:
     * data='[{"value": "01","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked": true,"icon": "settings-builder"}]'.
     * Use for lists built from data, also in Angular; pair with typeList. When set, child uai-list-item elements are ignored.
     */
    data?: string | UaiListData[];
    /** A checkbox row changed by user interaction. detail: every checked checkbox row. Use to keep the selection; pair with typeList checkbox. */
    uaiListCheckboxChange: EventEmitter<UaiListChangeDetail[]>;
    /** A radio row was selected by user interaction. detail: the selected row. Use to keep the selection; pair with value. */
    uaiListRadioChange: EventEmitter<UaiListChangeDetail>;
    /** A switch row changed by user interaction. detail: every switch row that is on. Use to keep the settings; pair with typeList switch. */
    uaiListSwitchChange: EventEmitter<UaiListChangeDetail[]>;
    /** An action button of a data row was clicked; name kept from bdsClickActionsButtons. detail: value, icon and elementButton. Use with data; pair with actionsButtons. */
    uaiClickActionsButtons: EventEmitter<UaiListActionButtonDetail>;
    /** Same as uaiClickActionsButtons, with the corrected spelling; both are emitted with the same detail. Use in new code; avoid listening to both. */
    uaiClickActionsButton: EventEmitter<UaiListActionButtonDetail>;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    dataChanged(): void;
    valueChanged(): void;
    internalDataChanged(): void;
    private get itemRole();
    private setItemListElement;
    private updateData;
    private items;
    private summary;
    private changedOptions;
    private syncRadios;
    private onClickActionsButtons;
    render(): any;
}
