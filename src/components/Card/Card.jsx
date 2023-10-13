import './Card.css'
import propTypes from 'prop-types'
import {BsFillCartPlusFill} from 'react-icons/bs'



function Card({ data }) {

    const {title, thumbnail, price}  = data;

    return ( 
        <section className="Card">

            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
             alt="product"
             className='Card_image' 
             />

             <div className="card_info">
                <h2 className="card_price">{price.toLocaleString('pt-br',{
                    style: 'currency',
                    currency : 'BRL'
                })}</h2>
                <h2 className="card_title">{title}</h2>
               
             </div>
             <button type='button' className='card_button'><BsFillCartPlusFill/></button>


        </section>
     );
}

export default Card;

Card.propTypes = {
    data: propTypes.shape({}),
}.isRequired;