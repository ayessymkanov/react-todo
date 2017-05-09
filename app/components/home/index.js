import React, {Component} from 'react'
import {TodoListContainer, Title, Menubar, ControlButtons} from './styles'
import TodoList from '../todolist'
import AddTodo from '../addtodo'
import Sort from '../sort'

const Home = (props) => {
    return (
        <TodoListContainer>
            <Menubar>
                <Title>TODO App</Title>
                <ControlButtons>
                    <Sort />
                    <AddTodo />
                </ControlButtons>
            </Menubar>
            <TodoList />
        </TodoListContainer>
    )
}

export default Home
