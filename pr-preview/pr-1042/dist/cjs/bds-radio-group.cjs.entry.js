'use strict';

var index = require('./index-ljSeaagN.js');

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
        return (index.h(index.Host, { key: '50e0ef2307cca03cabd485c24a8e073230057cc6' }, index.h("slot", { key: '6c66dd71b9efa599c2881205f09b217edddfc810' })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};

exports.bds_radio_group = RadioGroup;
//# sourceMappingURL=bds-radio-group.entry.cjs.js.map

//# sourceMappingURL=bds-radio-group.cjs.entry.js.map