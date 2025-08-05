import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import {AuthProvider} from './components/AuthContext';

import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import Login from './components/login';

const App = () => {
  return (
   <>
   <AuthProvider>
    <div className=''>
      <Navbar />
    </div>
    <div className='pt-20'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

      </Routes>
      </div>
   </AuthProvider>

      </>
   
  )
}

export default App