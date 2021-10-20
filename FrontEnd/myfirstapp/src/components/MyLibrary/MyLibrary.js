import React, {useState, useContext} from "react";
import LibraryItem from "./LibraryItem";
import './MyLibrary.css';
import { Redirect } from "react-router-dom";
import { GetBookByCopyIdList } from "../../axios/BookAPI";
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";

const MyLibrary = () => {

    const currentUser = useContext(UserContext);

    const [toRoute,setToRoute] = useState(null);
    const [selectedBookId,setSelectedBookId] = useState(null);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const seeBookDetails = (bookId) => {
        //TODO: See book Desc
        setToRoute('/book-desc');
        setSelectedBookId(bookId);
    }

    const {user} = GetUserInfo(currentUser.userState.user.id);
    const copyIdList = user && user.myLibrary && user.myLibrary.map(myLib => myLib.purchasedCopyId);
    const bookList = GetBookByCopyIdList(copyIdList);

    if (toRoute === '/book-desc') {
        return (
          <div>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: { 
                        preSelectedBookId: selectedBookId
                    }
                }} 
            />
          </div>
        );
    }

    return (
        <div className="MyLibraryPage">
            <div className="Library_heading">
                <h2> My Library </h2>
                <hr className="hr_line"/>
            </div>
            
            <div className="MyLibrary_itemList">
                {
                   bookList.data && bookList.data.map(data => <LibraryItem key={data.bookId} book={data} seeBookDetails={seeBookDetails}/>)
                }
            </div>
        </div>
    )
}

export default MyLibrary;