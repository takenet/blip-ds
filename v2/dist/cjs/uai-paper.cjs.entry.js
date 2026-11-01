'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiPaperCss = () => `:host{--paper-ring:0 0 0 0 transparent;--paper-elevation:0 0 0 0 transparent;display:block;border-radius:var(--uai-radius-xl, 1rem);-webkit-box-shadow:var(--paper-ring), var(--paper-elevation);box-shadow:var(--paper-ring), var(--paper-elevation)}:host(.border){--paper-border-color:var(--uai-border-default, #e4e6e7);--paper-ring:inset 0 0 0 var(--uai-border-width-default, 1px) var(--paper-border-color)}:host(.bg-surface-0){background-color:var(--uai-surface-paper, #ffffff)}:host(.bg-surface-1){background-color:var(--uai-surface-background, #f2f3f3)}:host(.bg-surface-2){background-color:var(--uai-surface-contrast, #e4e6e7)}:host(.bg-surface-3){background-color:var(--uai-surface-muted, #f2f3f3)}:host(.bg-surface-4){background-color:var(--uai-surface-inverse, #242729)}:host(.border-1),:host(.border-2){--paper-border-color:var(--uai-border-default, #e4e6e7)}:host(.border-primary){--paper-border-color:var(--uai-fixed-blue, #1e6bf1)}:host(.border-secondary){--paper-border-color:var(--uai-content-secondary, #5f676d)}:host(.border-positive),:host(.border-success){--paper-border-color:var(--uai-feedback-success, #3da329)}:host(.border-negative),:host(.border-error){--paper-border-color:var(--uai-feedback-error, #cf0022)}:host(.border-warning){--paper-border-color:var(--uai-feedback-warning, #ff8000)}:host(.border-delete){--paper-border-color:var(--uai-action-destructive, #cf0022)}:host(.paper__elevation--none){--paper-elevation:0 0 0 0 transparent}:host(.paper__elevation--static){--paper-elevation:var(--uai-elevation-1, 0px 2px 8px -2px rgba(0, 0, 0, 0.16))}:host(.paper__elevation--primary){--paper-elevation:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16))}:host(.paper__elevation--secondary){--paper-elevation:var(--uai-elevation-3, 0px 8px 4px -4px rgba(0, 0, 0, 0.08), 0px 12px 12px -4px rgba(0, 0, 0, 0.12))}.paper__display{display:contents}`;

const UaiPaper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    borderChanged() {
        this.hasBorder = this.border !== true;
    }
    componentWillLoad() {
        this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
    }
    render() {
        return (index.h(index.Host, { key: 'c9c7b491fc1eb9b4a571d2f73b13ff0566b82fe0', class: {
                [`paper__elevation--${this.elevation}`]: this.hasBorder,
                border: this.border,
                [`bg-${this.bgColor}`]: true,
                [`border-${this.borderColor}`]: true,
            }, style: { height: `${this.height}`, width: `${this.width}` } }, index.h("div", { key: '119508633a2a47823260c0c95c93c55338f9430e', class: "paper__display", "data-test": this.dataTest }, index.h("slot", { key: '9bf4be5f9d6b946c85d08c009ed222192e34aa43' }))));
    }
    static get watchers() { return {
        "border": [{
                "borderChanged": 0
            }]
    }; }
};
UaiPaper.style = uaiPaperCss();

exports.uai_paper = UaiPaper;
