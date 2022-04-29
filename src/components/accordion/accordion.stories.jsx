import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Accordion',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

export const accordionDefault = () => {
  return (
  <div style={content}>
    <bds-accordion-group collapse='default'>
      <bds-accordion-header accordion-title="Title accordion" icon="" avatar-name="" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="Lucas Murta" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
        >
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>
    </bds-accordion-group>
  </div>
  );
};

export const accordionMultiple = () => {
  return (
  <div style={content}>
    <bds-accordion-group collapse='multiple'>
      <bds-accordion-header accordion-title="Title accordion" icon="" avatar-name="" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="Lucas Murta" avatar-thumb="">
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>

      <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
        >
      </bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
        </bds-typo>
      </bds-accordion-body>
    </bds-accordion-group>
  </div>
  );
};

export const accordionHeader = () => {
  return (
    <bds-accordion-header
      accordion-title={text('Accordion Title', 'Title accordion')}
      icon={text('Icon', 'tag')}
      avatar-name={text('Avatar Name', 'Lucas Murta')}
      avatar-thumb={text('Avatar Thumb', '')}
    ></bds-accordion-header>
  );
}