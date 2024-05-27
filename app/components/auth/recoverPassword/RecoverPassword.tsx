import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { ResetPassword, ResetToken } from '@/app/interfaces/auth/auth'
import { emailPattern, passwordPattern } from '../../utilities/validate/validate'
import '../signUp/sign-up.scss'

const RecoverPassword = ({recoverPassword, signIn}: any) => {
  const [token, setToken] = useState('')
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [recover, setRecover] = useState(false)
  const {formState: {errors}, getValues, handleSubmit, register: mail, watch} = useForm<ResetToken>()
  const {formState: {errors: errors1}, getValues: getValues1, handleSubmit: handleResetSubmit, register: reset, setValue, watch: watch1} = useForm<ResetPassword>()
  const sendToken = (input: ResetToken) => {
    setRecover(true)
  }
  const handleReset = (input: ResetPassword) => {
  }

  // Automatically check if email entered is registered on the platform before sending token - implement
  const getToken =
  <div className='sign-up'>
    <div onClick={recoverPassword} className='close'></div>
    <div className='form'>
      <span onClick={recoverPassword}>×</span>
      <p className='title'>Forgot Password</p>
      <p className='desc'>Enter your email address and we’ll email you a code for your password reset</p>
      <div className='content'>
        <form onSubmit={handleSubmit(sendToken)}>
          <div className='input'>
            <label>Email Address</label>
            <input type='text' placeholder='lamburghinie@mail.com' {...mail('email', {required: 'Email address required', pattern: {value: emailPattern, message: 'Email address invalid'}})}/>
            <p>{errors.email?.message}</p>
          </div>
          <button type='submit'>Continue</button>
        </form>
        <p onClick={signIn} className='account'>Remember password? <span>Sign in</span></p>
      </div>
    </div>
  </div>

  const resetPassword =
  <div className='sign-up'>
    <div onClick={recoverPassword} className='close'></div>
    <div className='form'>
      <span onClick={recoverPassword}>×</span>
      <p className='title'>Enter new password</p>
      <p className='desc'>Password must be at least 8 characters long, contain at least one upper and lowercase letters, special character and number</p>
      <div className='content'>
        <form onSubmit={handleResetSubmit(handleReset)}>
          <div className='input'>
            <label>Email Address</label>
            <input type='text' disabled value={getValues('email')}/>
          </div>
          <div className='input'>
            <label>Enter reset token sent to your mail</label>
            <input type='text' placeholder='Enter token' {...reset('token', {required: 'Token required'})}/>
            <p>{errors1.token?.message}</p>
            {watch1('token') !== token && (<p>Token not correct</p>)}
          </div>
          <div className='input'>
            <label>Password</label>
            <div className='password'>
              <input  type={`${show ? 'text' : 'password'}`} placeholder='12345@Aa' {...reset('password', {required: 'Password required', pattern: {value: passwordPattern, message: 'password not valid'}})}/>
              <Image src={`/images/general/auth/${show ? 'eye-show' : 'eye-hide'}.png`} alt="img" onClick={() => setShow(!show)} width='25' height='25'/>
            </div>
            <p>{errors1.password?.message}</p>
          </div>
          <div className='input'>
            <label>Confirm password</label>
            <div className='password'>
              <input  type={`${show1 ? 'text' : 'password'}`} placeholder='12345@Aa' {...reset('confirmPassword', {required: 'Confirm password required', validate: () => {return (watch1('confirmPassword') == watch1('password'))}})}/>
              <Image src={`/images/general/${show1 ? 'eye-show' : 'eye-hide'}.png`} alt="img" onClick={() => setShow1(!show1)} width='25' height='25'/>
            </div>
            <p>{errors1.confirmPassword?.message}</p>
            {(watch1('confirmPassword') !== watch1('password') && getValues1('confirmPassword')) && (<p>Passwords do not match</p>)}
          </div>
          <button type='submit'>Continue</button>
        </form>
        <p onClick={signIn} className='account'>Remember password? <span>Sign in</span></p>
      </div>
    </div>
  </div>

  return <>{recover ? resetPassword : getToken}</>
}

export default RecoverPassword