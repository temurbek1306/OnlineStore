import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decItemCount, incItemCount, removeItemFromCart } from  '../ReduxToolkit/store/slices/cart'

function CartList() {

   const {items} = useSelector(state => state.cart)

      console.log(items)

const dispatch = useDispatch()

function handleDec(id){
   dispatch( decItemCount(id) ) 
}
function handleInc(id){
   dispatch( incItemCount(id) )  
}

function handleRemove(id){
   dispatch(removeItemFromCart(id))
}


   return (
      <div className='text-bg-light'>
         <div className="container">
            <h1 className='text-center py-2'> Your Cart </h1>

            {items.length === 0 && <h2>Your Cart is Empty</h2>}

            <ul className="list-group py-5">
               {

                  items.map((item, index) => (
                     <li key={index} className="list-group-item d-flex justify-content-around align-items-center">
                        <div>
                           <h2> {item.product.product.title} </h2>
                           <p>{item.product.product.description}</p>
                        </div>

                        <div> <p>{item.product.product.price}</p> </div>

                        <div>

                           <button className="btn btn-light" onClick={()=>handleDec(item.product.product.id)}> - </button>
                           <span>{item.product.count}</span>
                           <button className="btn btn-light"  onClick={()=>handleInc(item.product.product.id)}>+</button>
                        </div>
                        <div><p>{item.product.count * item.product.product.price}</p></div>

                        <div>
                           <button onClick={()=> handleRemove(item.product.product.id)} className="btn border-0">
                              <i className="fa-solid fa-trash-can text-danger fs-4"></i>
                           </button>
                        </div>

                     </li>
                  ))

               }
            </ul>
         </div>
      </div>
   )
}

export default CartList
