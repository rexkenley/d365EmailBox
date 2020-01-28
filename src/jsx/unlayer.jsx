import React, { forwardRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption
} from "office-ui-fabric-react/lib/Dropdown";

/**
 * @module unlayer
 */

const newDesign = { body: { rows: [] } },
  getMergeTags = (meta, entity) => {
    //https://docs.unlayer.com/docs/merge-tags
    //{ name: { name: "Name", value: "{{name}}" } }
    if (!meta) return {};

    const entityMeta = Object.keys(meta).find(m => {
      m === entity;
    });
    if (!entityMeta) return {};

    let mergeTags = {};

    entityMeta.attributes.forEach(a => {
      mergeTags[a.logicalName] = {
        name: a.displayName,
        value: `{{${a.logicalName}}}`
      };
    });

    return mergeTags;
  },
  UnlayerEditor = forwardRef((props, ref) => {
    const { design, meta, onTemplateChange } = props,
      [createNewTemplate, setCreateNewTemplate] = useState(false),
      getCBItems = (ref, onTemplateChange) => {
        const items = [
          {
            key: "new",
            text: "New",
            iconProps: { iconName: "WebTemplate" },
            onClick: () => {
              setCreateNewTemplate(true);
            }
          },
          {
            key: "clear",
            text: "Clear",
            onClick: () => {
              ref.current &&
                ref.current.exportHtml(data => {
                  ref.current && ref.current.loadDesign(newDesign);
                });
            }
          },
          {
            key: "save",
            text: "Save",
            onClick: () => {
              ref.current &&
                ref.current.exportHtml(data => {
                  const { design, html } = data;
                  onTemplateChange && onTemplateChange({ design, html });
                });
            }
          }
        ];

        return items;
      };

    return (
      <Fabric>
        <CommandBar items={getCBItems(ref, meta, onTemplateChange)} />
        <EmailEditor
          ref={ref}
          options={{}}
          tools={{}}
          onLoad={() => {
            if (!ref.current) return;

            meta && ref.current.setMergeTags(getMergeTags(meta, "TODO"));
            ref.current.loadDesign(design || newDesign);
          }}
          onDesignLoad={data => {}}
        />
        <Dialog
          hidden={!createNewTemplate}
          onDismiss={() => {
            setCreateNewTemplate(false);
          }}
          dialogContentProps={{
            type: DialogType.normal,
            title: "Create New Template",
            closeButtonAriaLabel: "Close"
          }}
          modalProps={{
            isBlocking: true
          }}
        >
          <Dropdown
            label="Entity"
            selectedKey={undefined}
            onChange={() => {}}
            placeholder="Please select and Entity"
            options={[
              {
                key: "fruitsHeader",
                text: "Fruits"
              }
            ]}
          />
          <TextField label="Template Name" />
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                setCreateNewTemplate(false);
                ref.current && ref.current.loadDesign(newDesign);
              }}
              text="Create"
            />
            <DefaultButton
              onClick={() => {
                setCreateNewTemplate(false);
              }}
              text="Cancel"
            />
          </DialogFooter>
        </Dialog>
      </Fabric>
    );
  });

/**
 * @exports tinyMCE/UnlayerEditor
 */
export default UnlayerEditor;
