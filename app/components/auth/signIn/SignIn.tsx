import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { authenticate } from '../isAuth/Auth'
import { Login } from '@/app/interfaces/auth/auth'
import { emailPattern, passwordPattern } from '../../utilities/validate/validate'
import '../signUp/sign-up.scss'

const SignIn = ({signIn, signUp, recoverPassword}: any) => {
  const [show, setShow] = useState(false)
  const {formState: {errors}, handleSubmit, register: login} = useForm<Login>()
  const handleSignIn = (input: Login) => {
    authenticate(true)
    signIn()
  }

  return (
    <div className='sign-up'>
      <div onClick={signIn} className='close'></div>
      <div className='form'>
        <span onClick={signIn}>×</span>
        <p className='title'>Sign in</p>
        <p className='desc'>Enter your Details to sign in</p>
        <div className='content'>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className='input'>
              <label>Email Address</label>
              <input type='text' placeholder='lamburghinie@mail.com' {...login('email', {required: 'Email address required', pattern: {value: emailPattern, message: 'Email address invalid'}})}/>
              <p>{errors.email?.message}</p>
            </div>
            <div className='input'>
              <label>Password</label>
              <div className='password'>
                <input  type={`${show ? 'text' : 'password'}`} placeholder='Enter your password' {...login('password', {required: 'Password required', pattern: {value: passwordPattern, message: 'password not valid'}})}/>
                <Image src={`/images/general/auth/${show ? 'eye-show' : 'eye-hide'}.png`} alt="img" onClick={() => setShow(!show)} width='25' height='25'/>
              </div>
              <p>{errors.password?.message}</p>
            </div>
            <button type='submit' disabled={false}>Continue</button>
          </form>
          <div className='recover'>
            <div className='checkbox'>
              <label className="checkbox-wrapper">
                <input type="checkbox"/>
                <span className="check-mark"></span>
              </label>
              <span>Remember me</span>
            </div>
            <span onClick={recoverPassword}>Forgot password</span>
          </div>

          <div className='lines'>
            <span className='line'></span>
            <p className='option'>or sign in with</p>
            <span className='line'></span>
          </div>

          <div className='options'>
            <button>
              <Image src="/images/footer/goggle.png" alt="img" width={50} height={50} className="img1"/>
              <span>Continue with Goggle</span>
            </button>
            <button>
              <Image src='/images/footer/apple.png' alt="img" width={50} height={50} className="img1 img-color"/>
              <span className="get">Continue with Apple</span>
            </button>
          </div>
          <p onClick={signUp} className='account'>Don&#39;t have an account? <span>Sign up</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn