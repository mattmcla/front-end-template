import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import config from 'config'

const App = () => (
  <div>
    <h1>{config.say}</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
