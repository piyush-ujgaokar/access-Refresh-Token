import React, { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from './config/axiosInstance'

const App = () => {

  const getData=async ()=>{
    try{
        const data=await axiosInstance.post("/api/auth/register")
        console.log("Data from backend",data)
    }catch(err){
      console.log("Error in getting data",err)
    }
  }

  useEffect({
     getData
  })


  return (
    <div>App</div>
  )
}

export default App