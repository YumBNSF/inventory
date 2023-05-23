import React from 'react';

export const OneItem = ({itemReturn}) => {
    

    if(!itemReturn.id)
    {
        return <></>
    }

    else
    {
        return (
            <>
                <div className = "products">
                    <h3>Item Stock Number {itemReturn.id}</h3>
                    <img className="itemImg" src={itemReturn.image} alt={itemReturn.name} />
                    <h2>{itemReturn.title}</h2>
                    <p>{itemReturn.description}</p>
                    <h3>${itemReturn.price}</h3>
                </div>
    
             
            </>
        )
    }
    
}
