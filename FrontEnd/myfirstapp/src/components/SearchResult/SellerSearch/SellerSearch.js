import React, {useContext, useState} from 'react';

const SellerSearch = () => {
    const {searchedSellers, searchedName} = props.location.state;

    const [searchResults, setSearchResults] = useState(searchedName);
    const [toRoute,setToRoute] = useState(null);
    const [selectedBook,setSelectededBook] = useState(null);
    const [resultList, setResultList] = useState(searchedSellers);
    const [searchTitle, setSearchTitle] = useState(searchedName);


    const SearchFor = async(searchResults) => {
        if (searchResults != ''){
            setSearchTitle(searchResults);
        }
        await SearchSellers(searchResults).then(date => setResultList(data));
        if (resultList !== 'Sellers not found') {
            setToRoute("/seller-search");
            window.location.reload();
        } else {
            //throw error message for the user
        }
    }

    return (<></>);
}

export default SellerSearch;