import React from 'react'
import { WorkCard } from '../molcules/work/WorkCard'
import { HomeLayout } from '../templates/HomeLayout'

export const Home = () => {
  return (
    <div className='home-container'>
      <HomeLayout>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      
      </HomeLayout>
    
    </div>
  )
}
