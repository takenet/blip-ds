import { h } from "@stencil/core";
export class BdsToast {
    constructor() {
        /**
         * used for add the icon. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * ActionType. Defines if the button should have a button or an icon. Can be one of:
         * 'icon', 'button';
         */
        this.actionType = 'button';
        /**
         * Variant. Defines the color of the toast. Can be one of:
         * 'system', 'error', 'success', 'warning', 'undo', 'redo';
         */
        this.variant = 'system';
        /**
         * Time to close the toast in seconds
         * 0 = never close automatically (default value)
         */
        this.duration = 0;
        /**
         * Define an action to the button toast. Can be one of:
         * 'close', 'custom';
         * if the action type is set to close, the button will close automatically.
         * if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted.
         */
        this.buttonAction = 'close';
        /**
         * Controls the open event of the component:
         */
        this.show = false;
        /**
         * Controls the hide event of the component:
         */
        this.hide = false;
        /**
         * The toast position on the screen. Can be one of:
         * 'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);
         */
        this.position = 'bottom-left';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonAction is the data-test to button action.
         */
        this.dtButtonAction = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Sends an event to be used when creating an action when clicking the toast button
         */
        this._buttonClickHandler = () => {
            if (this.buttonAction === 'close')
                this.close();
            else {
                this.toastButtonClick.emit(this.el);
                this.close();
            }
        };
        this.mapIconName = {
            system: 'bell',
            error: 'error',
            success: 'like',
            warning: 'attention',
            undo: 'undo',
            redo: 'redo',
            notification: 'notification',
        };
    }
    _keyPressHandler(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (this.buttonAction === 'close')
                this.close();
            else {
                this.toastButtonClick.emit(this.el);
                this.close();
            }
        }
    }
    /**
     * Can be used outside to open the toast
     */
    async create({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }) {
        let toastContainer = document.querySelector(`bds-toast-container.${variant === 'notification' ? 'top-right' : 'bottom-left'}`);
        if (toastContainer) {
            toastContainer.appendChild(this.el);
            toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
        }
        else {
            toastContainer = document.createElement('bds-toast-container');
            toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
            document.body.appendChild(toastContainer);
            toastContainer.appendChild(this.el);
        }
        this.el.actionType = actionType || 'button';
        this.el.buttonAction = buttonAction || 'close';
        this.el.buttonText = buttonText;
        this.el.toastText = toastText;
        this.el.toastTitle = toastTitle;
        this.el.variant = variant || 'system';
        this.el.duration = duration * 1000 || 0;
        this.el.position = variant === 'notification' ? 'top-right' : 'bottom-left';
        this.el.icon = icon !== null && icon !== void 0 ? icon : this.mapIconName[this.variant];
        this.el.show = true;
        if (this.el.duration > 0) {
            setTimeout(() => {
                this.el.hide = true;
                setTimeout(() => {
                    this.el.remove();
                }, 400);
            }, this.el.duration);
        }
    }
    /**
     * Can be used outside the component to close the toast
     */
    async close() {
        if (this.el.shadowRoot) {
            this.el.shadowRoot.querySelector('div').classList.remove('show');
            this.el.shadowRoot.querySelector('div').classList.add('hide');
        }
        else {
            this.el.querySelector('div').classList.remove('show');
            this.el.querySelector('div').classList.add('hide');
        }
        setTimeout(() => {
            this.el.remove();
        }, 400);
    }
    render() {
        return (h("div", { key: '40f70e2e1e181872ae7327d7fa729473e14cf0e8', class: {
                toast: true,
                [`toast--${this.variant}`]: true,
                [`toast--action--${this.actionType}`]: true,
                [`show show--${this.position}`]: this.show,
                hide: this.hide,
            } }, this.variant === 'notification' && (h("bds-icon", { key: '5cc57a3ed32400234d0742882e397a7b2c17d4b1', class: "toast__ballon", theme: "solid", name: "blip-chat", size: "brand" })), this.icon && h("bds-icon", { key: '4da81b82315a98da4cdf2d45f4876e50d8bd25dd', class: "toast__icon", theme: "outline", size: "medium", name: this.icon }), h("div", { key: '0ffab286d428e5aba62d28dff4568ee461897ff0', class: "toast__content" }, this.toastTitle && (h("bds-typo", { key: '342066efc43702381a033b7381ced50c120ffc65', variant: "fs-14", bold: "bold" }, this.toastTitle)), this.toastText && h("bds-typo", { key: '7aa59ccd9943d75d61849113c6b4eadab2ff19bc', variant: "fs-14", innerHTML: this.toastText })), h("div", { key: '112d873b4345298aae496c60935d488213c93336', class: {
                toast__action: true,
                [`toast__action__${this.actionType}`]: true,
            } }, this.actionType === 'button' ? (h("bds-button", { onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", onClick: () => this._buttonClickHandler(), variant: "secondary", size: "standard", dataTest: this.dtButtonAction }, this.buttonText)) : (h("bds-button-icon", { onClick: () => this._buttonClickHandler(), size: "short", onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", variant: "secondary", icon: "close", dataTest: this.dtButtonClose })))));
    }
    static get is() { return "bds-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toast.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add the icon. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "actionType": {
                "type": "string",
                "attribute": "action-type",
                "mutable": false,
                "complexType": {
                    "original": "ActionType",
                    "resolved": "\"button\" | \"icon\"",
                    "references": {
                        "ActionType": {
                            "location": "import",
                            "path": "./toast-interface",
                            "id": "src/components/toast/toast-interface.ts::ActionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ActionType. Defines if the button should have a button or an icon. Can be one of:\n'icon', 'button';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "VariantType",
                    "resolved": "\"error\" | \"notification\" | \"redo\" | \"success\" | \"system\" | \"undo\" | \"warning\"",
                    "references": {
                        "VariantType": {
                            "location": "import",
                            "path": "./toast-interface",
                            "id": "src/components/toast/toast-interface.ts::VariantType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant. Defines the color of the toast. Can be one of:\n'system', 'error', 'success', 'warning', 'undo', 'redo';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'system'"
            },
            "toastTitle": {
                "type": "string",
                "attribute": "toast-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title of the component:"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "toastText": {
                "type": "string",
                "attribute": "toast-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The text content of the component:"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "buttonText": {
                "type": "string",
                "attribute": "button-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If the action type is button, this will be the text of the button:"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "duration": {
                "type": "number",
                "attribute": "duration",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Time to close the toast in seconds\n0 = never close automatically (default value)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "buttonAction": {
                "type": "string",
                "attribute": "button-action",
                "mutable": false,
                "complexType": {
                    "original": "ButtonActionType",
                    "resolved": "\"close\" | \"custom\"",
                    "references": {
                        "ButtonActionType": {
                            "location": "import",
                            "path": "./toast-interface",
                            "id": "src/components/toast/toast-interface.ts::ButtonActionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define an action to the button toast. Can be one of:\n'close', 'custom';\nif the action type is set to close, the button will close automatically.\nif the action type is set to custom, a function need to be passed when the toastButtonClick is emitted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'close'"
            },
            "show": {
                "type": "boolean",
                "attribute": "show",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls the open event of the component:"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hide": {
                "type": "boolean",
                "attribute": "hide",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls the hide event of the component:"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "PositionType",
                    "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "PositionType": {
                            "location": "import",
                            "path": "./toast-interface",
                            "id": "src/components/toast/toast-interface.ts::PositionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The toast position on the screen. Can be one of:\n'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom-left'"
            },
            "dtButtonAction": {
                "type": "string",
                "attribute": "dt-button-action",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonAction is the data-test to button action."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "attribute": "dt-button-close",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "toastButtonClick",
                "name": "toastButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event used to execute some action when the action button on the toast is clicked"
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
            "create": {
                "complexType": {
                    "signature": "({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }: CreateToastType) => Promise<void>",
                    "parameters": [{
                            "name": "__0",
                            "type": "{ buttonAction?: ButtonActionType; buttonText?: string; toastText: string; toastTitle: string; icon?: string; actionType?: ActionType; variant?: VariantType; duration?: number; position?: PositionType; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "CreateToastType": {
                            "location": "import",
                            "path": "./toast-interface",
                            "id": "src/components/toast/toast-interface.ts::CreateToastType"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Can be used outside to open the toast",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "Can be used outside the component to close the toast",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=toast.js.map
