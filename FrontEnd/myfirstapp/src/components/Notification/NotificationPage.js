import React, { useContext } from "react";
import NotificationItem from "./NotificationItem";
import './NotificationPage.css';
import { UserContext } from "../../App";
import { Redirect } from "react-router-dom";
import { GetNotificationsByUserId } from "../../axios/NotificationAPI";

const NotificationPage = () => {

    const currentUser = useContext(UserContext);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const removeNotification = () => {
        //TODO: removeNoti
    }

    const {data} = GetNotificationsByUserId(currentUser.userState.user.id);

    return(
        <div className="NotificationPage">
            <div className="Notification_heading">
                <h2> Your Notifications </h2>
                <hr className="hr_line"></hr>
            </div>
            {data && data.map(noti => <NotificationItem key={noti.notificationId} removeNotification={removeNotification} notification_desc={noti.content} notification_time={noti.createdAt}></NotificationItem>)}
            <NotificationItem notification_desc="Welcome to BOOKEROO! Find out more what you can do with BOOKEROO now!" notification_time="23-06-2021 5:09:59"></NotificationItem>

        </div>
    )
}

export default NotificationPage;