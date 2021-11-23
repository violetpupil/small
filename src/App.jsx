import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends React.Component {
  state = { todoList: [] }

  addTodo = todo => this.setState({ todoList: [todo, ...this.state.todoList] })

  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <Header addTodo={this.addTodo} />
        <List todoList={todoList} />
        <Footer todoList={todoList} />
      </div>
    )
  }
}