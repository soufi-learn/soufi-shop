import { shorten } from "../helper/function";

const CartItem = ({ item, removeItem, index }) => {

    return (
        <tr className="cart-row">
            <td>{index + 1}</td>
            <td><img src={item.img} alt={shorten(item.name)} className="cart-img" /></td>
            <td>{shorten(item.name)}</td>
            <td>{item.price}$</td>
            <td>
                <button
                    className="text-red-500 transition-all hover:rotate-12 hover:scale-105 hover:text-red-600 "
                    onClick={() => removeItem(item.id)}>
                    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </button>
            </td>

        </tr>);
}

export default CartItem;