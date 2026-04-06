'use strict';

var index = require('./index-t1DDWEYz.js');

const sliderCss = ":host{position:relative;display:-ms-flexbox;display:flex;width:100%;height:32px}.track-bg{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;inset:0 8px;pointer-events:none}.track-bg .progress-bar{position:absolute;height:4px;border-radius:1rem}.track-bg .progress-bar-liner{background-color:var(--color-primary, rgb(30, 107, 241))}.track-bg .progress-bar-tooltip{position:absolute;top:-6px;right:-0.5rem}.track-bg .progress-bar-thumb{position:relative;width:1rem;height:1rem;border-radius:1rem;background-color:var(--color-primary, rgb(30, 107, 241))}.track-bg .progress-bar-thumb::before{content:\"\";position:absolute;inset:0;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));border-radius:1rem;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.track-bg .progress-bar-hover .progress-bar-thumb::before{-webkit-transform:scale(2);transform:scale(2)}.track-bg::before{content:\"\";position:absolute;inset:0;height:4px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;border-radius:1rem}.track-bg .step{position:relative;width:2px;height:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--color-content-disable, rgb(89, 89, 89));border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.track-bg .step .label-step{margin-top:1rem;white-space:nowrap}.track-bg .step.step--first{-ms-flex-pack:start;justify-content:flex-start}.track-bg .step.step--last .label-step{position:absolute;right:0;top:0}.element-min{position:relative;height:4px;background-color:var(--color-primary, rgb(30, 107, 241));border-top-left-radius:1rem;border-bottom-left-radius:1rem}.element-max{position:relative;height:4px;border-top-right-radius:1rem;border-bottom-right-radius:1rem}.input_slide{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;background:transparent;cursor:pointer;width:100%;height:4px;position:relative;border-radius:1rem;background:transparent;color:-internal-light-dark(transparent, transparent)}.input_slide.has_min{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0}.input_slide.has_max{border-top-right-radius:0;border-bottom-right-radius:0}.input_slide:hover .input_slide::-webkit-slider-thumb,.input_slide:hover .input_slide::-moz-range-thumb{-webkit-appearance:none}.input_slide::-webkit-slider-thumb,.input_slide::-moz-range-thumb{-webkit-appearance:none;position:relative;height:16px;width:16px;border-radius:50%;border:none}.group_slide{position:relative;width:100%}.group_slide .input_slide{width:inherit;position:absolute}.group_slide .input_slide_start{left:0}.group_slide .input_slide_end{right:0}.group_slide .input_slide::-webkit-slider-thumb,.group_slide .input_slide::-moz-range-thumb{-webkit-appearance:none}";

const Slider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsChange = index.createEvent(this, "bdsChange");
        var _a, _b;
        this.inputValue = (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : (this.min ? this.min.toString() : '0');
        this.tooltipPosition = 'top-center';
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
        this.computeTooltipPosition = (percent) => {
            if (percent <= 0)
                return 'top-left';
            if (percent >= 100)
                return 'top-right';
            return 'top-center';
        };
        this.getTooltipText = (item) => {
            return item.tooltip !== undefined ? item.tooltip : item.name.toString();
        };
        this.onInputSlide = (ev) => {
            const input = ev.target;
            this.progressBar.style.width = `${this.valuePercent(input)}%`;
            const valueName = this.emiterChange(parseInt(input.value));
            this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : input.value;
            this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(input));
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
        var _a, _b, _c, _d;
        if (this.dataMarkers) {
            if (typeof this.dataMarkers === 'string') {
                this.internalOptions = JSON.parse(this.dataMarkers);
                this.stepArray = this.internalOptions;
            }
            else {
                this.internalOptions = this.dataMarkers;
                this.stepArray = this.internalOptions;
            }
            const initialIndex = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
            const initialItem = this.stepArray[initialIndex];
            if (initialItem) {
                this.inputValue = this.getTooltipText(initialItem);
            }
            const percent = this.stepArray.length > 1 ? (initialIndex / (this.stepArray.length - 1)) * 100 : 50;
            this.tooltipPosition = this.computeTooltipPosition(percent);
        }
        else {
            this.stepArray = this.arrayToSteps((this.max - this.min) / this.step, Number.isInteger((this.max - this.min) / this.step));
            const min = (_b = this.min) !== null && _b !== void 0 ? _b : 0;
            const max = (_c = this.max) !== null && _c !== void 0 ? _c : 100;
            const value = (_d = this.value) !== null && _d !== void 0 ? _d : min;
            const percent = max !== min ? ((value - min) * 100) / (max - min) : 50;
            this.tooltipPosition = this.computeTooltipPosition(percent);
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
        this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : this.inputSlide.value;
        this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(this.inputSlide));
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
        return (index.h(index.Host, { key: '678fe208fcc443cb4c1047859bb522c618a17b27' }, index.h("input", { key: 'd09f10fd7e6f9fcb13a948bfecb30b0aa174d925', ref: this.refInputSlide, type: "range", class: {
                input_slide: true,
            }, value: this.value, onInput: this.onInputSlide, onMouseEnter: this.onInputMouseEnter, onMouseLeave: this.onInputMouseLeave, "data-test": this.dataTest }), index.h("div", { key: '18b31a7c732c40d25f2cc3b1c72ec60dca0bfe66', class: "track-bg" }, this.markers &&
            this.stepArray.map((item, index$1) => (index.h("div", { key: index$1, class: { step: true, 'step--first': index$1 === 0, 'step--last': index$1 === this.stepArray.length - 1 } }, this.label && index.h("bds-typo", { class: "label-step", variant: "fs-10" }, `${item.name}`)))), index.h("div", { key: 'fcab9edc53784c1d3a16786cd14aa4b8d2dfcec6', class: { [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }, ref: this.refProgressBar }, index.h("bds-tooltip", { key: '2836b17d740b5b4280a99b31bf15f21a3b4e918e', ref: this.refBdsTooltip, class: { [`progress-bar-tooltip`]: true }, position: this.tooltipPosition, "tooltip-text": this.inputValue }, index.h("div", { key: '669b6a5af3a8fe6f7657829b067eeb030b9ea5b8', class: { [`progress-bar-thumb`]: true } }))))));
    }
};
Slider.style = sliderCss;

exports.bds_slider = Slider;
//# sourceMappingURL=bds-slider.entry.cjs.js.map

//# sourceMappingURL=bds-slider.cjs.entry.js.map