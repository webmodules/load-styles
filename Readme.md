load-styles
===========
### Add a CSS `<style>` tag to the document's `<head>` node.

Adds the specified CSS string to the DOM.

Note: Don't use this if you're supporting IE9 and intend to insert [a lot of styles](http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx).

Installation
------------

``` bash
$ npm install load-styles
```


API
---

### loadStyles(String cssStr[, Document doc]) → `<style>`

Creates a `<style>` DOM node with the specified `cssStr` text injected into it.
Then, the `<style>` node is inserted into the `<head>` element of the `doc`
document instance. Finally, the DOM node is returned back to the user in case
any further action is required on the node.


Example
-------

``` html
<div id="foo">This div should be red.</div>
```

``` js
var loadStyles = require('load-styles');
loadStyles(
  '#foo {' +
  '  width: 100px;' +
  '  height: 100px;' +
  '  background-color: red;' +
  '  text-align: center;' +
  '  font-size: 9px;' +
  '}'
);
```


License
-------

MIT
