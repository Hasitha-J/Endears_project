import React, { useEffect,useRef, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-scroll'
import menu from './assets/menu.svg';
import close from './assets/close.svg';
import ShareNet from './assets/share.svg';
import AlertNet from './assets/alert.svg';

function Navbar() {
 
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const divRef = useRef(null);


  
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsMobileMenuVisible(false);
    }
  };


  useEffect(() => {
    // Add event listener to handle clicks outside the div
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  useEffect(() => {
    const menuButton = (event) => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && event.target === mobileMenu) {
        setIsMobileMenuVisible(false);
      }
    };

    window.addEventListener("click", menuButton);

    return () => {
      window.removeEventListener("click", menuButton);
    };
  }, []);

  useEffect(() => {
    const closeButton = (event) => {
      const closeButton = document.getElementById("close-icon");
      if (closeButton && event.target === closeButton) {
        setIsMobileMenuVisible(false);
      }
    };
    window.addEventListener("click", closeButton);
    return () => {
      window.removeEventListener("click", closeButton);
    };   
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };


  return (
    <>
      <nav className="nav">
        <div className='nav-links'>
          <img src ={menu} alt="Close" className='menu-icon' onClick={toggleMobileMenu}/>
          <Link to="home" className="endears-matara" spy={true} smooth={true} offset={-50} duration={500} >ENDEARS - Matara</Link>
          <ul className='menu_list'>
            <li> <Link to="about" className="menu_link" spy={true} smooth={true} offset={-50} duration={500} >About</Link> </li>
            <li> <Link to="contact" className="menu_link" spy={true} smooth={true} offset={-50} duration={500} >Contact Us</Link> </li>
            <li> <Link to="news" className="menu_link"  spy={true} smooth={true} offset={-50} duration={500} >News</Link> </li> 
            <li> <Link to="partners" className="menu_link"  spy={true} smooth={true} offset={-50} duration={500} >Partners</Link> </li>    
          </ul>
          <ul className='button_list'>
            <p>
            <img src={ShareNet}/>
              <a href="https://matara.mobilise-srilanka.org/webapp/">
              ShareNet</a>
            </p>
            <p>
              <a href="https://ews.mobilise-srilanka.org/WorkflowEngine/login">
              <img src={AlertNet}/>AlertNet</a></p>
          </ul>
        </div>
      </nav>
    
      <ul className='mobile-menu' ref={divRef} style={{ display: isMobileMenuVisible ? "block" : "none" }}>
        <img src ={close} alt="Close" className='close-icon' onClick={toggleMobileMenu}/>
        <li> <Link to="about" className="mobile_link"  smooth={true} offset={-50} duration={500} >About</Link> </li>
        <li> <Link to="contact" className="mobile_link"  smooth={true} offset={-50} duration={500} >Contact Us</Link> </li>
        <li> <Link to="news" className="mobile_link"   smooth={true} offset={-50} duration={500} >News</Link> </li> 
        <li> <Link to="partners" className="mobile_link"   smooth={true} offset={-50} duration={500} >Partners</Link> </li>
        <li> <a href="https://matara.mobilise-srilanka.org/webapp/">ShareNet</a></li> 
        <li> <a href="https://ews.mobilise-srilanka.org/WorkflowEngine/login">AlertNet</a> </li>   
      </ul>


      
    </>
  )
}

export default Navbar

