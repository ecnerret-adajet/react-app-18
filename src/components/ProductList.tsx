import React, { useEffect, useState } from 'react'


function ProductList({ category } : { category: string }) {

  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products", category);

    setProducts([
        'Clothing',
        'Household'
    ]);
  },[category]); // executed only once

  return (
    <div>ProductList</div>
  )
}

export default ProductList