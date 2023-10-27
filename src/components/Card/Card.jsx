import './Card.css'
import propTypes from 'prop-types'
import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';


function Card({ data, showLink = true }) {

    const { title, thumbnail, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext);

        const handleAddCart = () => {
            setCartItems([...cartItems, data]);
        };

    return (
        <section className="Card">

        <Link className='link' to={`/item/${data.id}`}>  
        
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="product"
                className='Card_image'
            />

            <div className="card_info">
                <h2 className="card_price">{price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>
                <h2 className="card_title">{title}</h2>

            </div>
            </Link>
            <button
                type='button'
                className='card_button'
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill />
                </button>
         
        </section >  
    );

}

export default Card;

Card.propTypes = {
    data: propTypes.shape({}),
}.isRequired;