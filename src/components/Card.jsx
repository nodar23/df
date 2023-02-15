import React from "react";

const Card = ({ name, pictures, price }) => {
    
    return <div className="card">
        <img className="card__item-img" src={pictures} alt={name} />
        <p className="card__item-name">{name}</p>
        <p className="card__item-price">{price} ₽</p>
        <button className="card__btn">В корзину</button>
    </div>
}


export default Card;