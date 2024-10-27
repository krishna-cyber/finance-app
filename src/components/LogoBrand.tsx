import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
const LogoBrand = () => {
  return (
    <div className=' flex gap-3 items-center'>
        <Image src={logo} alt="logo" width={40} height={40} />
        <p className=' text-white font-semibold text-2xl '>Finance </p>
    </div>
  )
}

export default LogoBrand