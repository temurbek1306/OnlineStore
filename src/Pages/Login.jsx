import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  function handleChange(e) {
    setValues((oldValues) => {
      return {
        ...oldValues,
        [e.target.name]: e.target.value
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post('https://reqres.in/api/login', values);
      if (res.status === 200) {
        toast("Login Successful", { type: "success" });
        localStorage.setItem('token', res.data.token);
        navigate('/');
        setValues({ email: '', password: '' });
      } else {
        toast("Login Unsuccessful", { type: "error" });
      }
    } catch (error) {
      toast("Login Unsuccessful", { type: "error" });
    }
  }

  return (
    <div className="min-vh-100 text-bg-light d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="bg-white border w-50 p-3">
        <h1 className="display-1 text-center">Login</h1>

        <div className="my-3">
          <label className="form-label display-5" htmlFor="email">Email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-3">
          <label className="form-label display-5" htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary w-100 py-2">Submit</button>
      </form>
    </div>
  );
};

export default Login;