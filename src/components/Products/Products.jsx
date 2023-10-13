import { useEffect, useState } from 'react';
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import Card from '../Card/Card';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('biz').then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <section className="products container">
            {
                products.map((product) => <Card key={product.id} data ={product}/>)
            } 
            </section>

    );
}

export default Products;