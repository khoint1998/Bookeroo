import React from "react";
import './CartItem.css'

function CartItem(props) {



    return (
        <div className="cartitem_row" style={{ backgroundColor: props.even? "#EDF0F1" : "#FBFBFB"}}>
            <div className="cartitem_image">
                <img src="/pics/book-4.jpg"></img>
            </div>
            <div className="cartitem_name">
                Hello Goodbye
            </div>
            <div className="cartitem_price1">
                $12
            </div>
            <div className="cartitem_price2">
                $43
            </div>
            <div className="cartitem_book_detail">
                <div className="cartitem_btn">
                    Book Details
                </div>
            </div>
            <div className="cartitem_delete">
                <div className="cartitem_btn" id="cartitem_red">
                    Delete
                </div>
            </div>
        </div>
    )
}

export default CartItem;