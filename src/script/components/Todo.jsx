import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react'

import styles from '../../style/modules/todo'

const propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    styleName={ completed ? 'completed' : undefined }
  >
    {text}
  </li>
)

Todo.propTypes = propTypes

export default CSSModules(Todo, styles)
