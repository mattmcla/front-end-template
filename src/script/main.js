'use strict'

import core from './core'
import sandbox from './sandbox'


core.baseDir = './script'
core.sbx = sandbox(core)

// Register plugins
core.use('/view')

// Register components
core.register('/components/mac-filter')

// Start the app
core.start()
  .then(() => {
    core.log('App Started!!')
  })
