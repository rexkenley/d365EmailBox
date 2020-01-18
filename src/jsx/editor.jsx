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
import { Modal } from "office-ui-fabric-react";

/*
import { setTemplate } from "../js/store";
import getCBItems from "../js/editorCommandBar";
*/

import TinyEditor from "./tinyMCE";

/**
 * @module editor
 */

const emailEditor = React.createRef(),
  templateEditor = React.createRef(),
  EmailEditor = props => {
    const { description, isControlDisabled, onDescriptionChange } = props,
      [templateOpen, setTemplateOpen] = useState(false);

    return (
      <Fabric>
        <TinyEditor
          ref={emailEditor}
          initialValue={description}
          disabled={isControlDisabled}
          onEditorChange={onDescriptionChange}
          onTemplatesAction={() => {
            setTemplateOpen(true);
          }}
        />
        <Modal
          isOpen={templateOpen}
          onDismiss={() => {
            setTemplateOpen(false);
          }}
          isBlocking={false}
        >
          <TinyEditor ref={templateEditor} />
        </Modal>
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

export default EmailEditor;
