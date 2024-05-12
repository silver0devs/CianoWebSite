import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemList} from './ItemList';

import { getFirestore, getDoc, doc, collection, getDocs, where, query } from "firebase/firestore";

export const ItemListContainer = () => 
    {
        const [products, setProducts] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            const fetchData = async () => {
                const db = getFirestore();
                const itemsRef = id
                    ? query(collection(db, "items"), where("categoryId", "==", id))
                    : collection(db, "items");
        
                try {
                    // Fetch items
                    const itemsSnapshot = await getDocs(itemsRef);
                    const itemsData = itemsSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
        
                    setProducts(itemsData);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
        
            fetchData();
        }, [id]);

            console.log(products)
    return (
        <div class='lg:container lg:mx-auto mt-5 ...'>
                <ItemList products={products}/>
        </div>
    )
};
    