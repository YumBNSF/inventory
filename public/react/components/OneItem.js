import React, {useEffect, useState} from 'react';
import apiURL from "../api";

export const OneItem = ({itemReturn}) => {
    // for dropdown
    const [open, setOpen] = useState(false);
    const [itemsBeenDeleted, setItemsBeenDeleted] = useState(false)

    // onclick function for the delete button
    async function deleteSingleItem(itemId){
        await fetch(`${apiURL}/${itemId}`, {
            method: 'DELETE'
        });
        // sets useState to true if the button is clicked
        setItemsBeenDeleted(true);
    }

    // onclick function for dropdown
    const handleOpen = () => {
        setOpen(!open);
    };
    
    // determines if there is an item by targeting item id, b/c all items have id
    if(!itemReturn.id){
        return <></>
    // once item has been deleted variable is going to be true
    }else if(itemsBeenDeleted){
        return <>Item is successfully Deleted!</>
    } else {
        return (
            <>
                <div className = "products">
                    <h3>Item Stock Number {itemReturn.id}</h3>
                    <img className="itemImg" src={itemReturn.image} alt={itemReturn.name} />
                    <h2>{itemReturn.title}</h2>
                    <p>{itemReturn.description}</p>
                    <h3>${itemReturn.price}</h3>
                    <div>
                        <button onClick={handleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </button>
                        {open ? (
                            <div>
                                <button onClick={()=>deleteSingleItem(itemReturn.id)}>Delete</button>
                                <button onClick={()=>deleteSingleItem(itemReturn.id)}>Edit</button>
                            </div>
                            ):(
                            <div></div>)}

                    </div>
                </div>
            </>
        )
    }
    
}
