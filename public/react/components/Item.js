import React from 'react';

export const Item = (props) => {

    return <div className = "products">
        {/* <p>{props.item.category}</p> */}
        <img className="itemImg" src={props.item.image} alt={props.item.name} />
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <h3>${props.item.price}</h3>
    </div>
}