'use strict';

System.register(['./core', './sandbox'], function (_export, _context) {
  var core, sandbox;
  return {
    setters: [function (_core) {
      core = _core.default;
    }, function (_sandbox) {
      sandbox = _sandbox.default;
    }],
    execute: function () {

      core.baseDir = './script';
      core.sbx = sandbox(core);

      // Register plugins
      core.use('/view');

      // Register components
      core.register('/components/mac-filter');

      // Start the app
      core.start().then(function () {
        core.log('App Started!!');
      });
    }
  };
});