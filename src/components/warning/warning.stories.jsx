import React from 'react';
import readme from './readme.md';

export default {
  title: 'Warning',
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultWarning = () => (
  <bds-warning>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, laudantium dicta eveniet dolor dolorem incidunt
    facilis odio iste esse. Ab ullam modi iure reiciendis accusamus repudiandae ipsum quibusdam, sapiente nobis!
  </bds-warning>
);
