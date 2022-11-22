import React, { useContext } from 'react'
import './reuse.css'
import image from '../../assets/cd.png'


const Reuse = (props) => {
    console.log(props.l__color);
    
    // const a = useContext(Contextuse)
    return (
        <>
            <div className="container reuse__container" >
                <div className="reuse__left" style={{backgroundColor: props.l__color }}>
                    <p className="reuse__left__first__button"> {props.l_first_button} </p>
                    <div className="reuse__left__header__para">{props.l_header_para}</div> <br />
                    <p className="reuse__left__info">
                       {props.l__info}
                    </p>
                    <img src= {props.l__img} alt="" className="reuse__left__img" />
                    <button className="reuse__left__button">{props.l__button}</button>
                </div>

                <div className="reuse__right" style={{backgroundColor: props.r__color}}>
                <p className="reuse__right__first__button">{props.r_first_button}</p>
                <div className="reuse__right__header__para">{props.r_header_para}</div> <br />
                    <p className="reuse_right__info">
                     {props.r__info}
                    </p>
                    <img src= {props.r__img} alt="" className="reuse__right__img" />
                    <button className="reuse__right__button">{props.r__button}</button>
                </div>
            </div>
        </>
    )
}

export default Reuse
