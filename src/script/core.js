export default {
  plugins: [],
  components: [],
  debug: true,
  baseDir: '',
  sbx: {},
  events: new Map(),

  log(message) {
    if (this.debug) {
      console.log(`CORE: ${message}`)
    }
  },

  /**
   * Registers Components
   */
  register(module) {
    this.log(`Core Registered Component: ${module}`)
    this.components.push(System.import(this.baseDir + module))

    return this
  },

  /**
   * Install plugins
   */
  use (plugin) {
    let promise = System.import(this.baseDir + plugin)
      .then(p => {
        return p.default(this)
      })
      .catch(err => {
        this.log(`CORE ERROR: ${err}`)
      })

    this.plugins.push(promise)
    return promise
  },

  /**
   * Adds event listener to core
   */
  listen(event, cb) {
    this.log(`Listen: ${event}`)

    let eventParts = event.split('::')
    let branch = this.events
    let part, next

    for (part of eventParts) {
      next = branch.get(part)

      if (!next) {
        next = [new Map(), []]
        branch.set(part, next)
      }

      branch = next[0];
    }

    next[1].push(cb)
  },

  /**
   * Dispatch events on core
   */
  dispatch(event, data = null) {
    this.log(`Dispatch: ${event}`)
    if (data) {
      this.log(`Dispatch Data: ${data.toString()}`)
    }

    let parts = event.split('::')
    let branch = this.events
    let x, part, next
    for (part of parts) {
      next = branch.get(part)

      if (next) {
        if (next[1].length) {
          for (x of next[1]) {
            x(data)
          }
        }
        branch = next[0]
      } else {
        break;
      }
    }
  },

  start() {
    this.sbx.log = this.sbx.log || this.log

    return Promise.all(this.plugins)
      .then(() => { return Promise.all(this.components) })
      .then(components => {
        components.forEach(component => {
          component.default(this.sbx)
        })

        this.dispatch('core::app::start')
        this.dispatch('sandbox::app::start')
      })
      .catch(err => {
        this.log(`CORE ERROR: ${err}`)
      })
  }
}
