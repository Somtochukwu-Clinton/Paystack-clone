import React from 'react'
import {thirdData} from './ThirdHero'
import './FifthSection.css'

function FifthSection  (props) {
  return (
     <div className="hero-promo">
      <div className="hero-vedio">
         <video 
            src={props.video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className='video'
          />
      </div>
      <div className="hero-text">
        <h1 className='maintext'>{props.title} <br/></h1>
        <p className='othertext'>{props.description}</p>
        <nav className='all-list'>
        <ul className='first-li'>
         
        </ul>

        <ul className='first-li'>
          
        </ul>
       </nav>
       <h2 className='sencond-text'>{props.secondTittle}</h2>
       <p className='third-text'>{props.secondDescription}</p>

      </div>
    </div>
  );
}

    
    
    export default function (){
      return <FifthSection {...thirdData} />;
    }


