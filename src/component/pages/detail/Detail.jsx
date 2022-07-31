import React from 'react'
import { Link } from 'react-router-dom'
import { Tag } from '../../atoms/tag/Tag'
import { Header } from '../../molcules/header/Header'
import "./Detail.css"

export const Detail = () => {
  return (
    <div>

        <Header/>
    <div className='detail-container'>
        <div className='work-thumbnail'>
          <img className='work-thumbnail-img' src="/assets/thumbnail/aca8812f.jpg"></img>
        </div>

        <div className='work-title'>
          <h1>Real SNS app</h1>
        </div>
        <div className='workdetail-description'>
          <p>これはこんなふうなアプリです。作ろうとした動機はこれです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。これはこんなふうなアプリです。</p>
        </div>
        <div className='skills'>
          <ul className='skill-items'>
          
           
            
         
            <li className='skill-item'>   <Tag tagText={"React"}/></li>
            <li className='skill-item'> <Tag tagText={"Html"}/></li>
            <li className='skill-item'><Tag tagText={"Css"}/></li>
          </ul>
        </div>

        <div className='content-images'>
          <img className='content-img' src='/assets/thumbnail/aca8812f.jpg'></img>

        </div>

        
        <Link className='back-link' to="/">Back</Link>
    </div>

    </div>
  )
}
