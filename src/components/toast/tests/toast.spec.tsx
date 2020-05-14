import { newSpecPage } from '@stencil/core/testing';
import { BdsToast } from '../toast';

describe('bds-toast', () => {
  const TOAST_REMOVED_TIMEOUT = 400;
  jest.useFakeTimers();

  const getToastWithoutShadowDom = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
      supportsShadowDom: false,
    });
  };

  const getToast = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  };

  const getToastCustomAction = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="custom" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  };

  const getToastIconActionType = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="true" action-type="icon" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  };

  const getEmptyToast = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast></bds-toast>`,
    });
  };

  it('should build', () => {
    expect(new BdsToast()).toBeTruthy();
  });

  it('should render the component and match the snapshot', async () => {
    const page = await getToast();
    expect(page).toMatchSnapshot();
    expect(page.root).toMatchSnapshot();
  });

  it('should render the component in the shadow dom', async () => {
    const page = await getToast();
    expect(page.root.shadowRoot.querySelector('.toast')).toBeTruthy();
    expect(page.root.querySelector('.toast')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    const page = await getToastWithoutShadowDom();
    expect(page.root.querySelector('.toast')).toBeTruthy();
    expect(page.root.shadowRoot).toBeFalsy();
  });

  it('should execute a custom action on button click', async () => {
    const page = await getToastCustomAction();
    const toast = page.body.querySelector('bds-toast');
    const _callback = jest.fn();
    page.doc.addEventListener('toastButtonClick', _callback);

    await page.waitForChanges();

    toast.shadowRoot.querySelector('button').click();

    await page.waitForChanges();

    expect(_callback).toHaveBeenCalled();
  });

  it('should close the toast clicking in the icon', async () => {
    jest.clearAllTimers();
    const page = await getToastIconActionType();
    const toast = page.body.querySelector('bds-toast');

    toast.shadowRoot.querySelector('button').click();

    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.toast').classList.contains('show')).toBe(false);
    expect(page.root.shadowRoot.querySelector('.toast').classList.contains('hide')).toBe(true);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), TOAST_REMOVED_TIMEOUT);

    setTimeout(() => {
      expect(page.body.querySelector('bds-toast')).toBeFalsy();
    }, TOAST_REMOVED_TIMEOUT);
    jest.runAllTimers();
  });

  it('should create a new toast', async () => {
    const page = await getEmptyToast();

    const toastContainer = page.doc.createElement('bds-toast-container');
    page.body.appendChild(toastContainer);

    const toastElement = page.body.querySelector('bds-toast');
    page.body.querySelector('bds-toast-container').appendChild(toastElement);

    await page.root.create({
      toastElement,
      actionType: 'button',
      buttonAction: 'close',
      buttonText: 'cancel',
      icon: 'trash',
      toastText: 'lorem ipsum is very cool',
      toastTitle: 'Best title ever',
      variant: 'warning',
      duration: 0,
    });

    await page.waitForChanges();

    let newToast = page.root.shadowRoot.querySelector('.toast--warning');
    expect(newToast).toBeTruthy();
    newToast = page.root.shadowRoot.querySelector('.toast--action--button');
    expect(newToast).toBeTruthy();
  });

  it('should be able to set all the props', async () => {
    const toast = await getEmptyToast();

    toast.root.buttonAction = 'close';
    toast.root.actionType = 'button';
    toast.root.buttonText = 'Close';
    toast.root.icon = 'info';
    toast.root.toastText = 'Lorem ipsum';
    toast.root.toastTitle = 'Toast';
    toast.root.variant = 'error';
    toast.root.duration = 5;

    await toast.waitForChanges();

    expect(toast.root).toMatchSnapshot();
  });
});
