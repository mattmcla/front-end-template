import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  let link
  if (active) {
    link = <span>{children}</span>
  } else {
    link = (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </a>
    )
  }

  return link
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
