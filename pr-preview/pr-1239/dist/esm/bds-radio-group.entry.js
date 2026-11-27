import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';

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
        return (h(Host, { key: '592a4bf70e729f3f1fdd6f32efa42fd629acf37b' }, h("slot", { key: 'd6a720a6cdc59bfa50a9da20ef06ddafe3068d3f' })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};

export { RadioGroup as bds_radio_group };
