import React from "react";
import './NotificationItem.css'

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
                <img src="/pics/bin_red.png" alt="bin"></img>
            </div>
        </div>
    )
}

export default NotificationItem;