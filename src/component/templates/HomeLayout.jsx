import React from 'react'
import { Header } from '../molcules/header/Header'
import "./HomeLayout.css"

export const HomeLayout = ({children}) => {
  return (

    <div className='home-layout'>
      <Header/>
      <div className='works-container'>
      {children}
      </div>
    </div>
  )
}
