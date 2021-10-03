import React from "react";
import LibraryItem from "./LibraryItem";
import './MyLibrary.css';

function MyLibrary() {
    return (
        <div className="MyLibraryPage">
            <div className="Library_heading">
                <h2> My Library </h2>
            </div>
            <hr class="hr_line"></hr>
            <div className="MyLibrary_itemList">

                <LibraryItem></LibraryItem>
                <LibraryItem></LibraryItem>
                <LibraryItem></LibraryItem>
                <LibraryItem></LibraryItem>
                <LibraryItem></LibraryItem>
            </div>
        </div>
    )
}

export default MyLibrary;