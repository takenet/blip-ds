import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class BdsStep implements ComponentInterface {
    el: HTMLBdsToastElement;
    /**
     * Used to define the last step component on the list
     */
    last?: boolean;
    /**
     * Used to complete the step
     */
    completed?: boolean;
    /**
     * Used to set the step as active
     */
    active?: boolean;
    /**
     * Used to set the step as disabled
     */
    disabled?: boolean;
    /**
     * Used to set the index of the steps
     */
    index?: number;
    /**
     * Used to set cursor pointer on the step (useful to allow clicks on the steps)
     */
    pointer?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): any;
}
