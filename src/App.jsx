import { useState } from 'react'
import React from 'react';
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import About from './pages/about/About'
import Todo from './pages/todo/To-do'
import Media from './pages/media/Media';
import Contact from './pages/contact/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/do' element={<Todo/>}/>
      <Route path='/media' element={<Media/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
