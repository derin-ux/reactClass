import {useState} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
    
function Login() {
       const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')
       const navigate = useNavigate()

       const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password ){
            alert("Please fill in all fields")
            return
        }

        navigate('/home')
    }
   
       return (
           <form className='Container'>
            <h1>Login</h1>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type in your email" />
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type in your Password" />           

               <button onClick={handleSubmit} type="submit">Login</button>
           </form>
       )
   
}

export default Login