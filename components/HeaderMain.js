import Link from 'next/link';
import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { TiTimes } from "react-icons/ti";

const HeaderMain = () => {

const [toggle, setToggle] = useState(false)

const handleToggle = () => {

  setToggle(prevToggle => !prevToggle)
}

  return (
    <header>
      <p className='logo'>Sunnyside</p>
      <div className='burgerMenu'>
      {!toggle?<button type="" className="menu" onClick={handleToggle}><RxHamburgerMenu/></button>:
      <button type="" className="close" onClick={handleToggle}><TiTimes/></button>} 
    
      </div>

      <nav>
        <ul className={!toggle? "navList" : " navList open "}>
          <li><Link  href='/'>About</Link></li>
          <li><Link  href='/'>Services</Link></li>
          <li><Link  href='/'>Projects</Link></li>
          <button className="btn1">Contact</button>

          
        </ul>
      </nav>

   
<h1 className='title'>We are creative</h1>
     
        
    </header>
  )
}

export default HeaderMain