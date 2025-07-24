import { EventEmitter } from '../../stencil-public-runtime';
import { typeRange, StepOption } from './slider-interface';
export declare class Slider {
    private inputSlide?;
    private bdsTooltip?;
    private progressBar?;
    stepArray?: StepOption[];
    internalOptions?: StepOption[];
    inputValue?: string;
    /**
     * Step, property to insert steps into the input range.
     */
    step?: number;
    /**
     * Min, property to set the minimum value of the range.
     */
    min?: number;
    /**
     * Max, property to set the maximum value of the range.
     */
    max?: number;
    /**
     * Value, prop to define value of input.
     */
    value?: number;
    /**
     * Markers, Prop to enable markers.
     */
    markers?: boolean;
    /**
     * Label, Prop to enable Label.
     */
    label?: boolean;
    /**
     * Type, prop to select type of slider.
     */
    type?: typeRange;
    /**
     * Data Markers, prop to select ype of markers.
     */
    dataMarkers?: string | StepOption[];
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * bdsChange. Event to return selected date value.
     */
    bdsChange?: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    componentDidUpdate(): void;
    private refInputSlide;
    private refBdsTooltip;
    private refProgressBar;
    private valuePercent;
    private onInputSlide;
    private onInputMouseEnter;
    private onInputMouseLeave;
    private emiterChange;
    private arrayToSteps;
    render(): any;
}
