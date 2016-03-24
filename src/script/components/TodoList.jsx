import React, { PropTypes } from 'react'
import Todo from './Todo'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

const TodoList = ({ todos, onTodoClick }) => {
  const list = todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) }
          />
        )
  )

  return (
      <ul>
        {list}
      </ul>
  )
}

TodoList.propTypes = propTypes

export default TodoList
