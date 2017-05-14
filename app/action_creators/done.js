import {TODO_DONE} from '../reducers/constants'
export function done(id) {
    return {
        type: TODO_DONE,
        payload: id
    }
}
