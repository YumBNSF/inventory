import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import apiURL from '../api';


export const App = () => {
	const [items, setItems] = useState([]);
	const [category, setCategory] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			setItems(itemData);
			console.log("item" + itemData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchCategory(category){
		try {
			const response = await fetch(`${apiURL}/items/${category}`);
			const categoryData = await response.json();

			setCategory(categoryData);
			console.log("item" + categoryData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
		fetchCategory();
	}, []);

	console.log(items);
	console.log(category);




	return (
		<main>
			<h1 className = "title">Inventory</h1>
			<div className = "inventoryButtons">
				<button onClick ={() => fetchItems()}><h3>All Categories</h3></button>
				<button onClick = {() => fetchCategory("men's clothing")}><h3>Men's Clothing</h3></button>
				<button onClick = {() => fetchCategory("women's clothing")}><h3>Women's Clothing</h3></button>
				<button onClick = {() => fetchCategory("jewelery")}><h3>Jewelery</h3></button>
				<button onClick = {() => fetchCategory("electronics")}><h3>Electronics</h3></button>
			</div>

			<ItemList items={items}/>
			<ItemList items={category}/>
		</main>
	)
}