import React, { forwardRef } from "react";
import EmailEditor from "react-email-editor";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";

/**
 * @module unlayer
 */

const newDesign = { body: { rows: [] } },
  getCBItems = (ref, meta, onTemplateChange) => {
    const items = [
      {
        key: "new",
        text: "New",
        iconProps: { iconName: "WebTemplate" },
        onClick: () => {
          ref.current && ref.current.loadDesign(newDesign);
        }
      }
    ];

    items.push({
      key: "save",
      text: "Save",
      onClick: () => {
        ref.current &&
          ref.current.exportHtml(data => {
            const { design, html } = data;
            onTemplateChange && onTemplateChange({ design, html });
          });
      }
    });

    return items;
  },
  getMergeTags = () => {
    //https://docs.unlayer.com/docs/merge-tags
    return { name: { name: "Name", value: "{{name}}" } };
  },
  UnlayerEditor = forwardRef((props, ref) => {
    const { design, meta, onTemplateChange } = props;

    return (
      <Fabric>
        <CommandBar items={getCBItems(ref, meta, onTemplateChange)} />
        <EmailEditor
          ref={ref}
          options={{}}
          tools={{}}
          onLoad={() => {
            const { current } = ref;

            if (!current) return;

            meta && current.setMergeTags(getMergeTags(meta));
            current.loadDesign(design || newDesign);
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
