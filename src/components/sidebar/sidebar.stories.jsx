import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Sidebar',
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

const HeaderContent = '"Insira o header aqui"';
const bodyContent = '"Insira o seu conteúdo aqui"';
const footerContent = '"Insira o footer aqui"';

const Template = (args) => {
  return (
    <bds-grid xxs="12" height="95vh">
      <bds-sidebar is-open={args.isOpen} sidebar-position={args.sidebarPosition} margin={args.margin} type={args.type}>
        <div slot="header">
          <bds-typo>{HeaderContent}</bds-typo>
        </div>
        <div slot="body">
          <bds-typo>{bodyContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo>{footerContent}</bds-typo>
        </div>
      </bds-sidebar>
    </bds-grid>
  );
};

export const SidebarOver = Template.bind({});
SidebarOver.args = {
  isOpen: true,
  sidebarPosition: 'right',
  type: 'over'
};


export const SidebarFixed = () => {

  const header = {
    backgroundColor: 'rgb(179, 212, 255)'
  }

  const body = {
    backgroundColor: 'rgb(204, 153, 255)'
  }

  return (
    <bds-grid xxs="12" height="95vh" direction="column">
      <bds-grid style={header} height="80px" xxs="12" justify-content="center" align-items="center">
        <bds-typo bold="bold" variant="fs-24" margin="false">Header</bds-typo>
      </bds-grid>
      <bds-grid height="100%">
        <bds-sidebar sidebar-position="left" margin="true" type="fixed">
          <div slot="header">
            <bds-typo bold="bold">Exemplo de sidebar fixo</bds-typo>
          </div>
        <div slot="body">
          <bds-grid direction="column" gap="1">
            <bds-typo variant="fs-14" margin="false">
            Filtre por uma ou mais intenções:
          </bds-typo>
          <bds-select placeholder="Selecione uma ou mais intenções" label="Intenção">
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select>
          <bds-typo variant="fs-14" margin="false">
            Filtre por período:
          </bds-typo>
          <bds-datepicker
            end-date-limit="31/12/2022"
            start-date-limit="01/01/2022"
            type-of-date="period"
          />
            <bds-select placeholder="Selecione uma ou mais intenções" label="Intenção">
              <bds-select-option value="1">Millie Bobby</bds-select-option>
              <bds-select-option value="2">Finn Wolfhard</bds-select-option>
              <bds-select-option value="3">David Harbour</bds-select-option>
              <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
              <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
              <bds-select-option value="6">Noah Schnapp</bds-select-option>
            </bds-select>
            <bds-input placeholder="0 a 100" label="Percentual"></bds-input>
          </bds-grid>
        </div>
        <div slot="footer">
          <bds-button variant="tertiary">Aplicar filtros</bds-button>
        </div>
      </bds-sidebar>
      <bds-grid xxs="auto" style={body}></bds-grid>
      </bds-grid>
    </bds-grid>
  )
}

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
          <bds-typo style={spInputText} variant="fs-14" margin="false">
            Filtre por período:
          </bds-typo>
          <bds-datepicker
            style={spInput}
            end-date-limit="31/12/2022"
            start-date-limit="01/01/2022"
            type-of-date="period"
          />
          <div style={divisor}></div>
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