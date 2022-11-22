import React from 'react'
import './services.css'
import img from '../../assets/services.jpg'

const Services = () => {
    return (
        <>
            <div className="container services__container">
                <div className="services__left">
                    <button className="service__left-first-button">
                        Learn more
                    </button>
                    <div className="service__left-title-para">
                        YOU MAKE MUSIC.
                        <br /> WE DO THE REST.
                    </div>
                    <div className="service__left-img">
                        <img src={img} alt="" className="service-img" />
                    </div>
                    <p className='service__left-paragraph'>
                        We want you to be able to put all your energy into the creative side of making music. So we created a one-stop shop for everything else.
                    </p>

                    <button className="service__left-last-button">
                        Learn more
                    </button>
                </div>

                <div className="service__right">
                    <div className="exam">
                        deaade
                    </div>
                   
                    <div className="services__menu">
                        <div className="services__menuItem">Making Records</div>
                        <div className="services__menuItem">Data and Customization</div>
                        <div className="services__menuItem">Mastering</div>
                        <div className="services__menuItem">Artwork Assitance</div>
                        <div className="services__menuItem">Vinyl Pressing & Cassette Duplication</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
