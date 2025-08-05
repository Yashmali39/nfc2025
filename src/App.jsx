import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import {AuthProvider} from './components/AuthContext';

import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import Login from './components/login';
import AuthSuccess from './components/AuthSuccess';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
   <>
   <AuthProvider>
    <div className='relative z-11 bg-gray-800'>
      <Navbar />
    </div>
    <div className='pt-20'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/profile" element={<UserProfile/>} />


      </Routes>
      </div>
   </AuthProvider>

      </>
   
  )
}

export default App