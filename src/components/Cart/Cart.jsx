import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

import AppContext from "../../context/AppContext";

function Cart() {

    const { cartItems, isCartVisible } = useContext(AppContext);
    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
        <div className="cartitems">
                { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>

            <div className="cartresume">{totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</div>
        </section>

    );
}

export default Cart; 