import React, {Component} from 'react'
import {TodoListContainer, Title, Menubar, ControlButtons, Credits, Button} from './styles'
import TodoList from '../todolist'
import AddTodo from '../addtodo'
import Sort from '../sort'
import Modal from '../modal'
import {connect} from 'react-redux'
import {addTodo} from '../../action_creators/addTodo'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './transition.css'

class Home extends Component {

    state = {
        isModalOpen: false
    }

    render() {
        console.log(this.props)
        return (
            <TodoListContainer>
                <Menubar>
                    <Title>TODO App</Title>
                    <ControlButtons>
                        <Sort sortDone={this.props.sortDone} />
                        <Button onClick={this.openModal}>+ Add new Todo</Button>
                    </ControlButtons>
                </Menubar>
                <TodoList todos={this.props.todos} />
                <CSSTransitionGroup
                    transitionName="modal"
                    transitionEnterTimeout={150}
                    transitionLeaveTimeout={150}>
                    {this.modal()}
                </CSSTransitionGroup>
            </TodoListContainer>
        )
    }

    modal = () => {
        if(!this.state.isModalOpen) {
            return null
        }
        return(
            <Modal onClick={this.openModal} addTodo={this.addNewTodo} />
        )
    }

    addNewTodo = (e) => {
        e.preventDefault()
        console.log(e.currentTarget.children[0].value)
        window.target = e.currentTarget
        this.openModal()
        this.props.addTodo({
            id: Math.floor(Math.random() * 200),
            title: e.currentTarget.children[0].value,
            done: false
        })
    }

    openModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

}

export default connect((state) => {
    return {
        todos: state.todolistReducer.todolist
    }
}, {addTodo})(Home)
