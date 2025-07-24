'use strict';

var index = require('./index-D_zq0Z7d.js');

const listCss = ":host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:\"\";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}";

const ListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsChecked = index.createEvent(this, "bdsChecked");
        this.bdsClickActionButtom = index.createEvent(this, "bdsClickActionButtom");
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
        return this.internalChips.map((chip, index$1) => {
            const id = index$1.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (index.h("bds-chip-clickable", { id: id, key: id, color: "default" }, chip));
            }
            else {
                return (index.h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, index.h("bds-chip-clickable", { id: id, key: id, color: "default" }, `${chip.slice(0, limit)} ...`)));
            }
        });
    }
    renderActionsButtons() {
        if (!this.internalActionsButtons.length) {
            return [];
        }
        return this.internalActionsButtons.map((button, index$1) => {
            const id = index$1.toString();
            return (index.h("bds-button-icon", { key: id, variant: "secondary", icon: button, size: "short", onClick: (ev) => this.clickActionButtons(button, ev) }));
        });
    }
    render() {
        const hasInput = this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
        const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        return (index.h(index.Host, { key: 'c6f535bacd09a7380a8bfed5aa43cafd6e77480e' }, index.h("div", { key: '6069a62d8aaf8da2a44087c543e7bf03945d94b3', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && index.h("div", { key: '1c9877baeb95d6d0b442ffef23a3036b0aaf6f05', class: "active" }), hasLeftInput && (index.h("div", { key: 'cb8d6e06b0461667d8d833de543a354a2695790b', class: { input_list: true } }, this.typeList == 'radio' && index.h("bds-radio", { key: 'd2bb56ce9d7368ebf2042bd120a46897032d918d', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (index.h("bds-checkbox", { key: 'd2b1192fe200be921f27b13ff404b77636c248b7', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (index.h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (index.h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), index.h("div", { key: '552b5e8b789d876a36152ffe08d3345a00432964', class: { [`content-slot`]: true } }, index.h("slot", { key: '9d29123adda77805387e2cec7c48a8f8420f629d' })), (this.text || this.secondaryText) && (index.h("div", { key: '13e2dcacf1d732f6fe7ceec0dd35b573e1d516e6', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (index.h("bds-typo", { key: 'd9a70e2a6f86587228999282950c22ffd783d8dd', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (index.h("bds-typo", { key: '64f9a2d8603a984f2e21f6e5fc2bb4cd0dac5bdd', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), index.h("div", { key: '8fd955b1692070969a655b9b915d603037fc7b76', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && index.h("div", { key: 'f4d5a1b4f3853bca8be36ada97194c9c5cb0d5ff', class: "internal-chips" }, this.renderChips()), index.h("slot", { key: 'f354984737785227a7a6616ccb14a36cdb019573', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (index.h("div", { key: '7ad2aab79dc28f5bb3be6a2bc191f6d23363069c', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (index.h("div", { key: 'fb7e71327931ebfd91f089d2f75d50b468cd0d05', class: "internal-actions-buttons" }, this.renderActionsButtons())), index.h("slot", { key: 'dee52851703625af2e149d5e40a5eecfe1a2194c', name: "action-area" }))), this.typeList == 'switch' && index.h("bds-switch", { key: 'c4aee037502773767d1ccad20a9331a18232860f', refer: "", name: "", checked: this.checked }))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "chips": ["chipsChanged"],
        "actionsButtons": ["actionsButtonsChanged"]
    }; }
};
ListItem.style = listCss;

exports.bds_list_item = ListItem;
//# sourceMappingURL=bds-list-item.entry.cjs.js.map

//# sourceMappingURL=bds-list-item.cjs.entry.js.map