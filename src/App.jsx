import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AllRoutes from './routes/AllRoutes'
import Footer from './components/footer';
import Navbar from './components/navbar';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
