import { Component, h, Host, State, Prop } from '@stencil/core';
import { AvatarDataList } from './avatar-group-interface';

export type avatarSize = 'extra-small' | 'small' | 'standard';

@Component({
  tag: 'bds-avatar-group',
  styleUrl: 'avatar-group.scss',
  shadow: false,
})
export class AvatarGroup {
  @State() internalUsers: AvatarDataList[];
  @State() leftoversUsers: number;
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
   */
  @Prop() size?: avatarSize = 'standard';
  /**
  * The users of the select
  * Should be passed this way:
  * users='[
      {"id": "1", "name": "Michael Scott", "thumbnail": "https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"},
      {"id": "2", "name": "Dwight Schrute", "thumbnail": "https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"},
      {"id": "3", "name": "Jim Halpert", "thumbnail": "https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"},
      {"id": "4", "name": "Pam Beesly", "thumbnail": "https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1"},
      {"id": "5", "name": "Ryan Howard", "thumbnail": "https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1"},
      {"id": "6", "name": "Andy Bernard", "thumbnail": "https://gcdn.pbrd.co/images/5dPYFWixftY4.jpg?o=1"}
    ]'
  * users can also be passed as child by using bds-avatar-group component, but passing as a child you may have some compatibility problems with Angular.
  */
  @Prop() users?: string | AvatarDataList[];
  parseUsers() {
    if (this.users) {
      try {
        this.internalUsers = typeof this.users === 'string' ? JSON.parse(this.users) : this.users;
      } catch (e) {
        this.internalUsers = [];
      }
    }
  }
  componentWillLoad() {
    this.users && this.parseUsers();
    this.leftoversUsers = this.internalUsers.length - 4;
  }
  render() {
    return (
      <Host>
        <div
          class={{
            avatar__group: true,
            [`avatar__group__size--${this.size}`]: true,
          }}
        >
          {this.internalUsers ? (
            this.internalUsers
              .slice(0, 5)
              .map((user, i, row) =>
                i + 1 === row.length && this.internalUsers.length > 5 ? (
                  <bds-avatar size={this.size} ellipsis={this.leftoversUsers}></bds-avatar>
                ) : (
                  <bds-avatar id={user.id} name={user.name} thumbnail={user.thumbnail} size={this.size}></bds-avatar>
                )
              )
          ) : (
            <slot />
          )}
        </div>
      </Host>
    );
  }
}
