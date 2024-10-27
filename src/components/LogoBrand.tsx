import Image from 'next/image'
import React from 'react'

const LogoBrand = () => {
  return (
    <div className=' flex gap-3 items-center'>
        <Image src={require('../assets/logo.svg')} alt="logo" width={40} height={40} />
        <p className=' text-white font-semibold text-2xl '>Finance </p>
    </div>
  )
}

export default LogoBrand