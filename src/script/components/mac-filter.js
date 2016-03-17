'use strict'

export default function (sbx) {
  let target = sbx.select('#mac-filter')
  if (target) {
    sbx.replace(target, sbx.renderPartial('mac-filter'))
  }
}
