import { useEffect, useState } from 'react';
import {CartWidget} from './CartWidget';

import { Link } from 'react-router-dom';

import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export const NavBar = () => {

    let Links =[
        {name:"DESARROLLOS",link:"/CianoWebSite"},
        {name:"CAMP. PUBLICITARIAS",link:"/CianoWebSite"},
        {name:"CONTACTO",link:"/CianoWebSite/contacto"},
      ];
      let [open, setOpen] =useState(false);

    return(
        
       
        <div className='shadow-md w-full fixed top-0 left-0'>
        <div class='md:flex items-center justify-between dark:bg-gray-900 py-4 md:px-10 px-7'>
         {/* logo section */}
         <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
         <Link  to={'/'} style={{ textDecoration: 'none'}}><div class='font-normal text-gray-200'>Ciano Soluciones</div></Link>
             
         </div>
         {/* Menu icon */}
         <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
             {
                 open ? <XMarkIcon/> : <Bars3BottomRightIcon />
    }
         </div>
         {/* linke items */}
         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static dark:text-gray-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 dark:bg-gray-900' : 'top-[-490px]'}`}>
             {
                 Links.map((link) => (
                 <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                     <Link to = {link.link}><a className='text-white hover:text-blue-400 duration-500'>{link.name}</a></Link>
                 </li>))
             }
             <li className='md:ml-8 md:my-0 my-7 font-semibold flex justify-center'><CartWidget/></li>
         </ul>
         {/* button */}
         
        </div>
     </div>
  )
}

    