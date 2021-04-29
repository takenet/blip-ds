import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
	title: 'Input Password',
	decorators: [withKnobs],
	parameters: {
		notes: { markdown: readme },
	},
};

const inputStyle = {
	width: '312px'
}

export const defaultInputPassword = () => (
	<div style={inputStyle}>
		<bds-input-password
			label={text('label', '')}
			danger={boolean('danger', false)}
			disabled={boolean('disabled', false)}
			value={text('value', 'designsystem')}
			error-message={text('errorMessage', '')}
			helper-message={text('helperMessage', '')}
			min={text('min', null)}
			minlength={number('minlength', null)}
			max={text('max', null)}
			maxlength={number('maxlength', null)}
			readonly={boolean('readonly', false)}
		>
		</bds-input-password>
		<br />
		<bds-input-password
			label='Senha'
			danger={boolean('danger', false)}
			disabled={boolean('disabled', false)}
			value={text('value', 'designsystem')}
			error-message={text('errorMessage', '')}
			helper-message={text('helperMessage', '')}
			min={text('min', null)}
			minlength={number('minlength', null)}
			max={text('max', null)}
			maxlength={number('maxlength', null)}
			readonly={boolean('readonly', false)}
		>
		</bds-input-password>
	</div>
);

export const dangerInputPassword = () => (
	<div style={inputStyle}>
		<bds-input-password value="password" danger error-message="Oops"></bds-input-password>
		<br />
		<bds-input-password value="password" label="Password" danger error-message="Oops"></bds-input-password>
	</div>
);