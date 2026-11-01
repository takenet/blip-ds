import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiTabItemCss = () => `:host{display:none}:host(.is-open){display:block;height:100%}:host([hidden]){display:none}.uai-tab-item__content{height:100%}`;

const UaiTabItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiDisabled = createEvent(this, "uaiDisabled");
        /** Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID. */
        this.numberElement = null;
        /** Tab label. Use a short name; pair with panel content; avoid unnamed tabs. */
        this.label = null;
        /** Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name. */
        this.icon = null;
        /** Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions. */
        this.iconPosition = 'left';
        /** Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names. */
        this.iconTheme = 'outline';
        /** Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration. */
        this.badge = false;
        /** Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning. */
        this.badgeShape = 'circle';
        /** Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors. */
        this.badgeColor = 'system';
        /** Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning. */
        this.badgeIcon = null;
        /** Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction. */
        this.badgeAnimation = false;
        /** Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions. */
        this.badgePosition = 'left';
        /** Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts. */
        this.badgeNumber = null;
        /** Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled. */
        this.disable = false;
        /** Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone. */
        this.error = false;
        /**
         * Custom group header styles when this item is open. Use token-based declarations for compatibility;
         * pair with contentStyle; avoid overriding component internals.
         * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
         */
        this.headerStyle = null;
        /**
         * Custom group content styles when this item is open. Use token-based declarations for compatibility;
         * pair with headerStyle; avoid overriding component internals.
         * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
         */
        this.contentStyle = null;
        /** Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items. */
        this.open = false;
        /** Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name. */
        this.dataTest = null;
        /** Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names. */
        this.ariaLabel = null;
        /** Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions. */
        this.iconOnly = false;
    }
    /** Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier. */
    async reciveNumber(number) {
        this.numberElement = number;
    }
    disabledChanged() {
        this.uaiDisabled.emit({ item: this.numberElement, disable: this.disable });
    }
    configurationChanged(_value, _oldValue, prop) {
        this.warnStyles();
        this.el.dispatchEvent(new CustomEvent('uaiTabItemUpdate', { bubbles: true, detail: { prop } }));
    }
    componentWillLoad() {
        this.warnStyles();
    }
    warnStyles() {
        for (const prop of ['headerStyle', 'contentStyle']) {
        }
    }
    render() {
        return (h(Host, { key: 'fb99f2a09589ae5967dca6667c430514b27ee1c7', class: { 'is-open': this.open && !this.disable }, hidden: !this.open || this.disable }, h("div", { key: 'ee57230659163073d45a6ffea91e1420daa7b079', class: "uai-tab-item__content", "data-test": this.dataTest }, h("slot", { key: '231dad2f7dae2c759b760684aabd5434f6480a7d' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disable": [{
                "disabledChanged": 0
            }, {
                "configurationChanged": 0
            }],
        "numberElement": [{
                "configurationChanged": 0
            }],
        "label": [{
                "configurationChanged": 0
            }],
        "icon": [{
                "configurationChanged": 0
            }],
        "iconPosition": [{
                "configurationChanged": 0
            }],
        "iconTheme": [{
                "configurationChanged": 0
            }],
        "badge": [{
                "configurationChanged": 0
            }],
        "badgeShape": [{
                "configurationChanged": 0
            }],
        "badgeColor": [{
                "configurationChanged": 0
            }],
        "badgeIcon": [{
                "configurationChanged": 0
            }],
        "badgeAnimation": [{
                "configurationChanged": 0
            }],
        "badgePosition": [{
                "configurationChanged": 0
            }],
        "badgeNumber": [{
                "configurationChanged": 0
            }],
        "error": [{
                "configurationChanged": 0
            }],
        "headerStyle": [{
                "configurationChanged": 0
            }],
        "contentStyle": [{
                "configurationChanged": 0
            }],
        "open": [{
                "configurationChanged": 0
            }],
        "dataTest": [{
                "configurationChanged": 0
            }],
        "ariaLabel": [{
                "configurationChanged": 0
            }],
        "iconOnly": [{
                "configurationChanged": 0
            }]
    }; }
};
UaiTabItem.style = uaiTabItemCss();

export { UaiTabItem as uai_tab_item };
