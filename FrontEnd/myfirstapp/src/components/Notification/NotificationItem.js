import React from "react";
import './NotificationItem.css';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function NotificationItem(props){
    return(
        <div className="NotificationRow">
            <div className="NotificationDesc">
                {props.notification_desc}
            </div>

            <div className="NotificationTime">
                {props.notification_time}
            </div>

            <div className="NotificationDelete">
                {props.removeNotification && 
                    <Button 
                        variant="text"
                        endIcon={<HighlightOffIcon/>}
                        style={{ 
                            fontWeight: 'bolder',
                            borderRadius:'2vh',
                            marginRight: '1.5vw',
                            color: 'red',
                            outline: 'none'
                        }}
                        onClick={props.removeNotification}
                    >Delete</Button>
                }
            </div>
        </div>
    )
}

export default NotificationItem;