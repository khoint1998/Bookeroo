import React, { useContext, useState } from "react";
import CartItem from "../Cart/CartItem";
import './Payment.css';
import { GetUserInfo, AddNewCopyToMyLibrary, axiosGetUserInfo, CreatePurchaseHistoryDetails } from "../../axios/UserAPI";
import { UpdateStatusToSoldFromRegList } from "../../axios/RegistrationAPI";
import { ChangeCopyOwnerId, GetCopyByCopyIdList } from "../../axios/CopyAPI";
import { CreateOrder } from "../../axios/OrderAPI";
import { UserContext, CartContext } from "../../App";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const Payment = () => {
    
    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);
    const [toRoute,setToRoute] = useState(null);
    const [paymentValue, setPaymentValue] = React.useState('paypal');

    const cart = useContext(CartContext);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const handleChange = (event) => {
        setPaymentValue(event.target.value);
    };

    const discount = 0;

    const removeFromCart = (selectedCopy) => {
        cart.cartDispatch({ selectedCopy: selectedCopy, type: 'remove from cart' });
    }

    const sellerIdList = [...new Set(cart.cartState.map(copy => copy.sellerId))];
    const selectedSellerDataList = sellerIdList.map(async (sellerId) => await axiosGetUserInfo(sellerId));
    

    const buyBooks = async (myCart) => {
        //TODO: Buy func
        if (paymentValue === 'paypal') {
            const regIdList = myCart.map(copy => copy.regId);
            //change reg to SOLD
            const returnedCopyIdList = await UpdateStatusToSoldFromRegList(regIdList);

            //change copy onwerID
            returnedCopyIdList.data.map(copyId => ChangeCopyOwnerId(currentUser.userState.user.id, copyId));

            //call getCopyByID 
            const updatedCopies = await GetCopyByCopyIdList(returnedCopyIdList.data);

            //and use the new copy data to add to library
            updatedCopies.data.map(copy => AddNewCopyToMyLibrary(currentUser.userState.user.id,copy.copyId,copy.newBook));

            //create Order Obj
                // TODO: create Order Obj
                //1. Get all seller details 
                const promiseSellerData = await Promise.all(selectedSellerDataList);
                const selectedSellerList =  promiseSellerData.map(data => data.data);

                myCart.map(product => {
                    const selectedSeller = selectedSellerList.find(seller => seller.id === product.sellerId);
                    return CreateOrder (
                        {
                            buyerId: currentUser.userState.user.id,
                            sellerId: selectedSeller.id,
                            copyId: product.copyId,
                            bookId: product.bookId,
                        }
                    )
                })
            //create PurchaseDetails (purchase history)
                //2. Create PurchaseDetails (use map()) and send notification for user
                myCart.map(product => {
                    const selectedSeller = selectedSellerList.find(seller => seller.id === product.sellerId);
                    return CreatePurchaseHistoryDetails (
                        currentUser.userState.user.id,
                        {
                           copyId: product.copyId,
                           title: product.bookTitle,
                           sellerId: selectedSeller.id,
                           sellerFullName: selectedSeller.fullName,
                           price: product.bookPrice,
                           orderId: 1
                        }
                    )
                })

            cart.cartDispatch({type: 'clear cart'});
            setToRoute('/order-complete');
        }
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
                    <div className="cartItem--title">Choose your Payment Method</div>
                    <hr className="hr_line"></hr>
                    <FormControl>
                        <RadioGroup
                            value={paymentValue}
                            onChange={handleChange}
                            className="payment--radio-grp"
                            row
                        >
                            <FormControlLabel value="paypal" control={<Radio/>} label={<span className="payment--options"><img className="payment--img" src="/pics/logos_paypal.png" alt="method"/>Paypal</span>} />
                            <FormControlLabel value="gg-pay" control={<Radio/>} label={<span className="payment--options"><img className="payment--img" src="/pics/logos_google-pay.png" alt="method"/>Google Pay</span>} />
                            <FormControlLabel value="bitcoin" control={<Radio/>} label={<span className="payment--options"><img className="payment--img" src="/pics/logos_bitcoin.png" alt="method"/>Bitcoin</span>} />
                            <FormControlLabel value="internet-banking" control={<Radio/>} label={<span className="payment--options"><img className="payment--img" src="/pics/logos_atm.png" alt="method"/>Internet Banking</span>} />
                        </RadioGroup>
                    </FormControl>
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
                                margin: '1vh 0 2vh 0',
                                color: 'white',
                                outline: 'none'
                            }}
                            onClick={() => {
                                buyBooks(cart.cartState);
                            }}
                        >Confirm and Pay</Button>
                    </div>
                    <div className="payment--tnc">*By Clicking <span className="cart--text-blue">Confirm and Pay</span>, you are agreed with <span className="cart--text-blue">BOOKEROO Terms & Conditions</span></div>
                    <div className="payment--tnc">*Each book will be placed on separate <span className="cart--text-blue">Order</span>, so that BOOKEROO can <span className="cart--text-blue">manage your order effectively!</span></div>
                </div> : <div></div>
            }
        </div>
    )
}
export default Payment;