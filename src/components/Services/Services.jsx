import React, { useState } from 'react'
import './services.css'
import img from '../../assets/services.jpg'
import artist1 from '../../assets/artist1.jpg'
import artist2 from '../../assets/artist2.jpg'

const Services = () => {

    const [artist, setArtist] = useState(true)

    const artistSelector1 = () => {
        if(artist == false)
        {
            setArtist(true)
        }
        else{
            setArtist(true)
        }

    }

    const artistSelector2 = () => {
        if(artist == true)
        {
            setArtist(false)
        }
        else{
            setArtist(false)
        }

    }
    console.log(artist)
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


                    <div className="services__menu">
                        <div className="services__menuItem services__menuItem-main">Making Records & Cassettles</div>
                        <div className="services__menuItem">Data and Customization</div>
                        <div className="services__menuItem">Mastering</div>
                        <div className="services__menuItem">Artwork Assitance</div>
                        <div className="services__menuItem">Vinyl Pressing & Cassette Duplication</div>

                        <div className="services__menuItem services__menuItem-main">Storage & Distribution</div>
                        <div className="services__menuItem">Free Storages</div>
                        <div className="services__menuItem">Sell with Qrates</div>
                        <div className="services__menuItem">Digital Downloads</div>
                        <div className="services__menuItem">Reatil Distributions</div>
                    </div>
                </div>
            </div>

            {/* Community section */}
            <section className="container community__container">
                <button className="commmunity__button">Community</button>
                <div className="community__title">Join a growing community</div>
                <p className="community__para">We're build a home for the next generation vinyl lovers and cassette junkies.
                    Get in front of fans, connect with artists, labels and stores.</p>
                <button className="community__read-stories">Read stories</button>
            </section>


            {/* Artists */}
            <section className="artist__container container">


                {/* {artist?<h2>I am one</h2> : <h2>I am two</h2>} */}



                
                {artist? (
                    <div className="artist">
                    <div className="artist__info_1">
                        <div className="artist__top">

                        <button className="artist__top-button">Artist on Qrates</button>
                        </div>
                        <div className="artist__quote">
                            <p className="quote">
                            "The response was overwhelming. It made me wonder why I hadn't pressed any records 
                            on vinyl before now.
                            It felt like something that people had been waiting for for a long time."
                            </p>
                            <br />

                            <p className="artist__name">
                                SQL
                            </p>


                        </div>
                        <div className="artist__buttons-div">
                            <button onClick={artistSelector1} className="artist__buttons">1</button>
                            <button onClick={artistSelector2} className="artist__buttons">2</button>
                        </div>
                    </div>

                    <div className="artist__img-div-1">
                        <img src= {artist1} alt="" className="artist__img" />
                    </div>
                </div>
                ):(
                    <div className="artist">
                    <div className="artist__info_2">
                        <div className="artist__top">

                        <button className="artist__top-button">Artist on saa</button>
                        </div>
                        <div className="artist__quote">
                            <p className="quote">
                            “We hit our goal of 100 Records in the first 32 minutes. 
                            And I have to be honest, I didn't expect that. There's no world where I would have thought 
                            that we were about to sell north of 2800 copies.”
                            </p>
                            <br />

                            <p className="artist__name">
                                -Mason Lieberman (The Real Folk Blues, 2020)
                            </p>


                        </div>
                        <div className="artist__buttons-div">
                            <button onClick={artistSelector1} className="artist__buttons">1</button>
                            <button onClick={artistSelector2} className="artist__buttons">2</button>
                        </div>
                    </div>

                    <div className="artist__img-div-2">
                        <img src= {artist2} alt="" className="artist__img" />
                    </div>
                </div>
                )}

                {/* <div className="artist">
                    <div className="artist__info">
                        <div className="artist__top">

                        <button className="artist__top-button">Artist on Qrates</button>
                        </div>
                        <div className="artist__quote">
                            <p className="quote">
                            "The response was overwhelming. It made me wonder why I hadn't pressed any records 
                            on vinyl before now.
                            It felt like something that people had been waiting for for a long time."
                            </p>
                            <br />

                            <p className="artist__name">
                                SQL
                            </p>


                        </div>
                        <div className="artist__buttons-div">
                            <button onClick={artistSelector1} className="artist__buttons">1</button>
                            <button onClick={artistSelector2} className="artist__buttons">2</button>
                        </div>
                    </div>

                    <div className="artist__img-div">
                        <img src= {artist1} alt="" className="artist__img" />
                    </div>
                </div> */}
                    
            </section>
        </>
    )
}

export default Services
