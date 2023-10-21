import "./CartItem.css"
import propTypes from 'prop-types'
import { useContext } from "react";
import {MdRemoveShoppingCart} from 'react-icons/md'
import AppContext from "../../context/AppContext";

function CartItem( { data }) {

    const { id, title, thumbnail, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext)

    const handleRemoveItem = () =>{
        const updateditems = cartItems.filter((item) => item.id != id)
        setCartItems(updateditems);
    };

    
    return (  
        <section className="cart-items">
            <img src={thumbnail}
             alt="imagem do produto"
             className="cartitemimage" />
            <div className="cartitemcontent">
                <h3 className="cartitemtitle">{title}</h3>
                <h3 className="caritemprice">{price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</h3>
                <button type="button"
                className="cartitembutton"
                onClick={handleRemoveItem}>
                   <MdRemoveShoppingCart/>
                </button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data : propTypes.object
}.isRequired;

