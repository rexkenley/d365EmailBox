import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { Modal, initializeComponentRef } from "office-ui-fabric-react";

/*
import { setTemplate } from "../js/store";
import getCBItems from "../js/editorCommandBar";
*/

import UnlayerEditor from "./unlayer";
import TinyEditor from "./tinyMCE";

/**
 * @module editor
 */

const editor = React.createRef(),
  Editor = props => {
    const {
      content,
      isControlDisabled,
      onContentChange,
      isTemplate,
      onTemplateSave
    } = props;

    return (
      <Fabric>
        {(isTemplate && (
          <UnlayerEditor
            ref={editor}
            design={content}
            onSave={onTemplateSave}
          />
        )) || (
          <TinyEditor
            ref={editor}
            initialValue={content}
            disabled={isControlDisabled}
            onEditorChange={onContentChange}
            onTemplatesAction={() => {
              setTemplateOpen(true);
            }}
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
