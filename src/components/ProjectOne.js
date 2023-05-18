import React from 'react'
import './ProjectOne.css'
import picsearch from './picsearch.jpg'
import github from './github.png'
import linkedin from './linkedin.png'
const ProjectOne = (props) => {
    return (
        <>
            <div style={{
                width: 350,
                margin: 25,
                borderStyle: 'solid',
                borderRadius: '10px',
                height: 350,
            }}>
                <div>
                    <img src={picsearch} style={{
                        height: 250,
                        width: 350,
                        borderRadius: '10px',
                    }} alt=""></img>
                    <div>
                        <a href='https://github.com/syedddanishalinaqvi' rel='noreferrer' target='_blank'><img src={github} style={{ height: '30px', margin: 5 }} alt="" /></a>
                        <a href='https://www.linkedin.com/in/syed-danish-ali-naqvi-b783741b9/' rel='noreferrer' target='_blank'><img src={linkedin} style={{ height: '30px', margin: 4 }} alt="" /></a>
                        <div style={{ margin: 3 }}>This application let you search any images you want. It uses Pixabay API</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectOne
