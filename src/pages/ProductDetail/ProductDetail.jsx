import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { addNewProductInCart, deleteProductInCart, getCartProductsSelector  } from "../../redux/slices/cartSlice";
import { addFavoriteProduct, deleteFavoriteProduct, getFavoriteSelector } from "../../redux/slices/favoriteSlice";
import { withQuery } from "../../HOC/withQuery";
import { api } from "../../api/api";
import LikeOnLogo from "../../assets/img/likeon.svg";
import LikeOffLogo from "../../assets/img/likeoff.svg";
import CartOnLogo from "../../assets/img/carton.svg";
import CartOffLogo from "../../assets/img/cartoff.svg";
import "./index.css";

const ProductDetailInner = ({
  product,
  addNewProductInCartHandler,
  deleteProductInCartHandler,
  addNewProductInFavoriteHandler,
  deleteProductInFavoriteHandler,
  checkProductInFavorite,
  checkProductInCart
}) => {

  if (product) {
    const sumRate = product.reviews.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0)
    const middleRate = sumRate / product.reviews.length
    const discountPrice = product.price * ((100 - product.discount) / 100)
    
    return (
      <div className="product-detail">
        <p className="product-detail__title">Подробная информация о товаре</p>
        <div className="product-detail__columns">

          <div className="product-detail__column-one">
            <img className="product-detail__img" src={product.pictures} alt="pictures" />
          </div>

          <div className="product-detail__column-two">

            <p className="product-detail__name">{product.name}</p>
            <p>Рейтинг:{' '} {middleRate.toFixed(1)} {' '} / 5</p>
            <p>Описание: {product.description}</p>
            <p>Количество/вес: {product.wight}</p>
            <p>{product.discount ? (<span>Скидка:{' '}{product.discount}%</span>) : ''}</p>
            <p className="product-detail__price">Цена: {discountPrice} {' ₽'} <span className="product-detail__old-price">{discountPrice === product.price ? ' ' : product.price.toString() + ' ₽' }</span></p>
            
            <div>
              {checkProductInFavorite
                ? <button className="product-detail__btn" onClick={deleteProductInFavoriteHandler} type="button">
                  <img width="50px" src={LikeOnLogo} alt="likeon" />
                  </button>
                : <button className="product-detail__btn" onClick={addNewProductInFavoriteHandler} type="button">
                  <img width="50px" src={LikeOffLogo} alt="lokeoff" />
                  </button>}
            </div>
            
            <div>
              {checkProductInCart
                ? <button className="product-detail__btn" onClick={deleteProductInCartHandler} type="button">
                  <img width="50px" src={CartOnLogo} alt="likeoff" />
                  </button>
                : <button className="product-detail__btn" onClick={addNewProductInCartHandler} type="button">
                  <img width="50px" src={CartOffLogo} alt="likeoff" />
                  </button>}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const ProductDetailWithQuery = withQuery(ProductDetailInner)

export const ProductDetail = () => {
  const { productID } = useParams()
  const dispatch = useDispatch()
  const { token } = useSelector(getUserInfoSelector)
  const favoriteProduct = useSelector(getFavoriteSelector)
  const cartProduct = useSelector(getCartProductsSelector)

  const checkProductInFavorite = favoriteProduct.find((id) => id === productID)
  const checkProductInCart = Object.keys(cartProduct).find((id) => id === productID)

  const addNewProductInCartHandler = () => {
    dispatch(addNewProductInCart(productID))
  }

  const deleteProductInCartHandler = () => {
    dispatch(deleteProductInCart(productID))
  }

  const addNewProductInFavoriteHandler = () => {
    dispatch(addFavoriteProduct(productID))
  }

  const deleteProductInFavoriteHandler = () => {
    dispatch(deleteFavoriteProduct(productID))
  }

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productID],
    queryFn: () => api.getProductsById(productID, token),
    enabled: !!token,
  })

  return (
    <ProductDetailWithQuery
      isLoading={isLoading}
      product={product}
      checkProductInFavorite={checkProductInFavorite}
      checkProductInCart={checkProductInCart}
      addNewProductInCartHandler={addNewProductInCartHandler}
      deleteProductInCartHandler={deleteProductInCartHandler}
      addNewProductInFavoriteHandler={addNewProductInFavoriteHandler}
      deleteProductInFavoriteHandler={deleteProductInFavoriteHandler}
    />
  )
}
