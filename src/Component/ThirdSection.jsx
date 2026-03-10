import React from 'react'
import { promoData } from './ThirdHero';
import './ThirdSection.css'


function HeroPromo(props) {
  return (
    <div className="hero-promo">
      <div className="hero-image">
        <img src={props.image} alt="Promo" className='gif-image'/>
      </div>
      <div className="hero-text">
        <h1 className='maintext'>{props.title} <br/></h1>
        <p className='othertext'>{props.description}</p>
        <nav className='all-list'>
        <ul className='first-li'>
          {props.features.map((feature, index) => (
            <li key={index} ><span  className='checkmark'>&#10003;</span>{feature}</li>
          ))}
        </ul>

        <ul className='first-li'>
          {props.features2.map((feature, index) => (
            <li key={index}><span  className='checkmark'>&#10003;</span>{feature}</li>
          ))}
        </ul>
       </nav>
       <h2 className='sencond-text'>{props.secondTittle}</h2>
       <p className='third-text'>{props.secondDescription}</p>
       <p className='lastTittle'> <button className='greater'>&#62;</button>{props.lastTittle}</p>
      </div>
    </div>
  );
}



 


export default function (){
  return <HeroPromo {...promoData} />;
}


