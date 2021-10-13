import React, {useState} from "react";
import './OrderComplete.css';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const OrderComplete = () => {

    const [toRoute,setToRoute] = useState(null);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }

    return (
        <div className="OrderComplete_page">
            <h1>Your Orders have been confirmed - <span className="OrderComplete_blue">Thank you for choosing BOOKEROO!</span></h1>
            <h2>We will notify you once your books are ready!</h2>
            <img src="/pics/security-checked.png" alt="checked"></img>
            <div>
                <Button 
                    variant="contained"
                    endIcon={<HomeIcon/>}
                    style={{ 
                        backgroundColor: '#0066FF',
                        borderRadius:'2vh',
                        height: '5vh',
                        margin: '5vh 0 0 0',
                        color: 'white',
                        outline: 'none'
                    }}
                    onClick={() => {
                        setToRoute('/');
                    }}
                >Back to Homepage</Button>
            </div>
        </div>
    )
}

export default OrderComplete;