import { secondData } from "./ThirdHero";
import './FourthSection.css'
function HeroP(props) {
  return (
    <div className="hero1">
      <div className="hero-2">
      
        <div className="hero-3">
            <div className="hero-4">
        <h1 className='text5'>{props.title} <br/></h1>
        <p className='text6'>{props.description}</p>
        <nav className='list7'>
            <ul className="list8">
             {props.features?.map((feature, index) => (
            <li key={index} ><span  className='checkmark'>&#10003;</span>{feature}</li>
          ))}
          </ul>
        </nav>
        </div>
        <img src={props.image} alt="Promo" className='card-image'/>
      </div>
           <p className='lastTittle'> <button className='greater'>&#62;</button>{props.lastTittle}</p>
        </div>
        </div>
        );
        }


export default function (){
  return <HeroP {...secondData} />;
}