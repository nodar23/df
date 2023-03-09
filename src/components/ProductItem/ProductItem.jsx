import { useSelector } from "react-redux";
import "./index.css";

export const ProductItem = ({name, pictures, price, wight, id}) => {
  
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