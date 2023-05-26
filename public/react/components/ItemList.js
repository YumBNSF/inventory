import React, { useState } from 'react';
import { Item } from './Item';
import { OneItem } from './OneItem';

export const ItemList = ({items}) => {

    const [itemReturn, setItemReturn] = useState([])
    const [isOneItemVisible, setIsOneItmeVisible] = useState(false);

    // cycles through array of items to return correct item according to map index
 function renderItemBasedOnIndex(indexOfItem, itemArray){
    for(let i = 0; i < itemArray.length; ++i){
     if(i === indexOfItem){
        setItemReturn(itemArray[i]);
         setTimeout(function (){
             window.scroll(0,0)
         }, 300);

     }
    }
   }

    return (
        <>
            <OneItem itemReturn={itemReturn}/>
         {/*creates a button for each item based on index/key*/}
        {
         items.map((item, idx) => {
          return(
           <button className = "itemButton" key={idx} onClick = {()=> {renderItemBasedOnIndex(idx, items) }}>
            <Item item={item} key={idx} />
           </button>
          );
         })
        }
      
         {/*passes prop data from useSate to child*/}

       </>
       );
}
