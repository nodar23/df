import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSearchSelector } from "../../redux/slices/filterSlice";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { api } from "../../api";
import { withQuery } from "../../HOCs/withQuery";
import "./index.css";

const ProductsInner = ({ products }) => {
  if (products) {

    return (
          <>
            {products.products.map((product) => (
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
