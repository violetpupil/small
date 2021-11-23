import React from 'react'

export default class Footer extends React.Component {
  render() {
    const { todoList } = this.props
    const doneCount = todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todoList.length
    return (
      <div>
        <input type="checkbox" />
        <span>{doneCount}/{total}</span>
        <button>clear done</button>
      </div>
    )
  }
}