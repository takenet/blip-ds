import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Input',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultInput = () => (
    <>
        <bds-input
            placeholder={text('placeholder', 'nome completo')}
            label={text('label', '')}
            danger={boolean('danger', false)}
            icon={text('icon', '')}
            value={text('value', '')}
            type={text('type', '')}
            error-message={text('errorMessage', '')}
            helper-message={text('helperMessage', '')}
        >
        </bds-input>
    </>
);

export const dangerInput = () => (
    <>
        <bds-input danger></bds-input>
        <br />
        <bds-input danger icon="email"></bds-input>
        <br />
        <bds-input danger label="Name"></bds-input>
        <br />
        <bds-input danger icon="email" label="Name"></bds-input>
    </>
);

export const passwordInput = () => (
    <>
        <bds-input type="password"></bds-input>
        <br />
        <bds-input type="password" label="Password"></bds-input>
        <br />
        <bds-input type="password" danger></bds-input>
        <br />
        <bds-input type="password" label="Password" danger></bds-input>
    </>
)

export const disabledInput = () => (
    <>
        <bds-input disabled></bds-input>
        <br />
        <bds-input disabled value="Action descripition"></bds-input>
        <br />
        <bds-input disabled icon="email" value="Action descripition"></bds-input>
        <br />
        <bds-input disabled label="Action" value="Action descripition"></bds-input>
        <br />
        <bds-input disabled icon="email" label="Action" value="Action descripition"></bds-input>
    </>
)