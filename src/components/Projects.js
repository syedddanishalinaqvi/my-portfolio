import React from 'react'
import ProjectOne from './ProjectOne'


const Projects = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Projects</h1>
            </div>
            <div style={{
                display: 'flex'
            }}>
                <ProjectOne />
                <ProjectOne />
            </div>
        </>
    )
}

export default Projects
