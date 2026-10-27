import { UaiFormControl } from '../uai-form-control';

const fakeInternals = () => {
  const internals = {
    form: null,
    validity: { valid: true },
    validationMessage: '',
    setFormValue: jest.fn(),
    setValidity: jest.fn((flags: ValidityStateFlags, message = '') => {
      internals.validity = { valid: !Object.values(flags).some(Boolean) };
      internals.validationMessage = message;
    }),
    checkValidity: jest.fn(() => internals.validity.valid),
    reportValidity: jest.fn(() => internals.validity.valid),
  };
  return internals;
};

const setup = (initial = 'a') => {
  const internals = fakeInternals();
  const onReset = jest.fn();
  const onDisabledChange = jest.fn();
  const control = new UaiFormControl({
    internals: internals as unknown as ElementInternals,
    defaultValue: () => initial,
    onReset,
    onDisabledChange,
  });
  return { control, internals, onReset, onDisabledChange };
};

describe('UaiFormControl', () => {
  it('submits the default value from the start', () => {
    const { control, internals } = setup('initial');
    expect(control.value).toBe('initial');
    expect(internals.setFormValue).toHaveBeenCalledWith('initial', 'initial');
  });

  it('updates the submitted value', () => {
    const { control, internals } = setup();
    control.setValue('b');
    expect(control.value).toBe('b');
    expect(internals.setFormValue).toHaveBeenLastCalledWith('b', 'b');
  });

  it('restores the default value on reset and notifies the component', () => {
    const { control, onReset } = setup('initial');
    control.setValue('changed');
    control.reset();
    expect(control.value).toBe('initial');
    expect(onReset).toHaveBeenCalledWith('initial');
  });

  it('reports valueMissing only while required and empty', () => {
    const { control, internals } = setup('');
    control.validateRequired(true, 'Preencha este campo.');
    expect(internals.setValidity).toHaveBeenLastCalledWith({ valueMissing: true }, 'Preencha este campo.', undefined);
    expect(control.checkValidity()).toBe(false);
    expect(control.validationMessage).toBe('Preencha este campo.');

    control.setValue('filled');
    control.validateRequired(true, 'Preencha este campo.');
    expect(internals.setValidity).toHaveBeenLastCalledWith({});
    expect(control.checkValidity()).toBe(true);

    control.setValue(null);
    control.validateRequired(false, 'Preencha este campo.');
    expect(control.checkValidity()).toBe(true);
  });

  it('follows the disabled state of an ancestor fieldset', () => {
    const { control, onDisabledChange } = setup();
    control.setDisabled(true);
    expect(control.disabled).toBe(true);
    expect(onDisabledChange).toHaveBeenCalledWith(true);
    control.setDisabled(false);
    expect(control.disabled).toBe(false);
  });
});
