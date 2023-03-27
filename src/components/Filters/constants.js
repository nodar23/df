const LOW_PRICE = 'LOW_PRICE'
const HIGH_PRICE = 'HIGH_PRICE'
const MAX_DISCOUNT = 'MAX_DISCOUNT'
const MIN_DISCOUNT = 'MIN_DISCOUNT'
const NEW_DATE = 'NEW_DATE'
const OLD_DATE = 'OLD_DATE'

export const PRICE_FILTER = {
  type: [LOW_PRICE, HIGH_PRICE],
  name: 'цена'
}

export const DISCOUNT_FILTER = {
  type: [MAX_DISCOUNT, MIN_DISCOUNT],
  name: 'скидка'
}

export const DATE_FILTER = {
  type: [NEW_DATE, OLD_DATE],
  name: 'дата'
}

export const FILTER_QUERY_NAME = 'filterType';

export const getFilteredProducts = ([...products], filterType) => {
  switch (filterType) {
    case HIGH_PRICE:
      return products.sort((a, b) => b.price * ((100 - b.discount) / 100) - a.price * ((100 - a.discount) / 100))
    case LOW_PRICE:
      return products.sort((a, b) => a.price * ((100 - a.discount) / 100) - b.price * ((100 - b.discount) / 100))
    case MAX_DISCOUNT:
      return products.filter((product) => !!product.discount).sort((a, b) => a.discount - b.discount)
    case MIN_DISCOUNT:
      return products.filter((product) => !!product.discount).sort((a, b) => b.discount - a.discount)
    case OLD_DATE:
      return products.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
    case NEW_DATE:
      return products.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    
    default:
      break;
  }
}
