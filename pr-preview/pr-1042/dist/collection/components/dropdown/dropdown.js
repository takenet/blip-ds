import { Host, h, } from "@stencil/core";
import { getScrollParent, positionAbsoluteElement } from "../../utils/position-element";
export class BdsDropdown {
    constructor() {
        this.intoView = null;
        this.stateOpenSubMenu = false;
        this.stateSubMenu = 'close';
        this.zIndex = 0;
        this.delay = null;
        /**
         * Open. Used to open/close the dropdown.
         */
        this.activeMode = 'click';
        /**
         * Open. Used to open/close the dropdown.
         */
        this.open = false;
        /**
         * Used to set drop position
         */
        this.position = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onCloseSubMenu = () => {
            this.stateSubMenu = 'close';
        };
        this.refDropElement = (el) => {
            this.dropElement = el;
        };
        this.onClickCloseButtom = () => {
            this.open = false;
        };
        this.onMouseOver = () => {
            if (this.activeMode === 'hover') {
                this.zIndex = 1;
            }
            this.stateOpenSubMenu = true;
        };
        this.onMouseOut = () => {
            if (this.activeMode === 'hover') {
                this.zIndex = 0;
                this.stateOpenSubMenu = false;
            }
        };
        this.handleClickOutside = (event) => {
            if (this.open && !this.hostElement.contains(event.target)) {
                this.setClose();
            }
        };
        this.centerDropElement = (value) => {
            const arrayPosition = value.split('-');
            if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
                this.dropElement.style.top = `calc(50% - ${this.dropElement.offsetHeight / 2}px)`;
            }
        };
    }
    componentWillLoad() {
        this.activatorElement = this.hostElement.querySelector('[slot="dropdown-activator"]').children[0];
        this.intoView = getScrollParent(this.hostElement);
        this.isPositionChanged;
        if (this.activeMode == 'hover') {
            this.activatorElement.addEventListener('mouseover', () => this.onMouseOver());
            this.activatorElement.addEventListener('click', () => this.onMouseOver());
            this.activatorElement.addEventListener('mouseout', () => this.onMouseOut());
        }
        else {
            this.activatorElement.addEventListener('click', () => this.toggle());
        }
    }
    componentDidLoad() {
        if (this.position != 'auto') {
            this.centerDropElement(this.position);
            this.setDefaultPlacement(this.position);
        }
        else {
            this.validatePositionDrop();
        }
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleClickOutside);
    }
    setDefaultPlacement(value) {
        this.dropElement.classList.add(`dropdown__basic__${value}`);
    }
    validatePositionDrop() {
        const positionValue = positionAbsoluteElement({
            actionElement: this.hostElement,
            changedElement: this.dropElement,
            intoView: this.intoView,
        });
        this.dropElement.classList.add(`dropdown__basic__${positionValue.y}-${positionValue.x}`);
    }
    isOpenChanged(open) {
        this.bdsToggle.emit({ value: open });
        if (open)
            if (this.position != 'auto') {
                this.setDefaultPlacement(this.position);
            }
            else {
                this.validatePositionDrop();
            }
    }
    isPositionChanged() {
        this.setDefaultPlacement(this.position);
    }
    async toggle() {
        this.open = !this.open;
    }
    async setOpen() {
        this.open = true;
    }
    async setClose() {
        this.stateOpenSubMenu = false;
        clearTimeout(this.delay);
        this.open = false;
    }
    openSubMenuChanged(active) {
        if (active == false) {
            this.stateSubMenu = 'pending';
            this.delay = setTimeout(this.onCloseSubMenu, 1000);
        }
        if (active == true) {
            clearTimeout(this.delay);
            this.delay = null;
            this.stateSubMenu = 'open';
        }
        return;
    }
    stateSubMenuChanged(state) {
        switch (state) {
            case 'open':
                this.open = true;
                break;
            case 'pending':
                this.open = true;
                break;
            case 'close':
                this.open = false;
                break;
        }
    }
    render() {
        const zIndexSubmenu = {
            zIndex: `${this.zIndex}`,
        };
        return (h(Host, { key: '939a25fc739bb7820e92fd85b8875ecd19482e9a' }, h("slot", { key: '8ca0ab91226ca341c5d73a44d402dcc601ce9085', name: "dropdown-activator" }), h("div", { key: '1b0ec61d5bdba6ebbfc4b52d6135f370e643a0cd', ref: (el) => this.refDropElement(el), class: {
                dropdown: true,
                dropdown__open: this.open,
            }, "data-test": this.dataTest, onMouseOver: () => this.onMouseOver(), onMouseOut: () => this.onMouseOut() }, h("div", { key: 'a9bfdcc1db256676b7ae4c39d0aca6abe2209c92', class: "content", style: zIndexSubmenu }, h("slot", { key: 'a10054f1c922dc1f10ae9e668443942fb02d77a8', name: "dropdown-content" }))), this.activeMode !== 'hover' && this.open && (h("div", { key: 'd7a20da55b47fd6c3714a7908f1cd931755fd49a', class: { outzone: true }, onClick: () => this.onClickCloseButtom() }))));
    }
    static get is() { return "bds-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
    static get properties() {
        return {
            "activeMode": {
                "type": "string",
                "attribute": "active-mode",
                "mutable": false,
                "complexType": {
                    "original": "activeMode",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {
                        "activeMode": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/dropdown/dropdown.tsx",
                            "id": "src/components/dropdown/dropdown.tsx::activeMode"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Open. Used to open/close the dropdown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'click'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Open. Used to open/close the dropdown."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "DropdownPostionType",
                    "resolved": "\"auto\" | \"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"left-bottom\" | \"left-center\" | \"left-top\" | \"right-bottom\" | \"right-center\" | \"right-top\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "DropdownPostionType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/dropdown/dropdown.tsx",
                            "id": "src/components/dropdown/dropdown.tsx::DropdownPostionType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Used to set drop position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "intoView": {},
            "stateOpenSubMenu": {},
            "stateSubMenu": {},
            "zIndex": {},
            "delay": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsToggle",
                "name": "bdsToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "bdsToggle. Event to return selected date value."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setOpen": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setClose": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "isOpenChanged"
            }, {
                "propName": "position",
                "methodName": "isPositionChanged"
            }, {
                "propName": "stateOpenSubMenu",
                "methodName": "openSubMenuChanged"
            }, {
                "propName": "stateSubMenu",
                "methodName": "stateSubMenuChanged"
            }];
    }
}
//# sourceMappingURL=dropdown.js.map
