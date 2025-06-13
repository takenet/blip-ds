import { r as registerInstance, c as createEvent, h, H as Host } from './index-UYZ9xe6Z.js';

const sliderCss = ":host{position:relative;display:-ms-flexbox;display:flex;width:100%;height:32px}.track-bg{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;inset:0 8px;pointer-events:none}.track-bg .progress-bar{position:absolute;height:4px;border-radius:1rem;z-index:2}.track-bg .progress-bar-liner{background-color:var(--color-primary, rgb(30, 107, 241))}.track-bg .progress-bar-tooltip{position:absolute;top:-6px;right:-0.5rem}.track-bg .progress-bar-thumb{position:relative;width:1rem;height:1rem;border-radius:1rem;background-color:var(--color-primary, rgb(30, 107, 241));z-index:0}.track-bg .progress-bar-thumb::before{content:\"\";position:absolute;inset:0;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));border-radius:1rem;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.track-bg .progress-bar-hover .progress-bar-thumb::before{-webkit-transform:scale(2);transform:scale(2)}.track-bg::before{content:\"\";position:absolute;inset:0;height:4px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;border-radius:1rem}.track-bg .step{position:relative;width:2px;height:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--color-content-disable, rgb(89, 89, 89));border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.track-bg .step .label-step{margin-top:1rem}.element-min{position:relative;height:4px;background-color:var(--color-primary, rgb(30, 107, 241));border-top-left-radius:1rem;border-bottom-left-radius:1rem}.element-max{position:relative;height:4px;border-top-right-radius:1rem;border-bottom-right-radius:1rem}.input_slide{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;background:transparent;cursor:pointer;width:100%;height:4px;position:relative;border-radius:1rem;background:transparent;color:-internal-light-dark(transparent, transparent)}.input_slide.has_min{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0}.input_slide.has_max{border-top-right-radius:0;border-bottom-right-radius:0}.input_slide:hover .input_slide::-webkit-slider-thumb,.input_slide:hover .input_slide::-moz-range-thumb{-webkit-appearance:none}.input_slide::-webkit-slider-thumb,.input_slide::-moz-range-thumb{-webkit-appearance:none;position:relative;height:16px;width:16px;border-radius:50%;border:none}.group_slide{position:relative;width:100%}.group_slide .input_slide{width:inherit;position:absolute}.group_slide .input_slide_start{left:0}.group_slide .input_slide_end{right:0}.group_slide .input_slide::-webkit-slider-thumb,.group_slide .input_slide::-moz-range-thumb{-webkit-appearance:none}";

const Slider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsChange = createEvent(this, "bdsChange");
        this.inputValue = this.value.toString();
        /**
         * Value, prop to define value of input.
         */
        this.value = this.min ? this.min : 0;
        /**
         * Markers, Prop to enable markers.
         */
        this.markers = false;
        /**
         * Label, Prop to enable Label.
         */
        this.label = false;
        /**
         * Type, prop to select type of slider.
         */
        this.type = 'fill';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refInputSlide = (el) => {
            this.inputSlide = el;
        };
        this.refBdsTooltip = (el) => {
            this.bdsTooltip = el;
        };
        this.refProgressBar = (el) => {
            this.progressBar = el;
        };
        this.valuePercent = (element) => {
            const input = element;
            const min = input.min ? parseInt(input.min) : 0;
            const max = parseInt(input.max);
            const val = parseInt(input.value);
            const percentage = ((val - min) * 100) / (max - min);
            return percentage;
        };
        this.onInputSlide = (ev) => {
            const input = ev.target;
            this.progressBar.style.width = `${this.valuePercent(input)}%`;
            const valueName = this.emiterChange(parseInt(input.value));
            this.inputValue = this.stepArray.length > 0 ? valueName.name : input.value;
            this.bdsChange.emit(valueName);
        };
        this.onInputMouseEnter = () => {
            this.bdsTooltip.visible();
            this.progressBar.classList.add(`progress-bar-hover`);
        };
        this.onInputMouseLeave = () => {
            this.bdsTooltip.invisible();
            this.progressBar.classList.remove(`progress-bar-hover`);
        };
        this.emiterChange = (value) => {
            if (this.internalOptions) {
                return this.stepArray[value];
            }
            else {
                return this.stepArray.find((item) => parseInt(item.name) === value);
            }
        };
    }
    componentWillLoad() {
        if (this.dataMarkers) {
            if (typeof this.dataMarkers === 'string') {
                this.internalOptions = JSON.parse(this.dataMarkers);
                this.stepArray = this.internalOptions;
            }
            else {
                this.internalOptions = this.dataMarkers;
                this.stepArray = this.internalOptions;
            }
        }
        else {
            this.stepArray = this.arrayToSteps((this.max - this.min) / this.step, Number.isInteger((this.max - this.min) / this.step));
        }
    }
    componentDidLoad() {
        this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
    }
    componentDidRender() {
        if (this.internalOptions) {
            this.inputSlide.min = '0';
            this.inputSlide.max = `${this.internalOptions.length - 1}`;
            this.inputSlide.step = '1';
        }
        else {
            this.inputSlide.min = this.min ? `${this.min}` : '';
            this.inputSlide.max = this.max ? `${this.max}` : '';
            this.inputSlide.step = this.step ? `${this.step}` : '';
        }
    }
    componentDidUpdate() {
        this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
        const valueName = this.emiterChange(parseInt(this.inputSlide.value));
        this.inputValue = this.stepArray.length > 0 ? valueName.name : this.inputSlide.value;
    }
    arrayToSteps(value, int) {
        const numberToCalc = int ? value + 1 : value;
        const valueSteps = [];
        for (let i = 0; i < numberToCalc; i++) {
            valueSteps.push(i);
        }
        return valueSteps.map((term) => ({ value: term, name: term * this.step + this.min }));
    }
    render() {
        return (h(Host, { key: '467db17ea6e61e49e86f6e94aa0f3ce5a11ece9f' }, h("input", { key: '3b01de378c35eb6263d4312246e0382e7cbdd447', ref: this.refInputSlide, type: "range", class: {
                input_slide: true,
            }, value: this.value, onInput: this.onInputSlide, onMouseEnter: this.onInputMouseEnter, onMouseLeave: this.onInputMouseLeave, "data-test": this.dataTest }), h("div", { key: 'a5078b512172b0b8af4b602fb014054d262d5d6d', class: "track-bg" }, h("div", { key: 'f2f4d797e7c9c1357eaae77e156575efc5287252', class: { [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }, ref: this.refProgressBar }, h("bds-tooltip", { key: 'c254c55df8b7dbd9ca30a87567eabddd74387993', ref: this.refBdsTooltip, class: { [`progress-bar-tooltip`]: true }, position: "top-center", "tooltip-text": this.inputValue }, h("div", { key: 'ba9a411602639c482c761eab0d9977ffe3b2fcd4', class: { [`progress-bar-thumb`]: true } }))), this.markers &&
            this.stepArray.map((item, index) => (h("div", { key: index, class: `step` }, this.label && h("bds-typo", { class: "label-step", variant: "fs-10" }, `${item.name}`)))))));
    }
};
Slider.style = sliderCss;

export { Slider as bds_slider };
//# sourceMappingURL=bds-slider.entry.js.map

//# sourceMappingURL=bds-slider.entry.js.map