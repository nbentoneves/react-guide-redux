import * as actionTypes from "./actions";

//This is a action creator, you can use this with async code (redux-thunk middleware)
export const removePerson = (payload) => {
    return {
        type: actionTypes.REMOVE_PERSON,
        personId: payload
    }
}