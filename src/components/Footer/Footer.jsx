import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <>
    <footer>
    
    <div className="footer__container container">
    
        <div className="footer__artist">
            <ul>
                <li className="footer__title footer__menu">For Artists</li>
                <li className="footer__menu">Why Qrates</li>
                <li className="footer__menu">Crowfunding</li>
                <li className="footer__menu">Make and Sell</li>
                <li className="footer__menu">Our Services</li>
                <li className="footer__menu">Artist Toolkit</li>
                <li className="footer__menu">Referral Program</li>
            </ul>
        </div>
        <div className="footer__fan">
            <ul>
            <li className="footer__title footer__menu">For Artists</li>
                <li className="footer__menu">Discover</li>
                <li className="footer__menu">Records</li>
                <li className="footer__menu">Stories</li>
                <li className="footer__menu">Lists</li>
            </ul>
        </div>
        <div className="footer__our-company">
            <ul>
            <li className="footer__title footer__menu">For Artists</li>
            <li className="footer__menu">About Qrates</li>
            <li className="footer__menu">Career</li>
            <li className="footer__menu">Partners</li>
            </ul>
        </div>
        <div className="footer__help">
            <ul>
            <li className="footer__title footer__menu">For Artists</li>
            <li className="footer__menu">Support Center</li>
            <li className="footer__menu">Contact Us</li>
            
            </ul>
        </div>
    </div>

    <div className="footer__last">
        <div className="footer__logo">
            <img src= {footer_logo} alt="" />
        </div>
        <div className="footer_terms_service">
            <ul>
            <li className="footer_terms_service-li">Terms of service</li>
            <li className="footer_terms_service-li">Privacy Policy</li>
            <li className="footer_terms_service-li">Legal Information</li>
            <li className="footer_terms_service-li">TDMS Inc.</li>
            </ul>
        </div>
    </div>

    </footer>

    </>
  )
}

export default Footer
