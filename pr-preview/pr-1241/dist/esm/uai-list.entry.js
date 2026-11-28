import { r as registerInstance, c as createEvent, t as transformTag, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiListCss = () => `:host{display:block;width:100%}`;

const UaiList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiListCheckboxChange = createEvent(this, "uaiListCheckboxChange");
        this.uaiListRadioChange = createEvent(this, "uaiListRadioChange");
        this.uaiListSwitchChange = createEvent(this, "uaiListSwitchChange");
        this.uaiClickActionsButtons = createEvent(this, "uaiClickActionsButtons");
        this.uaiClickActionsButton = createEvent(this, "uaiClickActionsButton");
        this.itemListElement = null;
        /** Control of every row: checkbox, radio, switch or default. Use to make the whole list selectable; pair with the change events. When null, each row keeps its own typeList. */
        this.typeList = null;
        this.changedOptions = (event) => {
            const { detail } = event;
            if (detail.typeList == 'radio' && detail.checked == true) {
                // SOLFAC-117 (b, bug 1): value keeps the value string of the selected row, not the event detail.
                this.value = detail.value;
                this.syncRadios();
                const selected = this.items('radio').find((item) => item.value == detail.value);
                if (selected)
                    this.uaiListRadioChange.emit(this.summary(selected));
            }
            if (detail.typeList == 'checkbox') {
                this.uaiListCheckboxChange.emit(this.items('checkbox').filter((item) => item.checked).map((item) => this.summary(item)));
            }
            if (detail.typeList == 'switch') {
                this.uaiListSwitchChange.emit(this.items('switch').filter((item) => item.checked).map((item) => this.summary(item)));
            }
        };
        this.onClickActionsButtons = (event) => {
            const { detail } = event;
            this.uaiClickActionsButtons.emit(detail);
            // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
            this.uaiClickActionsButton.emit(detail);
        };
    }
    componentWillLoad() {
        this.data && this.dataChanged();
    }
    componentWillRender() {
        this.data && this.updateData();
        if (!this.data) {
            this.setItemListElement();
        }
    }
    componentDidRender() {
        if (this.data) {
            this.internalDataChanged();
        }
    }
    componentDidLoad() {
        this.syncRadios();
    }
    dataChanged() {
        this.updateData();
    }
    valueChanged() {
        this.syncRadios();
    }
    internalDataChanged() {
        this.itemListElement = this.element.shadowRoot.querySelectorAll(`${transformTag("uai-list-item")}`);
    }
    get itemRole() {
        return this.typeList == 'radio' ? 'none' : 'listitem';
    }
    setItemListElement() {
        this.itemListElement = this.element.getElementsByTagName('uai-list-item');
        for (let i = 0; i < this.itemListElement.length; i++) {
            const item = this.itemListElement[i];
            // SOLFAC-117 (b, bug 2): only a list with a typeList overrides the typeList of its rows.
            if (this.typeList)
                item.typeList = this.typeList;
            item.setAttribute('role', this.itemRole);
            item.addEventListener('uaiChecked', this.changedOptions);
        }
    }
    updateData() {
        if (this.data) {
            if (typeof this.data === 'string') {
                // Keep the current data if AngularJS has not interpolated the attribute yet; @Watch('data') reloads it.
                try {
                    this.internalData = JSON.parse(this.data);
                }
                catch (_a) {
                    // Not valid JSON yet.
                }
            }
            else {
                this.internalData = this.data;
            }
        }
    }
    items(type) {
        return Array.from(this.itemListElement || []).filter((item) => item.typeList == type);
    }
    summary(item) {
        return {
            value: item.value,
            text: item === null || item === void 0 ? void 0 : item.text,
            secondaryText: item === null || item === void 0 ? void 0 : item.secondaryText,
            avatarName: item === null || item === void 0 ? void 0 : item.avatarName,
            avatarThumbnail: item === null || item === void 0 ? void 0 : item.avatarThumbnail,
            typeList: item === null || item === void 0 ? void 0 : item.typeList,
        };
    }
    // SOLFAC-117 (b, bugs 1 and 4): a value set from outside selects the matching radio; the other radios are
    // cleared silently (uaiChecked is only for user interaction).
    syncRadios() {
        if (this.value === undefined || this.value === null || this.value === '')
            return;
        for (const radio of this.items('radio')) {
            radio.checked = radio.value == this.value;
        }
    }
    render() {
        return (h(Host, { key: 'fc0d19304b93cbd56b01b649b47e17f6e66a1f8b', role: this.typeList == 'radio' ? 'radiogroup' : 'list' }, h("div", { key: '13090c506525d625c85aea83647c4650226f08ae', class: "list" }, this.internalData ? (this.internalData.map((item, idx) => (h("uai-list-item", { key: idx, role: this.itemRole, value: item.value, text: item.text, typeList: this.typeList ? this.typeList : item.typeList, secondaryText: item.secondaryText, avatarName: item.avatarName, avatarThumbnail: item.avatarThumbnail, checked: item.checked, icon: item.icon, chips: item.chips, actionsButtons: item.actionsButtons, onUaiChecked: this.changedOptions, onUaiClickActionButtom: this.onClickActionsButtons, dataTest: item.dataTest })))) : (h("slot", null)))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "data": [{
                "dataChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }],
        "internalData": [{
                "internalDataChanged": 0
            }]
    }; }
};
UaiList.style = uaiListCss();

export { UaiList as uai_list };
