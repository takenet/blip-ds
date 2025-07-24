import { h, Host } from "@stencil/core";
export class AvatarGroup {
    constructor() {
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
         */
        this.size = 'standard';
        this.avatarBgColor = (number) => {
            const colors = ['system', 'success', 'warning', 'error', 'info'];
            return colors[number];
        };
    }
    handleClickGroup(e) {
        e.preventDefault();
        this.bdsClickAvatarGroup.emit(e);
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && this.canClick) {
            event.preventDefault();
            this.bdsClickAvatarGroup.emit();
        }
    }
    parseUsers() {
        if (this.users) {
            try {
                this.internalUsers = typeof this.users === 'string' ? JSON.parse(this.users) : this.users;
            }
            catch (e) {
                this.internalUsers = [];
            }
        }
    }
    componentWillLoad() {
        this.users && this.parseUsers();
        this.leftoversUsers = this.internalUsers.length - 5;
    }
    render() {
        return (h(Host, { key: '31b6ae002cf06ab2e205c4658d5af725f8fd3409', class: "host" }, h("div", { key: 'e22014bf3f77fc82b4ee3c5517ea7d74b1be8d76', class: {
                avatar__group: true,
                [`avatar__group__size--${this.size}`]: true,
                [`avatar__group__click--${this.canClick}`]: true,
            }, tabindex: "0", onClick: (e) => this.handleClickGroup(e) }, this.internalUsers ? (this.internalUsers
            .slice(0, 6)
            .map((user, i, row) => i + 1 === row.length && this.internalUsers.length > 5 ? (h("bds-avatar", { key: i, name: user.name, color: "surface", size: this.size, ellipsis: this.leftoversUsers })) : (h("bds-avatar", { key: i, id: user.id, name: user.name, thumbnail: user.thumbnail, color: this.avatarBgColor(i), size: this.size })))) : (h("slot", null))), this.canClick ? h("div", { class: "focus", tabindex: "0", onClick: () => this.handleClickKey }) : ''));
    }
    static get is() { return "bds-avatar-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["avatar-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["avatar-group.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "avatarSize",
                    "resolved": "\"extra-small\" | \"small\" | \"standard\"",
                    "references": {
                        "avatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/avatar-group/avatar-group.tsx",
                            "id": "src/components/avatar-group/avatar-group.tsx::avatarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Entered as one of the size. Can be one of:\n'extra-small', 'small', 'standard', 'large', 'extra-large'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "users": {
                "type": "string",
                "attribute": "users",
                "mutable": false,
                "complexType": {
                    "original": "string | AvatarDataList[]",
                    "resolved": "AvatarDataList[] | string",
                    "references": {
                        "AvatarDataList": {
                            "location": "import",
                            "path": "./avatar-group-interface",
                            "id": "src/components/avatar-group/avatar-group-interface.ts::AvatarDataList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The users of the select\nShould be passed this way:\nusers='[\n  {\"id\": \"1\", \"name\": \"Michael Scott\", \"thumbnail\": \"https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1\"},\n  {\"id\": \"2\", \"name\": \"Dwight Schrute\", \"thumbnail\": \"https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1\"},\n  {\"id\": \"3\", \"name\": \"Jim Halpert\", \"thumbnail\": \"https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1\"},\n  {\"id\": \"4\", \"name\": \"Pam Beesly\", \"thumbnail\": \"https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1\"},\n  {\"id\": \"5\", \"name\": \"Ryan Howard\", \"thumbnail\": \"https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1\"},\n  {\"id\": \"6\", \"name\": \"Andy Bernard\", \"thumbnail\": \"https://gcdn.pbrd.co/images/5dPYFWixftY4.jpg?o=1\"}\n]'\nusers can also be passed as child by using bds-avatar-group component, but passing as a child you may have some compatibility problems with Angular."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "canClick": {
                "type": "boolean",
                "attribute": "can-click",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "internalUsers": {},
            "leftoversUsers": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsClickAvatarGroup",
                "name": "bdsClickAvatarGroup",
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
}
//# sourceMappingURL=avatar-group.js.map
