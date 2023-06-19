import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.scss'

//Router
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'

import Add from './Add'

ReactDOM.createRoot(document.getElementById('root')).render(
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
)
