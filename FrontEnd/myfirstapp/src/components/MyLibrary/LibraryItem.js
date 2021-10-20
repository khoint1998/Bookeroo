import React from "react";
import './LibraryItem.css';
import Button from '@material-ui/core/Button';

function LibraryItem(props) {
    const {seeBookDetails, book} = props;
    const truncatedTitle = book.title.substring(0,45);

    return (
        <div className="libraryItem">
            <div className="libraryItem_col" id="libraryItem_img">
                <img src={book.coverPage || "/pics/book-1.jpg"} alt="book"></img>
            </div>
            <div className="libraryItem_col" id="libraryItem_text">
                <div className="libraryItem_row" id="libraryItem_name">
                    {book.title.length > 45 ? truncatedTitle + "...": book.title} 
                </div>
                <div className="libraryItem_row" id="libraryItem_seller">
                    {book.author}
                </div>
            </div>
            <div className="libraryItem_col" id="libraryItem_btn">
                <div>
                    <Button 
                        variant="contained"
                        style={{ 
                            backgroundColor: '#0066FF',
                            borderRadius:'2vh',
                            margin: '5vh 0 0 0',
                            color: 'white',
                            outline: 'none',
                            fontSize: '0.8vw'
                        }}
                        onClick={() => {
                            seeBookDetails(book.bookId);
                        }}
                    >On Store Details</Button>
                </div>
            </div>
        </div>
    )
}

export default LibraryItem;