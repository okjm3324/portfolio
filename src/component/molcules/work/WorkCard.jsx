import React from 'react'
import { CardGitLogo, GitLogo } from '../../atoms/logos/Logos'
import "./WorkCard.css"



export const WorkCard = () => {
  return (
    
      <div className='work-card'>
      
        
        <div className='thumbnail'>
          <img className='thumbnail-img' src='/assets/thumbnail/aca8812f.jpg'></img>
        </div>

        <div className='work-description'>
          <div className='work-title'>
            <h1>SNS風アプリ</h1>
        
          </div>
          <div className='card-logo'>
           <CardGitLogo />
   
          </div>
         <div className='desc-text'>
         <p>これはいいものです。こんなところが大変でした。テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
         <ul>
           <li>React</li>
           <li>mongoDB</li>
         </ul>
         
         </div>
         
        </div>
      
     
      
      
      </div>
 


  )
}
