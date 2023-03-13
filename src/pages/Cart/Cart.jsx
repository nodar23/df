import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { withQuery } from "../../HOC/withQuery";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { CartItem } from "../../components/CartItem/CartItem";
import { changeAllStatusOnFalse, changeAllStatusOnTrue, clearCart, getCartProductsSelector } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import "./index.css";

const CartPageInner = ({
  token, ids, products, clearCartHandler, isCheckedOnTrueHandler,
  getSumPriceAllProducts, getSumCountAllProducts, isCheckedOnFalseHandler,
}) => {

  if (!token) {
    return (
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            <div className="catr__no-auth">
                <p className="cart__no-auth-text">увы, но нет доступа к корзине товаров без авторизации</p>
                <p className="cart__no-auth-text-emo"> ╮( ˘ ､ ˘ )╭</p> 
                <Link className="cart__btn" to="/signin">Войти</Link>
            </div>
        </div>
    )
  }

  if (ids.length === 0) {
    return (
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            <div className="cart__empty">
                <p className="cart__empty-text">увы, но тут пусто, <br /> перейдите в каталог и продолжите покупки</p>
                <p className="cart__empty-text"> ╮( ˘ ､ ˘ )╭</p>
                <Link className="cart__btn" to="/catalog">Каталог</Link>
            </div>
        </div>
    )
  }

  if (products) {
    return (
        <div className="cart">
          <h2 className="cart__title">Корзина</h2>
          <div className="cart__handlers">
            <button className="cart__handlers-btn" onClick={isCheckedOnTrueHandler} type="button">выбрать все</button>
            <button className="cart__handlers-btn" onClick={isCheckedOnFalseHandler} type="button">убрать все</button>
            <button className="cart__handlers-btn" onClick={clearCartHandler} type="button">очистить корзину</button>
          </div>
          <div className="cart__columns">
            <div className="cart__column-one">
              {products.map((product) => (
                <CartItem
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  pictures={product.pictures}
                  description={product.description}
                  discount={product.discount}
                  stock={product.stock}
                  wight={product.wight}
                />
              ))}
            </div>
                <div className="cart__column-two">
                  <h3>Ваш заказ</h3>
                  <div className="cart__column-two-order">
                    <p>Количество товаров:{' '}{getSumCountAllProducts()}{' шт'}</p>
                    <p>Стоимость: {getSumPriceAllProducts()[1]}{' ₽'}</p>
                    <p>Ваша выгода: {getSumPriceAllProducts()[1] - getSumPriceAllProducts()[0]}{' ₽'}</p>
                    <p className="cart__column-two-order-text">Итоговая цена: {getSumPriceAllProducts()[0]}{' ₽'}</p>
                  </div>
                  <button className="cart__btn cart__btn-order" type="button">Перейти к оформлению</button>
                </div>
          </div>
        </div>
    )
  }
}

const CartPageInnerWithQuery = withQuery(CartPageInner)

export const CartPage =() => {
    const { token } = useSelector(getUserInfoSelector)
    const dispatch = useDispatch()
    const cart = useSelector(getCartProductsSelector)
    const ids = Object.keys(cart)
    const clearCartHandler = () => {dispatch(clearCart())}
    const isCheckedOnTrueHandler = () => {dispatch(changeAllStatusOnTrue())}
    const isCheckedOnFalseHandler = () => {dispatch(changeAllStatusOnFalse())}

    const { data, isLoading } = useQuery({
    queryKey: ['cart', ids],
    queryFn: () => api.getProductsByIds(ids, token),
    keepPreviousData: true,
  })
  
    const products = data && data.filter((productFromServer) => ids.includes(productFromServer._id))

    const getSumPriceAllProducts = () => {
        if (products) {
            let sumAllProduct = 0
            let sumAllProductWithoutDiscount = 0
            products.map((product) => {
                if (cart[product._id].isChecked) {
                    const { count } = cart[product._id]
                if (product.discount) {
            const discountPrice = product.price * ((100 - product.discount) / 100)
            sumAllProduct += discountPrice * count
          } else {
            sumAllProduct += product.price * count
          }
          sumAllProductWithoutDiscount += product.price * count
          return sumAllProduct
        }
      })
      return [sumAllProduct, sumAllProductWithoutDiscount]
    }
  }
  const getSumCountAllProducts = () => {
    if (products) {
      let sumCount = 0
      products.map((product) => {
        if (cart[product._id].isChecked) {
          sumCount += cart[product._id].count
        }
      })
      return sumCount
    }
    return 0
  }

  return (
    <CartPageInnerWithQuery
      products={products}
      token={token}
      ids={ids}
      isLoading={isLoading}
      clearCartHandler={clearCartHandler}
      isCheckedOnTrueHandler={isCheckedOnTrueHandler}
      isCheckedOnFalseHandler={isCheckedOnFalseHandler}
      getSumPriceAllProducts={getSumPriceAllProducts}
      getSumCountAllProducts={getSumCountAllProducts}
    />
  )
}