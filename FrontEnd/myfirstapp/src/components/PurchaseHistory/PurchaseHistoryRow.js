import React from 'react'
import './PurchaseHistoryRow.css'

function PurchaseHistoryRow(props) {
    return (
        <div className="PurchaseRow">
            <div className="PurchaseCol" id="purchase_id">
                1
            </div>

            <div className="PurchaseCol" id="book_name">
                Harry Potter
            </div>

            <div className="PurchaseCol" id="seller_name">
                Bloomsbury
            </div>

            <div className="PurchaseCol" id="price">
                24$
            </div>

            <div className="PurchaseCol" id="date">
                20/05/2012
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