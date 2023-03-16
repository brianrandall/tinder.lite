import React from 'react'
import Home from './views/Home'
import Signup from './views/Signup'
import Dashboard from './views/Dashboard'
import PhotoUpload from './views/PhotoUpload'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/photo-upload" element={<PhotoUpload />} />
        </Routes>
     
    </div>
  )
}

export default App