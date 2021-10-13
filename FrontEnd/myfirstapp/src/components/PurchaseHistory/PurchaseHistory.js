import React, { useContext } from 'react'
import './PurchaseHistory.css'
import PurchaseHistoryRow from './PurchaseHistoryRow'
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import { Redirect } from "react-router-dom";


function PurchaseHistory() {

    const currentUser = useContext(UserContext);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }
    
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    return (
        <div className="purchase_history--page">

            <div className="purchase_history--title">
                My Purchase History
            </div>

            <div className="purchase_history--table">
                <div className="purchase_history--table_head">
                    <div className="PurchaseRow--header">
                        <div className="PurchaseCol--header" id="purchase_id--header">
                            ID
                        </div>

                        <div className="PurchaseCol--header" id="book_name--header">
                            Book Name
                        </div>

                        <div className="PurchaseCol--header" id="seller_name--header">
                            Seller
                        </div>

                        <div className="PurchaseCol--header" id="price--header">
                            Price
                        </div>

                        <div className="PurchaseCol--header" id="date--header">
                            Date
                        </div>

                    </div>
                </div>

                {(user && user.purchaseDetailsList.map((item) => (<PurchaseHistoryRow purchase_id={item.purchaseId} book_name={item.title} seller_name={item.sellerFullName} price={item.price} date={item.create_At}></PurchaseHistoryRow>)))}
                
            </div>
        </div>
    )
}

export default PurchaseHistory;