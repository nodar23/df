import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { changeSearchFilter } from "../reduxjs_toolkit/slices/filterSlice";
import { useDebounce } from "../hooks/useDebounce";


export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(() => {
      const searchValueFromQuery = searchParams.get('q')
      return searchValueFromQuery ?? ''
    })
  
    const dispatch = useDispatch()
  
    const debouncedSearchValue = useDebounce(search)
  
    const changeSearchHandler = (ev) => {
      const newSearchValue = ev.target.value
      setSearch(newSearchValue)
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        q: newSearchValue,
      })
    }
  
    useEffect(() => {
      dispatch(changeSearchFilter(debouncedSearchValue))
    }, [debouncedSearchValue, dispatch])
  
    return (
      <div className="catalog__search">
        <input className="catalog__search-input" type="text" placeholder="Искать товары" value={search} onChange={changeSearchHandler} />
      </div>
    )
}

