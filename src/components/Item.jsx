import { useState, useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export const Item = ({ product}) => {
    
    const {addItem} = useContext(CartContext);

    const [isDisabled, setDisabled] = useState(false);

    const onAdd = () => {
        addItem(product, 1);
        setDisabled(true)
    };

    return(
<>

    <div class="max-w-sm m-4 overflow-hidden shadow-lg">
    <img class="bg-white object-scale-down h-48 w-full" src={product.image} alt="ilustrativa"/>
    <div class="px-6 py-4">
        <div class="text-white font-bold text-xl mb-2">{product.title}</div>
        <p class="text-gray-200 text-base">{product.description}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {product.price}</span>
        <div>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded-lg" 
                onClick={() => onAdd(product)}
                disabled={isDisabled}>Agregar al carrito</button>
        </div>
    </div>
    </div>



    {/*<Card className="text-center" style={{ width: '20rem', background:'grey'}}>
      
      <Card.Body>
        <Card.Title></Card.Title>
        <Image style={{ height: 300, width: 180 }} src={product.image} thumbnail/>
        <Card.Text></Card.Text>
        <Card.Text>{product.category}</Card.Text>
        <Link to={`/ProyectoFinalReact/item/${product.id}`}>
            <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>*/}
</>
)}