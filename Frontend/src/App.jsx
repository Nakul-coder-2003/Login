import React from 'react'
import LoginPage from './components/LoginPage'
import Signup from './components/Signup'
import {Routes,Route} from "react-router-dom";
import Header from './components/Header';


const App = () => {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App