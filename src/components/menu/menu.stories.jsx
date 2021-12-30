import React, { useState } from 'react';
import { withKnobs, text, select, boolean} from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Menu',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  width: "100vw",
  height: "100vh",
  padding: "8px",
}

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const positions = [
    'right',
    'bottom',
  ]

  return (
    <div style={content}>
    <bds-button id="menuList" onClick={() => setOpenMenu(!openMenu)}> Menu </bds-button>
    <bds-menu id="menu01" menu="menuList" open={openMenu} position={select('position',positions)}>
      
      <bds-menu-action button-text="texto" iconleft="edit" lipstick="false">
      </bds-menu-action>
      <bds-menu-separation size="default" value="Divisor"> </bds-menu-separation>
      <bds-menu-exibition
        avatar-name="Michael Scott"
        avatar-thumbnail="https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"
        avatar-size="standard"
        value="Michael Scott"
        subtitle="Manager"
      >
      </bds-menu-exibition>
      <bds-menu-exibition
        avatar-name="Dwight Schrute"
        avatar-thumbnail="https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"
        avatar-size="small"
        value="Dwight Schrute"
        subtitle="co-Manager"
      >
      </bds-menu-exibition>
      <bds-menu-exibition
        avatarName="Jim Halpert"
        avatar-thumbnail="https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"
        avatar-size="extra-small"
        value="Jim Halpert"
        subtitle="Seller"
      >
      </bds-menu-exibition>
    </bds-menu>
    </div>
  )
}


export const MenuWithSubmenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const positions = [
    'right',
    'bottom',
  ]

  return (
    <div style={content}>
    <bds-button id="menuList" onClick={() => setOpenMenu(!openMenu)}> Menu </bds-button>
    <bds-menu id="menu01" menu="menuList" open={openMenu} position={select('position',positions)}>
      
      <bds-menu-action button-text="texto" sub-menu="true" iconleft="edit" lipstick="false">
        <bds-menu-action button-text="texto 1" sub-menu="false"></bds-menu-action>
        <bds-menu-action button-text="texto 2" sub-menu="false" iconleft="edit"></bds-menu-action>
        <bds-menu-action button-text="texto 3" sub-menu="false" iconleft="close" lipstick="true"></bds-menu-action>
      </bds-menu-action>
      <bds-menu-separation size="default" value="Divisor"> </bds-menu-separation>
      <bds-menu-exibition
        avatar-name="Michael Scott"
        avatar-thumbnail="https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"
        avatar-size="standard"
        value="Michael Scott"
        subtitle="Manager"
      >
      </bds-menu-exibition>
      <bds-menu-exibition
        avatar-name="Dwight Schrute"
        avatar-thumbnail="https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"
        avatar-size="small"
        value="Dwight Schrute"
        subtitle="co-Manager"
      >
      </bds-menu-exibition>
      <bds-menu-exibition
        avatarName="Jim Halpert"
        avatar-thumbnail="https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"
        avatar-size="extra-small"
        value="Jim Halpert"
        subtitle="Seller"
      >
      </bds-menu-exibition>
    </bds-menu>
    </div>
  )
}

export const MenuAction = () => {
  return (
    <div style={content}>
      <bds-menu-action button-text={text('button text', 'Text Buttom')} sub-menu={boolean('sub menu', true)} iconleft={text('iconleft', 'edit')} lipstick={boolean('lipstick',false)}></bds-menu-action>
    </div>
  )
}

export const MenuExibition = () => {
  const sizes = [
    'extra-small',
    'small',
    'standard'
  ]
  return (
    <div style={content}>
      <bds-menu-exibition
        avatarName={text('avatar name', 'Jim Halpert')}
        avatar-thumbnail={text('avatar thumbnail', 'https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1')}
        avatar-size={select('avatar size', sizes)}
        value={text('value', 'Jim Halpert')}
        subtitle={text('subtitle', 'Seller')}
      >
      </bds-menu-exibition>
    </div>
  )
}

export const MenuSeparation = () => {
  const sizes = [
    'small',
    'default',
    'large'
  ]
  return (
    <div style={content}>
      <bds-menu-separation size={select('size', sizes)} value={text('value', 'Divisor')}> </bds-menu-separation>
    </div>
  )
}