import {REMOVE_TODO} from '../reducers/constants'
export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
