import React from "react";
import { createPortal } from "react-dom";
import { shorten } from "../helper/function";
import '../styles/modal.css';

const ModalBox = ({ data, onClose, addToCart, showModal }) => {
    function handleClickOutside(event) {
        if (event.target.classList.contains('modal')) {
            onClose(false);
        }
    }

    const addProductFromModal = () => {
        addToCart({
            id: data.id,
            name: data.title,
            img: data.image,
            price: data.price
        });

        onClose(false);
    }

    return createPortal(
        <div className="modal-wrapper">
            <div className={`modal ${showModal ? 'show-modal' : ''}`}
                onClick={handleClickOutside}>
                <div className="modal-content">
                    <span className="close" onClick={() => onClose(false)}>
                        &times;
                    </span>
                    <div className="flex justify-between py-5 modal-inner">
                        <img src={data.image} alt={shorten(data.title)} className='w-1/2 mr-6 lg:w-1/4' />
                        <div>
                            <h2 className="text-2xl lg:text-4xl">{shorten(data.title)}</h2>
                            <hr />
                            <p className="mt-4 text-xl leading-8 text-slate-600">{data.description}</p>
                            <button className="px-4 py-2 text-white bg-blue-500 rounded modal-add-btn mt-7 hover:bg-blue-600"
                                onClick={addProductFromModal}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('modal-root'));
}

export default ModalBox;