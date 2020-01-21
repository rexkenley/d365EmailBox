import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.css";

import Editor from "../src/jsx/editor";

storiesOf("Editor", module)
  .add("Initial State", () => <Editor />)
  .add("with props isTemplate", () => <Editor isTemplate={true} />);
