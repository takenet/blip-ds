import React from 'react';
import DocumentationTemplate from './pagination.mdx';
import { BdsPagination } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Pagination',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '280px';
  }
  return (
    <bds-pagination pages={args.pages} started-Page={args.startedPage}></bds-pagination>
  );
};

Properties.args = {
  pages: 10,
  startedPage: 1,
};

Properties.argTypes = {
  pages: {
    table: {
      defaultValue: { summary: '10' },
    },
    control: 'number',
  },
  startedPage: {
    table: {
      defaultValue: { summary: '1' },
    },
    control: 'number',
  },
}

export const FrameworkReact = () => {
    return (
      <BdsPagination started-page="20" pages="30"></BdsPagination>
    );
  };

