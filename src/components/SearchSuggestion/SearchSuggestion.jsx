import React, {useContext, useEffect } from 'react';
import { SearchContext } from './SearchContext';
import Styles from './SearchSuggestion.module.css';

const SearchSuggestion = () => {
    const { serachQuery } = useContext(SearchContext);

    useEffect(()=>{
        if (serachQuery) {
            console.log("Search Query is: ", serachQuery)
        }
    }, [serachQuery])


  return (
    <div>
      
    </div>
  )
}

export default SearchSuggestion
