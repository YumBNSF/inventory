import React from 'react';

export const Item = (props) => {

    return <>
        <p>{props.item.category}</p>
        <img className="itemImg" src={props.item.image} alt={props.item.name} />
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <p>{props.item.price}</p>
    </>
}