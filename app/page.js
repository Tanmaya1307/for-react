"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const notify = () => {
    toast.success('Loging successfull!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
      });
  }
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page
