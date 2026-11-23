'use strict';

var index = require('./index-GTJCA4wH.js');

const RadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsRadioGroupChange = index.createEvent(this, "bdsRadioGroupChange");
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
        return (index.h(index.Host, { key: '6524f57fda3756dcc7511534d787435310d2e772' }, index.h("slot", { key: '1af4a02271ff394ba0efe02ad9e7d9f164f7526a' })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};

exports.bds_radio_group = RadioGroup;
