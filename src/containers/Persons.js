import React, {Component} from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionCreators from '../store/actions/index'

import {connect} from 'react-redux'

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
        onAddedPerson: (name, age) => dispatch(actionCreators.addPerson({name: name, age: age})),
        onRemovePerson: (id) => dispatch(actionCreators.removePerson(id))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Persons);