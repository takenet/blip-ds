import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Input Password',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultInputPassword = () => (
    <bds-input-password
        label={text('label', '')}
        danger={boolean('danger', false)}
        disabled={boolean('disabled', false)}
        value={text('value', '')}
        error-message={text('errorMessage', '')}
        helper-message={text('helperMessage', '')}
    >
    </bds-input-password>
);

export const dangerInputPassword = () => (
    <>
        <bds-input-password value="password" danger error-message="Oops"></bds-input-password>
        <br />
        <bds-input-password value="password" label="Password" danger error-message="Oops"></bds-input-password>
    </>
);