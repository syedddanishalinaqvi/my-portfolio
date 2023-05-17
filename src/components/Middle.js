import React from 'react'
import './Middle.css'
import img from './dp.jpg'
import github from './github.png'
import linkedin from './linkedin.png'
import css from './css.png'
import expressjs from './expressjs.png'
import html from './html.png'
import js from './js.png'
import mongodb from './mongodb.png'
import react from './react.png'
const Middle = () => {
    return (
        <div style={{
            paddingRight: '110px',
            paddingLeft: '110px',
            marginRight: 'auto',
            marginLeft: 'auto',
            width: '900px',
            height: '815px',
        }}><div style={{
            height: 500,
            width: 800,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        }}>
                <div>
                    <div style={{ fontSize: '55px', fontWeight: 'bold', marginBottom: 8, textAlign: 'left', width: 500 }}>Front-End React Developer</div>
                    <div style={{ fontSize: '22px', marginTop: 8, textAlign: 'left', opacity: '0.8', width: 500 }}>Hi, i'm Danish Ali. A passionate front-end React Developer based in India <i className='fas fa-map-pin' style={{ opacity: '0.8' }}></i></div>
                    <div style={{
                        marginTop: 10
                    }}>
                        <a href='https://github.com/syedddanishalinaqvi' rel='noreferrer' target='_blank'><img src={github} style={{ height: '30px', margin: 4 }} alt="" /></a>
                        <a href='https://www.linkedin.com/in/syed-danish-ali-naqvi-b783741b9/' rel='noreferrer' target='_blank'><img src={linkedin} style={{ height: '30px', margin: 4 }} alt="" /></a>
                    </div>
                </div>
                <div class="image" >
                    <img src={img} alt="" />
                </div>
            </div>
            <div style={{
                display: 'flex',
                marginTop: 10
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '17px', marginTop: 10 }}>Tech Stack</div>
                <div style={{ marginLeft: 20, height: 55, width: 5, borderLeft: '4px solid black', }}></div>
                <div>
                    <img src={html} style={{ width: '45px', marginLeft: 40 }} alt="" />
                    <img src={css} style={{ width: '45px', marginLeft: 40 }} alt="" />
                    <img src={js} style={{ width: '45px', marginLeft: 40 }} alt="" />
                    <img src={react} style={{ width: '45px', marginLeft: 40 }} alt="" />
                    <img src={expressjs} style={{ width: '45px', marginLeft: 40 }} alt="" />
                    <img src={mongodb} style={{ width: '45px', marginLeft: 40 }} alt="" />
                </div>
            </div>

        </div >
    )
}

export default Middle
