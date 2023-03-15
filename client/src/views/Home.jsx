import React from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)

    const authToken = false
    const handleClick = () => {
        console.log('clicked')
        setShowModal(!showModal)
        setIsSignUp(true)
    }

    return (
        <div className='overlay'>
            <Nav 
                minimal={false} 
                setShowModal={setShowModal} 
                showModal={showModal} 
                isSignUp={isSignUp} 
                setIsSignUp={setIsSignUp}
            />
            <div className='home'>
                <h1 style={{fontStyle: 'italic'}}>Swipe Right</h1>
                <button className='primary-button' onClick={handleClick} disabled={showModal}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                {showModal && <AuthModal setShowModal={setShowModal} showModal={showModal} isSignUp={isSignUp} />}
            </div>
        </div>
    )
}

export default Home