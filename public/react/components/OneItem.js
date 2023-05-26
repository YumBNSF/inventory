import React, {useEffect, useState} from 'react';
import apiURL from "../api";




export const OneItem = ({itemReturn}) => {
    // for dropdown
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false); 
    const [itemsBeenDeleted, setItemsBeenDeleted] = useState(false)
    const [title, setTitle] = useState(itemReturn.title);
    const [description, setDescription] = useState(itemReturn.description);
    const [category, setCategory] = useState(itemReturn.category);
    const [image, setImage] = useState(itemReturn.image);
    const [price, setPrice] = useState(itemReturn.price);
    const[newPost, setNewPost] = useState(false);



    async function submitHandler(e) {

        e.preventDefault();
        const newItem = {
          title,
          description,
          category,
          image,
          price
        };

        await fetch(`${apiURL}/items/${itemReturn.id}`, {
          method: "PUT",
          headers: {"Content-type" : "application/json"},
          body: JSON.stringify(newItem)
        });

        setTimeout(function (){
            window.location.reload();
        }, 500);

    
        setNewPost(true)
        setTitle("");
        setDescription("");
        setCategory("");
        setImage("");
        setPrice("");
      }

    // onclick function for the delete button
    async function deleteSingleItem(itemId){
        await fetch(`${apiURL}/items/${itemId}`, {
            method: 'DELETE'
        });
        // sets useState to true if the button is clicked
        setItemsBeenDeleted(true);
    }


    // onclick function for dropdown
    const handleOpen = () => {
        setOpen(!open);
    };

    // onclick function for edit dropdown
    const handleEditOpen = () => {
        setEditOpen(!editOpen);
    }
    
    // determines if there is an item by targeting item id, b/c all items have id
    if(!itemReturn.id){
        return <></>
    // once item has been deleted variable is going to be true
    }else if(itemsBeenDeleted){
        setTimeout(function (){
            window.location.reload();
        }, 1000);
        return <div className="deleteMessage">Item successfully deleted!</div>



    } else {
        return (
            <>
                <div className = "productsOneItem">
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
                                <button className="deleteEditButton" onClick={()=>deleteSingleItem(itemReturn.id)}>Delete</button>
                                <button className="deleteEditButton" onClick={handleEditOpen}>Edit</button>
                                {editOpen ? ( 
                                <form onSubmit = {submitHandler}>
                                    <input 
                                            type = "text" 
                                            placeholder = "title"
                                            value = {title}
                                            onChange = {(e) => setTitle(e.target.value)}
                                            defaultValue={itemReturn.title}
                                        />
                                        <input
                                            type = "text" 
                                            placeholder = "Description" 
                                            value = {description}
                                            onChange = {(e) => setDescription(e.target.value)}
                                            defaultValue={itemReturn.description}
                                        />
                                        <input
                                            type = "text" 
                                            placeholder="Category" 
                                            value = {category}
                                            onChange = {(e) => setCategory(e.target.value)}
                                            defaultValue={itemReturn.category}
                                        />  
                                        <input
                                            type = "text" 
                                            placeholder="Image" 
                                            value = {image}
                                            onChange = {(e) => setImage(e.target.value)}
                                            defaultValue={itemReturn.image}
                                        />            
                                        <input
                                            type = "text" 
                                            placeholder="Price" 
                                            value = {price}
                                            onChange = {(e) => setPrice(e.target.value)}
                                            defaultValue={itemReturn.price}
                                        />                  
                    <button type = "Submit">Submit</button>
                    </form>):(<div></div>)}
                            </div>):(<div></div>)}

                    </div>
                </div>
            </>
        )
    }
    
}
