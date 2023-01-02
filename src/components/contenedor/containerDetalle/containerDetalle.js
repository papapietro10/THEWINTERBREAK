import { useState, useEffect } from "react";
import './containerDetalle.css';
import { ItemDetail } from "../DetalleProducto/DetalleProducto";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Utils/firebase";


export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});
    useEffect(()=>{
        const queryRef = doc(db,"items",productId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            //console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
      
    },[productId])

    return(
        <div className="item-detail-container"  >
       
            <ItemDetail className="itemdetail" item={item}/>
            

        </div>
       
    )
}