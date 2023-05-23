import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import apiURL from '../api';


export const App = () => {
	const [items, setItems] = useState([]);
	const [category, setCategory] = useState([]);
	const [isCategoryVisible, setIsCategoryVisible] = useState(false);
	const [isMenClothingVisible, setIsMenClothingVisible] = useState(false);
	const [isWomenClothingVisible, setIsWomenClothingVisible] = useState(false);
	const [isJeweleryVisible, setIsJeweleryVisible] = useState(false);
	const [isElectronicsVisible, setIsElectronicsVisible] = useState(false);
	

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
			<h1 className="title">All Products</h1>
			<div className="inventoryButtons">
				{/* <button onClick={() => {fetchItems(), setIsCategoryVisible(!isCategoryVisible)}}>{isCategoryVisible ? 'All Categories' : 'All Categories'}</button> */}
				<button onClick={() => {fetchCategory("men's clothing"), setIsMenClothingVisible(!isMenClothingVisible)}}>{isMenClothingVisible ? "Men's Clothing" : "Men's Clothing"}</button>
				<button onClick={() => {fetchCategory("women's clothing"), setIsWomenClothingVisible(!isWomenClothingVisible)}}>{isWomenClothingVisible ? "Women's Clothing" : "Women's Clothing"}</button>
				<button onClick={() => {fetchCategory("jewelery"), setIsJeweleryVisible(!isJeweleryVisible)}}>{isJeweleryVisible ? "Jewelery" : "Jewelery"}</button>
				<button onClick={() => {fetchCategory("electronics"), setIsElectronicsVisible(!isElectronicsVisible)}}>{isElectronicsVisible ? "Electronics" : "Electronics"}</button>
			</div>

			{/* <ItemList items={items}/> */}
			<ItemList items={category}/>
		</main>
	)
}