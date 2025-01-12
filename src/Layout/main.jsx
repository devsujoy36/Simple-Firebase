import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'

const main = () => {
  return (
    <div className='text-xl font-bold'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default main