
import "./Header.css"
import { dataType, secondData,} from "./datajson";
import Button from "./Button";
import "./Button.css"



const Header = () => {
  return (
    <article className='container1'>
        <section className="container2">
           <nav className="list">
              <img src="/src/assets/Logo.svg" alt="Logo" className="logo"/>
               <ul>
                 {dataType.map((list,)=>(
                  <li key={list.id} className={list.id ? "active": null}>{list.name}</li>
                   ))}
                </ul>
             </nav>
   

   <nav className="list2">
             <ul className="list3">
                 {secondData.map((menu,)=>(
                  <li key={menu.id} className={menu.id?"active": null}>{menu.name}</li>
                   ))}
                </ul>

                <nav className="nav2">

                <Button className="btn1" text="Create a free account"/>
                <img src="/src/assets/nigflag.svg" alt="Nigeria flag" className="Img2"/>
                </nav>
                </nav>
            
        </section>


         
    </article>
  );
};

export default Header
