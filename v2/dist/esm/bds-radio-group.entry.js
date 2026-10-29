import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

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
        return (h(Host, { key: '140cef822ee9b81f0ceaf492708335bea5114895' }, h("slot", { key: '6c571b36156127ed7e5a1664d0f630b662592cef' })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};

export { RadioGroup as bds_radio_group };
