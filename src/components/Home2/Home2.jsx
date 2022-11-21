import React from 'react'
import './home2.css'
import home2image from '../../assets/radio.jpg'
import sticker from '../../assets/sticker.svg'

const Home2 = () => {
  return (
    <>
      <div className="container home2__container">
        <div className="first__image">
          <img src={home2image} alt="" className="home2__image" />

        </div>

        <div className="home2__sticker">
          
          <img src={sticker} alt="no _img" />
        </div>
        

      </div>
      <hr className="home2__hr"/>


    </>
  )
}

export default Home2