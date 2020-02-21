import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Select',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultSelect = () => (
    <bds-select
        options={[
            { label: 'Virgens Suicidas', value: 1 },
            { label: 'Super Bad', value: 2 },
            { label: 'O Pintassilgo', value: 3 },
            { label: 'Bela Adormecida', value: 4 },
            { label: 'Virgens Suicidas 1', value: 12 },
            { label: 'Super Bad 1', value: 22 },
            { label: 'O Pintassilgo 1', value: 32 },
            { label: 'Bela Adormecida 1', value: 42 },
            { label: 'Virgens Suicidas 2', value: 11 },
            { label: 'Super Bad 3', value: 21 },
            { label: 'O Pintassilgo 4', value: 31 },
            { label: 'Bela Adormecida 5', value: 41 },
        ]}
    >
    </bds-select>
);
