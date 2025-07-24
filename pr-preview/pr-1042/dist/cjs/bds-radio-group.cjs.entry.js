'use strict';

var index = require('./index-D_zq0Z7d.js');

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
        return (index.h(index.Host, { key: 'e3125c6fb59d1ae2d14b403c0987a1c38d3ed4e9' }, index.h("slot", { key: '760a98c72db9700f888e85436e4f07a89bc7209b' })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};

exports.bds_radio_group = RadioGroup;
//# sourceMappingURL=bds-radio-group.entry.cjs.js.map

//# sourceMappingURL=bds-radio-group.cjs.entry.js.map