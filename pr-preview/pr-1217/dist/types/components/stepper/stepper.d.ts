import { ComponentInterface } from '../../stencil-public-runtime';
export declare class BdsStepper implements ComponentInterface {
    el: HTMLBdsStepperElement;
    connectedCallback(): void;
    componentDidLoad(): void;
    /**
     * Set the active step
     *
     * @param index The index of the step to be set as active
     * @returns void
     */
    setActiveStep(index: number): Promise<void>;
    /**
     * Set the completed step
     *
     * @param index The index of the step to be set as completed
     * @returns void
     */
    setCompletedStep(index: number): Promise<void>;
    /**
     * Returns the active step
     *
     * @returns HTMLBdsStepElement
     */
    getActiveStep(): Promise<number>;
    /**
     * Reset all active steps
     *
     * @returns void
     */
    resetActiveSteps(): Promise<void>;
    /**
     * Reset all completed steps
     *
     * @returns void
     */
    resetCompletedSteps(): Promise<void>;
    private get childOptions();
    private renderLine;
    render(): any;
}
