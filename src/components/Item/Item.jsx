import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css"

function Item() {
    const { id } = useParams();
    const [itemData, setItemData] = useState(null); 

    useEffect(() => {   
        fetchItem(id).then((response) => {
            setItemData(response);
        });
    }, [id]); 

    if (itemData === null) {
        return <div>Carregando...</div>;
    }

    const { title, thumbnail, price } = itemData;

    return (
        <div className="container item">
            <h2>{title}</h2>
            <img src={thumbnail} alt={title} />
            <p>Preço: {price}</p>
        </div>
    );
}

export default Item;
