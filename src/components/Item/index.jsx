import React from 'react'

export default class Item extends React.Component {
  render() {
    const { name } = this.props
    return (
      <li>
        <label>
          <input />
          <span>{name}</span>
        </label>
        <button>delete</button>
      </li>
    )
  }
}