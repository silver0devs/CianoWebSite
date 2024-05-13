import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { Link } from 'react-router-dom';

const initialValues = {
    businessname : "",
    name: "",
    phone: "",
    email: "",
    //address: ""
}    
export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext(CartContext)

    const total = () => 
        items.reduce((acc, i) => acc + i.quantity * i.item.price, 0);

    const handleChange = (ev) => {
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubmit = () => {
        const order = {
            buyer: values,
            items: items,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({id}) => {
                if(id){
                    alert("Su orden: " + id + "ha sido completada!");
                }
            })
            .finally(() => {
            clear();
            setValues(initialValues);
    })
    }
    
    const handleRemove = (id) => {removeItem(id)}
    const handleClear = () => clear();

    return(
        <>
        
        <div class="container">
            <h5 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900">Products</h5>
            {items.map((i) => {
                return(
                    <a key = {i.item.id} class="block max-w-sm p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.item.title}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Tiempo: {i.item.deliveryTime} dias</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">$ {i.item.price}</p>
                        <Link onClick={() => handleRemove(i.item.id)}>Eliminar</Link>
                    </a>
                        )
                
            })}
            <div><p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900">Total: {total()}</p>
            <button onClick={handleClear} 
            class="mb-8 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-gray-800"
            >Vaciar</button>
            </div>
        </div> 

        {items?.length > 0 && (  
        <form class="max-w-sm mx-auto">
            <div class="mb-5">
                <label for="businessname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Nombre del emprendimiento:</label>
                <input type="name" 
                value={values.businessname}
                name="businessname"
                onChange={handleChange}
                id="businessname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre emprendimiento" required />
            </div>
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Nombre del solicitante:</label>
                <input type="name" 
                value={values.name}
                name="name"
                onChange={handleChange}
                id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre emprendedor" required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Email:</label>
                <input type="email" 
                value={values.email}
                name="email"
                onChange={handleChange}
                id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
            </div>
            <div class="mb-5">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Celular:</label>
                <input type="phone" 
                value={values.phone}
                name="phone"
                onChange={handleChange}
                id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nro celular" required />
            </div>
            {/*<div class="mb-5">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Direccion:</label>
                <input type="text" 
                value={values.address}
                name="address"
                onChange={handleChange}
                id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="direccion" required />
            </div>*/}
            <button type="submit" 
            onClick={handleSubmit}
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Enviar</button>
        </form>
            
            )}
        </>
    )
}











