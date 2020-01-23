import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { initializeIcons } from "@uifabric/icons";

/*
import { setTemplate } from "../js/store";
import getCBItems from "../js/editorCommandBar";
*/

import UnlayerEditor from "./unlayer";
import TinyEditor from "./tinyMCE";

/**
 * @module editor
 */

initializeIcons();

const editor = React.createRef(),
  Editor = props => {
    const {
      content,
      isDisabled,
      onContentChange,
      isTemplate,
      templates
    } = props;

    return (
      <Fabric>
        {(isTemplate && (
          <UnlayerEditor
            ref={editor}
            design={content}
            meta={null}
            onTemplateChange={onContentChange}
          />
        )) || (
          <TinyEditor
            ref={editor}
            initialValue={content}
            disabled={isDisabled}
            templates={templates}
            onEditorChange={onContentChange}
          />
        )}
      </Fabric>
    );
  };

/*

  Editor = () => {
    const [templateName, setTemplateName] = useState(""),
      dispatch = useDispatch(),
      meta = useSelector(state => state.meta),
      entity = useSelector(state => state.entity),
      template = useSelector(state => state.template),
      templates = useSelector(state => state.templates),
      attribute = useSelector(state => state.attribute),
      regardingObjectId = useSelector(state => state.regardingObjectId),
      dismiss = () => {
        dispatch(setTemplate({}));
        setTemplateName("");
      };

    return (
      <Fabric>
        <CommandBar
          items={getCBItems(
            tinyEditor,
            meta,
            templates,
            entity,
            template,
            attribute,
            regardingObjectId
          )}
        />
        <TinyEditor ref={tinyEditor} disabled={!template} />
        <Dialog
          hidden={!entity || !template || template.subject}
          dialogContentProps={{
            type: DialogType.normal,
            title: "New Template"
          }}
          onDismiss={dismiss}
        >
          <TextField
            placeholder="Please enter template name"
            onChange={(ev, value) => {
              setTemplateName(value);
            }}
          />
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                dispatch(
                  setTemplate({
                    id: "",
                    subject: `d365EmailTemplate:${entity}:${templateName}`,
                    notetext: ""
                  })
                );

                setTemplateName("");
              }}
              text="Ok"
            />
            <DefaultButton onClick={dismiss} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </Fabric>
    );
  };
*/

export default Editor;
