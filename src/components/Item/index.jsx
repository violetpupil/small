import React from 'react'
import "./index.css"

export default class Item extends React.Component {
  render() {
    const { name } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{name}</span>
        </label>
        <button>delete</button>
      </li>
    )
  }
}