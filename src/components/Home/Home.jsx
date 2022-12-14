import React from 'react'
import './home.css'
import manImage from '../../assets/home-man.jpg'
import home2image from '../../assets/radio.jpg'
import sticker from '../../assets/sticker.svg'

const Home = () => {
  return (
    <>
      <div className="container main__container">
        <div className="container home__container">
          <div className="home__info">
            <button className="why">WHY QRATES</button >
            <h2 className="home__header">
              Music in your hands.
              <div>Without the barriers</div>
            </h2>
            <p>Full service production, a global retail network, customer support - and you keep to 85% of profits</p>
          </div>
        </div>

        <div className="image__container card">
          <img src={manImage} alt="man" className="manImage" />
          {/* <img src= {home2image} alt="" className="home2image" /> */}
          <img src={sticker} alt="" className="sticker" />
        </div>
      </div>

    </>
  )
}

export default Home