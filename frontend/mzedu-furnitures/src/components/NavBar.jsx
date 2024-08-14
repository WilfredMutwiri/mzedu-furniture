"use client";
import logo from '../images/logo.webp'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
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
    <div className='relative z-50'>
      <Navbar fluid rounded className='bg-gray-100'>
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
      <Navbar.Link href="#">NEW ARRIVALS</Navbar.Link>
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
