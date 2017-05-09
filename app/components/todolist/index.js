import React, {Component} from 'react'
import {List} from './styles'
import TodoItem from '../todoitem'

class TodoList extends Component {
    render() {
        return(
            <List>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                
            </List>
        )
    }
}

export default TodoList
