import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import apiURL from '../api';


export const Item = (props) => {

    const [idItem, setIdItem] = useState([]);

    async function fetchId(id){
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const idItemData = await response.json();
            console.log(idItemData);
			setIdItem(idItemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    

    useEffect(() => {
		fetchId();
	}, []);

    return (
        <>
            <div className = "products">
                <button onClick = {() => fetchId("id")}>Item Stock Number: {props.item.id}</button>
                <img className="itemImg" src={props.item.image} alt={props.item.name} />
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
                <h3>${props.item.price}</h3>
            </div>

            <ItemList items={idItem}/>
        </>
    )
}

