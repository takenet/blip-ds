import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class Tab implements ComponentInterface {
    /**
     * Specifies the Tab group. Used to link it to the TabPanel.
     */
    group: string;
    /**
     * The text to be shown at the Tab
     */
    label: string;
    /**
     * Prop to control externally if a tab will be active by default
     */
    active: boolean;
    /**
     * State to control if a tab is current active
     */
    isActive: boolean;
    /**
     * Event to emmit when the active tab should be updated
     */
    bdsTabChange: EventEmitter;
    handleTabChange(event: CustomEvent): void;
    onClick(): Promise<void>;
    render(): HTMLElement;
}
