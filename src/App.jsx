import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends React.Component {
  state = { todoList: [] }
  id = 0

  addTodo = todo => this.setState({ todoList: [{ ...todo, id: this.id += 1 }, ...this.state.todoList] })

  deleteTodo = id => this.setState({ todoList: this.state.todoList.filter(todo => todo.id !== id) })

  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todoList={todoList} deleteTodo={this.deleteTodo} />
          <Footer todoList={todoList} />
        </div>
      </div>
    )
  }
}