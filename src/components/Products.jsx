import React from 'react'
// import useProducts from '../hooks/useProducts'
// import PlaceHolderCards from './placeHolderCards'
import Productcards from './Productcards'


let items = [

  {
    product:{
      id:1,
      title: "Product 1", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:2,
      title: "Product 2", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },


  {
    product:{
      id:3,
      title: "Product 3", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:4,
      title: "Product 4", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:5,
      title: "Product 5", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:6,
      title: "Product 6", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:7,
      title: "Product 7", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:8,
      title: "Product 8", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:9,
      title: "Product 9", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

  {
    product:{
      id:10,
      title: "Product 10", 
      description : "lorem ipsum dolor set amet", 
      price: 123.25
    },
    count : 1
  },

]



function Products() {

  // const [products, loading] = useProducts()

  return (
    <div className='container'>

      {
       <Productcards products={items} />
      }

    </div>
  )
}

export default Products
