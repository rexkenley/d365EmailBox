import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TinyEditor from "../src/jsx/tinyMCE";

storiesOf("TinyEditor", module)
  .add("Initial State", () => {
    return <TinyEditor />;
  })
  .add("with onTemplatesAction", () => {
    return (
      <TinyEditor
        onTemplatesAction={() => {
          alert("Template Clicked.");
        }}
      />
    );
  });
