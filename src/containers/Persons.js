import React, {Component} from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux'

import * as actionType from "../store/actions"

class Persons extends Component {

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson}/>
                {this.props.propPerson.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        propPerson: state.persons
    }
}

const mapDispatchProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actionType.ADD_PERSON}),
        onRemovePerson: (id) => dispatch({type: actionType.REMOVE_PERSON, personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Persons);