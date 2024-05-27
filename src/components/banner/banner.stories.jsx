import React, { useEffect } from 'react';
import DocumentationTemplate from './banner.mdx';
import { BdsBanner, BdsBannerLink } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Banner',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const rightText = {
  marginLeft: '16px',
};

export const Properties = (args) => (
  <bds-banner variant={args.variant} button-close={args.buttonClose} context={args.context}>
    Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    <bds-banner-link>Acompanhe aqui</bds-banner-link>
  </bds-banner>
);

Properties.argTypes = {
  variant: {
    table: {
      defaultValue: { summary: 'system' },
    },

    options: ['system', 'error', 'warning', 'info', 'success'],
    control: 'select',
  },
  context: {
    table: {
      defaultValue: { summary: 'outside' },
    },

    options: ['outside', 'inside'],
    control: 'select',
  },
  buttonClose: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
};

Properties.args = {
  variant: 'system',
  context: 'outside',
  buttonClose: false,
};
export const Events = () => {
  useEffect(() => {
    const banner = document.getElementById('bannerEvent');
    banner.addEventListener('bdsBannerClose', () => {
      console.log('Evento para fechar funcionando');
    });
  });
  return (
    <bds-banner id="bannerEvent" variant="system" button-close={true} context="outside">
      Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    </bds-banner>
  );
};

export const linkBanner = () => (
  <bds-banner variant="system" button-close="true">
    Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    <bds-banner-link>Acompanhe aqui</bds-banner-link>
  </bds-banner>
);

export const contextBanner = () => (
  <bds-paper width="500px">
    <bds-grid direction="column" padding="2" gap="3">
      <bds-banner variant="warning" context="inside">
        Este é um banner do tipo inside. Ele pode conter várias linhas, mas a sugestão é que possua textos curtos e
        objetivos.
      </bds-banner>
      <bds-grid direction="row" gap="2" align-items="center" justify-content="center">
        <bds-grid align-items="center" justify-content="center">
          <bds-icon size="large" name="builder-publish-bot"></bds-icon>
        </bds-grid>
        <div style={rightText}>
          <bds-typo bold="bold" variant="fs-16">
            Aprenda a utilizar o Blip
          </bds-typo>
          <bds-typo>Conheça nossos conteúdos e aprenda a utilizar o máximo da plataforma</bds-typo>
        </div>
      </bds-grid>
    </bds-grid>
  </bds-paper>
);

export const FrameworkReact = () => (
  <BdsBanner variant="system" button-close="true">
    Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    <BdsBannerLink>Acompanhe aqui</BdsBannerLink>
  </BdsBanner>
);
