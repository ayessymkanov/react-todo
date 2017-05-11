const initialState = {
    todolist: []
}

export function todolistReducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case 'ADD': {
            return {
                ...state,
                todolist: [...state.todolist, payload]
            }
        }
    }
    return state
}
