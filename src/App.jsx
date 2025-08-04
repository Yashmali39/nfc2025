import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import Login from './components/login';
export const Logcontext = React.createContext()
const App = () => {
  const [signedIn,setSignedIn]=useState(false)
  return (
   <>
   <Logcontext.Provider value={[signedIn,setSignedIn]}>
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
         </Logcontext.Provider>

      </>
   
  )
}

export default App