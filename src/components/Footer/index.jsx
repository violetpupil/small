import React from 'react'
import "./index.css"

export default class Footer extends React.Component {
  handleCheckAllTodo = event => this.props.checkAllTodo(event.target.checked)

  handleClearAllDone = () => this.props.clearAllDone()

  render() {
    const { todoList } = this.props
    const doneCount = todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todoList.length
    return (
      <div className="todo-footer">
        <input
          type="checkbox"
          onChange={this.handleCheckAllTodo}
          checked={doneCount === total && total !== 0}
        />
        <span>{doneCount}/{total}</span>
        <button onClick={this.handleClearAllDone}>clear done</button>
      </div>
    )
  }
}