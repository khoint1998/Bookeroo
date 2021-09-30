import React from "react";
import NotificationItem from "./NotificationItem";
import './NotificationPage.css'

function NotificationPage(){
    return(
        <div className="NotificationPage">
            <div className="Notification_heading">
                <h2> Your Notifications </h2>
                <hr class="hr_line"></hr>
            </div>
            <NotificationItem notification_desc="You got new books from order #055130223DFE124. Check them out in My Library!" notification_time="18-09-2021 17:30:59"></NotificationItem>
            <NotificationItem notification_desc="Welcome to BOOKEROO! Find out more what you can do with BOOKEROO now!" notification_time="23-06-2021 5:09:59"></NotificationItem>

        </div>
    )
}

export default NotificationPage;