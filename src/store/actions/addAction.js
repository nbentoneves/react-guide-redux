import * as actionTypes from "./actions";

export const savePerson = (payload) => {
    return {
        type: actionTypes.ADD_PERSON,
        personData: payload
    }
}

//This is a action creator, you can use this with async code (redux-thunk middleware)
export const addPerson = (payload) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(savePerson(payload))
        }, 2000)
    }
}