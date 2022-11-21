import React from 'react'
import './project.css'
import l_img from '../../assets/cd.png'
import r_img from '../../assets/radio_run.png'
import Reuse from '../Reuse/Reuse'
import ReuseContext from '../Reuse/Contextuse'

const Project = () => {
    const data = {
        'l_first_button': 'vinyl production',
        'l_header_para' : 'Vinyl',
        "l__img": l_img,
        'l__info': 'We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.',
        'l__button': 'Make your own vinyl',
        'l__color': "#497775",

        'r_first_button': 'cassette duplication',
        'r_header_para' : 'Cassette',
        "r__img": r_img,
        'r__info': 'Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.',
        'r__button': 'Make your own Cassette',
        'r__color': "#81836C",

    }
  return (
    <>
        <Reuse {...data}/>
    </>
  )
}

export default Project
