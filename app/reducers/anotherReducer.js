export function anotherReducer(state = {}, action){
    const { type, payload } = action

    switch(type) {
        case 'ANOTHER_ACTION': {
            return {
                ...state, another: payload
            }
        }
    }
    return state
}
