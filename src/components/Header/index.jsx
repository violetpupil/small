import React from 'react'
import PropTypes from 'prop-types'

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
      <div>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="enter content and press Enter to add" />
      </div>
    )
  }
}