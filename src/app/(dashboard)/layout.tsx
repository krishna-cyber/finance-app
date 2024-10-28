import Header from '@/components/Header'
import React from 'react'

type Props={
    children:React.ReactNode
}

const layout = ({children}:Props) => {
  return (
    <>
    <Header/>
    <div>{children}</div>
    </>
  )
}

export default layout