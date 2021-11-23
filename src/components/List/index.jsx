import React from 'react'
import Item from '../Item'

export default class List extends React.Component {
  render() {
    const { todoList } = this.props
    return (
      <ul>
        {
          todoList.map(todo => <Item key={todo.id} {...todo} />)
        }
      </ul>
    )
  }
}