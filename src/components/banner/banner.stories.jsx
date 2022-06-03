import React from 'react';

import readme from './readme.md';

export default {
  title: 'Banner',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: 'flex',
  flexDirection: 'column',
  width: '90vw',
};

const bannerStyle = {
  margin: '20px auto',
};

const container = {
  width: '543px',
  height: '230px',
  padding: '20px',
};

const bottonContext = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'top',
  marginTop: '16px',
};

const leftIcon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '52px',
  height: '52px',
  borderRadius: '8px',
  backgroundColor: '#E9F7F8',
};

const rightText = {
  marginLeft: '16px',
};

export const variantBanner = () => (
  <div style={content}>
    <bds-banner style={bannerStyle} variant="system">
      Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="warning">
      Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="info">
      Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="error">
      Ops, ocorreu um erro! O servidor está fora do ar.
    </bds-banner>
  </div>
);

export const closeBanner = () => (
  <div style={content}>
    <bds-banner style={bannerStyle} variant="system" button-close="true">
      Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="warning" button-close="true">
      Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="info" button-close="true">
      Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
    </bds-banner>
    <bds-banner style={bannerStyle} variant="error" button-close="true">
      Ops, ocorreu um erro! O servidor está fora do ar.
    </bds-banner>
  </div>
);

export const linkBanner = () => (
  <div style={content}>
    <bds-banner style={bannerStyle} variant="system" button-close="true">
      Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
      <bds-banner-link>Acompanhe aqui</bds-banner-link>
    </bds-banner>
    <bds-banner style={bannerStyle} variant="warning" button-close="true">
      Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
      <bds-banner-link>Acompanhe aqui</bds-banner-link>
    </bds-banner>
    <bds-banner style={bannerStyle} variant="info" button-close="true">
      Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
      <bds-banner-link>Saiba mais aqui</bds-banner-link>
    </bds-banner>
    <bds-banner style={bannerStyle} variant="error" button-close="true">
      Ops, ocorreu um erro! O servidor está fora do ar.
      <bds-banner-link>Saiba mais aqui</bds-banner-link>
    </bds-banner>
  </div>
);

export const contextBanner = () => (
  <div style={content}>
    <bds-paper style={container}>
      <bds-banner variant="warning" context="inside">
        Este é um banner do tipo inside. Ele pode conter várias linhas, mas a sugestão é que possua textos curtos e
        objetivos.
      </bds-banner>
      <div style={bottonContext}>
        <div style={leftIcon}>
          <bds-icon size="large" name="builder-publish-bot" style={{ color: '#3F7DE8' }}></bds-icon>
        </div>
        <div style={rightText}>
          <bds-typo bold="bold" variant="fs-16">
            Aprenda a utilizar o Blip
          </bds-typo>
          <bds-typo>Conheça nossos conteúdos e aprenda a utilizar o máximo da plataforma</bds-typo>
        </div>
      </div>
    </bds-paper>
  </div>
);
