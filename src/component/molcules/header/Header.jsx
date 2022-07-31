import React from 'react'
import { Link } from 'react-router-dom'
import { GitLogo,TwitterLogo,LinkedinLogo,MailLogo, ResumeLogo } from '../../atoms/logos/Logos'
import styles from"./Header.css"


export const Header = () => {
  return (
    <div className='header'>
    <div className='header-wrapper'>
    <span className='header-title'>PORTFOLIO</span>
    <div className='menu-items'>  
        
        <div className="menu-item">
        <Link to="/" className='menu'>works</Link>
        </div>
        <div className="menu-item">
          <Link to="/about" className='menu'>about me</Link>
        </div>
        <div className="menu-item">
          <span className='menu'>contact</span>
       </div>
      </div>

      <div className='snslogo-items'>
        
        <div  className='snslogo-item'>
         <a href='https://github.com/okjm3324' target="_blank" rel="noopener noreferrer">
           <GitLogo  />
           </a>
        </div>
        <div  className='snslogo-item'>
          <a href='https://twitter.com/hO0BjMfQOjrl0in' target="_blank" rel="noopener noreferrer">
          <TwitterLogo  />
          </a>
        </div>
        <div  className='snslogo-item'>
           <LinkedinLogo   />
        </div>
        <div  className='snslogo-item'>
          <ResumeLogo />
        </div>
        <div  className='snslogo-item'>
           <MailLogo  />
        </div>
        
      </div>
      <hr  size="20"/>
    
    
</div>
    
    </div>
      



  )
}
