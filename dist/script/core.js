'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      _export('default', {
        plugins: [],
        components: [],
        debug: true,
        baseDir: '',
        sbx: {},
        events: new Map(),

        log: function log(message) {
          if (this.debug) {
            console.log('CORE: ' + message);
          }
        },
        register: function register(module) {
          this.log('Core Registered Component: ' + module);
          this.components.push(System.import(this.baseDir + module));

          return this;
        },
        use: function use(plugin) {
          var _this = this;

          var promise = System.import(this.baseDir + plugin).then(function (p) {
            return p.default(_this);
          }).catch(function (err) {
            _this.log('CORE ERROR: ' + err);
          });

          this.plugins.push(promise);
          return promise;
        },
        listen: function listen(event, cb) {
          this.log('Listen: ' + event);

          var eventParts = event.split('::');
          var branch = this.events;
          var part = undefined,
              next = undefined;

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = eventParts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              part = _step.value;

              next = branch.get(part);

              if (!next) {
                next = [new Map(), []];
                branch.set(part, next);
              }

              branch = next[0];
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          next[1].push(cb);
        },
        dispatch: function dispatch(event) {
          var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

          this.log('Dispatch: ' + event);
          if (data) {
            this.log('Dispatch Data: ' + data.toString());
          }

          var parts = event.split('::');
          var branch = this.events;
          var x = undefined,
              part = undefined,
              next = undefined;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              part = _step2.value;

              next = branch.get(part);

              if (next) {
                if (next[1].length) {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = next[1][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      x = _step3.value;

                      x(data);
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                }
                branch = next[0];
              } else {
                break;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        },
        start: function start() {
          var _this2 = this;

          this.sbx.log = this.sbx.log || this.log;

          return Promise.all(this.plugins).then(function () {
            return Promise.all(_this2.components);
          }).then(function (components) {
            components.forEach(function (component) {
              component.default(_this2.sbx);
            });

            _this2.dispatch('core::app::start');
            _this2.dispatch('sandbox::app::start');
          }).catch(function (err) {
            _this2.log('CORE ERROR: ' + err);
          });
        }
      });
    }
  };
});