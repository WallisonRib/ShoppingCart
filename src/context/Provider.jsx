import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'

function Provider({ children }) {

    const [products, setProducts] = useState([]);
    const [carregando, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
 
    const value = {
        products,
        setProducts,
        carregando, 
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;