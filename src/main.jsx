import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import PhotoSlider from './PhotoSlider.jsx'
import MenuButtons from './MenuButtons.jsx'
import About from './About.jsx'
import Partners from './Partners.jsx'
import ContactUs from './ContactUs.jsx'
import News from './News.jsx'
import './index.css'
import Title from './Title.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Title/>
    <PhotoSlider />
    <MenuButtons />
    <About />
    <ContactUs />
    <News />
    <Partners />
  </React.StrictMode>,
)
