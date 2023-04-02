const low_price = 'low_price'
const high_price = 'high_price'
const max_discount = 'max_discount'
const min_discount = 'min_discount'
const new_date = 'new_date'
const old_date = 'old_date'

export const PRICE_FILTER = {
  type: [low_price, high_price],
  name: 'цена'
}

export const DISCOUNT_FILTER = {
  type: [max_discount, min_discount],
  name: 'скидка'
}

export const DATE_FILTER = {
  type: [new_date, old_date],
  name: 'дата'
}

export const FILTER_QUERY_NAME = 'filterType';

export const getFilteredProducts = ([...products], filterType) => {
  switch (filterType) {
    case high_price:
      return products.sort((a, b) => b.price * ((100 - b.discount) / 100) - a.price * ((100 - a.discount) / 100))
    case low_price:
      return products.sort((a, b) => a.price * ((100 - a.discount) / 100) - b.price * ((100 - b.discount) / 100))
    case max_discount:
      return products.filter((product) => !!product.discount).sort((a, b) => a.discount - b.discount)
    case min_discount:
      return products.filter((product) => !!product.discount).sort((a, b) => b.discount - a.discount)
    case old_date:
      return products.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
    case new_date:
      return products.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    
    default:
      break;
  }
}
