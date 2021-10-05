import React from "react";
import './LibraryItem.css';

function LibraryItem(props) {
    return (
        <div className="libraryItem">
            <div className="libraryItem_col" id="libraryItem_img">
                <img src="/pics/book-1.jpg" alt="book"></img>
            </div>
            <div className="libraryItem_col" id="libraryItem_text">
                <div className="libraryItem_row" id="libraryItem_name">
                    The Mighty Jungle
                </div>
                <div className="libraryItem_row" id="libraryItem_seller">
                    Jim Halpert
                </div>
            </div>
            <div className="libraryItem_col" id="libraryItem_btn">
                <div className="libraryItem_btn">
                    On Store Details
                </div>
            </div>
        </div>
    )
}

export default LibraryItem;