"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


interface formData {
    userName:string,
    password:string
}
const Page =() => {
    const [formdata,setformdata]=useState<formData>({
        userName:'',
        password:''
    })
    const router= useRouter();
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
         setformdata((prevData)=>({
            ...prevData,
            [name]:value
         }))
    }

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();

        try{
           const response= await axios.post('http://localhost:3000/api/v1/signup',formdata);

           if(response.status===200){
              router.push('/')
           }

        }catch(err){
           console.log(err)
        }

    }
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign Up</h2>

        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              name="userName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formdata.userName}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formdata.password}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
