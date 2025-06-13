import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-COEIU3SQ.js';

const RadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};

export { RadioGroup as bds_radio_group };
//# sourceMappingURL=bds-radio-group.entry.js.map

//# sourceMappingURL=bds-radio-group.entry.js.map