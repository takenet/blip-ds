/**
 * Sequential steps of a process. Use for flows with ordered stages; pair with UaiStep; avoid it for free navigation between views (use uai-tab-group).
 * The stepper numbers the steps, marks the last one and sets their orientation.
 *
 * @slot - UaiStep items, in order.
 */
export declare class UaiStepper {
    el: HTMLUaiStepperElement;
    /** Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values. */
    orientation: 'horizontal' | 'vertical';
    protected orientationChanged(): void;
    private get steps();
    connectedCallback(): void;
    componentDidLoad(): void;
    /**
     * Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    setActiveStep(index: number): Promise<void>;
    /**
     * Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    setCompletedStep(index: number): Promise<void>;
    /**
     * Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.
     */
    getActiveStep(): Promise<number>;
    /** Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps. */
    resetActiveSteps(): Promise<void>;
    /** Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps. */
    resetCompletedSteps(): Promise<void>;
    private syncSteps;
    render(): any;
}
