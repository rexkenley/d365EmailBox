import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.css";

import TinyEditor from "../src/jsx/tinyMCE";

storiesOf("TinyEditor", module).add("Initial State", () => <TinyEditor />);
