import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Upload',
  parameters: {
    notes: { markdown: readme },
  },
};

export const upload = () => {
  const paper = {
    width: '400px',
    margin: 'auto',
    padding: '50px',
    'margin-top': '30px',
  };

  return (
    <bds-paper style={paper}>
      <bds-upload title-name="Title uploader" subtitle="Description uploades, only one file"></bds-upload>
    </bds-paper>
  );
};

export const uploadMultiple = () => {
  const paper = {
    width: '400px',
    margin: 'auto',
    padding: '50px',
    'margin-top': '30px',
  };

  return (
    <bds-paper style={paper}>
      <bds-upload
        multiple
        title-name="Title uploader"
        subtitle="Description uploades, e.g.: can upload multiples files"
      ></bds-upload>
    </bds-paper>
  );
};

export const uploadError = () => {
  const paper = {
    width: '400px',
    margin: 'auto',
    padding: '50px',
    'margin-top': '30px',
  };

  return (
    <bds-paper style={paper}>
      <bds-upload
        multiple
        error="There was an error attaching the file, please try again or select another file"
        title-name="Title uploader"
        subtitle="Description uploades, e.g.: only .jpg files at 10mb or less"
      ></bds-upload>
    </bds-paper>
  );
};
