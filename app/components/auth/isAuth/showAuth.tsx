'use client'
import React, { useEffect, useState } from 'react'
import SignIn from '../signIn/SignIn'
import SignUp from '../signUp/SignUp'
import { showAuth, showAuthObservable } from './Auth'
import RecoverPassword from '../recoverPassword/RecoverPassword'

const ShowAuth = () => {
  const [login, setLogin] = useState(false)
  const [recover, setRecover] = useState(false)
  const [register, setRegister] = useState(false)

  useEffect(() => {
    const authSubscription = showAuthObservable.subscribe((auth) => {
      if (auth == 'login'){
        signIn()
      } else if(auth == 'register'){
        signUp()
      } else if(auth == 'recover'){
        recoverPassword()
      }
    })
    return () => authSubscription.unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signIn = () => {
    setLogin(!login)
    setRecover(false)
    setRegister(false)
    login && showAuth('none')
  }
  const signUp = () => {
    setLogin(false)
    setRegister(!register)
    register && showAuth('none')
  }
  const recoverPassword = () => {
    setLogin(false)
    setRecover(!recover)
    recover && showAuth('none')
  }

  return (
    <>
      {register && <SignUp signIn={signIn} signUp={signUp}/>}
      {recover && <RecoverPassword signIn={signIn} recoverPassword={recoverPassword}/>}
      {login && <SignIn signIn={signIn} signUp={signUp} recoverPassword={recoverPassword}/>}
    </>
  )
}

export default ShowAuth