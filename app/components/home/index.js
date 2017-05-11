import React, {Component} from 'react'
import {TodoListContainer, Title, Menubar, ControlButtons, Credits, Button} from './styles'
import TodoList from '../todolist'
import AddTodo from '../addtodo'
import Sort from '../sort'
import Modal from '../modal'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './transition.css'

class Home extends Component {

    state = {
        isModalOpen: false
    }

    render() {
        return (
            <div>
                <TodoListContainer>
                    <Menubar>
                        <Title>TODO App</Title>
                        <ControlButtons>
                            <Sort />
                            <Button onClick={this.openModal}>+ Add new Todo</Button>
                        </ControlButtons>
                    </Menubar>
                    <TodoList />
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={150}
                        transitionLeaveTimeout={150}>
                        {this.modal()}
                    </CSSTransitionGroup>
                </TodoListContainer>
                <Credits>&copy; 2017</Credits>
            </div>
        )
    }

    modal = () => {
        if(!this.state.isModalOpen) {
            return null
        }
        return(
            <Modal onClick={this.openModal} />
        )
    }

    openModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

}

export default Home
