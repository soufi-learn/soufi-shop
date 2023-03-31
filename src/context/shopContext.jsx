import { createContext, useState } from "react";

export const shopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    }

    const removeItem = (id) => {
        const existProducts = cartItems.filter(item => {
            return item.id !== id;
        });
        setCartItems(existProducts);
    }

    // FILTER SAME ITEMS FROM CONTEXT
    const filteredCartItems = cartItems.filter(
        (item, index, self) => {
            return index === self.findIndex((t) => t.id === item.id);
        }
    );

    // CHEKCOUT PRODUCTS
    const checkOut = () => {
        setCartItems([]);
    }
    const contextValue = { filteredCartItems, addToCart, removeItem, checkOut }
    return (
        <shopContext.Provider value={contextValue}>
            {children}
        </shopContext.Provider>
    );
}

export default ShopContextProvider;