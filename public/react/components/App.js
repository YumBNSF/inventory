import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import {ItemList} from "./ItemList";

export const App = () => {

	// const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);

	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/sauces`);
	// 		const saucesData = await response.json();
	//
	// 		setSauces(saucesData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();

			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      {/*<h1>Sauce Store</h1>*/}
		{/*	<h2>All things 🔥</h2>*/}
		{/*	<SaucesList sauces={sauces} />*/}
			<h1>Inventory</h1>
			<h2>All Items</h2>
			<ItemList items={items}/>
		</main>
	)
}