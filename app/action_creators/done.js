export function done(id) {
    return {
        type: 'TODO_DONE',
        payload: id
    }
}
