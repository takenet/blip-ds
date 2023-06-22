import { Component, h } from '@stencil/core';

const users = [
  { id: '1', name: 'Michael Scott' },
  { id: '2', name: 'Dwight Schrute' },
  { id: '3', name: 'Jim Halpert' },
  { id: '4', name: 'Pam Beesly' },
  { id: '5', name: 'Ryan Howard' },
  { id: '6', name: 'Andy Bernard' },
];
@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    return (
      <bds-grid xxs="12" direction="row" padding="3" flex-wrap="wrap">
        <bds-modal open={true} close-button={true}>
          <div style={{ margin: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '24px' }}>
              <div style={{ paddingRight: '20px', width: '200px', height: '200px' }}>
                <bds-illustration type="spots" name="ticket"></bds-illustration>
              </div>
              <div style={{ width: 'calc(100% - 200px)' }}>
                <div style={{ display: 'flex', width: 'auto', marginBottom: '16px' }}>
                  <bds-typo variant="fs-20" bold="semi-bold">
                    O que é o Histórico de tickets?
                  </bds-typo>
                </div>
                <div style={{ display: 'flex', width: '100%', marginBottom: '16px' }}>
                  <bds-autocomplete label="teste" placeholder="Select">
                    <bds-select-option value="1">Millie Bobby</bds-select-option>
                    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                    <bds-select-option value="3">David Harbour</bds-select-option>
                    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
                    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
                    <bds-select-option value="6">Noah Schnapp</bds-select-option>
                    <bds-select-option value="36">David Harbour</bds-select-option>
                    <bds-select-option value="47">Gaten Matarazzo</bds-select-option>
                    <bds-select-option value="57">Caleb McLaughlin</bds-select-option>
                    <bds-select-option value="66">Noah Schnapp</bds-select-option>
                  </bds-autocomplete>
                </div>
              </div>
            </div>
          </div>
          <bds-modal-action>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
              <bds-button icon="video" variant="secondary">
                Tutorial
              </bds-button>
              <bds-button>Ok, entendi</bds-button>
            </div>
          </bds-modal-action>
        </bds-modal>
        <bds-grid xxs="12">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper border>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-typo variant="fs-40" bold="bold" class="titulo">
                  Titulo de teste light
                </bds-typo>

                <bds-grid>
                  <bds-chip-tag color="default">default</bds-chip-tag>
                  <bds-chip-tag color="info">info</bds-chip-tag>
                  <bds-chip-tag color="success">success</bds-chip-tag>
                  <bds-chip-tag color="warning">warning</bds-chip-tag>
                  <bds-chip-tag color="danger">danger</bds-chip-tag>
                  <bds-chip-tag color="outline">outline</bds-chip-tag>
                </bds-grid>
                <bds-grid>
                  <bds-chip-selected color="default">chip default</bds-chip-selected>
                  <bds-chip-selected color="info">chip info</bds-chip-selected>
                  <bds-chip-selected color="success">chip success</bds-chip-selected>
                  <bds-chip-selected color="warning">chip warning</bds-chip-selected>
                  <bds-chip-selected color="danger">chip danger</bds-chip-selected>
                  <bds-chip-selected color="outline">chip outline</bds-chip-selected>
                </bds-grid>
                <bds-grid>
                  <bds-chip-clickable close color="default">
                    aslkjdhflsk
                  </bds-chip-clickable>
                  <bds-chip-clickable color="info">info</bds-chip-clickable>
                  <bds-chip-clickable color="success">success</bds-chip-clickable>
                  <bds-chip-clickable color="warning">warning</bds-chip-clickable>
                  <bds-chip-clickable color="danger">danger</bds-chip-clickable>
                  <bds-chip-clickable color="outline">outline</bds-chip-clickable>
                </bds-grid>

                <bds-autocomplete label="Label" icon="warning" value={null} disabled={false} placeholder="Select">
                  <bds-select-option value="1">Millie Bobby</bds-select-option>
                  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                  <bds-select-option value="3">David Harbour</bds-select-option>
                  <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
                  <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
                  <bds-select-option value="6">Noah Schnapp</bds-select-option>
                </bds-autocomplete>

                <bds-stepper>
                  <bds-step active={true}>Step one 1</bds-step>
                  <bds-step>Step two 2</bds-step>
                  <bds-step>Step three 3</bds-step>
                </bds-stepper>

                <bds-grid gap="4" margin="3" align-items="center">
                  <bds-grid direction="column" align-items="center" gap="4">
                    <bds-badge shape="circle" color="system"></bds-badge>
                    <bds-typo bold="bold">Status</bds-typo>
                  </bds-grid>
                  <bds-grid direction="column" align-items="center" gap="2">
                    <bds-badge shape="circle" color="system" icon="info"></bds-badge>
                    <bds-typo bold="bold">Icon</bds-typo>
                  </bds-grid>
                  <bds-grid direction="column" align-items="center" gap="2">
                    <bds-badge shape="circle" color="system" number={1234}></bds-badge>
                    <bds-typo bold="bold">Number</bds-typo>
                  </bds-grid>
                </bds-grid>

                <bds-grid gap="4" margin="3" align-items="center">
                  <bds-badge shape="circle" color="system" icon="info"></bds-badge>
                  <bds-badge shape="triangle" color="danger" icon="info"></bds-badge>
                  <bds-badge shape="triangle-reverse" icon="info" color="warning"></bds-badge>
                  <bds-badge shape="polygon" color="success" icon="info"></bds-badge>
                  <bds-badge shape="square" color="neutral" icon="info"></bds-badge>
                </bds-grid>

                <bds-grid>
                  <bds-switch name="" refer="string"></bds-switch>
                </bds-grid>

                <bds-grid gap="1">
                  <bds-button size="standard" variant="primary">
                    Button primary
                  </bds-button>
                  <bds-button disabled size="short" variant="secondary">
                    Button secondary
                  </bds-button>
                  <bds-button disabled arrow icon="file-new" variant="tertiary">
                    Button tertiary
                  </bds-button>
                  <bds-button disabled arrow variant="ghost">
                    Button ghost
                  </bds-button>
                  <bds-button disabled variant="delete">
                    Button delete
                  </bds-button>
                </bds-grid>

                <bds-grid gap="1">
                  <bds-button-icon disabled variant="primary" icon="file-new" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="secondary" icon="notes" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="tertiary" icon="warning" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="ghost" icon="info" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="delete" icon="attention" size="standard"></bds-button-icon>
                </bds-grid>

                <bds-grid direction="column">
                  <bds-progress-bar
                    color="default"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="information"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="warning"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="positive"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                </bds-grid>

                <bds-input label="teste de label" disabled maxlength={30} counter-length icon="email"></bds-input>
                <bds-input
                  label="teste de label"
                  icon="warning"
                  disabled
                  is-textarea
                  helper-message="mensagem de ajuda"
                  rows={2}
                ></bds-input>
                <bds-input label="teste de label" icon="warning" disabled error-message="esta errado"></bds-input>
                <bds-input label="teste de label" icon="warning" disabled value="Action descripition"></bds-input>
                <bds-input success label="teste de label" icon="warning" value="Action descripition"></bds-input>

                <bds-input-password disabled value="password" error-message="Oops"></bds-input-password>

                <bds-input-phone-number
                  disabled
                  required
                  required-error-message="This input is required."
                  number-error-message="Only numbers are allowed."
                ></bds-input-phone-number>

                <bds-select danger icon="warning" error-message="teste" value="2">
                  <bds-select-option value="1">Millie Bobby</bds-select-option>
                  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                  <bds-select-option value="3">David Harbour</bds-select-option>
                  <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
                  <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
                  <bds-select-option value="6">Noah Schnapp</bds-select-option>
                </bds-select>

                <bds-input-chips
                  disabled
                  type="email"
                  danger={true}
                  error-message="teste"
                  chips='["chip@email.com", "chip2"]'
                ></bds-input-chips>

                <bds-input-editable
                  input-name=""
                  value="Teste de um frase que ocupe um maior espaço"
                  expand={true}
                  size={'standard'}
                  minlength={3}
                  minlength-error-message="tamanho menor que o mínimo"
                  required-error-message="campo não pode ser vazio"
                  maxlength={null}
                  error-message=""
                  danger={false}
                ></bds-input-editable>

                <bds-datepicker type-of-date="period" message="testes" />
                <bds-loading-bar size="small" percent={48}></bds-loading-bar>
                <bds-loading-bar size="default" percent={48}></bds-loading-bar>
                <bds-loading-spinner size="standard" color="main"></bds-loading-spinner>
                {/* <bds-loading-page></bds-loading-page> */}
                <bds-radio-group>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <bds-typo bold="bold">Radio group</bds-typo>
                    <bds-radio value="radio1" label="Radio 1"></bds-radio>
                    <bds-radio value="radio2" label="Radio 2"></bds-radio>
                    <bds-radio value="radio3" label="Radio 3"></bds-radio>
                  </div>
                </bds-radio-group>
                <bds-modal open={false} close-button={true}>
                  <bds-modal-action>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
                      <bds-button icon="video" variant="secondary">
                        Tutorial
                      </bds-button>
                      <bds-button>Ok, entendi</bds-button>
                    </div>
                  </bds-modal-action>
                </bds-modal>
                <bds-dropdown>
                  <div slot="dropdown-activator">
                    <bds-button variant="primary">Open Menu</bds-button>
                  </div>
                  <div slot="dropdown-content">
                    <bds-list type-list="default">
                      <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                      <bds-list-item
                        value="03"
                        text="Text"
                        secondary-text="Secondary text"
                        icon="blip-ideas"
                      ></bds-list-item>
                      <bds-list-item
                        value="04"
                        text="Text"
                        secondary-text="Secondary text"
                        avatar-name="Alvare Horta"
                      ></bds-list-item>
                    </bds-list>
                  </div>
                </bds-dropdown>
                <bds-grid>
                  <bds-upload
                    multiple
                    error="There was an error attaching the file, please try again or select another file"
                    title-name="Title uploader"
                    subtitle="Description uploades, e.g.: only .jpg files at 10mb or less"
                  ></bds-upload>
                </bds-grid>
                <bds-grid direction="column">
                  <bds-banner variant="system" button-close="true">
                    Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
                    <bds-banner-link>Acompanhe aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="warning" button-close="true">
                    Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
                    <bds-banner-link>Acompanhe aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="info" button-close="true">
                    Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
                    <bds-banner-link>Saiba mais aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="error" button-close="true">
                    Ops, ocorreu um erro! O servidor está fora do ar.
                    <bds-banner-link>Saiba mais aqui</bds-banner-link>
                  </bds-banner>
                </bds-grid>
                <bds-alert open={false}>
                  <bds-alert-header variant="system" icon="warning">
                    Atenção!
                  </bds-alert-header>
                  <bds-alert-body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla
                    a quos error!
                  </bds-alert-body>
                  <bds-alert-actions>
                    <bds-button variant="secondary">Cancelar</bds-button>
                    <bds-button variant="secondary">Confirmar</bds-button>
                  </bds-alert-actions>
                </bds-alert>
                <bds-avatar-group size="standard" users={JSON.stringify(users)}></bds-avatar-group>
                <bds-tooltip tooltip-text="teste de texto para tooltip" position="right-center">
                  <bds-avatar
                    name="Michael Scott"
                    thumbnail="https://www.w3schools.com/howto/img_avatar.png"
                    size="extra-large"
                    upload={true}
                  ></bds-avatar>
                </bds-tooltip>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-typo variant="fs-40" bold="bold" class="titulo">
                  Titulo de teste dark
                </bds-typo>
                <bds-grid>
                  <bds-chip-tag color="default">default</bds-chip-tag>
                  <bds-chip-tag color="info">info</bds-chip-tag>
                  <bds-chip-tag color="success">success</bds-chip-tag>
                  <bds-chip-tag color="warning">warning</bds-chip-tag>
                  <bds-chip-tag color="danger">danger</bds-chip-tag>
                  <bds-chip-tag color="outline">outline</bds-chip-tag>
                </bds-grid>
                <bds-grid>
                  <bds-chip-selected color="default">chip default</bds-chip-selected>
                  <bds-chip-selected color="info">chip info</bds-chip-selected>
                  <bds-chip-selected color="success">chip success</bds-chip-selected>
                  <bds-chip-selected color="warning">chip warning</bds-chip-selected>
                  <bds-chip-selected color="danger">chip danger</bds-chip-selected>
                  <bds-chip-selected color="outline">chip outline</bds-chip-selected>
                </bds-grid>
                <bds-grid>
                  <bds-chip-clickable close color="default">
                    aslkjdhflsk
                  </bds-chip-clickable>
                  <bds-chip-clickable color="info">info</bds-chip-clickable>
                  <bds-chip-clickable color="success">success</bds-chip-clickable>
                  <bds-chip-clickable color="warning">warning</bds-chip-clickable>
                  <bds-chip-clickable color="danger">danger</bds-chip-clickable>
                  <bds-chip-clickable color="outline">outline</bds-chip-clickable>
                </bds-grid>

                <bds-autocomplete label="Label" icon="warning" value={null} disabled={true} placeholder="Select">
                  <bds-select-option value="1">Millie Bobby</bds-select-option>
                  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                  <bds-select-option value="3">David Harbour</bds-select-option>
                  <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
                  <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
                  <bds-select-option value="6">Noah Schnapp</bds-select-option>
                </bds-autocomplete>

                <bds-stepper>
                  <bds-step>Step one 1</bds-step>
                  <bds-step active={true}>Step two 2</bds-step>
                  <bds-step>Step three 3</bds-step>
                </bds-stepper>

                <bds-grid gap="4" margin="3" align-items="center">
                  <bds-grid direction="column" align-items="center" gap="4">
                    <bds-badge shape="circle" color="system"></bds-badge>
                    <bds-typo bold="bold">Status</bds-typo>
                  </bds-grid>
                  <bds-grid direction="column" align-items="center" gap="2">
                    <bds-badge shape="circle" color="system" icon="info"></bds-badge>
                    <bds-typo bold="bold">Icon</bds-typo>
                  </bds-grid>
                  <bds-grid direction="column" align-items="center" gap="2">
                    <bds-badge shape="circle" color="system" number={1234}></bds-badge>
                    <bds-typo bold="bold">Number</bds-typo>
                  </bds-grid>
                </bds-grid>

                <bds-grid gap="4" margin="3" align-items="center">
                  <bds-badge shape="circle" color="system" icon="info"></bds-badge>
                  <bds-badge shape="triangle" color="danger" icon="info"></bds-badge>
                  <bds-badge shape="triangle-reverse" icon="info" color="warning"></bds-badge>
                  <bds-badge shape="polygon" color="success" icon="info"></bds-badge>
                  <bds-badge shape="square" color="neutral" icon="info"></bds-badge>
                </bds-grid>

                <bds-grid gap="1">
                  <bds-button disabled size="standard" variant="primary">
                    Button primary
                  </bds-button>
                  <bds-button disabled size="short" variant="secondary">
                    Button secondary
                  </bds-button>
                  <bds-button disabled icon="file-new" variant="tertiary">
                    Button tertiary
                  </bds-button>
                  <bds-button arrow variant="ghost">
                    Button ghost
                  </bds-button>
                  <bds-button disabled variant="delete">
                    Button delete
                  </bds-button>
                </bds-grid>

                <bds-grid gap="1">
                  <bds-button-icon disabled variant="primary" icon="file-new" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="secondary" icon="notes" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="tertiary" icon="warning" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="ghost" icon="info" size="standard"></bds-button-icon>
                  <bds-button-icon disabled variant="delete" icon="attention" size="standard"></bds-button-icon>
                </bds-grid>

                <bds-grid>
                  <bds-switch disabled name="" refer="string"></bds-switch>
                </bds-grid>

                <bds-grid direction="column">
                  <bds-progress-bar
                    color="default"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="information"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="warning"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                  <bds-progress-bar
                    color="positive"
                    text="Texto para aplicar no componente"
                    percent={16}
                  ></bds-progress-bar>
                </bds-grid>

                <bds-input label="teste de label" disabled maxlength={30} counter-length icon="email"></bds-input>
                <bds-input
                  label="teste de label"
                  icon="warning"
                  disabled
                  is-textarea
                  helper-message="mensagem de ajuda"
                  rows={2}
                ></bds-input>
                <bds-input label="teste de label" icon="warning" disabled error-message="esta errado"></bds-input>
                <bds-input label="teste de label" icon="warning" disabled value="Action descripition"></bds-input>
                <bds-input label="teste de label" icon="warning" value="Action descripition"></bds-input>

                <bds-input-password value="password" danger error-message="Oops"></bds-input-password>

                <bds-input-phone-number
                  required
                  required-error-message="This input is required."
                  number-error-message="Only numbers are allowed."
                ></bds-input-phone-number>

                <bds-select danger icon="warning" error-message="teste" value="2">
                  <bds-select-option value="1">Millie Bobby</bds-select-option>
                  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                  <bds-select-option value="3">David Harbour</bds-select-option>
                  <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
                  <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
                  <bds-select-option value="6">Noah Schnapp</bds-select-option>
                </bds-select>

                <bds-input-chips
                  type="email"
                  danger={false}
                  error-message="teste"
                  chips='["chip@email.com", "chip2"]'
                ></bds-input-chips>

                <bds-input-editable
                  input-name=""
                  value="Teste de um frase que ocupe um maior espaço"
                  expand={true}
                  size={'standard'}
                  minlength={3}
                  minlength-error-message="tamanho menor que o mínimo"
                  required-error-message="campo não pode ser vazio"
                  maxlength={null}
                  error-message=""
                  danger={false}
                ></bds-input-editable>

                <bds-datepicker type-of-date="period" message="testes" />
                <bds-loading-bar size="small" text="Texto para aplicar no componente" percent={48}></bds-loading-bar>
                <bds-loading-bar size="default" text="Texto para aplicar no componente" percent={48}></bds-loading-bar>
                <bds-loading-spinner size="standard" color="main"></bds-loading-spinner>
                {/* <bds-loading-page></bds-loading-page> */}
                <bds-radio-group>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <bds-typo bold="bold">Radio group</bds-typo>
                    <bds-radio value="radio1" label="Radio 1"></bds-radio>
                    <bds-radio value="radio2" label="Radio 2"></bds-radio>
                    <bds-radio value="radio3" label="Radio 3"></bds-radio>
                  </div>
                </bds-radio-group>
                <bds-modal open={false} close-button={true}>
                  <bds-modal-action>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
                      <bds-button icon="video" variant="secondary">
                        Tutorial
                      </bds-button>
                      <bds-button>Ok, entendi</bds-button>
                    </div>
                  </bds-modal-action>
                </bds-modal>
                <bds-dropdown>
                  <div slot="dropdown-activator">
                    <bds-button variant="primary">Open Menu</bds-button>
                  </div>
                  <div slot="dropdown-content">
                    <bds-list type-list="default">
                      <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                      <bds-list-item
                        value="03"
                        text="Text"
                        secondary-text="Secondary text"
                        icon="blip-ideas"
                      ></bds-list-item>
                      <bds-list-item
                        value="04"
                        text="Text"
                        secondary-text="Secondary text"
                        avatar-name="Alvare Horta"
                      ></bds-list-item>
                    </bds-list>
                  </div>
                </bds-dropdown>
                <bds-grid>
                  <bds-upload
                    multiple
                    error="There was an error attaching the file, please try again or select another file"
                    title-name="Title uploader"
                    subtitle="Description uploades, e.g.: only .jpg files at 10mb or less"
                  ></bds-upload>
                </bds-grid>
                <bds-grid direction="column">
                  <bds-banner variant="system" button-close="true">
                    Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
                    <bds-banner-link>Acompanhe aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="warning" button-close="true">
                    Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
                    <bds-banner-link>Acompanhe aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="info" button-close="true">
                    Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
                    <bds-banner-link>Saiba mais aqui</bds-banner-link>
                  </bds-banner>
                  <bds-banner variant="error" button-close="true">
                    Ops, ocorreu um erro! O servidor está fora do ar.
                    <bds-banner-link>Saiba mais aqui</bds-banner-link>
                  </bds-banner>
                </bds-grid>
                <bds-alert open={false}>
                  <bds-alert-header variant="system" icon="warning">
                    Atenção!
                  </bds-alert-header>
                  <bds-alert-body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla
                    a quos error!
                  </bds-alert-body>
                  <bds-alert-actions>
                    <bds-button variant="secondary">Cancelar</bds-button>
                    <bds-button variant="secondary">Confirmar</bds-button>
                  </bds-alert-actions>
                </bds-alert>
                <bds-avatar-group size="standard" users={JSON.stringify(users)}></bds-avatar-group>
                <bds-tooltip tooltip-text="teste de texto para tooltip" position="right-center">
                  <bds-avatar
                    name="Michael Scott"
                    thumbnail="https://www.w3schools.com/howto/img_avatar.png"
                    size="extra-large"
                    upload={true}
                  ></bds-avatar>
                </bds-tooltip>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
