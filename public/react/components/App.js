import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import { OneItem } from "./OneItem"
import Form from "./Form"
import apiURL from '../api';


export const App = () => {

	// Setting Use States for category and visiblilty 
	const [category, setCategory] = useState([]);
	const [isCategoryVisible, setIsCategoryVisible] = useState(false);
	const [isMenClothingVisible, setIsMenClothingVisible] = useState(false);
	const [isWomenClothingVisible, setIsWomenClothingVisible] = useState(false);
	const [isJeweleryVisible, setIsJeweleryVisible] = useState(false);
	const [isElectronicsVisible, setIsElectronicsVisible] = useState(false);
	const [open, setOpen] = useState(false);

// Use states used with Form to ADD item
	const[newItem, setNewItem] = useState(false);


	// Fetch either all items or by category
	async function fetchItems(){
		const response = await fetch(`${apiURL}/items`);
		const categoryData = await response.json();
		setCategory(categoryData);
	}
	async function fetchCategory(category){
		try {

			if(category === ""){
				const response = await fetch(`${apiURL}/items`);
				const categoryData = await response.json();
				setCategory(categoryData);
			   } else {
				const response = await fetch(`${apiURL}/items/category/${category}`);
				const categoryData = await response.json();
				setCategory(categoryData);
			   }

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	const handleOpen = () => {
		setOpen(!open);
	};
	// Any change to a ther page Use Effect is updated updated by fetch the api
	useEffect(() => {
		fetchItems();
	}, []);

	/* still need to fix view so that only one item is on screen when selected
	// TODO:
			pass the useState as a prop  
			const [isOneItemVisible, setIsOneItmeVisible] = useState(false); <-- this is on ItemList currently
			add to the button for individual item
			*/
	return (
		<main>
			<h1 className="title">Flavorful Freighter's Inventory</h1>
			<div className="inventoryButtons">
				<button className = "menuButton" onClick={() => {fetchCategory(""), setIsCategoryVisible(!isCategoryVisible)}}>{isCategoryVisible ? 'All Categories' : 'All Categories'}</button>
				<button className = "menuButton" onClick={() => {fetchCategory("men's clothing"), setIsMenClothingVisible(!isMenClothingVisible)}}>{isMenClothingVisible ? "Men's Clothing" : "Men's Clothing"}</button>
				<button className = "menuButton" onClick={() => {fetchCategory("women's clothing"), setIsWomenClothingVisible(!isWomenClothingVisible)}}>{isWomenClothingVisible ? "Women's Clothing" : "Women's Clothing"}</button>
				<button className = "menuButton" onClick={() => {fetchCategory("jewelery"), setIsJeweleryVisible(!isJeweleryVisible)}}>{isJeweleryVisible ? "Jewelery" : "Jewelery"}</button>
				<button className = "menuButton" onClick={() => {fetchCategory("electronics"), setIsElectronicsVisible(!isElectronicsVisible)}}>{isElectronicsVisible ? "Electronics" : "Electronics"}</button>
				<button className = "menuAddButton" onClick={handleOpen}>Add Item</button>
				{open ? (
					<Form setNewItem={setNewItem}/>
				) :(<></>)}

			</div>
			{/*{window.onload = async () =>{*/}
			{/*	const response = await fetch(`${apiURL}/items`);*/}
			{/*	const categoryData = await response.json();*/}
			{/*	setCategory(categoryData);*/}
			{/*}}*/}

			<ItemList items={category}/>
		</main>
	)
}