import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Footer from './components/Footer'

function App() {
  
  return (
   <>
   
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>}></Route>
    <Route path='/:id/view' element={<View/>}></Route>
    <Route path='/*' element={<Pnf/>}></Route>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
