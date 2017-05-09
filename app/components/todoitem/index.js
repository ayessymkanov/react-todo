import React, {Component} from 'react'
import {TodoContainer, Text, Controls, Button} from './styles'

class TodoItem extends Component {
    render() {
        return(
            <TodoContainer>
                <Text>This is simpled todo item</Text>
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
