'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { DateRange, DayPicker } from 'react-day-picker'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import { guests, searchData, locations } from '@/app/components/home/search/searchData'
import '/public/typography/date-picker.scss'
import './search.scss'

const Search = ({product} : {product?: string}) => {
  let checkIn: any, checkOut: any
  const [addRoom, setAddRoom] = useState(1)
  const [openMenu, setOpenMenu] = useState(5)
  const [selectedGuest, setSelectedGuest] = useState(guests)
  const [guestCount, setGuestCount] = useState([0, 0, 0, 0])
  const [range, setRange] = useState<DateRange | undefined>()
  const [selectedData, setSelectedData] = useState(searchData)
  const handleClickAway = () => setOpenMenu(5)
  const handleOpenMenu = (menuIndex: number) => menuIndex == openMenu ? setOpenMenu(5) : setOpenMenu(menuIndex)
  let footer = <p className='check-in-date'>Please select your check-in date</p>
  let footer1 = <p className='check-in-date'>Please select your check-out date</p>
  if (range?.from){
    if (!range.to){
      checkIn = <p>{format(range.from, 'MMM dd')}</p>
      footer = <><span className='check-in'>{format(range.from, 'PP')}</span> - <span className='checkout'>Select checkout date</span></>
    } else if (range.to){
      checkIn = <p>{format(range.from, 'MMM dd')}</p>
      checkOut = <p>{format(range.to, 'MMM dd')}</p>
      footer = <><span className='check-in'>{format(range.from, 'PP')}</span> – <span className='checkout'>{format(range.to, 'PP')}</span></>
      footer1 = <><span className='check-in'>{format(range.from, 'PP')}</span> – <span className='checkout'>{format(range.to, 'PP')}</span></>
    }
  }

  const handleChoice = (menuIndex: number, choice: any) => {
    const index = menuIndex
    setSelectedData((prevData) => {
      const updatedData = [...prevData]
      index == 0 ? updatedData[index].destination = choice : index == 1 ? updatedData[index].apartment = choice : 'return'
      setOpenMenu(1)
      return updatedData
    })
  }

  const handleGuestChoice = (menuIndex: number, operation: string) => {
    setGuestCount((prevCount) => {
      const count = [...prevCount]
      if (operation === 'sub' && count[menuIndex] != 0) count[menuIndex] = prevCount[menuIndex] - 1
      if (operation === 'add'){
        if (menuIndex > 1 && count[menuIndex] != 5) count[menuIndex] = prevCount[menuIndex] + 1
        if (menuIndex < 2 && count[menuIndex] != 15) count[menuIndex] = prevCount[menuIndex] + 1
      }
      return count
    })
  }
  const handleAddRoom = (operation: string) => {
    operation === 'add' && setAddRoom(addRoom + 1)
    operation === 'sub' && addRoom != 1 && setAddRoom(addRoom - 1)
  }
  const handleDateSelect = () => {
    if (product !== 'workspace'){
      checkIn && setOpenMenu(3)
    } else{
      setOpenMenu(2)
    }
  }

  return (
    <div className='search-box1'>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="cards">
          {/* Select Destination */}
          <div onClick={() => handleOpenMenu(0)} className="box">
            <p>Destination</p>
            <div className="dropdown-card">
              {selectedData[0].destination ? selectedData[0].destination :
              <>
                <span>Search Destination</span>
                <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>
              </>
              }
            </div>
            {
              openMenu == 0 &&
              <div className='menu'>
                {
                  locations.map((location, i, array) => (
                    <span key={i} onClick={() => handleChoice(0, location.viewValue)} className={`apartment ${array.length - 1 == i && 'none'}`}>{location.viewValue}</span>
                  ))
                }
              </div>
            }
          </div>

          {/* Date Picker */}
          <div>
            <div onClick={() => handleOpenMenu(1)} className="box">
              <p>{product == 'workspace' ? 'Check-in' : 'Check-in-out'}</p>
              <div className="dropdown-card">
                <>
                  <span>{checkIn ? checkIn : 'Date'}</span>
                  {(!checkIn && product == 'workspace') && <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>}
                  {product !== 'workspace' && (checkOut ? checkOut : <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>)}
                </>
              </div>
            </div>
            {
              openMenu == 1 &&
              <div className='menu'>
                <DayPicker
                  mode="range" footer={footer} selected={range} onSelect={setRange} showOutsideDays fromDate={new Date()} className='day'
                  onDayClick={handleDateSelect} modifiersClassNames={{day: 'day', today: 'today'}}
                />
              </div>
            }
          </div>

          {/* Date Picker-2 */}
          {
            product == 'workspace' &&
            <div>
              <div onClick={() => handleOpenMenu(2)} className="box">
                <p>Check-out</p>
                <div className="dropdown-card">
                  <>
                    <span>{checkOut ? checkOut : 'Date'}</span>
                    {!checkOut && <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>}
                  </>
                </div>
              </div>
              {
                openMenu == 2 &&
                <div className='menu'>
                  <DayPicker
                    mode="range" footer={footer1} selected={range} onSelect={setRange} showOutsideDays fromDate={new Date()} className='day'
                    onDayClick={() => setOpenMenu(4)} modifiersClassNames={{day: 'day', today: 'today'}}
                  />
                </div>
              }
            </div>
          }

          {/* Rooms */}
          {
            product !== 'workspace' &&
            <div>
              <div onClick={() => handleOpenMenu(3)} className="box">
                <p>Room</p>
                <div className="dropdown-card">
                  <span>Add Room</span>
                  <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>
                </div>
              </div>
              {
                openMenu == 3 &&
                <div className='menu'>
                  <div className='room'>
                    <span>Room</span>
                    <div className="count">
                      <p onClick={() => handleAddRoom('sub')} className={addRoom == 1 ? 'hide' : ''}>−</p>
                      {addRoom}
                      <p onClick={() => handleAddRoom('add')}>+</p>
                    </div>
                  </div>
                  <Image src='/images/general/arrow/arrow.png' alt="img" width={15} height={15} onClick={() => handleOpenMenu(4)} className='img-color'/>
                </div>
              }
            </div>
          }

          {/* Guests count */}
          <div>
            <div onClick={() => handleOpenMenu(4)} className="box box1">
              <p>Guest</p>
              <div className="dropdown-card">
                <>
                  <span>Add Guest</span>
                  <Image src='/images/header/arrow.svg' width={30} height={30} alt="img" className='img-color'/>
                </>
              </div>
            </div>
            {
              openMenu == 4 &&
              <div className='menu'>
                {
                  guests.map((guest, i) => (
                    <div key={i} className="guest">
                      <div className="person">
                        <span className="name">{guest.person}</span>
                        <span className="desc">{guest.desc}</span>
                      </div>
                      <div className="count">
                        <p onClick={() => handleGuestChoice(guest.id, 'sub')} className={guestCount[guest.id] == 0 ? 'hide' : ''}>−</p>
                        <span>{guestCount[guest.id]}
                          {(guestCount[guest.id] == 15 && guest.id < 2) && <span className='plus'>+</span>}
                        </span>
                        <p onClick={() => handleGuestChoice(guest.id, 'add')} className={`${(guestCount[guest.id] == 5 && guest.id > 1) && 'hide'} ${(guestCount[guest.id] == 15 && guest.id < 2) && 'hide'}`}>+</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
          </div>

          {/* Search button */}
          <div className='icon-bg'>
            <div onClick={() => handleClickAway()} className="search-icon">
              <Image src='/images/header/search1.svg' width={30} height={30} alt="img" className='img-color'/>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  )
}

export default Search