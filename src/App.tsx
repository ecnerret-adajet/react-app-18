import React from 'react'
import { useState } from 'react';

function App() {

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({
      ...pizza, 
      toppings: [...pizza.toppings, 'Cheese' ]
    })
  }

  return (
    <div>
      <ul>
      { pizza.toppings.map(item => <li key={item}>{item}</li>) }
      </ul>
      <button onClick={handleClick}>Add Toppings</button>
    </div>
  )
}

export default App