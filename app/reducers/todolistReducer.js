const initialState = {
    todolist: []
}

export function todolistReducer(state = initialState, action) {
    const { type, payload } = action
    let index = state.todolist.findIndex(item => item.id === payload)

    switch(type) {
        case 'ADD': {
            return {
                ...state,
                todolist: [...state.todolist, payload]
            }
        }
        case 'REMOVE_TODO': {
            return {
                ...state,
                todolist: [...state.todolist.slice(0, index), ...state.todolist.slice(index + 1)]
            }
        }
        case 'TODO_DONE': {
            return {
                ...state,
                todolist: [...state.todolist.map(item => {
                    return item.id === payload ? {...item, done: !item.done} : item
                })]
            }
        }
    }
    return state
}
