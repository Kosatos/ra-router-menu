import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Menu from './components/menu/Menu'
import HomePage from './pages/menu/HomePage'
import DriftPage from './pages/menu/DriftPage'
import TimeAttackPage from './pages/menu/TimeAttackPage'
import ForzaPage from './pages/menu/ForzaPage'

const menu = [
  { title: 'Главная', path: '/' },
  { title: 'Дрифт-такси', path: '/drift' },
  { title: 'Time Attack', path: '/timeattack' },
  { title: 'Forza Karting', path: '/forza' },
]

function App() {
  return (
    <>
      <h2 className='task-title'>MENU</h2>
      <hr />
      <div>
        <Menu list={menu} />
        <div className='page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/drift' element={<DriftPage />} />
            <Route path='/timeattack' element={<TimeAttackPage />} />
            <Route path='/forza' element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
