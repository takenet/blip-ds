import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const RadioGroup = /*@__PURE__*/ proxyCustomElement(class RadioGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.bdsRadioGroupChange = createEvent(this, "bdsRadioGroupChange");
        this.radioGroupElement = null;
        this.chagedOptions = (value, event) => {
            if (event.detail.checked == true) {
                this.value = value;
            }
        };
    }
    valueChanged(value) {
        this.setSelectedRadio(value);
        this.bdsRadioGroupChange.emit({ value });
    }
    componentWillRender() {
        this.radioGroupElement = this.element.getElementsByTagName('bds-radio');
        for (let i = 0; i < this.radioGroupElement.length; i++) {
            this.radioGroupElement[i].addEventListener('bdsChange', (event) => this.chagedOptions(this.radioGroupElement[i].value, event));
        }
    }
    setSelectedRadio(value) {
        const radios = this.radioGroupElement;
        for (let i = 0; i < radios.length; i++) {
            const getValue = radios[i].value;
            radios[i].checked = false;
            if (radios[i].checked == false && value == getValue) {
                radios[i].checked = true;
            }
        }
    }
    render() {
        return (h(Host, { key: '50e0ef2307cca03cabd485c24a8e073230057cc6' }, h("slot", { key: '6c66dd71b9efa599c2881205f09b217edddfc810' })));
    }
    get element() { return this; }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
}, [6, "bds-radio-group", {
        "value": [1537]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-radio-group"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RadioGroup);
            }
            break;
    } });
}

const BdsRadioGroup = RadioGroup;
const defineCustomElement = defineCustomElement$1;

export { BdsRadioGroup, defineCustomElement };
//# sourceMappingURL=bds-radio-group.js.map

//# sourceMappingURL=bds-radio-group.js.map