import React, { useState, useEffect, useRef } from 'react';
import readme from './readme.md';

export default {
  title: 'Menu',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  width: '100vw',
  height: '100vh',
  padding: '8px',
};

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const elementRf = useRef(null);
  const onToggleMenu = (event) => {
    setOpenMenu(event);
  };
  useEffect(() => {
    const elementRef = elementRf.current;
    elementRef.addEventListener(
      'bdsToggle',
      (event) => {
        onToggleMenu(event.detail.value);
      },
      { once: false }
    );
    return () => {
      elementRef.removeEventListener('bdsToggle', (event) => {
        onToggleMenu(event.detail.value);
      });
    };
  }, [elementRf]);
  return (
    <div style={content}>
      <bds-button id="menuList" onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </bds-button>
      <bds-menu ref={elementRf} id="menu01" menu="menuList" open={openMenu} position="right">
        <bds-menu-action button-text="texto" iconleft="edit" lipstick="false"></bds-menu-action>
        <bds-menu-separation size="default" value="Divisor"></bds-menu-separation>
        <bds-menu-exibition
          avatar-name="Michael Scott"
          avatar-thumbnail="https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"
          avatar-size="standard"
          value="Michael Scott"
          subtitle="Manager"
        ></bds-menu-exibition>
        <bds-menu-exibition
          avatar-name="Dwight Schrute"
          avatar-thumbnail="https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"
          avatar-size="small"
          value="Dwight Schrute"
          subtitle="co-Manager"
        ></bds-menu-exibition>
        <bds-menu-exibition
          avatarName="Jim Halpert"
          avatar-thumbnail="https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"
          avatar-size="extra-small"
          value="Jim Halpert"
          subtitle="Seller"
        ></bds-menu-exibition>
      </bds-menu>
    </div>
  );
};

export const MenuWithSubmenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const elementRf = useRef(null);
  const onToggleMenu = (event) => {
    setOpenMenu(event);
  };
  useEffect(() => {
    const elementRef = elementRf.current;
    elementRef.addEventListener(
      'bdsToggle',
      (event) => {
        onToggleMenu(event.detail.value);
      },
      { once: false }
    );
    return () => {
      elementRef.removeEventListener('bdsToggle', (event) => {
        onToggleMenu(event.detail.value);
      });
    };
  }, [elementRf]);
  return (
    <div style={content}>
      <bds-button id="menuList" onClick={() => setOpenMenu(!openMenu)}>
        {' '}
        Menu{' '}
      </bds-button>
      <bds-menu ref={elementRf} id="menu01" menu="menuList" open={openMenu} position="right">
        <bds-menu-action button-text="texto" sub-menu="true" iconleft="edit" lipstick="false">
          <bds-menu-action button-text="texto 1" sub-menu="false"></bds-menu-action>
          <bds-menu-action button-text="texto 2" sub-menu="false" icon-left="edit"></bds-menu-action>
          <bds-menu-action button-text="texto 3" sub-menu="false" icon-left="close" lipstick="true"></bds-menu-action>
        </bds-menu-action>
        <bds-menu-separation size="default" value="Divisor">
          {' '}
        </bds-menu-separation>
        <bds-menu-exibition
          avatar-name="Michael Scott"
          avatar-thumbnail="https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"
          avatar-size="standard"
          value="Michael Scott"
          subtitle="Manager"
        ></bds-menu-exibition>
        <bds-menu-exibition
          avatar-name="Dwight Schrute"
          avatar-thumbnail="https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"
          avatar-size="small"
          value="Dwight Schrute"
          subtitle="co-Manager"
        ></bds-menu-exibition>
        <bds-menu-exibition
          avatarName="Jim Halpert"
          avatar-thumbnail="https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"
          avatar-size="extra-small"
          value="Jim Halpert"
          subtitle="Seller"
        ></bds-menu-exibition>
      </bds-menu>
    </div>
  );
};

export const MenuDescription = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const elementRf = useRef(null);
  const onToggleMenu = (event) => {
    setOpenMenu(event);
  };
  useEffect(() => {
    const elementRef = elementRf.current;
    elementRef.addEventListener(
      'bdsToggle',
      (event) => {
        onToggleMenu(event.detail.value);
      },
      { once: false }
    );
    return () => {
      elementRef.removeEventListener('bdsToggle', (event) => {
        onToggleMenu(event.detail.value);
      });
    };
  }, [elementRf]);
  return (
    <div style={content}>
      <bds-button id="menuList" onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </bds-button>
      <bds-menu ref={elementRf} id="menu01" menu="menuList" open={openMenu} position="right">
        <bds-menu-exibition
          value="Michael Scott"
          subtitle="Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus."
        ></bds-menu-exibition>
        <bds-menu-exibition
          value="Dwight Schrute"
          subtitle="co-Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus."
        ></bds-menu-exibition>
        <bds-menu-exibition
          value="Jim Halpert"
          subtitle="Seller"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus."
        ></bds-menu-exibition>
      </bds-menu>
    </div>
  );
};

export const MenuAction = () => {
  return (
    <div style={content}>
      <bds-menu-action button-text="Text Buttom" sub-menu={true} icon-left="edit" lipstick={false}></bds-menu-action>
    </div>
  );
};

export const MenuExibition = () => {
  return (
    <div style={content}>
      <bds-menu-exibition
        avatarName="Jim Halpert"
        avatar-thumbnail=""
        avatar-size="standard"
        value="Jim Halpert"
        subtitle="Seller"
      ></bds-menu-exibition>
    </div>
  );
};

export const MenuSeparation = () => {
  return (
    <div style={content}>
      <bds-menu-separation size="default" value="Divisor"></bds-menu-separation>
    </div>
  );
};
