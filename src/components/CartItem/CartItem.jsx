import { useDispatch, useSelector } from "react-redux";
import { changeStatusIsChecked, countDecrement, countIncrement, deleteProductInCart, getCartProductsSelector } from "../../redux/slices/cartSlice";
import "./index.css";

export const CartItem = ({ id, name, pictures, price, wight, stock, discount }) => {
  const discountPrice = price * ((100 - discount) / 100)
  const cart = useSelector(getCartProductsSelector)
  const { isChecked } = cart[id]
  const { count } = cart[id]
  const priceForStock = price * count
  const discountPriceForStock = discountPrice * count

  const dispatch = useDispatch()

  const countIncrementHandler = () => {
      dispatch(countIncrement(id))
  }

  const changeStatusCheckbox = () => {
    const target = Object.keys(cart).find((currentID) => currentID === id)
    dispatch(changeStatusIsChecked(target))
  }

  const countDecrementHandler = () => {
    return dispatch(countDecrement(id))
  }

  const deleteProductInCartHandler = () => {
    return dispatch(deleteProductInCart(id))
  }

  return (
    <div className="cart-item">

      <div className="cart-item__column-one">
        <img src={pictures} alt="product" />
      </div>

      <div className="cart-item__column-two">
        <p className="cart-item__column-two-name">{name}</p>
        <p className="cart-item__column-two-in-stock">в наличии:{' '}{stock}{' '}шт{' '}</p>
        <p className="cart-item__column-two-wight">{wight}</p>
      </div>

      <div className="cart-item__column-three">
          <button className="cart__btn" disabled={count === 1} onClick={countDecrementHandler} type="button">-</button>
          <span>{count}</span>
          <button className="cart__btn" disabled={count >= stock} onClick={countIncrementHandler} type="button">+</button>
      </div>

      <div className="cart-item__column-four">
        <p className="cart-item__column-four-price">{discountPriceForStock} {' ₽'}</p>
        <p className="cart-item__column-four-old-price">{discountPriceForStock === priceForStock ? ' ' : priceForStock.toString() + ' ₽' }</p>
      </div>

      <div className="cart-item__column-five"> 
        <input type="checkbox" onChange={changeStatusCheckbox} checked={isChecked} />
      </div>

      <div className="cart-item__column-six">
        <button onClick={deleteProductInCartHandler} type="button">&#10005;</button>
      </div>

    </div>
  )
}
