import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {
const [form, setForm] = useState({})

const formHandler=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
}

  return (
    <div className='grid justify-center place-content-center h-screen' >
    <form action="" className='content-center'>
        <label htmlFor="email">Email: </label>
        <br />
            <input type="email" name="email" id="email" placeholder='Type your email' className='text-black' onChange={formHandler} />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
            <input type="password" name="password" id="password" className='text-black' onChange={formHandler}/>
        <br />
        <label htmlFor="confirmpass">Confirm password: </label>
        <br />
            <input type="password" name="confirmpass" id="confirmpass" className='text-black' onChange={formHandler}/>
        <br />
        <button type="submit" className='p-1 m-2 rounded-lg bg-white text-black'>
            {/*Agregar ternario con auth para redirect*/}
            <Link to="/index">Iniciar sesión</Link>
        </button>
    </form>
    </div>
  )
}

export default Login