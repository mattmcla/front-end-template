import React, { PropTypes } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.input = ''
    this.dispatch = props.dispatch
    this.addTodoOnClick = this.addTodoOnClick.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  getValue(node) {
    this.input = node
  }

  addTodoOnClick(dispatch) {
    dispatch(addTodo(this.input.value))
    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input ref={(node) => this.getValue(node)} />
        <button onClick={() => this.addTodoOnClick(this.dispatch)} >
          Add Todo
        </button>
      </div>
    )
  }
}

AddTodo.propTypes = propTypes
AddTodo = connect()(AddTodo)

export default AddTodo
