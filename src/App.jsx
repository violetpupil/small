import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends React.Component {
  state = {
    todoList: []
  }

  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <Header />
        <List todoList={todoList} />
        <Footer todoList={todoList} />
      </div>
    )
  }
}