import React from 'react';
import DocumentationTemplate from './loading-page.mdx';
import { BdsLoadingPage } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Loading page',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const loadingPage = {
  width: '100%',
  height: '100%'
};
export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '700px';
    el[0].style.height = '500px';
  }
  return <bds-loading-page style={loadingPage}></bds-loading-page>;
};

export const FrameworkReact = () => <BdsLoadingPage></BdsLoadingPage>;
