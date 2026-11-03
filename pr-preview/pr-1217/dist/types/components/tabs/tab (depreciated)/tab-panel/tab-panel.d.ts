import { ComponentInterface } from '../../../../stencil-public-runtime';
export declare class TabPanel implements ComponentInterface {
    /**
     * Specifies the TabPanel group. Used to link it to the Tab.
     */
    group: string;
    /**
     * State to control if a tab panel is current active
     */
    isActive: boolean;
    handleTabChange(event: CustomEvent): void;
    render(): HTMLElement;
}
