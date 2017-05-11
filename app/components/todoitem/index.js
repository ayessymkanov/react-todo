import React, {Component} from 'react'
import {TodoContainer, Text, Controls, Button} from './styles'

class TodoItem extends Component {
    render() {
        console.log('Todoitem props', this.props)
        return(
            <TodoContainer>
                <Text>{this.props.todo.title}</Text>
                <Controls>
                    <Button onClick={this.todoDone}>d</Button>
                    <Button onClick={this.todoRemove}>r</Button>
                </Controls>
            </TodoContainer>
        )
    }
    todoDone = () => {
        console.log('item done')
    }
    todoRemove = () => {
        console.log('item removed')
    }
}

export default TodoItem
