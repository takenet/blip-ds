import { Host, h } from "@stencil/core";
export class NavTreeGroup {
    constructor() {
        this.itemsElement = null;
        this.isOpenAftAnimation = false;
        this.navTreeChild = null;
        /**
         * Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple.
         */
        this.collapse = 'single';
    }
    componentWillRender() {
        this.itemsElement = this.element.getElementsByTagName('bds-nav-tree');
        for (let i = 0; i < this.itemsElement.length; i++) {
            this.itemsElement[i].reciveNumber(i);
        }
    }
    async closeAll(actNumber) {
        this.bdsNavTreeGroupCloseAll.emit();
        for (let i = 0; i < this.itemsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.itemsElement[i].close();
            }
            else {
                this.itemsElement[i].close();
            }
        }
    }
    async openAll(actNumber) {
        this.bdsNavTreeGroupOpenAll.emit();
        for (let i = 0; i < this.itemsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.itemsElement[i].open();
            }
            else {
                this.itemsElement[i].open();
            }
        }
    }
    render() {
        return (h(Host, { key: '385301b2b6161961df6adf24097598e4ac15ab30' }, h("slot", { key: 'f3e324b467715be169df0faac9db421b91039dac' })));
    }
    static get is() { return "bds-nav-tree-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nav-tree.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nav-tree.css"]
        };
    }
    static get properties() {
        return {
            "collapse": {
                "type": "string",
                "attribute": "collapse",
                "mutable": false,
                "complexType": {
                    "original": "collapses",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {
                        "collapses": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/nav-tree/nav-tree-group.tsx",
                            "id": "src/components/nav-tree/nav-tree-group.tsx::collapses"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'single'"
            }
        };
    }
    static get states() {
        return {
            "isOpenAftAnimation": {},
            "navTreeChild": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsNavTreeGroupCloseAll",
                "name": "bdsNavTreeGroupCloseAll",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsNavTreeGroupOpenAll",
                "name": "bdsNavTreeGroupOpenAll",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
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
            "closeAll": {
                "complexType": {
                    "signature": "(actNumber?: any) => Promise<void>",
                    "parameters": [{
                            "name": "actNumber",
                            "type": "any",
                            "docs": ""
                        }],
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
            "openAll": {
                "complexType": {
                    "signature": "(actNumber?: any) => Promise<void>",
                    "parameters": [{
                            "name": "actNumber",
                            "type": "any",
                            "docs": ""
                        }],
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
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=nav-tree-group.js.map
