import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Editor from "../src/jsx/editor";

storiesOf("Editor", module).add("Initial State", () => {
  <Editor />;
});
