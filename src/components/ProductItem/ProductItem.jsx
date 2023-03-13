import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProductInCart, deleteProductInCart, getCartProductsSelector } from "../../redux/slices/cartSlice";
import { addFavoriteProduct, deleteFavoriteProduct, getFavoriteSelector } from "../../redux/slices/favoriteSlice";
import classNames from "classnames";
import CartOnLogo from "../../assets/img/carton.svg";
import CartOffLogo from "../../assets/img/cartoff.svg";
import LikeOnLogo from "../../assets/img/likeon.svg";
import LikeOffLogo from "../../assets/img/likeoff.svg";
import "./index.css";

export const ProductItem = ({ id, name, pictures, price, discount, wight }) => {
  const dispatch = useDispatch()
  const cartProduct = useSelector(getCartProductsSelector)
  const favoriteProduct = useSelector(getFavoriteSelector)

  const addNewProductInCartHandler = (ev) => {
    dispatch(addNewProductInCart(id))
    ev.stopPropagation()
  }
  const deleteProductInCartHandler = (ev) => {
    dispatch(deleteProductInCart(id))
    ev.stopPropagation()
  }
  const addNewProductInFavoriteHandler = (ev) => {
    dispatch(addFavoriteProduct(id))
    ev.stopPropagation()
  }
  const deleteProductInFavoriteHandler = (ev) => {
    dispatch(deleteFavoriteProduct(id))
    ev.stopPropagation()
  }

  const checkProductInCart = Object.keys(cartProduct).find((productID) => productID === id)
  const checkProductInFavorite = favoriteProduct.find((productID) => productID === id)
  const discountPrice = price * ((100 - discount) / 100)
  const navigate = useNavigate();

  return (
    <div className="product"      
    style={{ cursor: "pointer" }}
    onClick={() => {
    navigate(`../catalog/${id}`);
     }}>
      <img className="product__img" src={pictures} alt="product" />
      <p className="product__name">{name}</p>
      <div className="product__price">
        {discount ? (<span>{discountPrice} {' ₽ '}</span>) : ''}
        <span className={classNames({ discountPrice: discount })}>{price} {' ₽  '}</span>
      </div>
      <p className="product__wight">{wight}</p>
      <div className="product-btn">
          {checkProductInCart
            ? <button className="product-btn__cart" onClick={deleteProductInCartHandler} type="button"><img className="product-btn__img" src={CartOnLogo} alt="icon" /></button>
            : <button className="product-btn__cart" onClick={addNewProductInCartHandler} type="button"><img className="product-btn__img" src={CartOffLogo} alt="icon" /></button>}
          {checkProductInFavorite
            ? <button className="product-btn__like" onClick={deleteProductInFavoriteHandler} type="button"><img className="product-btn__img" src={LikeOnLogo} alt="icon" /></button>
            : <button className="product-btn__like" onClick={addNewProductInFavoriteHandler} type="button"><img className="product-btn__img" src={LikeOffLogo} alt="icon" /></button>}
      </div>
    </div>
  )
}