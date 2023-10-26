import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css"
import Loading from "../Loading/Loading";

function Item() {
    const { id } = useParams();
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        fetchItem(id).then((response) => {
            setItemData(response);
            setLoading(false);
        });
    }, [id]);

    if (itemData === null) {
        return <Loading />
    }

    const { title, thumbnail, price } = itemData;

    return (

        <div className="wrap">
            <div className="container item">

                <div className="imagem">
                    <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />
                </div>

                <div className="item-description">
                    <h2>{title}</h2>
                    <h2>{price.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})}</h2>
                </div>


            </div>
        </div>

    );
}

export default Item;
