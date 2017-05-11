const initialState = {
    todo: {}
}
export function addTodoReducer (state=initialState, action){
    const { type, payload } = action
    switch(type) {
        case 'ADD_TODO': {
            return {
                ...state, todo: payload
            }
        }
    }
    return state
}
