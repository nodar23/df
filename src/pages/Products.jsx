import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSearchSelector } from "../redux/slices/filterSlice";
import { getUserInfoSelector } from "../redux/slices/userInfoSlice";
import { api } from "../api";
import { withQuery } from "../HOCs/withQuery";


const Product = ({name, pictures, price, wight}) => {
  

  return (
    <>
    <div className="product">
      <img className="product__img" src={pictures} alt="product" />
        <p className="product__name">{name}</p>
        <p className="product__wight">{wight}</p>
        <p className="product__price">{price}₽</p>
        <button className="product__btn">В корзину</button>
    </div>
    </>
  )
}

const ProductsInner = ({ products }) => {
  if (products) {

    return (
          <>
            {products.products.map((product) => (
              <Product
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                pictures={product.pictures}
                wight={product.wight}
                discount={product.discount}
              />
            ))}
          </>
    )
  }
}

const ProductsInnerWithQuery = withQuery(ProductsInner);

export const Products = () => {
  const { token } = useSelector(getUserInfoSelector)
  const search = useSelector(getSearchSelector)
  const { data: products, isLoading } = useQuery({
    queryKey: ['GET_ALL_PRODUCTS', search],
    queryFn: () => api.getAllProducts(search, token),
    enabled: !!token,
  })

  return <ProductsInnerWithQuery products={products} isLoading={isLoading} />
};
