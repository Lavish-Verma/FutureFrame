import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/login'
import Getstarted from './pages/GetStarted/Getstarted'
import Analysis from './pages/Analysis/Analysis'


const App = () => {
  return (
    <Routes>
        <Route path='/' element = {<Getstarted/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Analysis' element = {<Analysis/>}/>
    </Routes>
  )
}

export default App