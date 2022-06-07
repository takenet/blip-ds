import React from 'react';
import readme from './readme.md';

export default {
  title: 'Accordion',
  parameters: {
    notes: { markdown: readme },
  },
};

const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.';

const accTemplate = (args) => {
  return (
    <bds-accordion>
      <bds-accordion-header
        accordion-title={args.title}
        icon={args.icon}
        avatar-name={args.avatarName}
        avatar-thumb={args.avatarThumb}
      ></bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">{args.content}</bds-typo>
      </bds-accordion-body>
    </bds-accordion>
  );
};

const groupTemplate = (args) => {
  return (
    <bds-accordion-group collapse={args.collapse}>
      <bds-accordion>
        <bds-accordion-header
          accordion-title={args.title}
          icon={args.icon}
          avatar-name={args.avatarName}
          avatar-thumb={args.avatarThumb}
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{args.content}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name=""
          avatar-thumb=""
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb=""
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
    </bds-accordion-group>
  );
};

export const Accordion = accTemplate.bind({});
Accordion.args = { title: 'Title accordion', icon: '', avatarName: '', avatarThumb: '', content: paragraph };

export const AccordionSingle = groupTemplate.bind({});
AccordionSingle.args = {
  collapse: 'single',
  title: 'Title accordion',
  icon: '',
  avatarName: '',
  avatarThumb: '',
  content: paragraph,
};

export const AccordionMultiple = groupTemplate.bind({});
AccordionMultiple.args = {
  collapse: 'multiple',
  title: 'Title accordion',
  icon: '',
  avatarName: '',
  avatarThumb: '',
  content: paragraph,
};
