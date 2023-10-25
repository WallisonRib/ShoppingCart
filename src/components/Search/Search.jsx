import { BsSearch } from 'react-icons/bs'
import { useState, useContext } from 'react';
import './Search.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

function Search() {
    const { carregando, products} = useContext(AppContext);

    return (
        (carregando ? <Loading /> :
            <section className="products container">
                {
                    products.map((product) => <Card key={product.id} data={product}/>)
                }
            </section>
        )
    );
}

export default Search;