import React from 'react'
import { useState } from 'react'


function App() {

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    }
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: 'Terrence'
      }
    })
  }

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App