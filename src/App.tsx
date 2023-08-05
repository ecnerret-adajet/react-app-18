import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart'


function App() {

  const [cartItems, setCartItems] = useState([ 'Product 1', 'Product 2' ])


  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems} />
    </>
  )
}

export default App