import React from 'react'
import {Route,Link,Routes} from "react-router-dom"
import { About } from '../component/pages/about/About'
import { Detail } from '../component/pages/detail/Detail'
import { Home } from '../component/pages/Home'


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail" element={<Detail/>} />
      
      </Routes>
    
    
    </div>
  )
}

export default Router