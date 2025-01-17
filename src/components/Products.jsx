import React from 'react'
import useProducts from '../hooks/useProducts'
import PlaseHolderCards from './plaseHolderCards'
import Productcards from './Productcards'

function Products() {

    const [products, loading] = useProducts()

  return (
    <div className='container'>
      {
        loading ? <PlaseHolderCards/> : <Productcards products={products}/>
      }
    </div>
  )
}

export default Products