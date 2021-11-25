import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends React.Component {
  state = { todoList: [] }
  id = 0

  addTodo = todo => this.setState({ todoList: [{ ...todo, id: this.id += 1 }, ...this.state.todoList] })

  updateTodo = (id, done) => this.setState({
    todoList: this.state.todoList.map(todo => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
  })

  deleteTodo = id => this.setState({ todoList: this.state.todoList.filter(todo => todo.id !== id) })

  checkAllTodo = done => this.setState({ todoList: this.state.todoList.map(todo => { return { ...todo, done } }) })

  clearAllDone = () => this.setState({ todoList: this.state.todoList.filter(todo => !todo.done) })

  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todoList={todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todoList={todoList} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}