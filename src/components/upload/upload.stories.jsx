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
    ></bds-upload>
  );
};
Properties.args = {
  accept: '',
  error: '',
  language: 'pt_BR',
  multiple: false,
  subtitle: 'Description uploades, only one file',
  titleName: 'Title uploader',
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
    ></BdsUpload>
  );
};
