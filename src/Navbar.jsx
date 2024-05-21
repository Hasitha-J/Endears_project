import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {


  return (
    <>
      <nav className="nav">
        <div className='nav-links'>
          
          <Link to="home" className="endears-matara" spy={true} smooth={true} offset={-50} duration={500} >ENDEARS - Matara</Link>
          <ul className='menu_list'>
            <li> <Link to="about" className="menu_link" spy={true} smooth={true} offset={-50} duration={500} >About</Link> </li>
            <li> <Link to="/training" className="menu_link" >Trainings</Link> </li>
            <li> <Link to="news" className="menu_link"  spy={true} smooth={true} offset={-50} duration={500} >News</Link> </li> 
            <li> <Link to="partners" className="menu_link"  spy={true} smooth={true} offset={-50} duration={500} >Partners</Link> </li>    
          </ul>
          <ul className='button_list'>
            <p to="/partners">ShareNet</p>
            <p to="/training">AlertNet</p>
          </ul>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar

