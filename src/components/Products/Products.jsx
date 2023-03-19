import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchSelector } from "../../redux/slices/filterSlice";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { withQuery } from "../../HOC/withQuery";
import { ProductItem } from "../ProductItem/ProductItem";
import { FILTER_QUERY_NAME, getFilteredProducts } from "../Filters/constants";
import { api } from "../../api/api";
import "./index.css";

function ProductsInner({ products }) {
  if (products) {
    return (
      <>
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
      </>
    )
  }
}

const ProductsInnerWithQuery = withQuery(ProductsInner)

export function Products() {
  const { token } = useSelector(getUserInfoSelector)
  const search = useSelector(getSearchSelector)
  const [searchParams] = useSearchParams()
  const currentFilterNameFromQuery = searchParams.get(FILTER_QUERY_NAME)

  const { data = [], isLoading } = useQuery({
    queryKey: ['GET_ALL_PRODUCTS', search],
    queryFn: () => api.getAllProducts(search, token),
    enabled: !!token,
  })

  let { products } = data

  if (products) {
    if (currentFilterNameFromQuery) {
      products = getFilteredProducts(products, currentFilterNameFromQuery)
    }
  }

  return <ProductsInnerWithQuery products={products} isLoading={isLoading} />
}
