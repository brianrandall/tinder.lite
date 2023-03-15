import React, { useState } from 'react'
import logo from '../img/logo-icon.png'
import logofull from '../img/logo-full.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(!showModal)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <div className='nav-container' minimal={false} authToken={authToken}>
            
            <img src={minimal ? logo : logofull} alt='logo' />
            

            {
            !authToken && !minimal && 
            <button className='nav-button' onClick={handleClick} disabled={showModal}>
                Log In
            </button>
            }
        </div>
    )
}

export default Nav