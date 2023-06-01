import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.scss'

//Router
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'

import Add from './Add'

const AppContext = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/Add' element={<Add />}/>
          <Route path='*' element={
          <h1>
            PAGE NOT FOUND
          </h1>
          }/>
        </Routes>
      </Router>
    </AppContext.Provider>
  </React.StrictMode>
)
