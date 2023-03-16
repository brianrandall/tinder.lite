import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'

const Signup = () => {

  const firstName = sessionStorage.getItem('firstName')
  const [birthDay, setBirthDay] = useState('')
  const [gender, setGender] = useState('')
  const [genderPreference, setGenderPreference] = useState('')
  const [showGender, setShowGender] = useState(true)
  const [bio, setBio] = useState('')
  const [error, setError] = useState('')
  const nav = useNavigate()

  const checkAge = () => {
    // get today's date
    const today = new Date()
    // get the date that was 18 years ago
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
    // get the date that was 100 years ago
    const oneHundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())
    // get the date that was entered
    const birthDayDate = new Date(birthDay)
    // check if the date entered is between 18 and 100 years ago
    if (birthDayDate > eighteenYearsAgo || birthDayDate < oneHundredYearsAgo) {
      setError('Invalid Date')
      return
    } else {
      setError('')
    }
  }

  // date that was 18 years ago
  const findEighteenYearsAgo = () => {
    const today = new Date()
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
    // format date to be YYYY-MM-DD
    const eighteenYearsAgoFormatted = eighteenYearsAgo.toISOString().slice(0, 10)
    return eighteenYearsAgoFormatted
  }

  const findOneHundredYearsAgo = () => {
    const today = new Date()
    const oneHundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())
    // format date to be YYYY-MM-DD
    const oneHundredYearsAgoFormatted = oneHundredYearsAgo.toISOString().slice(0, 10)
    return oneHundredYearsAgoFormatted
  }

  console.log(findEighteenYearsAgo())

  const handleSubmit = (e) => {
    e.preventDefault()
    checkAge()
    if (error) {
      return
    } else {

      axios.post('/api/auth', {
      }).then(res => {
        console.log(res)
        nav('/signup')
      }).catch(err => {
        console.log(err)
        setError(err)
      })
    }
  }


  console.log(showGender, bio);

  return (
    <div className='overlay-signup'>
      <Nav 
        minimal={true}
        setShowModal={() => {}}
        showModal={false}
      />
      
      <div className='signup'>
        
        <h2>Welcome to Tinder, {firstName}</h2>
        <p>we just need a <span style={{fontStyle: 'italic'}}>little</span> more information before you can start get started...</p>
        <form onSubmit={handleSubmit}>
          <section>
          <label>When were you born?</label>
            <input type='date' max={findEighteenYearsAgo()} min={findOneHundredYearsAgo()} onChange={(e) => setBirthDay(e.target.value)}/>
          
            <label>I am a...</label>
            <select onChange={setGender}>
              <option value=''></option>
              <option value='M'>Man</option>
              <option value='F'>Woman</option>
              <option value='O'>Other</option>
            </select>
            <label>Looking for a...</label>
            <select onChange={setGenderPreference}>
              <option value=''/>
              <option value='M'>Man</option>
              <option value='F'>Woman</option>
              <option value='O'>Other</option>
              <option value={'A'}>Anyone</option>
            </select>
            <label>Show Gender On Profile?</label>
            <input type='checkbox' defaultChecked onChange={() => setShowGender(!showGender)}/><br/>
            <label htmlFor='about'>Tell us about yourself! </label><br/>
            <textarea name='about' id='about' cols='30' rows='10' placeholder='I like beer and burritos...' onChange={(e) => setBio(e.target.value)}></textarea>
            
          </section>
          <button type='submit' className='secondary-button'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Signup