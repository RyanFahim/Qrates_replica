import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/qrates-logo.svg'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="main-nav">
                <div className="main-logo">
                    
                    <img src= {logo} alt="" className="nav-logo" />
                </div>

                <div className= {
                    toggle?"menu-link":"menu-link-res"
                }>

                    <ul className= "menu-link-ul">

                        <li className="menu-link-ul-li">
                            <a href="" className="menu-link-ul-li-a">Records and Cassettes</a>
                        </li>

                        <li className="menu-link-ul-li">
                            <a href="" className="menu-link-ul-li-a">Disvover</a>
                        </li>
                        <li className="menu-link-ul-li">
                            <a href="" className="menu-link-ul-li-a">For Artist</a>
                        </li>
                        <li className="menu-link-ul-li">
                            <a href="" className="menu-link-ul-li-a">Our COmpany</a>
                        </li>
                    </ul>


                </div>

                <div className="menu-third">
                    <ul className="menu-third-ul">
                        <li>
                            <div href="#" className="menu-third-ul-li-a" >Login</div>
                            
                        </li>
                        <li>
                            
                            <button href="#" className="menu-third-ul-li-a">Button</button>
                        </li>
                    </ul>
                    
                </div>
                    <div className="bar-menu" onClick={()=>setToggle(!toggle)}>
                        <a href="#">
                        <i class="uil uil-bars"></i>
                        </a>
                    </div>

                
            </nav>
        </>
    )
}

export default NavBar
