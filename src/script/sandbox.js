export default (core) => {
  return {
    // Select a single DOM node by css selector
    select(query) {
      return document.querySelector(query)
    },

    // Adds a class to an element
    addClass(el, className) {
      if (el.classList) el.classList.add(className)
      else if (!this.hasClass(el, className)) el.className += ' ' + className
    },

    // returns true if an element has a class
    hasClass(el, className) {
      if (el.classList) return el.classList.contains(className)
      else !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
    },

    // removes a class from an element
    removeClass(el, className) {
      if (el.classList) el.classList.remove(className)
      else if (this.hasClass(el, className)) {
        let reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
        el.className = el.className.replace(reg, '')
      }
    },

    // Assign event listener
    on (event, selector) {
      let el = document.querySelector(selector)
      return new Promise(resolve => {
        el.addEventListener(event, e => {
          resolve(e)
        })
      })
    },

    // Replaces target with new El
    replace (target, newEls) {
      if (!newEls.length) newEls = [newEls]
      else newEls = [...newEls]

      target.parentNode.replaceChild(newEls[0], target)
      target = newEls.shift()
      for (let newEl of newEls) {
        this.insertAfter(target, newEl)
        target = newEl
      }
    },

    // Inserts a node after target
    insertAfter (target, newEl) {
      target.parentNode.insertBefore(newEl, target.nextSibling)
    },

    // Remove a node
    remove (target) {
      target.parentNode.removeChild(target)
    },

    // Abstracts the core event listener
    listen (event, cb) {
      core.listen(`sandbox::${event}`, cb)
    },

    // Abstracts core event dispatcher
    dispatch (event, data) {
      core.dispatch(`sandbox::${event}`, data)
    }
  }
}
