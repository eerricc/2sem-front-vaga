import logo from '../../assets/Logo.jpg'

import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useRef, useState, useEffect} from 'react'


const Login = () => {
  
  const user =useRef();
    const password =useRef();

    const [users,setUsers]=useState([]);

    const navigate = useNavigate();

    function validate(){
        for(let i =0; i <users.length; i++){
            if(
                users[i].user ==user.current.value &&
                users[i].password == password.current.value
            ){
                return true;
            }
        }
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(validate()){ 
          let token =
              Math.random().toString(16).substring(2)+
              Math.random().toString(16).substring(2)
              sessionStorage.setItem("user", user.current.value);
              sessionStorage.setItem("password", token);
              navigate("/produtos")      
      }else{
          alert("user/password invalid")
      }
    }

    useEffect(()=>{
      //json server url (API)
      fetch("http://localhost:5000/users/")
      //promise
      .then((res)=>{
          return res.json();
      })
      //setUsers receive data 
      .then((res)=>{
          setUsers(res);
      })
      //returns empty array
  },[])    
  
  return (
    <div className='flex flex-col grow justify-center items-center'>
        <section className='w-1/2 h-1/2 bg-red-300 flex-col p-10 rounded-xl'>
            <h1 className='text-center font-bold'>Login</h1>
            <section className='flex justify-between'>
                <form action="" className='w-1/2 ml-20 flex flex-col justify-center' onSubmit={handleSubmit}>
                    <label htmlFor="" className='font-bold'>User</label><input type="text" className='p-2 rounded-md' ref={user}/>
                    <br />
                    <label htmlFor="" className='font-bold'>Senha</label><input type="password" className='p-2 rounded-md' ref={password}/>
                    <br />
                    <button type='submit' className='bg-[#602540] w-1/2 self-center p-2 rounded-xl text-white font-bold'>Entrar</button>
                </form>
                <img src={logo} alt="" className='rounded-xl'/>
            </section>
            <ul className="">
              <li className=''>
                <Link to="/registration" className=''>Create an account</Link>
              </li>
            </ul>
        </section>
    </div>
  )
}

export default Login