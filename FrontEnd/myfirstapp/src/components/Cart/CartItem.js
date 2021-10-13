import React from "react";
import './CartItem.css';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const CartItem = (props) => {

    const {book, even, removeFromCart} = props;

    return (
        <div className="cartitem_row" style={{ borderRadius:'2vw', backgroundColor: even? "#EDF0F1" : "#e8effa"}}>
            <div className="cartitem_image">
                <img src={book.coverPage || "/pics/book-4.jpg"} alt="book"></img>
            </div>
            <div className="cartitem_name">
                {book.bookTitle}
            </div>
            <div className="cartitem_price">
                ${book.bookPrice}
            </div>
            <div className="cartitem_price">
                ${(book.bookPrice * 1.3).toFixed(2)} (+30%)
            </div>
            <div className="cartitem_btn">
                <Button 
                    variant="contained"
                    endIcon={<MoreHorizIcon/>}
                    style={{ 
                        backgroundColor: '#0066FF',
                        borderRadius:'2vh',
                        height: '5vh',
                        color: 'white',
                        outline: 'none'
                    }}
                    onClick={() => {
                        //See detail -> book desc page
                    }}
                >Details</Button>
            </div>
            <div className="cartitem_btn">
                <Button 
                    variant="contained"
                    endIcon={<HighlightOffIcon/>}
                    style={{ 
                        backgroundColor: '#FD0707',
                        borderRadius:'2vh',
                        height: '5vh',
                        marginRight: '1.5vw',
                        color: 'white',
                        outline: 'none'
                    }}
                    onClick={() => {
                        removeFromCart(book)
                    }}
                >Delete</Button>
            </div>
        </div>
    )
}

export default CartItem;