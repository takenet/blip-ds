import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$3 } from './p-BmvUJnHb.js';
import { d as defineCustomElement$2 } from './p-BHBVuzyo.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const selectOptionCss = ":host(.option-checked){-ms-flex-order:-1;order:-1}.load-spinner{background-color:var(--color-surface-0, rgb(255, 255, 255));height:200px}.select-option{display:grid;width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-surface-0, rgb(255, 255, 255));padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-order:1;order:1}.select-option--selected .select-option__container--value{color:var(--color-primary, rgb(30, 107, 241))}.select-option--disabled .select-option__container--value,.select-option--disabled .select-option__container--bulk{cursor:not-allowed;color:var(--color-content-disable, rgb(89, 89, 89))}.select-option--disabled .select-option__container--value:hover,.select-option--disabled .select-option__container--bulk:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.select-option ::slotted(bds-icon){margin-right:10px}.select-option__container{color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option__container__checkbox{cursor:pointer;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select-option__container__checkbox bds-checkbox{pointer-events:none}.select-option__container__fill_space{width:100%}.select-option__container--bulk,.select-option__container--status{color:var(--color-content-ghost, rgb(140, 140, 140))}.select-option__container--status{margin-left:4px}.select-option__container__overflow{overflow:hidden;padding-right:16px}.select-option__container:hover>.select-option__container--value,.select-option__container:hover>.select-option__container--bulk,.select-option__container:hover>.select-option__container--status{color:var(--color-primary, rgb(30, 107, 241))}.select-option__container:active>.select-option__container--value,.select-option__container:active>.select-option__container--bulk,.select-option__container:active>.select-option__container--status{color:var(--color-primary, rgb(30, 107, 241))}.select-option:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.select-option:focus{background-color:var(--color-surface-1, rgb(246, 246, 246));color:#3f7de8}.select-option--selected{background-color:var(--color-surface-1, rgb(246, 246, 246))}.select-option--invisible{display:none}";

const SelectOption = /*@__PURE__*/ proxyCustomElement(class SelectOption extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.optionSelected = createEvent(this, "optionSelected");
        this.optionChecked = createEvent(this, "optionChecked");
        /**
         * The text value of the option.
         */
        this.selected = false;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * Add state danger on input, use for use feedback.
         */
        this.invisible = false;
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         *  Quantity Description on option value, this item is locate to rigth in component.
         */
        this.bulkOption = '';
        /**
         *  Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property.
         */
        this.slotAlign = 'center';
        /**
         * Type Option. Used toselect type of item list.
         */
        this.typeOption = 'default';
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.checkedCurrent = () => {
            if (this.typeOption !== 'checkbox')
                return;
            this.nativeInput.toggle();
        };
        this.onClickSelectOption = () => {
            if (this.typeOption == 'checkbox')
                return;
            if (!this.disabled) {
                this.optionSelected.emit({ value: this.value, label: this.element.innerHTML });
            }
        };
        this.optionHandle = (ev) => {
            const elementChecked = ev.target;
            const data = { value: elementChecked.name, label: this.element.innerHTML, checked: elementChecked.checked };
            this.checked = !this.checked;
            this.optionChecked.emit(data);
        };
        this.attachOptionKeyboardListeners = (event) => {
            const element = event.target;
            switch (event.key) {
                case "Enter" /* Keyboard.ENTER */:
                    this.onClickSelectOption();
                    break;
                case "ArrowDown" /* Keyboard.ARROW_DOWN */:
                    if (element.parentElement.nextElementSibling &&
                        !element.parentElement.nextElementSibling.hasAttribute('invisible')) {
                        event.preventDefault();
                        event.stopPropagation();
                        element.parentElement.nextElementSibling.firstElementChild.focus();
                    }
                    break;
                case "ArrowUp" /* Keyboard.ARROW_UP */:
                    if (element.parentElement.previousElementSibling &&
                        !element.parentElement.previousElementSibling.hasAttribute('invisible')) {
                        event.preventDefault();
                        event.stopPropagation();
                        element.parentElement.previousElementSibling.firstElementChild.focus();
                    }
            }
        };
    }
    changeSelectionType() {
        this.typeOption = this.typeOption;
    }
    async toggle() {
        this.checked = !this.checked;
    }
    async toMark() {
        this.checked = true;
    }
    async markOff() {
        this.checked = false;
    }
    render() {
        return (h("div", { key: '606cdb0a653a89da9875f700e82a42ab8484f641', id: `bds-select-option-${this.value}`, "data-event": "click", role: "button", onKeyDown: this.attachOptionKeyboardListeners, onClick: this.onClickSelectOption, "data-value": this.value, "data-test": this.dataTest, class: {
                'select-option': this.typeOption != 'checkbox',
                'select-option--selected': this.selected,
                'select-option--disabled': this.disabled,
                'select-option--invisible': this.invisible,
            } }, h("div", { key: '3ecdaf47a248a04dbc73b415d2372822f6b9cd38', style: { alignSelf: this.slotAlign } }, h("slot", { key: '50741f2d520e6710ee504ce39ba6313afa86ee5f', name: "input-left" })), h("div", { key: '4b6ead24b263297f5e1ee295781a23e15d901477', class: {
                'select-option__container': true,
                'select-option__container__fill_space': !!this.status,
                'select-option__container__checkbox': this.typeOption == 'checkbox',
            }, onClick: () => this.checkedCurrent() }, this.titleText && (h("bds-typo", { key: '6d11836176f2fbac8290dd882b2c6ba523f438e6', class: "select-option__container--value", variant: "fs-16", bold: "semi-bold" }, this.titleText)), this.typeOption === 'checkbox' ? (h("bds-checkbox", { ref: this.refNativeInput, refer: `html-for-${this.value}`, label: this.element.innerHTML, name: this.value, checked: this.checked, onBdsChange: (ev) => this.optionHandle(ev) })) : (h("bds-typo", { class: {
                'select-option__container--value': true,
                'select-option__container__overflow': !!this.status,
            }, noWrap: !!this.status, variant: "fs-14" }, h("slot", null)))), this.bulkOption && (h("bds-typo", { key: '5677cc4ba79f3d70370e5782438f1d0a5f133b0a', class: "select-option__container--bulk", variant: "fs-10" }, this.bulkOption)), this.status && (h("bds-typo", { key: '902fe35eced9f30928efd22946dc84cc2a55672d', class: "select-option__container--status", noWrap: true, variant: "fs-10" }, this.status))));
    }
    get element() { return this; }
    static get watchers() { return {
        "typeOption": ["changeSelectionType"]
    }; }
    static get style() { return selectOptionCss; }
}, [1, "bds-select-option", {
        "value": [8],
        "selected": [4],
        "disabled": [4],
        "invisible": [1540],
        "danger": [1540],
        "bulkOption": [1, "bulk-option"],
        "slotAlign": [1, "slot-align"],
        "titleText": [1, "title-text"],
        "status": [1],
        "typeOption": [1537, "type-option"],
        "checked": [1540],
        "dataTest": [1, "data-test"],
        "toggle": [64],
        "toMark": [64],
        "markOff": [64]
    }, undefined, {
        "typeOption": ["changeSelectionType"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-select-option", "bds-checkbox", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-select-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectOption);
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { SelectOption as S, defineCustomElement as d };
//# sourceMappingURL=p-CpJLOuix.js.map

//# sourceMappingURL=p-CpJLOuix.js.map