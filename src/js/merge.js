import nunjucks from "nunjucks";

/**
 * @module merge
 */

/**
 * Merge the source with the data and returns an html string
 * @function merge
 * @param {string} source
 * @param {Object} data
 * @return {string}
 */
export default function merge(source, data) {
  if (!source || !data) return "";

  const template = nunjucks.compile(source);

  return template.render(data);
}
