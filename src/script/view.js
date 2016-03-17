import templates from './templates'

const render = (template, locals = {}, inject = 'body') => {
  if (!templates.hasOwnProperty(template)) {
    throw new Error(`Template does not exist: ${template}`)
  }

  let view = templates[template](locals)
  document.querySelector(inject).innerHTML = view
}

const partial = (template, locals = {}) => {
  if (!templates.hasOwnProperty(template)) {
    throw new Error(`Template does not exist: ${template}`)
  }

  let viewStr = templates[template](locals)
  let div = document.createElement('div')
  div.innerHTML = viewStr

  if (div.childNodes && div.childNodes.length > 1) {
    return div.childNodes
  } else {
    return div.firstChild
  }
}

export default function (core) {
  core.sbx.render = render
  core.sbx.renderPartial = partial
}
