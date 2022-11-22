import React from 'react'
import Reuse from '../Reuse/Reuse'
import img1 from '../../assets/sell.png'
import img2 from '../../assets/sell2.png'
import './sell.css'

const Sell = () => {
  
    const data2 = {
        'l_first_button': 'get into it',
        'l_header_para' : 'Make & Sell',
        "l__img": img1,
        'l__info': "Put your music on physical, sooner. Take pre-orders from fans and we'll take care of the rest.",
        'l__button': 'Learn More',
        'l__color': "#81836C",

        'r_first_button': 'no risk, no waste',
        'r_header_para' : 'Crowdfunding',
        "r__img": img2,
        'r__info': "Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront",
        'r__button': 'Learn More',
        'r__color': "#FFF804",

    }
  return (
    <>
    <div className="container sell__container">
        <br />
        <h3 style={{textAlign:'center'}}>No matter where you’re at in your career, we’ve got a production model to suit you.</h3>
        <br />
    </div>
        <Reuse {...data2}/>

        <section className="sell__section container">
            <div className="info1">
            Just after straight up vinyl pressing or cassette duplication? We do that too. Tell us where and we'll ship in bulk to wherever you need.
            </div>

            <div className="info2">
                <a className="sell__a" href="#">START A PRESS ONLY PROJECT</a>
            </div>
        </section>
    </>
  )
}

export default Sell
