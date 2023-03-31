import { shorten } from "../helper/function";
import ModalBox from "./productModal";


// CONTEXT
import { useContext, useState } from "react";
import { shopContext } from "../context/shopContext";

const Product = ({ product }) => {
    const { addToCart } = useContext(shopContext);
    const [showModal, setShowModal] = useState(false);

    const addProduct = (e) => {
        addToCart({
            id: product.id,
            name: product.title,
            img: product.image,
            price: product.price
        });
    }

    return (
        <section className="shadow-lg product-box">
            <img src={product.image} alt={shorten(product.title)} className='cursor-pointer product-box-img' loading="lazy"
                onClick={() => setShowModal(true)} />
            <hr className="my-4" />
            <div className="product-info">
                <p className="font-bold text-green-700">{product.price}$</p>
                <p className="text-xl cursor-pointer product-name"
                    onClick={() => setShowModal(true)}>{shorten(product.title)}</p>
            </div>
            <button
                className='rounded bg-gradient-to-b from-blue-500 to-blue-700 product-add-btn hover:to-blue-500 hover:from-blue-700'
                onClick={addProduct}>
                Add To Cart
            </button>

            {/* RATE */}
            <div className="bg-yellow-400 rating-box">
                <svg className="text-white" viewBox="0 0 24 24" width="21" height="21" stroke="currentColor" strokeWidth="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <p className="rate-text">{product.rating.rate}</p>
            </div>

            {/* MODAL */}
            {showModal && (
                <ModalBox
                    data={product}
                    onClose={setShowModal}
                    addToCart={addToCart}
                    showModal={showModal}
                />
            )}

        </section>);
}

export default Product;