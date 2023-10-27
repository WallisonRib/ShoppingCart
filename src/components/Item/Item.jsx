import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css"
import Loading from "../Loading/Loading";
import AppContext from '../../context/AppContext';


function Item() {
    const { id } = useParams();
    const [itemData, setItemData] = useState(null);
    const { carregando, setLoading, setCartItems, cartItems } = useContext(AppContext);

    useEffect(() => {
        fetchItem(id).then((response) => {
            setLoading(true);
            setItemData(response);
            setLoading(false);
        });
    }, [id]);

    if (itemData === null) {
        return <Loading />
    }

    const handleAddCart = () => {
        setCartItems([...cartItems, itemData]);
    };

    const { condition, sold_quantity, title, thumbnail, original_price, price } = itemData;
    console.log(itemData);


    return (
        (carregando ? <Loading /> :
            <div className="wrap">
                <div className="container item">

                    <div className="imagem">
                        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />
                    </div>

                    <div className="item-description">
                        <div className="priceandsold">
                            {condition === "new" ? <p className="condition">Novo</p> : <p className="condition">Usado</p>} {sold_quantity > 0 && <p className="sold_quantity"> | +{sold_quantity} vendidos</p>}
                        </div>
                        <h2>{title}</h2>
                        <div className="price">
                            {original_price != null && <h2 className="pricepromo"><s>{original_price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</s></h2>}

                            <h2 className="pricecurrency">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
                        </div>
                        <input className="addcart"
                        type="button"
                        value="ADICIONAR AO CARRINHO"
                        onClick={handleAddCart}

                    />
                    </div>
                    
                </div>
            </div>
        )
    );
}

export default Item;
