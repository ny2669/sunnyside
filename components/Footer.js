import Link from 'next/link'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <section className='footer'>
        <p>Sunnyside</p>
        <nav  aria-label='footer'>
            <ul className='footerNav' aria-label='footer-nav-menu'>
                <li><Link href=''>About</Link></li>
                <li><Link href=''>Services</Link></li>
                <li><Link href=''>Projects</Link></li>
            </ul>
        </nav>
        <div className='social'>
          <AiFillFacebook/>
          <BsInstagram/>
           <BsTwitter/>
       <BsPinterest/>
        </div>
    </section>
  )
}

export default Footer