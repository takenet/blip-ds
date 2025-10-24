import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$9 } from './p-D0GPtLzG.js';
import { d as defineCustomElement$8 } from './p-BdmmZFvg.js';
import { d as defineCustomElement$7 } from './p-TVfa2QIk.js';
import { d as defineCustomElement$6 } from './p-C44auPjU.js';
import { d as defineCustomElement$5 } from './p-BOV1BOH3.js';
import { d as defineCustomElement$4 } from './p-DzNR1kSf.js';
import { d as defineCustomElement$3 } from './p-mcLFs8cG.js';
import { d as defineCustomElement$2 } from './p-IEiDdwGC.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const listCss = ":host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:\"\";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}";

const ListItem = /*@__PURE__*/ proxyCustomElement(class ListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChecked = createEvent(this, "bdsChecked");
        this.bdsClickActionButtom = createEvent(this, "bdsClickActionButtom");
        this.internalChips = [];
        this.internalActionsButtons = [];
        this.checked = false;
        /**
         * Typelis. Used toselect type of item list.
         */
        this.typeList = null;
        /**
         * AvatarName. Used to enter the avatar name.
         */
        this.avatarName = null;
        /**
         * AvatarThumbnail. Used to insert the avatar photo.
         */
        this.avatarThumbnail = null;
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * Value. Used to insert a value in list item.
         */
        this.value = null;
        /**
         * Text. Used to insert a text in the display item.
         */
        this.text = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * The chips on the component
         * Should be passed this way:
         * chips='["chip1", "chip2"]'
         */
        this.chips = [];
        /**
         * The actions buttons on the component
         * Should be passed this way:
         * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'
         */
        this.actionsButtons = [];
        /**
         * Clickable. Used to define if the item is clickable or not.
         */
        this.clickable = false;
        /**
         * Active. Used to define when the item is highlighted.
         */
        this.active = false;
        /**
         * Enable rounded border on item
         */
        this.borderRadius = false;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handler = () => {
            this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
        };
        this.clickActionButtons = (data, event) => {
            const elementButton = event.composedPath()[0];
            this.bdsClickActionButtom.emit({
                value: this.value,
                icon: data,
                elementButton: elementButton,
            });
        };
    }
    componentWillLoad() {
        this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
        this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
        this.chipsChanged();
        this.actionsButtonsChanged();
    }
    checkedChanged(isChecked) {
        this.bdsChecked.emit({
            value: this.value,
            text: this.text,
            secondaryText: this.secondaryText,
            typeList: this.typeList,
            checked: isChecked,
        });
    }
    chipsChanged() {
        if (this.chips) {
            if (typeof this.chips === 'string') {
                this.internalChips = JSON.parse(this.chips);
            }
            else {
                this.internalChips = this.chips;
            }
        }
        else {
            this.internalChips = [];
        }
    }
    actionsButtonsChanged() {
        if (this.actionsButtons) {
            if (typeof this.actionsButtons === 'string') {
                this.internalActionsButtons = JSON.parse(this.actionsButtons);
            }
            else {
                this.internalActionsButtons = this.actionsButtons;
            }
        }
        else {
            this.internalActionsButtons = [];
        }
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "default" }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "default" }, `${chip.slice(0, limit)} ...`)));
            }
        });
    }
    renderActionsButtons() {
        if (!this.internalActionsButtons.length) {
            return [];
        }
        return this.internalActionsButtons.map((button, index) => {
            const id = index.toString();
            return (h("bds-button-icon", { key: id, variant: "secondary", icon: button, size: "short", onClick: (ev) => this.clickActionButtons(button, ev) }));
        });
    }
    render() {
        const hasInput = this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
        const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        return (h(Host, { key: '56f8abbad0d450166ba62956ce3e3fa17dd40e15' }, h("div", { key: '42ac5c1f2f37189481108a84e37419123eb124bf', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: '113b8e54e59723374cfd4f9e9874bb2689498376', class: "active" }), hasLeftInput && (h("div", { key: '91b65bee05d965ceccc51841a9cc1fe44957e061', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: 'b1d4bb209f945de1ffc5055769ecb5e7b505615b', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '6592d72497d1f9989772688d0f47cc81094dbb60', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: 'ed24b2464863b3050d004b422e03e88e4d2eda3d', class: { [`content-slot`]: true } }, h("slot", { key: '92b701d45a847fe523b5757b338332f9aad47259' })), (this.text || this.secondaryText) && (h("div", { key: '9937d50680a246a50444880cea3e6cacd2d7f61e', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '59aadf41d9563848ef055a4b17315d070544c2ce', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'fd6dac17a8458295f54a5841f2704b12ca82fb21', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: '41047fcc535640d9091abbe5af4689f8f8cc0840', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: '9bf4d9e33adc8c84114353fea46573f677a41316', class: "internal-chips" }, this.renderChips()), h("slot", { key: '7368ea5db603c6afca931256a985faac6acafdfd', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '476037573189161ba9f9148825d738ac99e0c56f', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: '2de36580618a601459ca51c0a3f94acd17543afb', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: '16086839c741059cfb8967c397cdf38b75131a9b', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: 'd2802b507bb137154b7ab7bfd1c8f67eff6bfebd', refer: "", name: "", checked: this.checked }))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "chips": ["chipsChanged"],
        "actionsButtons": ["actionsButtonsChanged"]
    }; }
    static get style() { return listCss; }
}, [1, "bds-list-item", {
        "checked": [1540],
        "typeList": [1, "type-list"],
        "avatarName": [1, "avatar-name"],
        "avatarThumbnail": [1, "avatar-thumbnail"],
        "icon": [1],
        "value": [1],
        "text": [1],
        "secondaryText": [1, "secondary-text"],
        "chips": [1025],
        "actionsButtons": [1025, "actions-buttons"],
        "clickable": [4],
        "active": [4],
        "borderRadius": [4, "border-radius"],
        "size": [1],
        "dataTest": [1, "data-test"],
        "internalChips": [32],
        "internalActionsButtons": [32]
    }, undefined, {
        "checked": ["checkedChanged"],
        "chips": ["chipsChanged"],
        "actionsButtons": ["actionsButtonsChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-list-item", "bds-avatar", "bds-button-icon", "bds-checkbox", "bds-chip-clickable", "bds-icon", "bds-radio", "bds-switch", "bds-tooltip", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItem);
            }
            break;
        case "bds-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "bds-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-chip-clickable":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-tooltip":
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

export { ListItem as L, defineCustomElement as d };
//# sourceMappingURL=p-CBWI6lrz.js.map

//# sourceMappingURL=p-CBWI6lrz.js.map