import { EventEmitter } from '../../stencil-public-runtime';
export type UaiStepOrientation = 'horizontal' | 'vertical';
/**
 * One stage of a UaiStepper, with a numbered marker, a title and an optional description.
 * Use inside uai-stepper, which sets its orientation, number and position; avoid it outside a stepper.
 *
 * @slot heading - Step title. Use for rich content; pair with no heading prop, which it replaces.
 * @slot description - Step description. Use for rich content; pair with no description prop, which it replaces.
 */
export declare class UaiStep {
    /** Step title. Use a short noun phrase; pair with description for details; avoid long sentences. */
    heading?: string;
    /** Step description. Use for one or two lines of detail; pair with heading; in the horizontal stepper it is cut at two lines. */
    description?: string;
    /** Layout of the step. Set by the stepper from its orientation; avoid setting it by hand. */
    orientation?: UaiStepOrientation;
    /** Marks the last step, which draws no connector in the vertical layout. Set by the stepper; avoid setting it by hand. */
    last?: boolean;
    /** Marks the stage as done and shows a check. Use with setCompletedStep; the active step wins over completed. */
    completed?: boolean;
    /** Marks the current stage. Use with setActiveStep; avoid more than one active step. */
    active?: boolean;
    /** Makes the step unavailable. Use for stages that cannot be reached yet; avoid combining it with pointer. */
    disabled?: boolean;
    /** Position of the step, starting at 0. Set by the stepper; avoid setting it by hand. */
    index?: number;
    /** Makes the step clickable and focusable, announcing uaiStepSelect. Use for steps the person can go back to; set by the stepper when navigable; ignored on disabled steps. */
    pointer?: boolean;
    /** Data test is the prop to specifically test the component action object. */
    dataTest?: string;
    /** Index of the step when the person selects it by click, Enter or Space. Only fires when the step is clickable (pointer) and not disabled. */
    uaiStepSelect: EventEmitter<number>;
    private get interactive();
    private select;
    private onKeyDown;
    private get state();
    render(): any;
}
