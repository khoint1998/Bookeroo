import React from "react";
import './PaymentMethod.css'

function PaymentMethod(props){
    return(
        <div className="PaymentMethod">
            <input type="checkbox"/>
            <img className="PaymentMethodImg" src={props.imagesource}></img>
            <h3>{props.text}</h3>
        </div>
    )
}

export default PaymentMethod;