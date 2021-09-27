import React from "react";
import './OrderComplete.css'

function OrderComplete() {
    return (
        <div className="OrderComplete_page">
            <h1>Order confirmed #055130223DFE124. We are <span class="OrderComplete_blue">processing</span> your order!</h1>
            <h2>we will notify you once your books are ready</h2>
            <img src="/pics/security-checked.png"></img>
            <div className="OrderComplete_btn">
                Back to Homepage
            </div>
        </div>
    )
}

export default OrderComplete;