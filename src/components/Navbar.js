import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar' style={{
            height: 60,
            position: 'relative'
        }}>
            <div classname='titles' style={{
                flex: 1,
                padding: 18,
                paddingLeft: 23,
            }}>
                <div classname='name' style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    display: 'inline-block',
                    padding: 5,

                }}>Syed Danish Ali Naqvi</div>
                <div style={{
                    display: 'inline-block',
                    float: 'right',
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 4,
                    paddingRight: 80
                }}><Link to='/Contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
                <div style={{
                    display: 'inline-block',
                    float: 'right',
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 4,
                    paddingRight: 25
                }}><Link to='/Projects' style={{ textDecoration: 'none', color: 'black' }}>Projects</Link></div>
                <div style={{
                    display: 'inline-block',
                    float: 'right',
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 4,
                    paddingRight: 25
                }}><Link to='/About' style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
                <div style={{
                    display: 'inline-block',
                    float: 'right',
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 4,
                    paddingRight: 25
                }}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
            </div>
        </div >
    )
}

export default Navbar
