import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Cart from '../assets/CartWidgetPhoto.png'
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity, 0)
    
    return(	
           <Link to = "/carrito">
            <div className='md:flex md:items-center md:pb-0 pb-12 absolute md:static '>
            <img src={Cart} alt="Cart" class="img-thumbnail rounded-full" width={40}/>
            <div className='text-white'>{total}</div>
            </div>
           </Link>
		)
    }