import React, { useContext } from "react";
import CartItem from "../Cart/CartItem";
import './Payment.css'
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import PaymentMethod from "./PaymentMethod";


function Payment() {
    
    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    return (
        <div className="PaymentPage">
            <div id="PaymentPageCol1" className="col">
                <h2 id="text_blue">Choose your Payment Method</h2>
                <hr class="hr_line"></hr>
                <div className="PaymentMethods">

                    <PaymentMethod imagesource="/pics/logos_paypal.png" text="Paypal"></PaymentMethod>
                    <PaymentMethod imagesource="/pics/logos_visa.png" text="Visa"></PaymentMethod>
                    <PaymentMethod imagesource="/pics/logos_atm.png" text="Internet Banking"></PaymentMethod>
                    <PaymentMethod imagesource="/pics/logos_bitcoin.png" text="BitCoin"></PaymentMethod>
                    <PaymentMethod imagesource="/pics/logos_google-pay.png" text="Google Pay"></PaymentMethod>
                    <PaymentMethod imagesource="/pics/applePayLogo.png" text="Apple Pay"></PaymentMethod>
                </div>
                <div className="PaymentCart">
                    <h2 id="text_blue">Your Cart</h2>
                    <hr class="hr_line"></hr>
                    <div className="PaymentCart_scrollable">
                        <CartItem even={false}></CartItem>
                        <CartItem even={true}></CartItem>
                        <CartItem even={false}></CartItem>
                        <CartItem even={true}></CartItem>
                        <CartItem even={false}></CartItem>
                        <CartItem even={true}></CartItem>
                    </div>

                </div>
            </div>
            <div id="PaymentPageCol2" className="col">
                <h2 id="text_blue">Buyer details</h2>
                <hr class="hr_line"></hr>
                <h3>{user && user.fullname}</h3>
                <h3> Khoi Nyugen </h3> 
                <h3> email id </h3>
                <div className="PaymentBill">
                    <h2 id="text_blue">Order details</h2>
                    <hr class="hr_line"></hr>
                    <h3> Price </h3>
                    <h3> Discount </h3>
                </div>

                <div className="Payment_btn">
                    Confirm and Pay
                </div>

            </div>
        </div>
    )
}
export default Payment;