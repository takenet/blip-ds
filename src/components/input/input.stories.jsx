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
            icon-left={text('icon-left', '')}
            value={text('value', '')}
            type={text('type', '')}
        >
        </bds-input>
    </>
);
