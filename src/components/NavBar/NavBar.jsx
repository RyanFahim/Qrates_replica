import React from 'react'
import './navbar.css'
import logo from '../../assets/qrates-logo.svg'

const NavBar = () => {
  return (
    <>
    <div className="container navbar__container">

    <div className="navBar__all-menu">

        <div className="navbar__1">
            <img src={logo} alt="" className='navbar__logo'/>
            
            <ul className='navbar__ul'>
                <li className='navbar__li'>Record and Cassettles</li>
                <li className='navbar__li'>Discover</li>
                <li className='navbar__li'>For Artist</li>
                <li className='navbar__li'>Our COmpany</li>
            </ul>

        </div>

        <div className="navbar__2">
            <a href="#" className="login__navbar">Login</a>
            <button className="make__own">Make your Own</button>
            <i className="uil uil-x nav__cross"></i>
        </div>
    </div>

        <div className="nav__toggle">
        <i class="uil uil-apps"></i>
        </div>

    </div>
    </>
  )
}

export default NavBar