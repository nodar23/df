import { useSearchParams } from "react-router-dom";
import { FILTER_QUERY_NAME, NO_FILTER, PRICE_FILTER, DISCOUNT_FILTER, DATE_FILTER } from "./constants";
import { FilterItem } from "./FilterItem/FilterItem";
import "./Filters.css";

const FILTERS = [NO_FILTER, PRICE_FILTER, DISCOUNT_FILTER, DATE_FILTER]

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const clickFilterHandler = (filterType, isActive) => {
    if (!isActive) searchParams.delete(FILTER_QUERY_NAME)
    else searchParams.set(FILTER_QUERY_NAME, filterType)
    setSearchParams(searchParams)
  }

  return (
    <div className="filter">
      <p className="filter__title">сортировка:</p>
      {FILTERS.map((filter) => (
        <FilterItem
          key={filter.name}
          {...filter}
          clickFilterHandler={clickFilterHandler}
        />
      ))}
    </div>
  )
}
