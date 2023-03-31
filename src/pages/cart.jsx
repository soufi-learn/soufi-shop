import { useContext, useEffect } from "react";
import { shopContext } from "../context/shopContext";
import CartItem from "../components/cartItem";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// STYLE
import '../styles/cart.css';

const Cart = () => {
    const { filteredCartItems, removeItem, checkOut } = useContext(shopContext);
    const navigate = useNavigate();
    // Calculate the total price of all items
    const totalPrice = filteredCartItems.reduce((acc, item) => acc + item.price, 0);

    // CHECKOUT
    const checkoutHandler = () => {
        swal({
            title: "Are you sure to Checkout?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    checkOut()
                }
            });
    }

    return (
        <div>
            {filteredCartItems.length !== 0 &&
                <h2 className='mb-4 font-bold text-center text-slate-700'>Shopping Cart</h2>
            }

            <div className="cart-container">
                {filteredCartItems.length !== 0 ?
                    <table className="shadow-md cart-table">
                        <thead>
                            <tr className="cart-row bg-slate-100">
                                <th>ID</th>
                                <th>image</th>
                                <th>name</th>
                                <th>price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredCartItems.map((item, index) =>
                                <CartItem key={item.id} removeItem={removeItem} item={item} index={index} />
                            )}
                        </tbody>
                    </table> :

                    <h2 className="mt-8 text-center text-red-500">Shopping cart is Empty!</h2>
                }
                {filteredCartItems.length !== 0 &&
                    <div className="w-full bg-yellow-400 sm:w-1/2 lg:w-1/3 checkout">
                        <h3>Total Price: {totalPrice}$</h3>
                        <hr />
                        <button
                            type="button"
                            onClick={() => navigate('/shop')}
                            className="mb-4 bg-white shadow checkout-box-btn hover:bg-gray-100">Continue Shopping</button>

                        <button
                            type="button"
                            onClick={checkoutHandler}
                            className="text-white bg-green-600 shadow checkout-box-btn hover:bg-green-700">Checkout</button>

                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;