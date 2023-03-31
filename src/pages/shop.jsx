import axios from 'axios';
import { useEffect, useState } from "react";
import Product from '../components/product';
import Loading from '../components/loading';

// STYLES
import '../styles/product.css';

const Shop = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // GET PRODUCTS FROM FACKE API STORE
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setError(false);
                setLoading(false);
                setProducts(response.data);
            }).catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // GROUPING PRODUCTS BY ITS CATEGORIES
    let categories = [];

    if (products) {
        categories = products.reduce((acc, product) => {
            const category = product.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {})
    }

    return (
        <div>
            {products &&
                <h2 className='mb-4 font-bold text-center text-slate-700'>Soufi Shop</h2>
            }
            <div className="products-container">


                {categories.length !== 0 &&
                    Object.entries(categories).map(([category, products]) =>
                    (
                        <div key={category}>
                            <h3 className='mb-4 font-bold text-blue-600'>{category}</h3>
                            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-9'>
                                {products.map(product => (
                                    <Product key={product.id} product={product} />
                                ))}
                            </ul>
                        </div>
                    ))
                }
                {loading && <Loading />}
                {error && <h2 className='mt-16 text-center text-red-500'>{error}!</h2>}
            </div>
        </div>
    );
}

export default Shop;