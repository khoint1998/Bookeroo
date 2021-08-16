import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createPerson} from "../../actions/personActions";


class AddPerson extends Component {
    constructor(){
        super();

        this.state= {
        name: "",
        personIdentifier: "",
        desc: "",
        start_date: "",
        end_date: ""
     
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            personIdentifier: this.state.personIdentifier,
            desc: this.state.desc,
            start_date:this.state.start_date,
            end_date: this.state.end_date  
        }

        this.props.createPerson(newPerson, this.props.history);
    }
    render() {
        return (
            <div className="Person">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Person form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Person Name" 
                                name="name"
                                value= {this.state.name}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Unique Person ID"
                                name="personIdentifier"
                                value= {this.state.personIdentifier}
                                onChange = {this.onChange}
                                    />
                            </div>
                          
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Person Description"
                                name = "desc"
                                value= {this.state.desc}
                                onChange = {this.onChange}
                                />
                                

                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="start_date"
                                value= {this.state.start_date}
                                onChange = {this.onChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="end_date" 
                                value= {this.state.end_date}
                                onChange = {this.onChange}
                                />
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
AddPerson.propTypes = {
    createProject: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { createPerson }
  )(AddPerson);
