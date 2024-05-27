import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { authenticate } from '../isAuth/Auth'
import { Register } from '@/app/interfaces/auth/auth'
import { emailPattern, passwordPattern, phoneNumberPattern } from '../../utilities/validate/validate'
import './sign-up.scss'

const SignUp = ({signIn, signUp}: any) => {
  const [show, setShow] = useState(false)
  const {formState: {errors}, getValues, handleSubmit, register, watch} = useForm<Register>()
  const handleSignUp = (input: Register) => {
    authenticate(true)
    signUp()
  }

  return (
    <div className='sign-up'>
      <div onClick={signUp} className='close'></div>
      <div className='form'>
        <span onClick={signUp}>×</span>
        <p className='title'>Get started now</p>
        <p className='desc'>Enter your Details to create an account</p>
        <div className='content'>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className='input'>
              <label>Full Name</label>
              <input type='text' placeholder='Enter your full name' {...register('name', {required: 'Full name required'})}/>
              <p>{errors.name?.message}</p>
            </div>
            <div className='input'>
              <label>Email Address</label>
              <input type='text' placeholder='lamburghinie@mail.com' {...register('email', {required: 'Email address required', pattern: {value: emailPattern, message: 'Email address invalid'}})}/>
              <p>{errors.email?.message}</p>
            </div>
            <div className='input'>
              <label>Phone Number</label>
              <input type='text' placeholder='Enter your phone number' {...register('phoneNumber', {required: 'Phone number required', pattern: {value: phoneNumberPattern, message: 'Phone number not valid'}})}/>
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <div className='input'>
              <label>Password</label>
              <div className='password'>
                <input  type={`${show ? 'text' : 'password'}`} placeholder='12345@Aa' {...register('password', {required: 'Password required', pattern: {value: passwordPattern, message: 'password not valid'}})}/>
                <Image src={`/images/general/auth/${show ? 'eye-show' : 'eye-hide'}.png`} alt="img" onClick={() => setShow(!show)} width='25' height='25'/>
              </div>
              <p>{errors.password?.message}</p>
              <label className='label'>Must be at least 8 characters long, contain at least one upper and lowercase letters, special character and number</label>
            </div>
            <button type='submit'>Continue</button>
          </form>
          <div className='checkbox'>
            <label className="checkbox-wrapper">
              <input type="checkbox"/>
              <span className="check-mark"></span>
            </label>
            <span>By creating an account you agree to our <Link href='/'>privacy policy</Link></span>
          </div>

          <div className='lines'>
            <span className='line'></span>
            <p className='option'>or sign up with</p>
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
          <p onClick={signIn} className='account'>Already have an account? <span>Sign in</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp