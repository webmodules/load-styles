
/**
 * Module exports.
 */

module.exports = loadStyles;

/**
 * Injects the CSS into the <head> DOM node.
 *
 * @param {String} css CSS string to add to the <style> tag.
 * @param {Document} doc document instance to use.
 */

function loadStyles(css, doc) {
  // default to the global `document` object
  if (!doc) doc = document;

  var head = doc.head || doc.getElementsByTagName('head')[0];
  if (!head) throw new Error('could not find <head> DOM node');

  var style = doc.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {  // IE
    style.styleSheet.cssText = css;
  } else {                 // the world
    style.appendChild(doc.createTextNode(css));
  }
  head.appendChild(style);

  return style;
}
