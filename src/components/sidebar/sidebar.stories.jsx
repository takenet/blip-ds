import React from 'react';
import readme from './readme.md';

export default {
  title: 'Sidebar',
  parameters: {
    notes: { markdown: readme },
  },
  argTypes: {
    sidebarPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
};

const spacing = {
  marginBottom: '16px',
  display: 'block',
  textAlign: 'center',
};

const textStyle = {
  color: '#333',
};

const HeaderContent = '"Insira o seu conteúdo aqui"';
const bodyContent = '"Insira o seu conteúdo aqui"';
const footerContent = '"Insira o seu conteúdo aqui"';

const Template = (args) => {
  return (
    <>
      <bds-sidebar is-open={args.isOpen} sidebar-position={args.sidebarPosition}>
        <div slot="header">
          <bds-typo style={textStyle}>{HeaderContent}</bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={textStyle}>{bodyContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo style={textStyle}>{footerContent}</bds-typo>
        </div>
      </bds-sidebar>
    </>
  );
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  isOpen: true,
  sidebarPosition: 'right',
};

export const SidebarPosition = () => {
  const openSidebar = async (id) => {
    const acc = document.getElementById(id);
    acc.isOpen = true;
  };

  const spInputText = {
    marginBottom: '8px',
    display: 'block',
    color: '#202C44',
  };

  const spInput = {
    marginBottom: '24px',
    display: 'block',
  };

  const spInputPercent = {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '8px',
    gridTemplateColumns: '2fr 1fr',
    marginBottom: '24px',
  };

  const sidebarHeader = {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '16px',
    justifyContent: 'start',
    alignItems: 'center',
    color: '#202C44',
  };

  const sidebarFooter = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const divisor = {
    width: '100%',
    height: '1px',
    display: 'block',
    backgroundColor: '#D2DFE6',
    marginBottom: '24px',
  };

  const alignbt = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <bds-button style={spacing} onClick={() => openSidebar('sb-right')}>
        Right Sidebar
      </bds-button>
      <bds-button style={spacing} onClick={() => openSidebar('sb-left')}>
        Left Sidebar
      </bds-button>

      {/* Left Sidebar */}
      <bds-sidebar id="sb-left" sidebar-position="left">
        <div style={sidebarHeader} slot="header">
          <bds-icon theme="outline" size="medium" name="filter" aria-label="filter"></bds-icon>
          <bds-typo bold="bold" variant="fs-20" line-height="double" margin="false">
            Filtro
          </bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={spInputText} variant="fs-14" margin="false">
            Filtre por uma ou mais intenções:
          </bds-typo>
          <bds-select style={spInput} placeholder="Selecione uma ou mais intenções" label="Intenção">
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select>
          <div style={divisor}></div>
          <bds-typo style={spInputText} variant="fs-14" margin="false">
            Filtre por percentual de confiança:
          </bds-typo>
          <div style={spInputPercent}>
            <bds-select placeholder="Selecione uma ou mais intenções" label="Intenção">
              <bds-select-option value="1">Millie Bobby</bds-select-option>
              <bds-select-option value="2">Finn Wolfhard</bds-select-option>
              <bds-select-option value="3">David Harbour</bds-select-option>
              <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
              <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
              <bds-select-option value="6">Noah Schnapp</bds-select-option>
            </bds-select>
            <bds-input placeholder="0 a 100" label="Percentual"></bds-input>
          </div>
          <div style={divisor}></div>
          <bds-typo style={spInputText} variant="fs-14" margin="false">
            Filtre por período:
          </bds-typo>
          <bds-datepicker
            style={spInput}
            end-date-limit="31/12/2022"
            start-date-limit="01/01/2022"
            type-of-date="period"
          />
          <div style={alignbt}>
            <bds-button variant="ghost">Selecionar hora início e fim</bds-button>
          </div>
        </div>
        <div style={sidebarFooter} slot="footer">
          <bds-button variant="secondary"> Limpar filtros </bds-button>
          <bds-button variant="primary"> Aplicar </bds-button>
        </div>
      </bds-sidebar>

      {/* Right Sidebar */}
      <bds-sidebar id="sb-right" sidebar-position="right">
        <div slot="header">
          <bds-typo style={textStyle}>{HeaderContent}</bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={textStyle}>{bodyContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo style={textStyle}>{footerContent}</bds-typo>
        </div>
      </bds-sidebar>
    </>
  );
};
