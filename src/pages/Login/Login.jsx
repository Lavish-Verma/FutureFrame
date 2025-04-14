import React, { useState } from 'react'
import './Login.css'
import { useSubmit } from 'react-router-dom'
import { signUp, login } from '../../components/config/firebase';



const Login = () => {
  const [currstate , setcurrstate] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      if (currstate === 'Sign Up') {
        await signUp(email, password);
        alert('Account created successfully!');
      } else {
        await login(email, password);
        alert('Login successful!');
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className='login'>
      <form  className="login-form" onSubmit={handleSubmit}>
        <h2 >{currstate}</h2>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <input onChange={(e) => setEmail(e.target.value)} value={email} type="Email" placeholder='Email'  className="form-input" required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="Password" placeholder='Password' className="form-input" required />
        <div className='login-policy'>
          <input type="checkbox" />
          <p>Agree to terms and use of privacy policy</p>
        </div>
        <button className='login-btn'>{currstate === 'Sign Up'? 'Create Account' : 'Login'}</button>  
        {currstate === 'Sign Up'? <p className='login-toogle'>Already have account ? <span onClick={()=>setcurrstate('Login')}> Click here </span></p>:<p className='login-toogle'>New user ?<span onClick={()=>setcurrstate('Sign Up')}>Create account</span></p>}
      </form>
    </div>
  )
}

export default Login