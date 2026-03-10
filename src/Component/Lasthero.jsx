import { lastData } from "./ThirdHero";
import './Lasthero.css'

import React from 'react'

function Lasthero(props) {
  return (
    <>
   <div className="fbackground">
      <section className="tits">
        <h1 className="trust">Backed by strong global<br/> partners</h1>
        <p className="thousand">Paystack is backed by notable investors as well as some of the best<br/> payments companies on the planet.</p>
      </section>
     <main className="getto">
      <div className="container">
        <div className="first-container">
            <nav>
            <img src={props.image6} alt="Promo" className='little'/>
            </nav>
            <p className="globall">{props.title3}</p>
            <p className="accept">{props.description}</p>
            <p className="learn">{props.secondTittle}</p>
             <img src={props.image7} alt="Promo" className='littley'/>
        </div>

      </div>
 </main>
      </div>
     
      </>
  )
}

export default function (){
      return <Lasthero {...lastData} />;
    }
