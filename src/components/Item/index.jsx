import React from 'react'
import "./index.css"

export default class Item extends React.Component {
  state = { mouse: false }

  handleMouse = flag => () => this.setState({ mouse: flag })

  render() {
    const { name } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" />
          <span>{name}</span>
        </label>
        <button style={{ display: mouse ? 'block' : 'none' }}>delete</button>
      </li>
    )
  }
}