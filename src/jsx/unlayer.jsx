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
  getMergeTags = meta => {
    //https://docs.unlayer.com/docs/merge-tags
    //{ name: { name: "Name", value: "{{name}}" } }
    if (!meta) return {};

    let mergeTags = {};

    meta.attributes.forEach(a => {
      mergeTags[a.logicalName] = {
        name: a.displayName,
        value: `{{${a.logicalName}}}`
      };
    });

    return mergeTags;
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
            if (!ref.current) return;

            meta && ref.current.setMergeTags(getMergeTags(meta));
            ref.current.loadDesign(design || newDesign);
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
