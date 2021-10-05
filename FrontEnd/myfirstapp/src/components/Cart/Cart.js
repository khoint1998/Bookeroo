import React, { useContext } from "react";
import './Cart.css'
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import CartItem from "./CartItem";

function Cart(props) {

    const itemcount = 2 //FOR TESTING PURPOSE, I HAVE INTRODUCE A PSEUDO CONSTANT TO SEE CART ITEM ROWS. 

    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    if (itemcount >= 1) { //REPLACE WITH 'props.itemcount >= 1'
        return (
            <div className="Cart_Page">
                <div id="Cart_col" className="col">
                    <h2 id="text_blue">Your Cart</h2>
                    <hr class="hr_line"></hr>
                    <CartItem even={false}></CartItem>
                    <CartItem even={true}></CartItem>
                </div>
                <div id="Cart_col2" className="col">
                    <h2 id="text_blue">Buyer details</h2>
                    <hr class="hr_line"></hr>
                    <h3>{user && user.fullname}</h3>
                    <h3> email id </h3>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className="Cart_Page">
                <div id="Cart_col" className="col">
                    <h2 id="text_blue">Your Cart</h2>
                    <hr class="hr_line"></hr>
                    <div className="Cart_empty">
                        <div className="Cart_empty_image">
                            <img src="/pics/cart.png" alt="Cart"></img>
                        </div>
                        <h3>Your cart is empty</h3>
                        <div className="Cart_empty_btn">
                            Shop Now
                        </div>

                    </div>
                </div>
                <div id="Cart_col2" className="col">
                    <h2 id="text_blue">Buyer details</h2>
                    <hr class="hr_line"></hr>
                    <h3>{user && user.fullname}</h3>
                    <h3> email id </h3>
                </div>
            </div>
        )
    }

}

export default Cart;

