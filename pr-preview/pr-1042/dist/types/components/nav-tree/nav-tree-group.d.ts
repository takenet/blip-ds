import { EventEmitter } from '../../stencil-public-runtime';
export type collapses = 'single' | 'multiple';
export declare class NavTreeGroup {
    private itemsElement?;
    private element;
    isOpenAftAnimation?: boolean;
    navTreeChild?: any;
    /**
     * Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple.
     */
    collapse?: collapses;
    bdsNavTreeGroupCloseAll?: EventEmitter<void>;
    bdsNavTreeGroupOpenAll?: EventEmitter<void>;
    componentWillRender(): void;
    closeAll(actNumber?: any): Promise<void>;
    openAll(actNumber?: any): Promise<void>;
    render(): any;
}
