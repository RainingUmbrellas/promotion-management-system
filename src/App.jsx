import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreatePromotion from './components/CreatePromotion'
import PromotionList from './components/PromotionList'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="create-promotion" element={<CreatePromotion />} />
        <Route path="promotions" element={<PromotionList />} />
      </Route>
    </Routes>
  )
}

export default App
