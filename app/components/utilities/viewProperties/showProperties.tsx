'use client'
import React, { useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'
import ViewProperties from './ViewProperties'

const viewProperties = new BehaviorSubject(false)
export const showProperties = (authenticated: boolean) => viewProperties.next(authenticated)
export const propertiesObservable = viewProperties.asObservable()

const ShowProperties = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const propertiesSubscription = propertiesObservable.subscribe((view) => setShow(view))
    return () => propertiesSubscription.unsubscribe()
  }, [])

  return (
    <>{show && <ViewProperties/>}</>
  )
}

export default ShowProperties