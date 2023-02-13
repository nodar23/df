import React from "react";

const Card = ({ name, pictures, price }) => {
    
    return <div className="card">
        <img src={pictures} alt={name} style={{ height: "100px" }} />
        <p>{name}</p>
        <p>{price} ₽</p>
        <button className="card__btn">В корзину</button>
    </div>
}


export default Card;