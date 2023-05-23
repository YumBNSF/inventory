import React, { useState, useEffect } from 'react';
import {ItemList} from "./ItemList";
import apiURL from '../api';


export const Item = (props) => {

    return (
        <>
            <div className = "products">
                <h3>Item Stock Number {props.item.id}</h3>
                <img className="itemImg" src={props.item.image} alt={props.item.name} />
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
                <h3>${props.item.price}</h3>
            </div>

         
        </>
    )
}

