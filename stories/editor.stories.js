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
  .add("with props templates", () => {
    const templates = [
      {
        text: "TemplateText",
        onAction: action("onAction")
      }
    ];
    return <Editor templates={templates} />;
  })
  .add("with props onContentChange", () => (
    <Editor onContentChange={action("onContentChange")} />
  ))
  .add("with props isTemplate", () => <Editor isTemplate={true} />)
  .add("with props isTemplate, content, meta and onContentChange", () => {
    const meta = {
      test: {
        id: "entityId",
        displayName: "TestEntity",
        entitySetName: "TestEntities",
        attributes: [
          {
            id: "attributeId",
            displayName: "TestAttribute",
            logicalName: "TestLogical"
          }
        ]
      }
    };

    return (
      <Editor
        isTemplate={true}
        content={sample}
        meta={meta}
        onContentChange={action("onContentChange")}
      />
    );
  });
