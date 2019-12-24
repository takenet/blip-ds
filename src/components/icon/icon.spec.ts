// import { newSpecPage } from "@stencil/core/testing";

import { Icon } from './icon';
import { getSvgPath } from './utils';

describe('bds-icon', () => {
  const icon = new Icon();

  it('builds', () => {
    expect(icon).toBeTruthy();
  });

  it('should render with default theme', () => {
    expect(icon.theme).toBe('outline');
  });

  it('should render with default sizes', () => {
    expect(icon.width).toBe('32');
    expect(icon.height).toBe('32');
  });

  // describe('Alter props after render', () => {

  //   it('should alter svg value after render', async () => {
  //     const page = await newSpecPage({
  //       components: [Icon],
  //       html: `<bds-icon name="user"></bds-icon>`
  //     });

  //     expect(page.root.('svg')).toBe('aa');
  //   });
  // });

  describe('Utils', () => {
    const mockPath = '/svg/outline/user.svg';

    describe('Method: getSvgPath', () => {
      const name = 'user';
      const theme = 'outline';

      it('should return correct path', () => {
        const path = getSvgPath(name, theme);
        expect(path).toBe(mockPath);
      })

      it('should return empty without name parameter', () => {
        const path = getSvgPath('', theme);
        expect(path).toBe('');
      });

      it('should return empty without theme parameter', () => {
        const path = getSvgPath(name, '');
        expect(path).toBe('');
      });

    });

  });
});



