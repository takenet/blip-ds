import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import readme from "./readme.md";

export default {
  title: "Warning",
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme }
  }
};

export const defaultWarning = () => (
  <bds-warning>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, laudantium dicta eveniet dolor dolorem incidunt facilis odio iste esse. Ab ullam modi iure reiciendis accusamus repudiandae ipsum quibusdam, sapiente nobis!</bds-warning>
);
