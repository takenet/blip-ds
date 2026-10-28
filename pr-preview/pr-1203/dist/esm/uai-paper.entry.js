import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const uaiPaperCss = () => `:host{display:block;border-radius:var(--uai-radius-xl, 1rem)}:host(.border){border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);margin:calc(var(--uai-border-width-default, 1px) * -1)}:host(.bg-surface-0){background-color:var(--uai-surface-paper, #ffffff)}:host(.bg-surface-1){background-color:var(--uai-surface-background, #f2f3f3)}:host(.bg-surface-2){background-color:var(--uai-surface-contrast, #e4e6e7)}:host(.bg-surface-3){background-color:var(--uai-surface-muted, #f2f3f3)}:host(.bg-surface-4){background-color:var(--uai-surface-inverse, #242729)}:host(.border-1),:host(.border-2){border-color:var(--uai-border-default, #e4e6e7)}:host(.border-primary){border-color:var(--uai-fixed-blue, #1e6bf1)}:host(.border-secondary){border-color:var(--uai-content-secondary, #5f676d)}:host(.border-positive),:host(.border-success){border-color:var(--uai-feedback-success, #3da329)}:host(.border-negative),:host(.border-error){border-color:var(--uai-feedback-error, #cf0022)}:host(.border-warning){border-color:var(--uai-feedback-warning, #ff8000)}:host(.border-delete){border-color:var(--uai-action-destructive, #cf0022)}:host(.paper__elevation--none){-webkit-box-shadow:none;box-shadow:none}:host(.paper__elevation--static){-webkit-box-shadow:var(--uai-elevation-1, 0px 2px 8px -2px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-1, 0px 2px 8px -2px rgba(0, 0, 0, 0.16))}:host(.paper__elevation--primary){-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16))}:host(.paper__elevation--secondary){-webkit-box-shadow:var(--uai-elevation-3, 0px 8px 4px -4px rgba(0, 0, 0, 0.08), 0px 12px 12px -4px rgba(0, 0, 0, 0.12));box-shadow:var(--uai-elevation-3, 0px 8px 4px -4px rgba(0, 0, 0, 0.08), 0px 12px 12px -4px rgba(0, 0, 0, 0.12))}.paper__display{display:contents}`;

const UaiPaper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasBorder = true;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'static', 'primary', 'secondary';
         */
        this.elevation = 'static';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Prop for set the border of the component.
         */
        this.border = false;
        /**
         * Prop for set the height of the component.
         */
        this.height = null;
        /**
         * Prop for set the width of the component.
         */
        this.width = null;
        /**
         * Prop for set the background color.
         */
        this.bgColor = 'surface-1';
        /**
         * Prop for set the border color.
         */
        this.borderColor = null;
    }
    componentWillLoad() {
        this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
    }
    render() {
        return (h(Host, { key: 'd8f3a42d49f4aceb2a80b4d61e1c67b2362c5f0d', class: {
                [`paper__elevation--${this.elevation}`]: this.hasBorder,
                border: this.border,
                [`bg-${this.bgColor}`]: true,
                [`border-${this.borderColor}`]: true,
            }, style: { height: `${this.height}`, width: `${this.width}` } }, h("div", { key: '4e6fd7c0c83be9208be5677e535e2637b56ebdd6', class: "paper__display", "data-test": this.dataTest }, h("slot", { key: '935506c368b95e2d0d72aad77871f7f130c47e28' }))));
    }
};
UaiPaper.style = uaiPaperCss();

export { UaiPaper as uai_paper };
