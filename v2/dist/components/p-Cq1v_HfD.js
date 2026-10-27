import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$9 } from './p-BUuvYqJJ.js';
import { d as defineCustomElement$8 } from './p-E7n6VCwK.js';
import { d as defineCustomElement$7 } from './p-C0VLp-j3.js';
import { d as defineCustomElement$6 } from './p-DFAf6tpC.js';
import { d as defineCustomElement$5 } from './p-Cmult6Pm.js';
import { d as defineCustomElement$4 } from './p-BiiVQoxE.js';
import { d as defineCustomElement$3 } from './p-BUKGTfeg.js';
import { d as defineCustomElement$2 } from './p-7wwi1guL.js';
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
        return (h(Host, { key: '1ed4b830af3dd04483c76b9eee2c6da7c8b3fe8d' }, h("div", { key: 'e2ba821790ddaca352cb4828938d78b0b20a7f76', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: 'e9c1425f04be56274f3370902bbf89ab8acd641d', class: "active" }), hasLeftInput && (h("div", { key: '371b856b19d43530b8a078f27569dbc7fcae7597', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: 'b3e42a0aacb5c98b8c9ae47ae57be3263930dab7', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '74fb757f1a39dcccc321ad6d980641c9d83ab947', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: '14c140c9b85bf34d24d62b4441490ed643f9ac5a', class: { [`content-slot`]: true } }, h("slot", { key: 'e3e19ff84b273cdb92b0314a25874448a90e7f5b' })), (this.text || this.secondaryText) && (h("div", { key: '0bf605242927c42fea67b5458b4a95ae7ef1e9cc', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '31f16781d62bed4e6f03a5ed22cf80374d1a609e', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: '046abccf59e02adbf8122c70035df7fc4f3ae861', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: 'e4613e5a58dfb15d2233dd315962ad2df1ceb802', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: 'f5bfcd346c3fd79f3c9c9a7c53857e48120d3ed3', class: "internal-chips" }, this.renderChips()), h("slot", { key: 'f01fbff4e5f1b535df100bed164ffa546ac9143e', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '5107410d455f396d847d2ca7bcda54bd188e564d', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: '89c5f5814f9778664adca036a1777466f2ac9a84', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: 'a2bc58776b2adc934df95d5069724df5791fc30d', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: '3d34ff527fa0507c463f154e0c133543c492ad69', refer: "", name: "", checked: this.checked }))));
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
//# sourceMappingURL=p-Cq1v_HfD.js.map

//# sourceMappingURL=p-Cq1v_HfD.js.map