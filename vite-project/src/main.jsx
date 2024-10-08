import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './header/header.jsx'
import './header/header.css'

import Main from './main/main.jsx'
import './main/main.css'

import Footer from './footer/footer.jsx'
import './footer/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </StrictMode>
)
