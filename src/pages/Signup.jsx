import React, { useState } from 'react'




const Signup = () => {
    const [info,setInfo]=useState({
        name:"",
        email:"",
        number:"",
        password:""
    })
    
    
    const handleChange=(e)=>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }
    const handleRegister=async()=>{

        let result=await fetch("http://localhost:8080/signUp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        });
        result=await result.json();
        console.log("Result: ",result)
    }

     
    return (
        <div className=' bg-purple-400  flex justify-center items-center min-h-screen '>
            <div className='bg-slate-100  lg:w-1/3 md:w-full flex flex-col px-16  border-1 rounded-sm '>

                <h1 className=' text-3xl text-center font-bold mt-5'>Sign up</h1>
                <hr className=' mt-2 mb-2' />

                <div className='flex flex-col mt-5  '>
                    <label className='cursor-pointer font-semibold text-gray-500' htmlFor="">Name</label>
                    <input className=' flex border-2 p-2 border-purple-100 rounded-md' type="text" name='name' onChange={handleChange} placeholder='Enter Your FullName' />
                </div>

                <div className='flex flex-col mt-5  '>
                    <label className='cursor-pointer font-semibold text-gray-500' htmlFor="">email</label>
                    <input className='p-2  border-2 border-purple-100 rounded-md' type="email" name='email' onChange={handleChange} placeholder='Enter Your email Id' />
                </div>

                <div className='flex flex-col mt-5 '>
                    <label className='cursor-pointer font-semibold text-gray-500' htmlFor="">Contact</label>
                    <input className=' p-2 border-2 border-purple-100 rounded-md' type="number" name='number' onChange={handleChange} placeholder='Enter  Contact number' />

                </div>
                <div className='flex flex-col mt-5 '>
                    <label className='cursor-pointer font-semibold text-gray-500' htmlFor="">Password</label>
                    <input className=' p-2 border-2 border-purple-100 rounded-md' type="password" name='password' onChange={handleChange} placeholder='Enter Your password' />

                </div>
                <div className='flex flex-col mt-5 mb-5'>
                    <button className='bg-blue-500 text-white p-2 border-2 border-purple-100 rounded-md' onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
