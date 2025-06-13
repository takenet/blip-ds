'use strict';

var index = require('./index-DnryYWxm.js');

const avatarGroupCss = ".host{position:relative;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.avatar__group{display:-ms-flexbox;display:flex}.avatar__group>*:nth-child(1){z-index:1}.avatar__group>*:nth-child(2){z-index:2}.avatar__group>*:nth-child(3){z-index:3}.avatar__group>*:nth-child(4){z-index:4}.avatar__group>*:nth-child(5){z-index:5}.avatar__group>*:nth-child(6){z-index:6;width:auto}.avatar__group>*:nth-child(6) div{background-color:#292929;padding:0 16px;width:auto}.avatar__group__click--true{cursor:pointer}.avatar__group .avatar{position:relative}.avatar__group__size--extra-small{margin-left:8px}.avatar__group__size--extra-small>*{margin-left:-8px}.avatar__group__size--extra-small>*:nth-child(6) div{padding:0 8px}.avatar__group__size--extra-small .avatar{height:32px}.avatar__group__size--small{margin-left:8px}.avatar__group__size--small>*{margin-left:-8px}.avatar__group__size--small .avatar{height:40px}.avatar__group__size--standard{margin-left:16px}.avatar__group__size--standard>*{margin-left:-16px}.avatar__group__size--standard .avatar{height:56px}.avatar__group__size--large{margin-left:16px}.avatar__group__size--large>*{margin-left:-16px}.avatar__group__size--large .avatar{height:64px}.avatar__group__size--extra-large{margin-left:16px}.avatar__group__size--extra-large>*{margin-left:-16px}.avatar__group__size--extra-large .avatar{height:72px}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}";

const AvatarGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsClickAvatarGroup = index.createEvent(this, "bdsClickAvatarGroup");
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
        return (index.h(index.Host, { key: '31b6ae002cf06ab2e205c4658d5af725f8fd3409', class: "host" }, index.h("div", { key: 'e22014bf3f77fc82b4ee3c5517ea7d74b1be8d76', class: {
                avatar__group: true,
                [`avatar__group__size--${this.size}`]: true,
                [`avatar__group__click--${this.canClick}`]: true,
            }, tabindex: "0", onClick: (e) => this.handleClickGroup(e) }, this.internalUsers ? (this.internalUsers
            .slice(0, 6)
            .map((user, i, row) => i + 1 === row.length && this.internalUsers.length > 5 ? (index.h("bds-avatar", { key: i, name: user.name, color: "surface", size: this.size, ellipsis: this.leftoversUsers })) : (index.h("bds-avatar", { key: i, id: user.id, name: user.name, thumbnail: user.thumbnail, color: this.avatarBgColor(i), size: this.size })))) : (index.h("slot", null))), this.canClick ? index.h("div", { class: "focus", tabindex: "0", onClick: () => this.handleClickKey }) : ''));
    }
};
AvatarGroup.style = avatarGroupCss;

exports.bds_avatar_group = AvatarGroup;
//# sourceMappingURL=bds-avatar-group.entry.cjs.js.map

//# sourceMappingURL=bds-avatar-group.cjs.entry.js.map