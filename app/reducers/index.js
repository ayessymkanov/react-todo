import {combineReducers} from 'redux'
import {addTodoReducer} from './addTodoReducer'
import {todolistReducer} from './todolistReducer'

export const reducer = combineReducers({
    addTodoReducer,
    todolistReducer
})
