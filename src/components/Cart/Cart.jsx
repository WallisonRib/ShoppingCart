import CartItem from "../CartItem/CartItem";
import "./Cart.css"

function Cart() {
    return (  
        <section className="cart">
            <div className="cartitems"> <CartItem/> </div>

            <div className="cartresume">Resumo</div>
        </section>

    );
}

export default Cart; 