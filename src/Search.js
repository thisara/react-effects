import React, { createContext } from 'react';
import { useState } from 'react';
import Result from './Result';

const SearchContext = createContext('search');

const Search = () => {

    let [searchKey, setSearchKey] = useState();

    const [formData, setFormData] = useState({
        searchKey: ""
    })

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchKey(formData.searchKey);
        console.log(formData.searchKey);
    }

    return (
        <>
            <SearchContext.Provider value={searchKey}>
                <div className="App">
                    <form onSubmit={handleSearch}>
                        Search <input type='text' name='searchKey' onChange={(e) => setFormData({ ...formData, searchKey: e.target.value })} />
                        <input type='submit' name='search' />
                    </form>
                    <p>-------------------------------------------------------------------------------------</p>
                    <Result/>
                </div>
            </SearchContext.Provider>
        </>
    );
}

export {Search, SearchContext};