'use strict';

System.register(['./templates'], function (_export, _context) {
  var templates, render, partial;

  _export('default', function (core) {
    core.sbx.render = render;
    core.sbx.renderPartial = partial;
  });

  return {
    setters: [function (_templates) {
      templates = _templates.default;
    }],
    execute: function () {
      render = function render(template) {
        var locals = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var inject = arguments.length <= 2 || arguments[2] === undefined ? 'body' : arguments[2];

        if (!templates.hasOwnProperty(template)) {
          throw new Error('Template does not exist: ' + template);
        }

        var view = templates[template](locals);
        document.querySelector(inject).innerHTML = view;
      };

      partial = function partial(template) {
        var locals = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        if (!templates.hasOwnProperty(template)) {
          throw new Error('Template does not exist: ' + template);
        }

        var viewStr = templates[template](locals);
        var div = document.createElement('div');
        div.innerHTML = viewStr;

        if (div.childNodes && div.childNodes.length > 1) {
          return div.childNodes;
        } else {
          return div.firstChild;
        }
      };
    }
  };
});