import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"

export default class Header extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = event => {
    const { key, target } = event
    if (key !== "Enter") return
    if (target.value.trim() === '') {
      alert("content cannot be empty")
      return
    }
    this.props.addTodo({ name: target.value, done: false })
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="type and press enter to add" />
      </div>
    )
  }
}