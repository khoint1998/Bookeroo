import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

const Dashboard = (props) => {
    console.log(props)
    return (
        <div className="Persons">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Hi, {props.location.state.data.authentication.name}, testing as well</h1>
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
export default Dashboard;
