import * as actionTypes from "./actions";

export const savePerson = (payload) => {

    //You should avoid logic in the action creator

    return {
        type: actionTypes.ADD_PERSON,
        personData: payload
    }
}

//This is a action creator, you can use this with async code (redux-thunk middleware)
export const addPerson = (payload) => {

    return (dispatch, getState) => {
        setTimeout(() => {

            const oldPersons = getState().persons
            console.log(oldPersons)

            dispatch(savePerson(payload))
        }, 2000)
    }
}