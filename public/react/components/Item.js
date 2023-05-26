import React from 'react';

export const Item = (props) => {

    return (
        <>
            <div className = "products">
                {/* <h3>Item Stock Number {props.item.id}</h3> */}
                <img className="itemImg" src={props.item.image} alt={props.item.name} />
                <h2 className="itemTitle">{props.item.title}</h2>
                <h2>${props.item.price}</h2>
                {/* <p>{props.item.description}</p>
                <h3>${props.item.price}</h3> */}
            </div>

         
        </>
    )
}

