
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { withQuery } from "../../HOC/withQuery";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { getFavoriteSelector } from "../../redux/slices/favoriteSlice";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { api } from "../../api/api";
import "./index.css";

const emptyFavorites = (
          <div className="favorites">
              <p className="favorites__title">Избранные товары</p>
              <p className="favorites__text">увы, но тут пусто, <br />перейдите в каталог, чтобы отметить понравившиеся товары</p>
              <p className="favorites__text"> ╮( ˘ ､ ˘ )╭</p> 
              <Link className="favorites__btn" to="../catalog">Каталог</Link>
          </div>
)

const FavoritesInner = ({ products }) => {
    if (products.length === 0) {
        return emptyFavorites;
    }

    return (
    <div className="favorites">
        <p className="favorites__title">Избранные товары</p>
        <div className="favorites__list">
            {products.map((product) => (
            <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            pictures={product.pictures}
            wight={product.wight}
            discount={product.discount}
            />
            ))}
        </div>
    </div>
    )
}

const FavoritesInnerWithQuery = withQuery(FavoritesInner)

export const FavoritesPage = () => {
  const { token } = useSelector(getUserInfoSelector)
  const favoritesProduct = useSelector(getFavoriteSelector)

  const { data: products, isLoading } = useQuery({
    queryKey: ['cart', favoritesProduct],
    queryFn: () => api.getProductsByIds(favoritesProduct, token),
    keepPreviousData: true,
  })

  return (
    <FavoritesInnerWithQuery
      products={products}
      isLoading={isLoading}
    />
  )
}