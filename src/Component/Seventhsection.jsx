import React from 'react'
import { pictureData } from './ThirdHero'
import './Seventhsection.css'
function Seventhsection(props) {
  return (
    <>
     <main>
        <nav className='side'>
        <h1 className='trust'>Powering growth for amazing<br/>businesses</h1>
        <p className='thousand'>Paystack is a growth engine for a new generation of innovative,<br/> forward-looking organizations operating in Africa.</p>
       </nav>
    <div className='display'>
        <nav className='crazy'>
       {props.image.map((src,) => (
        <img key={src} src={src} alt="logo" className='pic1'/>
        
      ))}
      </nav>
    </div>


<div className='display1'>
        <nav className='crazy'>
       {props.image4.map((src,) => (
        <img key={src} src={src} alt="logo" className='pic1'/>
        
      ))}
      </nav>
    </div>

    <div className='display2'>
        <nav className='crazy'>
       {props.image5.map((src,) => (
        <img key={src} src={src} alt="logo" className='pic1'/>
        
      ))}
      </nav>
    </div>
    </main>
    </>
  )
}

export default function (){
      return <Seventhsection {...pictureData} />;
    }

