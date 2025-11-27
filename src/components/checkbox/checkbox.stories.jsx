import React, {useEffect} from 'react';
import DocumentationTemplate from './checkbox.mdx';
import { BdsCheckbox } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};

export const Properties = (args) => (
    <bds-checkbox label={args.label} name={args.name} disabled={args.disabled} checked={args.checked} indeterminate={args.indeterminate}></bds-checkbox>
);


Properties.argTypes = {
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  checked: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  indeterminate: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'When true, displays the checkbox in an indeterminate state (partial selection). Clicking will transition to checked state.',
    control: 'boolean',
  },
};

Properties.args = {
  label: 'Opção do checkbox',
  name: 'check',
  disabled: false,
  checked: true,
  indeterminate: false
};

export const AllStates = () => {
  return (
    <bds-grid direction="column" gap="2">
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Unchecked (Enabled)</bds-typo>
        <bds-checkbox label="Unchecked checkbox" name="unchecked"></bds-checkbox>
      </bds-grid>
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Checked (Enabled)</bds-typo>
        <bds-checkbox label="Checked checkbox" name="checked" checked></bds-checkbox>
      </bds-grid>
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Indeterminate (Enabled)</bds-typo>
        <bds-checkbox label="Indeterminate checkbox" name="indeterminate" indeterminate></bds-checkbox>
      </bds-grid>
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Unchecked (Disabled)</bds-typo>
        <bds-checkbox label="Unchecked disabled checkbox" name="unchecked-disabled" disabled></bds-checkbox>
      </bds-grid>
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Checked (Disabled)</bds-typo>
        <bds-checkbox label="Checked disabled checkbox" name="checked-disabled" checked disabled></bds-checkbox>
      </bds-grid>
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-14" bold="bold">Indeterminate (Disabled)</bds-typo>
        <bds-checkbox label="Indeterminate disabled checkbox" name="indeterminate-disabled" indeterminate disabled></bds-checkbox>
      </bds-grid>
    </bds-grid>
  )
}

AllStates.parameters = {
  docs: {
    description: {
      story: 'Displays all possible states of the checkbox component: unchecked, checked, and indeterminate in both enabled and disabled variants.'
    }
  }
};

export const IndeterminateExample = () => {
  useEffect(() => {
    const parentCheckbox = document.getElementById('parent-checkbox');
    const childCheckboxes = [
      document.getElementById('child1'),
      document.getElementById('child2'),
      document.getElementById('child3')
    ];

    const updateParentState = () => {
      const checkedCount = childCheckboxes.filter(cb => cb.checked).length;
      
      if (checkedCount === 0) {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = false;
      } else if (checkedCount === childCheckboxes.length) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
      } else {
        parentCheckbox.indeterminate = true;
      }
    };

    parentCheckbox.addEventListener('bdsChange', (e) => {
      // When parent is clicked (from indeterminate), it becomes checked
      // and all children should be checked
      const isChecked = e.detail.checked;
      childCheckboxes.forEach(cb => {
        cb.checked = isChecked;
      });
      console.log('Parent changed:', e.detail);
    });

    childCheckboxes.forEach(cb => {
      cb.addEventListener('bdsChange', () => {
        updateParentState();
      });
    });
  });

  return (
    <bds-grid direction="column" gap="1">
      <bds-checkbox id="parent-checkbox" label="Select all items" name="parent" indeterminate></bds-checkbox>
      <bds-grid direction="column" gap="1" margin="l-3">
        <bds-checkbox id="child1" label="Item 1" name="child1" checked></bds-checkbox>
        <bds-checkbox id="child2" label="Item 2" name="child2"></bds-checkbox>
        <bds-checkbox id="child3" label="Item 3" name="child3" checked></bds-checkbox>
      </bds-grid>
    </bds-grid>
  )
}

IndeterminateExample.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the indeterminate state usage with a parent-child checkbox relationship. When some (but not all) children are selected, the parent shows the indeterminate state. Clicking the parent when indeterminate will select all children.'
    }
  }
};

export const Events = () => {
  useEffect(() => {
    const checkbox = document.getElementById('check1');
    checkbox.addEventListener('bdsChange', (e) => {
      console.log('Checked: ', e.detail.checked, 'Indeterminate:', e.detail.indeterminate);
    });
  });
  return (
    <bds-checkbox id="check1" label="Selected" checked></bds-checkbox>
  )
}

export const FrameworkReact = () => {
  return (
    <BdsCheckbox id="check1" label="Selected" checked></BdsCheckbox>
  )
}