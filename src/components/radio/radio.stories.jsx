import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Radio',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultRadio = () => (
    <>
        <bds-radio
            label={text('label', 'Click A')}
            name={text('name', 'rd1')}
            disabled={boolean('disabled', false)}
            checked={boolean('checked', false)}
        >
        </bds-radio>
    </>
);

export const disabledRadio = () => (
    <>
        <bds-radio id="radio1" label="Selected" checked disabled></bds-radio>
        <bds-radio id="radio2" label="Deselected" disabled></bds-radio>
    </>
)

export const withoutLabelRadio = () => (
    <>
        <bds-radio id="radio1" checked></bds-radio>
        <bds-radio id="radio2"></bds-radio>
        <bds-radio id="radio1" checked disabled></bds-radio>
        <bds-radio id="radio2" disabled></bds-radio>
    </>
)