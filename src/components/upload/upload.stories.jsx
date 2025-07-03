import React, { useEffect } from 'react';
import DocumentationTemplate from './upload.mdx';
import { BdsUpload } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Upload',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-upload
      title-name={args.titleName}
      subtitle={args.subtitle}
      accept={args.accept}
      error={args.error}
      language={args.language}
      multiple={args.multiple}
      data-accept={args.dataAccept}
      dt-input-files={args.dtInputFiles}
      dt-label-add-file={args.dtLabelAddFile}
      dt-button-delete={args.dtButtonDelete}
    ></bds-upload>
  );
};

Properties.argTypes = {
  titleName: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o título do upload.',
    control: 'text',
  },
  subtitle: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o subtítulo do upload.',
    control: 'text',
  },
  accept: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define os tipos de arquivos aceitos.',
    control: 'text',
  },
  error: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define a mensagem de erro.',
    control: 'text',
  },
  language: {
    table: {
      defaultValue: { summary: 'pt_BR' },
    },
    description: 'Define o idioma do componente.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: 'select',
  },
  multiple: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Permite o upload de múltiplos arquivos.',
    control: 'boolean',
  },
  dataAccept: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define os tipos de arquivos aceitos em formato de array.',
    control: 'text',
  },
  dtInputFiles: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos do input de arquivos.',
    control: 'text',
  },
  dtLabelAddFile: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos do label de adicionar arquivos.',
    control: 'text',
  },
  dtButtonDelete: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos do botão de deletar arquivos.',
    control: 'text',
  },
};

Properties.args = {
  titleName: 'Title uploader',
  subtitle: 'Description uploades, only one file',
  accept: '',
  error: '',
  language: 'pt_BR',
  multiple: false,
  dataAccept: '',
  dtInputFiles: '',
  dtLabelAddFile: '',
  dtButtonDelete: '',
};

export const Methods = () => {
  const deleteItem = async (id) => {
    const inputUpload = document.getElementById(id);
    await inputUpload.deleteFile(0);
  };
  const deleteAllItens = async (id) => {
    const inputUpload = document.getElementById(id);
    await inputUpload.deleteAllFiles();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-grid direction="column" gap="2">
        <bds-upload
          id="upload"
          multiple
          title-name="Title uploader"
          subtitle="Description uploades, e.g.: can upload multiples files"
        ></bds-upload>
        <bds-button onClick={() => deleteItem('upload')}> Excluir Item </bds-button>
        <bds-button onClick={() => deleteAllItens('upload')}> Excluir todos os Itens </bds-button>
      </bds-grid>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const upload = document.getElementById('upload');
    upload.addEventListener('bdsUploadChange', () => {
      console.log('Evento bdsUploadChange funcionando');
    });
    upload.addEventListener('bdsUploadDelete', () => {
      console.log('Evento bdsUploadDelete funcionando');
    });
  });

  return (
    <bds-upload
      id="upload"
      multiple
      title-name="Title uploader"
      subtitle="Description uploades, e.g.: can upload multiples files"
      accept=".jpg,.png,.pdf"
      error="Erro ao fazer upload do arquivo"
      language="pt_BR"
      data-accept='[".jpg", ".png", ".pdf"]'
      dt-input-files="upload-input-files"
      dt-label-add-file="upload-label-add-file"
      dt-button-delete="upload-button-delete"
    ></bds-upload>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsUpload
      multiple
      error="There was an error attaching the file, please try again or select another file"
      titleName="Title uploader"
      subtitle="Description uploades, e.g.: only .jpg files at 10mb or less"
      accept=".jpg,.png,.pdf"
      language="en_US"
      dataAccept='[".jpg", ".png", ".pdf"]'
      dtInputFiles="upload-input-files"
      dtLabelAddFile="upload-label-add-file"
      dtButtonDelete="upload-button-delete"
    ></BdsUpload>
  );
};
