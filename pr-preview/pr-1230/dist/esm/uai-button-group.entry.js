import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiButtonGroupCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.button-group{--group-overlap:calc(-1 * var(--uai-border-width-default, 1px));display:-ms-flexbox;display:flex}.button-group--row{-ms-flex-direction:row;flex-direction:row}.button-group--row ::slotted(uai-button:not(:first-child)){-webkit-margin-start:var(--group-overlap);margin-inline-start:var(--group-overlap)}.button-group--column{-ms-flex-direction:column;flex-direction:column}.button-group--column ::slotted(uai-button:not(:first-child)){-webkit-margin-before:var(--group-overlap);margin-block-start:var(--group-overlap)}::slotted(uai-button){position:relative}::slotted(uai-button.active){z-index:1}::slotted(uai-button:focus-within){z-index:2}`;

const DIRECTIONS = ['row', 'column'];
const UaiButtonGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiButtonSelected = createEvent(this, "uaiButtonSelected");
        /** Size of every button in the group. Use the same size as the controls around the group. */
        this.size = 'medium';
        /** Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars. */
        this.direction = 'row';
        /** Color of every button in the group. Use 'content' for neutral toolbars. */
        this.color = 'primary';
        /** Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views. */
        this.multiple = false;
        /** Indexes of the selected buttons. */
        this.selected = [];
        // One listener on the group: the clicked button is found in the event path, so buttons added later work and a
        // button never gets more than one handler.
        this.onClick = (event) => {
            const buttons = this.buttons();
            const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
            for (let node = event.target; !path.length && node; node = node.parentNode)
                path.push(node);
            const button = path.find((node) => buttons.includes(node));
            if (button)
                this.select(buttons.indexOf(button));
        };
        this.onSlotChange = () => {
            void this.syncButtons();
        };
    }
    /** Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group. */
    async activateButton(index) {
        if (index >= 0 && index < this.buttons().length)
            this.select(index);
    }
    appearanceChanged() {
        void this.syncButtons();
    }
    multipleChanged() {
        // Going back to single selection keeps only the first selected button.
        if (!this.multiple && this.selected.length > 1)
            this.selected = this.selected.slice(0, 1);
        void this.syncButtons();
    }
    componentDidLoad() {
        void this.syncButtons();
    }
    buttons() {
        return Array.from(this.el.querySelectorAll('uai-button'));
    }
    layoutDirection() {
        if (DIRECTIONS.includes(this.direction))
            return this.direction;
        return 'row';
    }
    // Applies the group layout and the selection to every button. Buttons that are not hydrated yet are awaited, so
    // a group rendered together with its buttons is set up once they can receive the calls.
    async syncButtons() {
        const buttons = this.buttons();
        const direction = this.layoutDirection();
        this.selected = this.selected.filter((index) => index < buttons.length);
        await Promise.all(buttons.map(async (button, index) => {
            var _a;
            await ((_a = button.componentOnReady) === null || _a === void 0 ? void 0 : _a.call(button));
            if (typeof button.setPosition !== 'function')
                return;
            const active = this.selected.includes(index);
            const last = buttons.length - 1;
            await Promise.all([
                button.setPosition(index === 0 ? 'first' : index === last ? 'last' : 'middle'),
                button.setDirection(direction),
                button.setSize(this.size),
                button.setColor(this.color),
                button.setVariant(active ? 'solid' : 'outline'),
                button.isActive(active),
            ]);
            button.classList.toggle('active', active);
            button.setAttribute('data-index', String(index));
        }));
    }
    select(index) {
        const was = this.selected.includes(index);
        if (this.multiple) {
            this.selected = was ? this.selected.filter((i) => i !== index) : [...this.selected, index].sort((a, b) => a - b);
        }
        else {
            this.selected = was ? [] : [index];
        }
        void this.syncButtons();
        const button = this.buttons()[index];
        this.uaiButtonSelected.emit({ id: (button === null || button === void 0 ? void 0 : button.id) || '', index, active: !was, selected: [...this.selected] });
    }
    render() {
        const direction = DIRECTIONS.includes(this.direction) ? this.direction : 'row';
        return (h(Host, { key: 'ba9836e73573d9182996b5713304d75d1531ec01', role: "group", "aria-label": this.label, onClick: this.onClick }, h("div", { key: '672859bab0915909eed20078ee402eeb6431b6e4', class: { 'button-group': true, [`button-group--${direction}`]: true }, part: "group" }, h("slot", { key: '0b5376e64805f356f9a9ca18c640381e498c556a', onSlotchange: this.onSlotChange }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": [{
                "appearanceChanged": 0
            }],
        "direction": [{
                "appearanceChanged": 0
            }],
        "color": [{
                "appearanceChanged": 0
            }],
        "multiple": [{
                "multipleChanged": 0
            }]
    }; }
};
UaiButtonGroup.style = uaiButtonGroupCss();

export { UaiButtonGroup as uai_button_group };
