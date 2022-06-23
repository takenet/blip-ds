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

const container = {
  marginTop: '2px',
  maxWidth: '480px',
  margin: '0 auto',
};

const inner = {
  position: 'relative',
  padding: '16px',
  marginBottom: '24px',
};

const btAction = {
  position: 'absolute',
  top: '24px',
  right: '100%',
  padding: '16px',
  marginBottom: '8px',
};

const btmargin = {
  display: 'block',
  marginBottom: '8px',
};

export const ToggleAccordion = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <div style={container}>
      <bds-paper style={inner} elevation="primary">
        <div style={btAction}>
          <bds-button onClick={() => btToggle('accsingle')} variant="primary" size="short">
            Toggle
          </bds-button>
        </div>
        <bds-accordion id="accsingle">
          <bds-accordion-header
            accordion-title="Title accordion"
            icon="tag"
            avatar-name="Lucas Murta"
          ></bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
              scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
              est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
              egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
            </bds-typo>
          </bds-accordion-body>
        </bds-accordion>
      </bds-paper>
    </div>
  );
};

export const ToggleGroupAccordion = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <div style={container}>
      <bds-paper style={inner} elevation="primary">
        <div style={btAction}>
          <bds-button style={btmargin} onClick={() => btToggle('acc1')} variant="primary" size="short">
            1
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc2')} variant="primary" size="short">
            2
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc3')} variant="primary" size="short">
            3
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc4')} variant="primary" size="short">
            4
          </bds-button>
        </div>
        <bds-accordion-group>
          <bds-accordion id="acc1">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon=""
              avatar-name=""
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc2">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name=""
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc3">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name="Lucas Murta"
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc4">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name="Lucas Murta"
              avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>
      </bds-paper>
    </div>
  );
};
