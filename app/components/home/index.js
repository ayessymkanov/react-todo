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

    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            whichList: 'all'
        }
    }

    render() {
        let list;
        switch(this.state.whichList) {
            case 'all':
                list = this.props.todosAll
                break
            case 'active':
                list = this.props.todosActive
                break
            case 'done':
                list = this.props.todosDone
                break
        }
        return (
            <TodoListContainer>
                <Menubar>
                    <Title>TODO App</Title>
                    <ControlButtons>
                        <Sort
                            sortDone={this.sortDone}
                            sortActive={this.sortActive}
                            sortAll={this.sortAll}
                            activeList={this.state.whichList} />
                        <Button onClick={this.openModal}>+ Add new Todo</Button>
                    </ControlButtons>
                </Menubar>
                <TodoList todos={list} />
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

    sortDone = () => {
        this.setState({
            whichList: 'done'
        })
    }

    sortActive = () => {
        this.setState({
            whichList: 'active'
        })
    }

    sortAll = () => {
        this.setState({
            whichList: 'all'
        })
    }

}

export default connect((state) => {
    return {
        todosAll: state.todolistReducer.todolistAll,
        todosActive: state.todolistReducer.todolistAll.filter(item => !item.done),
        todosDone: state.todolistReducer.todolistAll.filter(item => item.done)
    }
}, {addTodo})(Home)
