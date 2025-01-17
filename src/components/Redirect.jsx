import React from 'react'
import {Navigate} from 'react-router-dom'

function Redirect() {

    let token =localStorage.getItem('token')
  return <Navigate to={token ? "/" : "/login"} />
}

export default Redirect