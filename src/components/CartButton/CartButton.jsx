import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartButton.css'

function CartButton() {
    return ( 
        <button
         type="button"
         className="cart_button">
            <AiOutlineShoppingCart />
            <span className='cart_status'>10</span>
         </button>
     );
}

export default CartButton;