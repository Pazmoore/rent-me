'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { payData } from '@/app/products/detailsData'
import CheckoutCard from '../checkoutCard/CheckoutCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { authObservable, showAuth } from '@/app/components/auth/isAuth/Auth'
import { cardContent } from '../../products/accommodations/home/AccommodationsData'
import { cardContent as workspace } from '../../products/workspace/home/workSpaceData'
import './checkout.scss'

const Checkout = ({params} : {params: {q: string}}) => {
  const navigate = useRouter()
  const [check, setCheck] = useState(true)
  const [checkPay, setCheckPay] = useState(false)
  const [selected, setSelected] = useState<any>()
  const [selectPay, setSelectPay] = useState('Card')
  const [authenticated, setAuthenticated] = useState(false)
  const [allWorkspace, setAllWorkspace] = useState(workspace)
  const [allAccommodations, setAllAccommodations] = useState(cardContent)

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    return () => authSubscription.unsubscribe()
  }, [])

  useEffect(() => {
    const select = params.q[0] == 'workspace' ? allWorkspace : allAccommodations
    const selected = select.filter((data) => params.q[1] == data.id)
    setSelected(selected[0])
  }, [allAccommodations, allWorkspace, params.q])

  const payNow = (e: Event) => {
    e.preventDefault()
    if (!authenticated){
      showAuth('login')
      return
    }
  }

  return (
    <div className='checkout'>
      <div onClick={() => navigate.back()} className='navigate-back'>
        <ArrowBackIosIcon fontSize='small' className='navigate-back-icon'/>
        <span>Back</span>
      </div>
      <div className='payments'>
        <div className='payments-box'>
          <div className='content-box'>
            <div className='book'>
              <div className='details'>
                <Image src={selected?.images[0]} alt='img' width={300} height={200} className='rent'/>
                <div className='content'>
                  <span className='title'>{selected?.title}</span>
                  <span className='features'>2 guests • 2 bedrooms • 2 beds • 2 baths</span>
                  <div className="location">
                    <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
                    {selected?.fullAddress} {selected?.location}
                  </div>
                </div>
              </div>
              <div className='questions'>
                <span className='question'>Who are you booking for?</span>
                <div className='answer'>
                  <label className="checkbox-wrapper">
                    <input type="checkbox" checked={check} onChange={() => setCheck(!check)}/>
                    <span className="check-mark"></span>
                  </label>
                  <span>I&#39;m the main guest</span>
                </div>
                <div className='answer'>
                  <label className="checkbox-wrapper">
                    <input type="checkbox" checked={!check} onChange={() => setCheck(!check)}/>
                    <span className="check-mark"></span>
                  </label>
                  <span>I&#39;m booking for someone else</span>
                </div>
              </div>
            </div>
            <div className='hide'>
              <CheckoutCard selected={selected} showButton={false}/>
            </div>
          </div>
          <div className='payment'>
            <p>Select payment Method</p>
            <div className='select'>
              {
                payData.map((pay, i) => (
                  <button key={i} onClick={() => setSelectPay(pay)} className={`${selectPay == pay && 'active'}`}>{pay}</button>
                ))
              }
            </div>
            <p>Home Address</p>
            <form>
              <label>Home Address</label>
              <input type='text'/>
              <label>Country</label>
              <input type='text'/>
              <div className='state'>
                <div className='code'>
                  <label>State</label>
                  <input type='text'/>
                </div>
                <div className='code'>
                  <label>zip Code</label>
                  <input type='text'/>
                </div>
              </div>
              <div className='policy'>
                <label className="checkbox-wrapper">
                  <input type="checkbox" onChange={() => setCheckPay(!checkPay)}/>
                  <span className="check-mark"></span>
                </label>
                <span>
                  By clicking the button below, I agree to the Host&#39;s House Rules, Ground rules for guests,
                  Re-booking and Refund Policy, and that Lamburghinie can charge my payment method if I’m responsible for any damage.
                </span>
              </div>
              <button onClick={(e: any) => payNow(e)}>Pay</button>
            </form>
          </div>
        </div>
        <div className='scroll'>
          <CheckoutCard selected={selected} showButton={false}/>
        </div>
      </div>
    </div>
  )
}

export default Checkout