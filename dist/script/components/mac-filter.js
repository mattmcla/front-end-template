'use strict';

System.register([], function (_export, _context) {
  _export('default', function (sbx) {
    var target = sbx.select('#mac-filter');
    if (target) {
      sbx.replace(target, sbx.renderPartial('mac-filter'));
    }
  });

  return {
    setters: [],
    execute: function () {}
  };
});