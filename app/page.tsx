import React from 'react'
import Home from './components/home/home/Home'
import ShowAuth from './components/auth/isAuth/showAuth'
import ShowProperties from './components/utilities/viewProperties/showProperties'

const Page = () => {
  return (
    <main>
      <Home/>
      <ShowAuth/>
      <ShowProperties/>
    </main>
  )
}

export default Page