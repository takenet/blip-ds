import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const listCss = () => `:host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}`;

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '5d0fc6dc496c1970b60cf906f0716829207a2acf' }, h("div", { key: '9e2dc4550ef33bbd2254d89c09474c3afbe49cf3', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: '26af8caac0c5e6b4f9a1d9f03308a483e7955c30', class: "active" }), hasLeftInput && (h("div", { key: 'b1b867d364f731dcf90e7ce9a700598b19ce794e', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: '89692771d61ef323cc04a002f9b6dc22a755b3e1', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '43ecf3976d1984dce20e25425f2f9fbbcaabf95e', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: 'c820ae9372e6a119c25bb266154549b888cafc48', class: { [`content-slot`]: true } }, h("slot", { key: '4f93ce728b872a1674b547d782f8809f2fc52f96' })), (this.text || this.secondaryText) && (h("div", { key: '600c2b3c47368fc4153712746d1dd3c7911cf29d', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '23ee91b19335a8eae029b38ec77e02eeeb3976c8', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'ce84fa1cbd564bb41ac53b81102d25f3a162a8ba', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: '5db03a578eb118dfd4957d105dd4946cb88191e7', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: '70d22430305174f9f28a5c8f0b0ed7b00832227c', class: "internal-chips" }, this.renderChips()), h("slot", { key: '159f927eb3d8912f99cbe71411c536976b8deb46', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '4a710862c532d7779ce46557919e3eec9cf54d45', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: 'd3bb5d236a98625843c330d38dd3219ca5a4b0b2', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: '6f955de4081d3e80a06769e2b792ef383709bc59', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: 'b64a0c1f2f0b909d149e089e734c181035a467db', refer: "", name: "", checked: this.checked }))));
    }
    get hostElement() { return getElement(this); }
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

export { ListItem as bds_list_item };
