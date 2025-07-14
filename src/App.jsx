import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '@/components/layout/Layout.jsx'
import About from '@/pages/About.jsx'
import Research from '@/pages/Research.jsx'
import Publications from '@/pages/Publications.jsx'
import Teaching from '@/pages/Teaching.jsx'
import Contact from '@/pages/Contact.jsx'
import NotFound from '@/pages/NotFound.jsx'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="publications" element={<Publications />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

