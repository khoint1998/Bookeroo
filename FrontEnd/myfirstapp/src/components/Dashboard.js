import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

class Dashboard extends Component {
    render() {
        return (
            <div className="Persons">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Persons</h1>
                        <br />
                       <CreatePersonButton />
                        <br />
                        <hr />
                        <Person/>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
export default Dashboard;
