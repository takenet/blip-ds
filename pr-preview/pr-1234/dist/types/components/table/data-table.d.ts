import { EventEmitter } from '../../stencil-public-runtime';
type Data = {
    [key: string]: any;
};
export declare class DataTable {
    el: HTMLElement;
    newTable: Data;
    /**
     * For keep the Object of header;
     */
    headerData?: Data;
    /**
     * For keep the Object of table content.
     */
    tableData?: Data[];
    /**
     * For keep the state of the prop sort.
     */
    sortAscending?: boolean;
    /**
     * For keep the state of the prop sort.
     */
    headerActive: string;
    /**
     * Prop to recive the content of the table.
     */
    options?: string;
    /**
     * Prop to recive the header and configuration of table.
     */
    column?: string;
    /**
     * Prop to activate the possibility of use avatar in any column.
     */
    avatar?: boolean;
    /**
     * Prop to activate the possibility of use chip in any column.
     */
    chips?: boolean;
    /**
     * Prop to activate the possibility of use chip in any column.
     */
    actionArea?: boolean;
    /**
     * Prop to activate the sorting.
     */
    sorting?: boolean;
    bdsTableClick: EventEmitter<{
        item: {
            [key: string]: any;
        };
        index: number;
        nameButton: string;
    }>;
    bdsTableDelete: EventEmitter<{
        [key: string]: any;
    }>;
    bdsTableChange: EventEmitter<{
        [key: string]: any;
    }[]>;
    componentWillLoad(): void;
    private getDataFromProprety;
    renderArrow(value: any): any;
    deleteItem(index: number): Promise<void>;
    clickButton(item: Data, index: number, btn: any): void;
    orderColumn(idx: any): void;
    render(): any;
}
export {};
