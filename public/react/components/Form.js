import { useState } from "react";
import apiURL from '../api';

function Form({setNewItem})

    {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [category, setCategory] = useState("");
        const [image, setImage] = useState("");
        const [price, setPrice] = useState("");

        async function submitHandler(e) {
            e.preventDefault();
            const newItem = {
              title,
              description,
              category,
              image,
              price
            };

            await fetch(`${apiURL}/items`, {
              method: "POST",
              headers: {"Content-type" : "application/json"},
              body: JSON.stringify(newItem)
            });
        
            setNewItem(true)
            setTitle("");
            setDescription("");
            setCategory("");
            setImage("");
            setPrice("");
          }

        return (
                <form onSubmit = {submitHandler}>
                    <input 
                        type = "text" 
                        placeholder = "Title" 
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                    <input
                        type = "text" 
                        placeholder = "Description" 
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                    <input
                        type = "text" 
                        placeholder="Category" 
                        value = {category}
                        onChange = {(e) => setCategory(e.target.value)}
                    />  
                    <input
                        type = "text" 
                        placeholder="Image" 
                        value = {image}
                        onChange = {(e) => setImage(e.target.value)}
                    />            
                    <input
                        type = "text" 
                        placeholder="Price" 
                        value = {price}
                        onChange = {(e) => setPrice(e.target.value)}
                    />                       
                    <button type = "Submit">Submit</button>
                </form>
            )
    }

export default Form;