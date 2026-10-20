import {useState} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!fullname || !email || !password || !confirmPassword){
            alert("Please fill in all fields")
            return
        }
        if(password !== confirmPassword){
            alert("Passwords do not match")
            return
        }

        navigate('/login')
    }

    return (
        <form className='Container'>
         <h1>Signup</h1>
            <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Type in your fullname" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type in your email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type in your Password" />
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />


            <button onClick={handleSubmit} type="submit">Sign Up</button>
        </form>
    )
}

export default Signup