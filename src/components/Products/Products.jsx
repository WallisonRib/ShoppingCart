import { useContext, useEffect } from 'react';
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

    const { products, setProducts, carregando, setLoading} = useContext(AppContext);

    useEffect(() => {
        fetchProducts('JavaScript').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    return (
        (carregando ? <Loading /> :
            <section className="products container">
                {
                    products.map((product) => <Card key={product.id} data={product} />)
                }
            </section>
        )
    );
}

export default Products;