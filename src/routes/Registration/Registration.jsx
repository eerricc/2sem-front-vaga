import logo from '../../assets/Logo.jpg'

import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'

const Registration = () => {
  
  let {id} =useParams();
  const [users,setUsers]= useState({
      id,
      user:'',
      password:'',
  });

   const navigate = useNavigate();

  let method ="post";
  if(id){
      method="put";
  }
 
  const handleChange=(e)=>{
      setUsers({...users, [e.target.name]: e.target.value});
  } 

  const handleSubmit=(e)=>{
      e.preventDefault();
      fetch(`http://localhost:5000/users/${id ? id:''}`,{
      method: method,
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(users),
      }).then(()=> {
          navigate("/login")
      });
  }

  useEffect(()=>{
      if(id) {
      fetch(`http://localhost:5000/users/${id}`)
      .then((res)=>{
          return res.json();
      })
      .then((data)=>{
          setUsers(data);
      });
  }
  },[id])
  
  return (
    <div>
        <div className='flex flex-col grow justify-center items-center'>
        <section className='w-1/2 h-1/2 bg-red-300 flex-col p-10 rounded-xl'>
            <h1 className='text-center font-bold'>Registration</h1>
            <section className='flex justify-between'>
                <form action="" className='w-1/2 ml-20 flex flex-col justify-center' onSubmit={handleSubmit}>
                    <label htmlFor="" className='font-bold'>User</label><input type="text" className='p-2 rounded-md' value={users.user}
                    onChange={handleChange}/>
                    <br />
                    <label htmlFor="" className='font-bold'>Senha</label><input type="password" className='p-2 rounded-md' value={users.password}
                    onChange={handleChange}/>
                    <br />
                    <button type='submit' className='bg-[#602540] w-1/2 self-center p-2 rounded-xl text-white font-bold'>Cadastrar</button>
                </form>
                <img src={logo} alt="" className='rounded-xl'/>
            </section>
        </section>
    </div>
    </div>
  )
}

export default Registration