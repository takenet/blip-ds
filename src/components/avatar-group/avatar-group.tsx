import { Component, h, Host, State, Prop, EventEmitter, Event } from '@stencil/core';
import { AvatarDataList } from './avatar-group-interface';
import { colors } from '../avatar/avatar';

export type avatarSize = 'extra-small' | 'small' | 'standard';

@Component({
  tag: 'bds-avatar-group',
  styleUrl: 'avatar-group.scss',
  shadow: true,
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
  @Prop() canClick?: boolean;
  @Event() bdsClickAvatarGroup: EventEmitter;

  handleClickGroup(e) {
    e.preventDefault();
    this.bdsClickAvatarGroup.emit(e);
  }

  private handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && this.canClick) {
      event.preventDefault();
      this.bdsClickAvatarGroup.emit();
    }
  }

  parseUsers() {
    if (this.users) {
      try {
        this.internalUsers = typeof this.users === 'string' ? JSON.parse(this.users) : this.users;
      } catch (e) {
        this.internalUsers = [];
      }
    }
  }
  private avatarBgColor = (number: number): colors => {
    const colors = ['system', 'success', 'warning', 'error', 'info'];
    return colors[number] as colors;
  };
  componentWillLoad() {
    this.users && this.parseUsers();
    this.leftoversUsers = this.internalUsers.length - 5;
  }
  render() {
    return (
      <Host class="host">
        <div
          class={{
            avatar__group: true,
            [`avatar__group__size--${this.size}`]: true,
            [`avatar__group__click--${this.canClick}`]: true,
          }}
          tabindex="0"
          onClick={(e) => this.handleClickGroup(e)}
        >
          {this.internalUsers ? (
            this.internalUsers
              .slice(0, 6)
              .map((user, i, row) =>
                i + 1 === row.length && this.internalUsers.length > 5 ? (
                  <bds-avatar
                    key={i}
                    name={user.name}
                    color="surface"
                    size={this.size}
                    ellipsis={this.leftoversUsers}
                  ></bds-avatar>
                ) : (
                  <bds-avatar
                    key={i}
                    id={user.id}
                    name={user.name}
                    thumbnail={user.thumbnail}
                    color={this.avatarBgColor(i)}
                    size={this.size}
                  ></bds-avatar>
                ),
              )
          ) : (
            <slot />
          )}
        </div>
        {this.canClick ? <div class="focus" tabindex="0" onClick={() => this.handleClickKey}></div> : ''}
      </Host>
    );
  }
}
