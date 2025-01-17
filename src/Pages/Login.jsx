import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {


  const navigate = useNavigate()
  

  const [values, setValues] = useState({
    email:'',
    password:''
  })

  useEffect(()=>{
    let token = localStorage.getItem('token')
      if(token){navigate('/')}
  })

  function handleChange(e){
    setValues ((oldValues)=>{
      return{
        ...oldValues,
        [e.target.name]:e.target.value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      toast("Login Succes", {type:"success"})
      let res = await axios.post('https://reqres.in/api/login', values)
      console.log(res);
      localStorage.setItem('token', res.data.token)
      navigate('/')
      setValues({email:'', password:''})
    }catch(error){
      toast("Login Unsuccesfull", {type:"error"})
    }


  }


  return (
    <div className="min-vh-100 text-bg-light d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="bg-white border w-50 p-3">
        <h1 className="display-1 text-center">Login</h1>

        <div className="my-3">
          <label className="form-label display-5" htmlFor="email">Email</label>
          <input className="form-control" name="email" type="email" value={values.email} onChange={handleChange}/>
        </div>

        <div className="my-3">
          <label className="form-label display-5" htmlFor="email">Password</label>
          <input className="form-control" name="password" type="password" value={values.password} onChange={handleChange} required={4}/>
        </div>


        <button className="btn btn-primary w-100 py-2">Submit</button>
      </form>
    </div>
  );
}

export default Login;
