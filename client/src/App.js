import React from 'react'
import Home from './views/Home'
import Signup from './views/Signup'
import Dashboard from './views/Dashboard'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     
    </div>
  )
}

export default App