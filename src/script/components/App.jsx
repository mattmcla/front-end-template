import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import env from 'env'

const App = () => (
  <div>
    <h1>{env.say}</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
