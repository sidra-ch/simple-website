import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Domain from './pages/Domain'
import Contact from './pages/Contact'
import About from './pages/About'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import Hosting from './pages/Hosting'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hosting' element={<Hosting/>}/>
        <Route path='/domain' element={<Domain/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App