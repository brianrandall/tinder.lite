import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'

const PhotoUpload = () => {

    const [error, setError] = useState('')
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        const formData = new FormData()
        formData.append('photo', e.target.photo.files[0])
        axios.post('/api/users/photo', formData)
            .then(res => {
                console.log(res)
                nav('/home')
            }
            )
            .catch(err => {
                console.log(err)
                setError(err.response.data)
            }
            )
    }

    return (
        <div className='overlay-home'>
            <Nav
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />

            <div className='signup'>
                <h2>One last thing...</h2>
                <p>Upload a photo of yourself!!</p>
                <form onSubmit={handleSubmit}>
                    <input type='file' name='photo' />
                    <button type='submit' className='secondary-button'>Submit</button>
                </form>
                <span>or <a href='/home'>skip for now</a></span>
            </div>
        </div>
    )
}

export default PhotoUpload