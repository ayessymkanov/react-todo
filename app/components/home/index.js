import React, {Component} from 'react'
import {TodoListContainer, Title} from './styles'
import TodoList from '../todolist'

const Home = (props) => {
    return (
        <TodoListContainer>
            <Title>TODO App</Title>
            <TodoList />
        </TodoListContainer>
    )
}

export default Home
