import { configureStore, createSlice } from "@reduxjs/toolkit";
//import { getMultipleData } from "./d365ce";

/**
 * @module store
 */

/**
 * A function that would return a new rtk store tied to an Xrm or PowerApps context
 *
 * @param {string} name - store name
 * @param {{}} context - context or Xrm
 * @returns {{}} rtk store
 */
export function Store(name, context) {
  if (!name || !context) return null;

  const _context = context,
    slice = createSlice({
      name,
      initialState: {
        meta: null,
        entity: "",
        template: null,
        templates: null,
        attribute: "",
        regardingObjectId: null
      },
      reducers: {
        setMeta(state, { payload }) {
          state.meta = payload;
        },
        setEntity(state, { payload }) {
          state.entity = payload;
        },
        setTemplate(state, { payload }) {
          state.template = payload;
        },
        setTemplates(state, { payload }) {
          state.templates = payload;
        },
        setAttribute(state, { payload }) {
          state.attribute = payload;
        },
        setRegardingObjectId(state, { payload }) {
          state.regardingObjectId = payload;
        }
      }
    }),
    store = configureStore({ reducer: slice.reducer });

  console.log(JSON.stringify(store));

  return { store, actions: slice.actions };
}

/*
const editorSlice = createSlice({
    name: "editor",
    initialState: {
      meta: null,
      entity: "",
      template: null,
      templates: null,
      attribute: "",
      regardingObjectId: null
    },
    reducers: {
      setMeta(state, { payload }) {
        return { ...state, meta: payload };
      },
      setEntity(state, { payload }) {
        return { ...state, entity: payload };
      },
      setTemplate(state, { payload }) {
        return { ...state, template: payload };
      },
      setTemplates(state, { payload }) {
        return { ...state, templates: payload };
      },
      setAttribute(state, { payload }) {
        return { ...state, attribute: payload };
      },
      setRegardingObjectId(state, { payload }) {
        return {
          ...state,
          regardingObjectId: payload
        };
      }
    }
  }),
  store = configureStore({ reducer: editorSlice.reducer });

export default store;
export const {
  setMeta,
  setEntity,
  setTemplate,
  setTemplates,
  setAttribute,
  setRegardingObjectId
} = editorSlice.actions;
*/

/**
 * @typedef Template
 * @property {string} id
 * @property {string} subject
 * @property {string} notetext
 */

/**
 * Gets all of the Templates from Annotations
 */

/*
export function getTemplates() {
  return async dispatch => {
    const templates = await getMultipleData(
      "annotation",
      "$select=annotationid,subject,notetext&$filter=startswith(subject,'d365EmailTemplate')&$orderby=subject"
    );

    dispatch(setTemplates(templates));
  };
}
*/
