import React, { useContext, useState } from "react";
import './Cart.css'
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext, CartContext } from "../../App";
import CartItem from "./CartItem";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

const Cart = () => { 

    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);
    const [toRoute,setToRoute] = useState(null);

    const cart = useContext(CartContext);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const discount = 0;

    const removeFromCart = (selectedCopy) => {
        cart.cartDispatch({ selectedCopy: selectedCopy, type: 'remove from cart' });
    }

    const calculatePrice = () => {
        let totalPrice = 0;
        cart.cartState.map(book => totalPrice += book.bookPrice * 1.3)
        return totalPrice;
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }

    return (
        <div>
            <div className="Cart_Page">
                <div id="Cart_col" className="col">
                    <div className="cartItem--title">Your Cart</div>
                    <hr className="hr_line"/>
                    {cart.cartState.length > 0 ? 
                        <div>
                            {cart.cartState.map(book => <CartItem key={book.copyId} removeFromCart={removeFromCart} book={book} even={cart.cartState.indexOf(book) % 2 ? true : false}></CartItem>)}
                        </div> :
                        <div className="Cart_empty">
                            <div className="Cart_empty_image">
                                <img src="/pics/cart.png" alt="Cart"></img>
                            </div>
                            <h3>Your cart is empty</h3>
                            <div className="Cart_empty_btn">
                            <Button 
                                variant="contained"
                                endIcon={<ShoppingCartIcon/>}
                                style={{ 
                                    backgroundColor: '#0066FF',
                                    borderRadius:'2vh',
                                    height: '5vh',
                                    marginRight: '1.5vw',
                                    color: 'white',
                                    outline: 'none'
                                }}
                                onClick={() => {
                                    setToRoute('/');
                                }}
                            >Shop your books now!</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div id="Cart_col2" className="col">
                <div className="cartItem--title">Buyer details</div>
                <hr className="hr_line"/>
                <div className="cart--user-info"><span>Name:</span> {user && user.fullName}</div>
                <div className="cart--user-info"><span>Email:</span> {user && user.email}</div>
            </div>
            {cart.cartState.length > 0 ?
                <div id="Cart_col2" className="col">
                    <div className="cartItem--title" id="text_blue">Order Summary</div>
                    <hr className="hr_line"/>
                    <div className="cart--summary"><div className="cart--text-blue">Price:</div> <div>${calculatePrice()}</div></div>
                    <div className="cart--summary"><div className="cart--text-blue">Discount:</div> <div>${discount}</div></div>
                    <div className="cart--summary"><div className="cart--text-blue">Total:</div> <div>${calculatePrice() - discount}</div></div>
                    <div className="payment--btn">
                        <Button 
                            variant="contained"
                            endIcon={<ShoppingCartIcon/>}
                            style={{ 
                                backgroundColor: '#0066FF',
                                borderRadius:'2vh',
                                height: '5vh',
                                margin: '5vh 0 4vh 0',
                                color: 'white',
                                outline: 'none'
                            }}
                            onClick={() => {
                                setToRoute('/payment');
                            }}
                        >Go To Payment</Button>
                    </div>
                </div> : <div></div>
            }
        </div>
    )

}

export default Cart;

