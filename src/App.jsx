import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from './contexts/CartContext';
import { Cart } from './components/Cart';
import { Principal } from './components/Principal';
import { Contact } from './components/Contact';

function App() {

  return (
    <Provider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element ={<Principal/>}/>
                <Route path='/carrito' element = {<Cart/>}/>
                <Route path='/contacto' element = {<Contact/>}/>
              </Routes>
              </BrowserRouter>
        </Provider>  
  )
}

export default App
