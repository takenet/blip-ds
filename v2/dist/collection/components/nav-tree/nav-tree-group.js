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
        return (h(Host, { key: 'ae54130d5b6d060f9617f94808b1674d0bb3a879' }, h("slot", { key: 'cfd373c2176dc112d38f18b1b90a8f56af92e020' })));
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
                "attribute": "collapse",
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
                    "original": "void",
                    "resolved": "void",
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
                    "original": "void",
                    "resolved": "void",
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
