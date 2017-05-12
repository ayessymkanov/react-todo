import React, {Component} from 'react'
import {TodoContainer, Text, Controls, Button} from './styles'
import {connect} from 'react-redux'
import {removeTodo} from '../../action_creators/removeTodo'
import {done} from '../../action_creators/done'
import './styles.css'

import FaCheckCircleO from 'react-icons/fa/check-circle-o'
import FaClose from 'react-icons/fa/close'

class TodoItem extends Component {
    render() {
        console.log('Todoitem props', this.props)
        const { title, id, done } = this.props.todo
        const className = done ? 'done' : 'active'
        return(
            <TodoContainer>
                <Text className={className}>{title}</Text>
                <Controls>
                    <Button onClick={this.todoDone}><FaCheckCircleO /></Button>
                    <Button onClick={this.todoRemove}><FaClose /></Button>
                </Controls>
            </TodoContainer>
        )
    }
    todoDone = () => {
        const { id }  = this.props.todo
        this.props.done(id)
    }
    todoRemove = () => {
        const { id }  = this.props.todo
        this.props.removeTodo(id)
    }
}

export default connect(null, {removeTodo, done})(TodoItem)
