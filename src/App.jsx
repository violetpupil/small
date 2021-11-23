import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends React.Component {
  state = {
    todoList: []
  }

  render() {
    const { todoList } = this.state
    return (
      <>
        <Header />
        <List todoList={todoList} />
        <Footer todoList={todoList} />
      </>
    )
  }
}