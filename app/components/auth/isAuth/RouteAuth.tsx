'use client'
import React, { useEffect } from 'react'
import { authObservable, showAuth } from './Auth'
import { usePathname, useRouter } from 'next/navigation'
import { showProperties } from '../../utilities/viewProperties/showProperties'

const RouteAuth = ({children}: any) => {
  const navigate = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => {
      if (pathname.includes('properties') && !auth){
        navigate.back()
        showProperties(true)
      }
      if (pathname.includes('features') && !auth && (!pathname.includes('trending') && !pathname.includes('deals'))){
        navigate.back()
        showAuth('login')
      }
    })
    return () => authSubscription.unsubscribe()
  }, [navigate, pathname])

  return (
    <>{children}</>
  )
}

export default RouteAuth