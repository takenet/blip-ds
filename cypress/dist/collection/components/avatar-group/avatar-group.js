import { h, Host } from '@stencil/core';
export class AvatarGroup {
  constructor() {
    this.avatarBgColor = (number) => {
      const colors = ['system', 'success', 'warning', 'error', 'info'];
      return colors[number];
    };
    this.internalUsers = undefined;
    this.leftoversUsers = undefined;
    this.size = 'standard';
    this.users = undefined;
    this.canClick = undefined;
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
    return (h(Host, { class: "host" }, h("div", { class: {
        avatar__group: true,
        [`avatar__group__size--${this.size}`]: true,
        [`avatar__group__click--${this.canClick}`]: true,
      }, onClick: () => this.handleClickGroup }, this.internalUsers ? (this.internalUsers
      .slice(0, 6)
      .map((user, i, row) => i + 1 === row.length && this.internalUsers.length > 5 ? (h("bds-avatar", { key: i, name: user.name, color: "surface", size: this.size, ellipsis: this.leftoversUsers })) : (h("bds-avatar", { key: i, id: user.id, name: user.name, thumbnail: user.thumbnail, color: this.avatarBgColor(i), size: this.size })))) : (h("slot", null))), this.canClick ? h("div", { class: "focus", tabindex: "0", onClick: () => this.handleClickKey }) : ''));
  }
  static get is() { return "bds-avatar-group"; }
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
        "mutable": false,
        "complexType": {
          "original": "avatarSize",
          "resolved": "\"extra-small\" | \"small\" | \"standard\"",
          "references": {
            "avatarSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\r\n'extra-small', 'small', 'standard', 'large', 'extra-large'."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "users": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | AvatarDataList[]",
          "resolved": "AvatarDataList[] | string",
          "references": {
            "AvatarDataList": {
              "location": "import",
              "path": "./avatar-group-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The users of the select\r\nShould be passed this way:\r\nusers='[\r\n  {\"id\": \"1\", \"name\": \"Michael Scott\", \"thumbnail\": \"https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1\"},\r\n  {\"id\": \"2\", \"name\": \"Dwight Schrute\", \"thumbnail\": \"https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1\"},\r\n  {\"id\": \"3\", \"name\": \"Jim Halpert\", \"thumbnail\": \"https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1\"},\r\n  {\"id\": \"4\", \"name\": \"Pam Beesly\", \"thumbnail\": \"https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1\"},\r\n  {\"id\": \"5\", \"name\": \"Ryan Howard\", \"thumbnail\": \"https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1\"},\r\n  {\"id\": \"6\", \"name\": \"Andy Bernard\", \"thumbnail\": \"https://gcdn.pbrd.co/images/5dPYFWixftY4.jpg?o=1\"}\r\n]'\r\nusers can also be passed as child by using bds-avatar-group component, but passing as a child you may have some compatibility problems with Angular."
        },
        "attribute": "users",
        "reflect": false
      },
      "canClick": {
        "type": "boolean",
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
        "attribute": "can-click",
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
