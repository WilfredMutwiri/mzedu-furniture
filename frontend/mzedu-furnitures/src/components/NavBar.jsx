"use client";
import logo from '../images/logo.webp'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export default function NavBar() {
  let adText=["..Just the best..","..Get quality furniture at an affordable price..","..We offer free delivery.."]
  const [newText,setNewText]=useState(0)

  const changeText=()=>{
    setNewText((prevIndex)=>(prevIndex===adText.length-1?0:prevIndex+1))
  }

  useEffect(()=>{
    const interval=setInterval(changeText,2000)
    return ()=>clearInterval=(interval)
  },[])
  return (
    <div className='relative z-50 bg-gray-50'>
      {/* contacts nav */}
      <div className='p-3 hidden md:flex text-sm w-11/12 mx-auto'>
        <div>
          <ul className='flex gap-4'>
            <li className='contactNavli'><FaPhone className='text-xl text-green-600'/> +2547 000 000 / +2547 000 000</li>
            <li className='contactNavli'><FaLocationDot className='text-xl text-green-600'/> Kwale County, Diani-Ukunda, Nyumba-Tatu Area</li>
            <li className='contactNavli'><IoTime className='text-xl text-green-600'/>24Hr Customer Support</li>
            <li className='contactNavli'><MdOutlineEmail className='text-xl text-green-600'/>mzedufurniture@gmail.com</li>
          </ul>
        </div>
        <div className='pl-2 flex gap-2'>
          <h2 className='text-cyan-800'>Follow us</h2>
          <ul className='flex gap-2'>
            <li><FaFacebook className='w-5 h-5'/></li>
            <li><RiTwitterXFill className='w-5 h-5'/></li>
            <li><FaWhatsapp className='w-5 h-5'/></li>
          </ul>
        </div>
      </div>
      <hr/>
      <Navbar fluid rounded className='bg-gray-50'>
    <Navbar.Brand gradientDuoTone="pinkToOrange">
      <img className='w-8' src={logo}/>
      <span className="pl-2 text-pink-800 self-center whitespace-nowrap text-2xl md:text-3xl dark:text-white font-dancing">Mzedu Furniture</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Link to='/signin'>
      <Button gradientDuoTone="pinkToOrange">Sign In</Button>
      </Link>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        HOME
      </Navbar.Link>
      <Navbar.Link href="/featuredProducts">FEATURED</Navbar.Link>
      <Navbar.Link href="/newArrivals">NEW ARRIVALS</Navbar.Link>
      <Navbar.Link href="#">LIVING ROOM</Navbar.Link>
      <Navbar.Link href="#">DINING</Navbar.Link>
      <Navbar.Link href="#">BEDROOM</Navbar.Link>
      <Navbar.Link href="#">OUTDOOR</Navbar.Link>
      <Navbar.Link href="#">CONTACT</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  <div className='bg-gray-800 p-2 text-white flex justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-0 md:mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>
    <h2 className='text-center text-sm md:text-normal'>{adText[newText]}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-0 md:ml-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

  </div>
    </div>
  )
}
