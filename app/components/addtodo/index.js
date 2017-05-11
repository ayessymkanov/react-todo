import React, {Component} from 'react'
import {Button} from './styles'

export default class AddTodo extends Component {
    render() {
        return (
            <Button onClick={this.addNewTodo}>+ Add new Todo</Button>
        )
    }

    addNewTodo = () => {
        console.log('Added new todo')
    }
}
