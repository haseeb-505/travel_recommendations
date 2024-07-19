import React, { createContext, useState  } from "react";
// import { Children } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) =>{
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
            {children}
        </SearchContext.Provider>
    )
}