import React, { PropTypes } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

let AddTodo = ({ dispatch }) => {
  let input

  function inputNode(node) {
    input = node
  }

  function addTodoOnclick() {
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <input ref={inputNode} />
      <button onClick={addTodoOnclick} >
        Add Todo
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

AddTodo = connect()(AddTodo)

export default AddTodo
