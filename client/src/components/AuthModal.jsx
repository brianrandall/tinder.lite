import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthModal = ({setShowModal, showModal, isSignUp}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')

    const nav = useNavigate()

    const handleClick = () => {
        setShowModal(!showModal)
    }
    const submitForm = (e) => {
        e.preventDefault()
        if (isSignUp && password !== confirmPassword) {
            setError('Passwords do not match')
            return
        } 
        if (isSignUp && password === confirmPassword) {
            setError('')
            axios.post('/api/auth', {
                email: email,
                password: password,
                first_name: firstName
            }).then(res => {
                console.log(res)
                sessionStorage.setItem('firstName', firstName)
                nav('/signup')
            }).catch(err => {
                console.log(err)
                setError(err)
            })
        } else {  
            axios.post('/api/auth/login', {
                email: email,
                password: password
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
                setError(err)
            })
        }
    }

  return (
    <div className='auth-modal'>
        <div onClick={handleClick} style={{cursor: 'pointer', float: 'right', marginRight: '15px', marginTop: '5px'}}>
            x
        </div>
        <form onSubmit={submitForm} >
            <input 
                type='email' 
                placeholder='Email' 
                id='email' 
                name='email' 
                required={true} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            {isSignUp &&
            <input
                type='text'
                placeholder='First Name'
                id='firstName'
                name='firstName'
                required={true}
                onChange={(e) => setFirstName(e.target.value)}
            />
            }
            <input
                type='password'
                placeholder='Password'
                id='password'
                name='password'
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp &&
            <input
                type='password'
                placeholder='Confirm Password'
                id='confirmPassword'
                name='confirmPassword'
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            }
            
            <button type='submit' className='secondary-button'>
                {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
            <p>{error}</p>
        </form>
    </div>
  )
}

export default AuthModal