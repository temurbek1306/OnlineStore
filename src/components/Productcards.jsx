import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../ReduxToolkit/Store/slices/cart'

export default function Productcards({ products }) {

   const dispatch = useDispatch()

   function handleAddToCart(product){
      dispatch( addToCart(product) )
   }

   return (
      <>
         {
            products.map(product => {

               return (
                  <div className="card" key={product.product.id}>    
                  <div className="card-body">
                    <h2 className="card-title">{product.product.title}</h2>
                    {/* <h3>{product.title}</h3> */}
                    <h5>{product.product.description}</h5>
                    <h5>{product.product.price}</h5>
                    <h5>{product.product.count}</h5>
                    {/* <h5>{user.address.street}</h5> */}
                  {/* <Link to={`/details/${user.id}`}> Learn More </Link> */}
                  <button onClick={()=>handleAddToCart(product)}> Add to Cart </button>
                  </div>
                </div>
            )


            })
         }
      </>
   )
}
