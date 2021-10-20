import React, {useState} from "react";
import './BookDescription.css';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import { Redirect } from "react-router-dom";
import { GetBookById } from "../../axios/BookAPI";
import { GetCopiesByBookId } from "../../axios/CopyAPI";
import { GetShopsByCopyIdList } from "../../axios/ShopAPI";

const BookDescription = (props) => {

    const [toRoute,setToRoute] = useState(null);
    const [selectedBookId,setSelectededBookId] = useState(null);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const {preSelectedBookId} = props.location.state;

    const {bookData} = GetBookById(preSelectedBookId);

    //Get shop from copy they sell
    const copyData = GetCopiesByBookId(preSelectedBookId);
    const copyIdList = copyData && copyData.data && copyData.data.map(copy => copy.copyId);
    const shopsData = GetShopsByCopyIdList(copyIdList && copyIdList.length > 0 && copyIdList);

    const seeSellers = (bookId) => {
        const jwtToken = localStorage.jwtToken;
        if (!jwtToken) {setToRoute('/login')}
        setSelectededBookId(bookId);
        setToRoute("/seller-search");
    }

    if (toRoute === "/seller-search") {
        return (
          <div>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: {
                        selectedBookId: selectedBookId,
                        searchedTitle: bookData && bookData.title
                    }
                }} 
            />
          </div>
        );
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }

    return (
        <div className="bookDesc--page">
            <div className="bookDesc--col1">
                <div className="image_box">
                    <img src={(bookData && bookData.coverPage) || "/pics/book-2.jpg"} alt="book_3"></img>
                </div>
                <div className="BookDescription_title">
                    <h2>{bookData && bookData.title}</h2>
                    <h3>{bookData && bookData.author}</h3>
                </div>
                <Button 
                    variant="contained" 
                    endIcon={<StoreIcon/>}
                    style={{ 
                        backgroundColor: '#B542EB',
                        borderRadius:'2vh',
                        height: '5vh',
                        color: 'white',
                        outline: 'none'
                    }}
                    onClick={() => {
                        seeSellers(bookData && bookData.bookId)
                    }}
                >See Your Sellers</Button>
            </div>

            <div className="bookDesc--col2">
                <div>
                    <div className="bookDesc--title">Availaiblity</div>
                    <hr className="hr_line"></hr>
                    <div className="col_row">
                        <div className="BookDescription_h4-align"> <span className="BookDescription_blue"> Download </span> Book Cover</div>
                        <div className="BookDescription_h4-align" id="BookDescription_float_right"> <span className="BookDescription_red">{bookData && bookData.copies.length} Copies</span> on BOOKEROO</div>
                    </div>
                    <div className="col_row">
                        <div className="BookDescription_h4-align"> <span className="BookDescription_orange">{shopsData && shopsData.data ? shopsData.data.length : '0'} Shops</span> are selling this book</div>
                        <div className="BookDescription_h4-align" id="BookDescription_float_right"> <span className="BookDescription_green">{bookData && bookData.chapters.length} Chapters </span>in total</div>
                    </div>
                </div>

                <div id="BookDescription_description">
                    <div className="bookDesc--title">Description</div>
                    <hr className="hr_line"></hr>
                    <div className="BookDescription_h4">{bookData && bookData.description}</div>

                </div>
                <div id="BookDescription_chapters">
                    <div className="bookDesc--title">Table of Content</div>
                    <hr className="hr_line"></hr>
                    <div className="BookDescription_scrollable">
                        <div className="BookDescription_chapters_row">
                            Introduction
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 1: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 2: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 3: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 4: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 5: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 6: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 7: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 8: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 9: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 10: Hello World
                        </div>
                    
                        <div className="BookDescription_chapters_row">
                            Chapter 11: Hello World
                        </div>
                    </div>
                </div>

            </div>


            <div className="bookDesc--col3">
                <div>
                    <div className="bookDesc--title">Book Details</div>
                    <hr className="hr_line"></hr>
                    <div className="BookDescription_h4"><span className="BookDescription_blue">Title</span>: {bookData && bookData.title}</div>
                    <div className="BookDescription_h4"><span className="BookDescription_blue">Author</span>: {bookData && bookData.author}</div>
                    <div className="BookDescription_h4"><span className="BookDescription_blue">Publisher</span>: {bookData && bookData.publisher}</div>
                    <div className="BookDescription_h4"><span className="BookDescription_blue">Language</span>: English</div>
                </div>
                <div id="BookDescription_about_author">
                    <div className="bookDesc--title">About the Author</div>
                    <hr className="hr_line"></hr>
                    <div className="BookDescription_author_profile">
                        <div className="BookDescription_display">
                            <img src="avt-2.jpg" alt="profile_image" ></img>
                        </div>
                        <div className="BookDescription_author_name">
                            <div className="BookDescription_blue">{bookData && bookData.author}</div>
                        </div>
                    </div>
                    <div className="BookDescription_author_about">
                        <p>He has been awarded an Australian Society of Authors Emerging Writers' and Illustrators' Mentorship</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default BookDescription;

