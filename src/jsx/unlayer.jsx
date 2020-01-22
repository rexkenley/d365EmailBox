import React, { forwardRef } from "react";
import EmailEditor from "react-email-editor";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";

/**
 * @module unlayer
 */

const UnlayerEditor = forwardRef((props, ref) => {
  const { design, onSave } = props,
    newDesign = { body: { rows: [] } },
    cbItems = [
      {
        key: "newTemplate",
        text: "New Template",
        iconProps: { iconName: "WebTemplate" },
        onClick: () => {
          ref.current && ref.current.loadDesign(newDesign);
        }
      },
      {
        key: "entity",
        text: "Entity",
        canCheck: true,
        checked: true,
        iconProps: { iconName: "QuickNote" },
        onClick: () => {}
      },
      {
        key: "save",
        text: "Save",
        onClick: () => {
          ref.current &&
            ref.current.exportHtml(data => {
              const { design, html } = data;
              onSave && onSave({ design, html });
            });
        }
      }
    ];

  return (
    <Fabric>
      <CommandBar items={cbItems} />
      <EmailEditor
        ref={ref}
        options={{}}
        tools={{}}
        onLoad={() => {
          design && ref.current && ref.current.loadDesign(design);
        }}
        onDesignLoad={data => {}}
      />
    </Fabric>
  );
});

/**
 * @exports tinyMCE/UnlayerEditor
 */
export default UnlayerEditor;
