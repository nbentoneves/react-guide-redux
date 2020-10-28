import * as actionType from "../actions/actions"

import {updateObject} from '../utility'

const initState = {
    persons: []
}

const addPerson = (state, action) => {
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
    }

    return updateObject(state, {persons: state.persons.concat(newPerson)})
}

//You can do data transforming logic here, before store the data
const reducer = (state = initState, action) => {


    switch (action.type) {
        case actionType.ADD_PERSON:
            return addPerson(state, action)
        case actionType.REMOVE_PERSON:
            return updateObject(state, {persons: state.persons.filter(person => person.id !== action.personId)})
    }

    return state
}

export default reducer;