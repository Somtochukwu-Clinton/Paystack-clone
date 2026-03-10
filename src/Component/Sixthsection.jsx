import { fourthData } from "./ThirdHero";
import './Sixthsection.css'

import React from 'react'

function Sixthsection(props) {
  return (
    <div className="for-background">
      <section className="tits">
        <h1 className="trust">Trusted by 200,000+<br/>businesses</h1>
        <p className="thousand">Thousands of organizations of all sizes trust Paystack to grow their<br/> business.</p>
      </section>
     <main className="getto">
      <div className="container">
        <div className="first-container">
            <nav>
            <img src={props.image} alt="Promo" className='little'/>
            </nav>
            <p className="global">{props.title}</p>
            <p className="accept">{props.description}</p>
            <p className="learn">{props.secondTittle}</p>

        </div>
      </div>


      <div className="container">
        <div className="first-container">
            <nav>
            <img src={props.image1} alt="Promo" className='little'/>
            </nav>
            <p className="global">{props.title1}</p>
            <p className="accept">{props.description1}</p>
            <p className="learn">{props.secondTittle1}</p>

        </div>
      </div>


        <div className="container">
        <div className="first-container">
            <nav>
            <img src={props.image3} alt="Promo" className='little'/>
            </nav>
            <p className="global">{props.title2}</p>
            <p className="accept">{props.description2}</p>
            <p className="learn">{props.secondTittle2}</p>

        </div>
      </div>
      </main>
    </div>
  )
}

 export default function (){
      return <Sixthsection {...fourthData} />;
    }

