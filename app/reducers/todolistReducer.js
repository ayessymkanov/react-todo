import {ADD_TODO, REMOVE_TODO, TODO_DONE} from './constants'
const initialState = {
    todolistAll: [],
    todolistActive: [],
    todolistDone: []
}

export function todolistReducer(state = initialState, action) {
    const { type, payload } = action
    let index = state.todolistAll.findIndex(item => item.id === payload)

    switch(type) {
        case ADD_TODO: {
            return {
                ...state,
                todolistAll: [...state.todolistAll, payload]
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todolistAll: [...state.todolistAll.slice(0, index), ...state.todolistAll.slice(index + 1)]
            }
        }
        case TODO_DONE: {
            return {
                ...state,
                todolistAll: [...state.todolistAll.map(item => {
                    return item.id === payload ? {...item, done: !item.done} : item
                })]
            }
        }
    }
    return state
}
