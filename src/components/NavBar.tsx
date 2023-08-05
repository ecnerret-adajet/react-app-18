import React from 'react'

interface Props {
    cartItemsCount: number
}

const NavBar = ({cartItemsCount}: Props) => {
  return (
    <>
      <p>NavBar : {cartItemsCount}</p>
    </>
  )
}

export default NavBar