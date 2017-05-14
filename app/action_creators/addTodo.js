import {ADD_TODO} from '../reducers/constants'
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
