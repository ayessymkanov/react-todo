import React, {Component} from 'react'
import {List, ListItem} from './styles'
import TodoItem from '../todoitem'

class TodoList extends Component {
    render() {
        const { todos } = this.props

        const todoItems = todos.map(todo => {
            return <ListItem><TodoItem todo={todo} /></ListItem>
        })
        console.log('Todo items mapped', todoItems)
        return(
            <List>
                {todoItems}
            </List>
        )
    }
}

export default TodoList
