"use client"
import React from 'react'

import Countdown  from 'react-countdown';

const endingdate = new Date("2026-10-15")

const CountDown = () => {
  return (
    <Countdown className='font-bold text-4xl text-orange-300' date={endingdate}/>
  )
}

export default CountDown