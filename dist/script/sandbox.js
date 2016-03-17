'use strict';

System.register([], function (_export, _context) {
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('default', function (core) {
        return {
          select: function select(query) {
            return document.querySelector(query);
          },
          addClass: function addClass(el, className) {
            if (el.classList) el.classList.add(className);else if (!this.hasClass(el, className)) el.className += ' ' + className;
          },
          hasClass: function hasClass(el, className) {
            if (el.classList) return el.classList.contains(className);else !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
          },
          removeClass: function removeClass(el, className) {
            if (el.classList) el.classList.remove(className);else if (this.hasClass(el, className)) {
              var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
              el.className = el.className.replace(reg, '');
            }
          },
          on: function on(event, selector) {
            var el = document.querySelector(selector);
            return new Promise(function (resolve) {
              el.addEventListener(event, function (e) {
                resolve(e);
              });
            });
          },
          replace: function replace(target, newEls) {
            if (!newEls.length) newEls = [newEls];else newEls = [].concat(_toConsumableArray(newEls));

            target.parentNode.replaceChild(newEls[0], target);
            target = newEls.shift();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = newEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var newEl = _step.value;

                this.insertAfter(target, newEl);
                target = newEl;
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
          },
          insertAfter: function insertAfter(target, newEl) {
            target.parentNode.insertBefore(newEl, target.nextSibling);
          },
          remove: function remove(target) {
            target.parentNode.removeChild(target);
          },
          listen: function listen(event, cb) {
            core.listen('sandbox::' + event, cb);
          },
          dispatch: function dispatch(event, data) {
            core.dispatch('sandbox::' + event, data);
          }
        };
      });
    }
  };
});