import { Children, createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {

    const[items, setItems] = useState([]);

    const clear = () => setItems([]);

    const removeItem = (id) => {
        const filtered = items.filter((i) => i.item.id !== id);
        setItems(filtered);
        sessionStorage.setItem("cart", JSON.stringify(filtered))
    }

    const addItem = (item, quantity) => {
        const isExists = items.some((i) => i.item.id === item.id);
        if (isExists){
            const updateItems = items.map((i) => {
                if(i.item.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                }else{
                    return i;
                }
            });
            setItems(updateItems);

        }else{
        setItems([...items,{item, quantity}]);
        }
        sessionStorage.setItem("cart", JSON.stringify(items))
    }

    return(
        <CartContext.Provider value={{ addItem, clear, items, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};