import React from "react";
import './BookDescription.css';

function BookDescription(props) {
    return (
        <div className="page">
            <div className="col" id="BookDescription_image_col">
                <div className="image_box">
                    <img className="book_1" src="./pics/book-3.jpg" alt="book_3"></img>
                </div>
                <div className="BookDescription_title">
                    <h1> {props.BookDescription_title} </h1>
                    <h3> {props.BookDescription_author} </h3>
                </div>
            </div>

            <div className="col" id="BookDescription_wide_col">
                <div>
                    <h2 id="text_blue">Availaiblity</h2>
                    <hr class="hr_line"></hr>
                    <div className="col_row">
                        <h4 class="BookDescription_h4"> <span className="BookDescription_blue"> Download </span> Book Cover</h4>
                        <h4 class="BookDescription_h4" id="BookDescription_float_right"> <span className="BookDescription_red">{props.BookDescription_copies} Copies</span> on sale</h4>
                    </div>
                    <div className="col_row">
                        <h4 class="BookDescription_h4"> <span className="BookDescription_orange">{props.BookDescription_shops} Shops </span> are selling this book</h4>
                        <h4 class="BookDescription_h4" id="BookDescription_float_right"> <span className="BookDescription_green">{props.BookDescription_chapters} chapters </span>  total</h4>
                    </div>

                </div>

                <div id="BookDescription_description">
                    <h2 id="text_blue">Description</h2>
                    <hr class="hr_line"></hr>
                    <h4 class="BookDescription_h4">{props.BookDescription_description}“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h4>

                </div>
            </div>


            <div className="col" id="BookDescription_details_col">
                <div>
                    <h2 id="text_blue">Book Details</h2>
                    <hr class="hr_line"></hr>
                    <h4 class="BookDescription_h4">Title: {props.BookDescription_title}</h4>
                    <h4 class="BookDescription_h4">Author: {props.BookDescription_author}</h4>
                    <h4 class="BookDescription_h4">Publisher: {props.BookDescription_publisher}</h4>
                    <h4 class="BookDescription_h4">Language: {props.BookDescription_language}</h4>
                </div>
                <div id="BookDescription_about_author">
                    <h2 id="text_blue">About the Author</h2>
                    <hr class="hr_line"></hr>
                    <div className="BookDescription_author_profile">
                        <div className="BookDescription_display">
                                <img src="avt-2.jpg" alt="profile_image" ></img>
                        </div>
                        <div className="BookDescription_author_name">
                            <h2> {props.BookDescription_author_name} </h2>
                        </div>
                    </div>
                    <div className="BookDescription_author_about">
                        <p>{props.BookDescription_author_about}He has been awarded an Australian Society of Authors Emerging Writers' and Illustrators' Mentorship</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default BookDescription;

