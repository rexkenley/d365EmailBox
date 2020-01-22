import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.css";

import sample from "./sample.json";
import Editor from "../src/jsx/editor";

storiesOf("Editor", module)
  .add("Initial State", () => <Editor />)
  .add("with props isTemplate", () => <Editor isTemplate={true} />)
  .add("with props isTemplate, content and action", () => (
    <Editor
      isTemplate={true}
      content={sample}
      onTemplateSave={action("onTemplateSave")}
    />
  ));
