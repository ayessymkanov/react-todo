import React, {Component} from 'react'
import {List, ListItem} from './styles'
import TodoItem from '../todoitem'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './transition.css'


class TodoList extends Component {
    render() {
        const { todos } = this.props

        const todoItems = todos.map(todo => {
            return <ListItem key={todo.id}><TodoItem todo={todo} /></ListItem>
        })

        return(
            <List>
                {!todos.length ? 'Sorry, no items in this list' :
                <CSSTransitionGroup
                    transitionName="modal"
                    transitionEnterTimeout={150}
                    transitionLeaveTimeout={150}>
                    {todoItems}
                </CSSTransitionGroup>}
            </List>
        )
    }
}

export default TodoList
