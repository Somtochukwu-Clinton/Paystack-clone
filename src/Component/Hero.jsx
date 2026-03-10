import React from 'react'
import './Hero.css'
import Button from './Button'


const Hero = () => {
  return (
    <>
     <section className='background'>
      <article className='texts'>
        <h2 className='text1'>Modern online and offline<br/> payments for Africa</h2>
      <h2 className='text2'>Paystack helps businesses in Africa get paid by anyone,<br/> anywhere in the world
      
</h2>
  <nav className='nav3'>
    <Button className="btn2" text="Create a free account"/>
    <h4 className='text3'>or Contact Sales</h4>
     </nav>
      <div className='every-container'>
      <p>Trusted by over 200,000 businesses</p>
      <main className='all-container'>
        <div className='pics-container'>
          <img src="/src/assets/Dominos.svg" alt="domino" className='pics' />
          <img src="/src/assets/mtn.svg" alt="mtn" className='pics'/>
          <img src="/src/assets/Bolt.svg" alt="bolt" className='pics'/>
          <img src="/src/assets/avas.svg" alt="avans" className='pics'/>
        </div>

        <div className='last-div'>
          <p>Watch MTN Chief Transformation officer,Olubayo <br/>Adekanmbi,discuss working with Paystack</p>
        </div>
      </main>
      </div>
      

      </article>
      </section> 
     
    </>
  )
}

export default Hero

