import React from 'react'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1},
    ]
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map(x => x.id === 1 ? {...x, quantity: x.quantity + 1} : x )
    });
  }

  return (
    <>
      <ul>
        { cart.items.map(item => 
          <li key={item.id}>
            {item.title} {item.quantity}
          </li>
        )}
      </ul>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  )
}

export default App