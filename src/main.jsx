import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import '../src/css/animation.css'
import '../src/css/desktop-enhancements.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
