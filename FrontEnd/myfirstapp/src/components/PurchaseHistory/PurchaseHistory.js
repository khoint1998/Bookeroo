import React from 'react'
import './PurchaseHistory.css'
import PurchaseHistoryRow from './PurchaseHistoryRow'


function PurchaseHistory() {
    return (
        <div className="purchase_history--page">

            <div className="purchase_history--header">
                My Purchase History
            </div>

            <div className="purchase_history--table">
                <div className="purchase_history==table_head">
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

                        <div className="PurchaseCol" id="button">
                            <div className="purchaseRowBtn">

                            </div>
                        </div>
                    </div>
                </div>
                <PurchaseHistoryRow></PurchaseHistoryRow>

            </div>
        </div>
    )
}

export default PurchaseHistory;