import React from 'react'
import './PurchaseHistoryRow.css'

function PurchaseHistoryRow(props) {
    return (
        <div className="PurchaseRow">
            <div className="PurchaseCol" id="purchase_id">
                {props.purchase_id}
            </div>

            <div className="PurchaseCol" id="book_name">
                {props.book_name}
            </div>

            <div className="PurchaseCol" id="seller_name">
                {props.seller_name}
            </div>

            <div className="PurchaseCol" id="price">
                {props.price *1.3}
            </div>

            <div className="PurchaseCol" id="date">
                {props.date}
            </div>

            <div className="PurchaseCol" id="button">
                <div className="purchaseRowBtn">
                        Details
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistoryRow;