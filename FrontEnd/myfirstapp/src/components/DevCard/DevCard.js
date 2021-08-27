import React from 'react';
import './DevCard.css';

function DevCard(props){
    return(
        <div className="devCard">
            <div className="col">
                <div className="devName">{props.name}</div>
                <div className="devDetails">{props.role}</div>
                <div className="devDetails">{props.id}</div>
            </div>
            <div className="col">
                <img src={props.profile} alt="avt"></img>
                
            </div>
        </div>
    )
}

export default DevCard;