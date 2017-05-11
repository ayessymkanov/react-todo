import {combineReducers} from 'redux'
import {addTodoReducer} from './addTodoReducer'
import {anotherReducer} from './anotherReducer'

export const reducer = combineReducers({
    addTodoReducer,
    anotherReducer
})
