'use strict';

var index = require('./index-GTJCA4wH.js');

const listCss = () => `:host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}`;

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
                // Keep the current chips if AngularJS has not interpolated the attribute yet; @Watch('chips') reloads it.
                try {
                    this.internalChips = JSON.parse(this.chips);
                }
                catch (e) { }
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
                // Keep the current buttons if AngularJS has not interpolated the attribute yet; @Watch('actionsButtons') reloads it.
                try {
                    this.internalActionsButtons = JSON.parse(this.actionsButtons);
                }
                catch (e) { }
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
        return (index.h(index.Host, { key: 'd600d912649d0b08d5651ca1555c5c7876d920a7' }, index.h("div", { key: 'd6d4452533d2133bc09cdfea18a747e6afb9f746', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && index.h("div", { key: '7ad20188d17a4d5a730138dfc6f90c01cd8c7088', class: "active" }), hasLeftInput && (index.h("div", { key: 'db7bcc82fa6d18e30d7a7a2a1f02fde67da008d1', class: { input_list: true } }, this.typeList == 'radio' && index.h("bds-radio", { key: '911fd0b3f4afa37c5d29dc05142b72915cd3b587', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (index.h("bds-checkbox", { key: '7d3302b473eb14c735ec7b361ca2d9798f221772', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (index.h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (index.h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), index.h("div", { key: '0208ccc5ebe83b0bafab22cc00977eb21ce5b444', class: { [`content-slot`]: true } }, index.h("slot", { key: '8a82be329cf5eb11aee6b1dd6c1871c9c027ac08' })), (this.text || this.secondaryText) && (index.h("div", { key: '1d9f9ba78777a7a3a784c7f00bdb691486d6bf81', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (index.h("bds-typo", { key: '5e550c977c4538659565d38f3e00766d8df033c2', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (index.h("bds-typo", { key: 'f22dd9ee97fe5c98e8670a3e4e9bb9508f4e49aa', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), index.h("div", { key: 'ae8c89251f7c659c0135f8a33cb1b851085f07f6', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && index.h("div", { key: '9653c75b61c6d51ac7bcc0eab2dbb486c73a5152', class: "internal-chips" }, this.renderChips()), index.h("slot", { key: 'c2d533c42a85edf8c67cd2b072529fde92e54b92', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (index.h("div", { key: 'afb2cbb68a0fa6d7912972ff2615243020961df9', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (index.h("div", { key: '65e127f8829a4e608bfb9c9bd3df19b5741e9d47', class: "internal-actions-buttons" }, this.renderActionsButtons())), index.h("slot", { key: '6528ee22785ce57631292de08531159cf850b780', name: "action-area" }))), this.typeList == 'switch' && index.h("bds-switch", { key: 'dd748b5c9707a7bfa7dc5abf061ea14a660d9979', refer: "", name: "", checked: this.checked }))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }],
        "chips": [{
                "chipsChanged": 0
            }],
        "actionsButtons": [{
                "actionsButtonsChanged": 0
            }]
    }; }
};
ListItem.style = listCss();

exports.bds_list_item = ListItem;
