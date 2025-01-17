import axios from 'axios'
import React from 'react'
import Products from '../components/Products'

function Home() {

  async function handleRequest() {
    let data = await axios.get('users')
    console.log(data)
  }

  return (
    <div>
        <h1>Home</h1>
        <Products/>
    </div>
  )
}

export default Home