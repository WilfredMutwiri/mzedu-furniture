import React, { useRef } from 'react'
import {Label } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import { BsStars } from "react-icons/bs";

import banner2 from '../images/banner2.jpg'
import banner1 from '../images/banner1.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import banner5 from '../images/banner5.jpg'

import dinningTable1 from '../images/dinningTable1.jpeg'
import popular1 from '../images/popular1.jpeg'
import popular2 from '../images/popular2.jpeg'
import popular3 from '../images/officeDesk1.jpeg'

import newSign from '../images/sign.png'
import dinningTable2 from '../images/dinningTable2.jpeg'
import bedsAd from '../images/bedsAds.png'
import diningAd from '../images/diningAd.jpg'
import officeAd from '../images/officeAd.png'
import sofasAd from '../images/sofasAd.png'
import Decor1 from '../images/luxurydecor.png'
import Decor2 from '../images/decor2.png'
// featured funiture
import featured1 from '../images/featured1.jpeg'
import featured2 from '../images/featured2.jpeg'
import featured3 from '../images/featured3.jpeg'
import featured4 from '../images/featured4.jpeg'
import featured5 from '../images/featured5.jpeg'
import featured6 from '../images/featured6.webp'
import featured7 from '../images/featured7.webp'
import featured8 from '../images/featured8.webp'
import featured9 from '../images/featured9.webp'
import featured10 from '../images/featured10.webp'

// arrivals
import Arrival1 from '../images/Arrival1.jpeg'
import Arrival2 from '../images/Arrival2.jpeg'
import Arrival3 from '../images/Arrival3.jpeg'
import Arrival4 from '../images/Arrival4.jpeg'
import Arrival5 from '../images/Arrival5.jpeg'
// living room
import livingRoom1 from '../images/living Room/living room 1.webp'
import livingRoom2 from '../images/living Room/living room 2.webp'
import livingRoom3 from '../images/living Room/living room 3.webp'
import livingRoom4 from '../images/living Room/living room 4.webp'
import livingRoom5 from '../images/living Room/living room 5.webp'


import { useState,useEffect } from 'react'
import { Button,Rating } from 'flowbite-react'
import { Link } from 'react-router-dom';
export default function Home() {
  const images=[banner1,banner2,banner3,banner4,banner5];
  const [currentImage,setCurrentImage]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        // return () => clearInterval(interval);
    }, 3000);
  }, [images.length],
  )
  const dealimages=[popular1,popular2,popular3,dinningTable1,dinningTable2];

  const [currentdealImage,setCurrentdealImage]=useState(0);
  const [currentImageName,setImageName]=useState(0);
  const [decorImage,setDecorImage]=useState(0)
  const [imagePrice,setImagePrice]=useState(0);

// features products
  const featuredImages=[featured1,featured2,featured3,featured4,featured5,featured6,featured7,featured8,featured10,featured9]
  const imageName=["Outdoor Tent","Complete Dinning Table","Living Room Table"]
  const featuredImagesNames=["Gamming Chair","Outdoor Shade","Rounded Table","Flower Holder","Flower Grid","Office Mahogany Desk","Glassdoor Office Desk","Office Chair","Dining set","Gaming chair Armless"]
  const featuredImagesPrice=['10,500','12,500','8,900','6,300','8300',"14500","20,500","9,900","26,300","8,300"]
  const imagePrices=['20,000','16,000','28,500']
  const decorImages=[Decor1,Decor2]

  // testimonies section
  const testimonies=[
  "Mzedu Furniture & Deco have a remarkable attention to detail skillset.I just purchased a sofa set from then and I still can't beleive the awesome appearance of my living room. Thank you!",
  "Mzedu furniture and Deco never disappoints. Their executive desks and chairs turned my office into a sophisticated workspace. Their wide selection and commitment to excellence and perfection make them the go-to for furniture in Kenya.","I rely on Mzedu furniture and Deco to bring my visions to life. Their collection allows me to create bespoke spaces that exude sophistication. Their dedication toquality craftsmanship and timeless design is amazing."]
  const [currentTestimoner,setCurrentTestimoner]=useState(0);
  const [currentTestimony,setCurrentTestimony]=useState(0);
  const testimoners=['Margaret Kiani','John Kimani','Judy Mwende'];
  const changeTestimony=(direction)=>{
    setCurrentTestimony((prevTestimony)=>{
      if(direction==="prev"){
        return prevTestimony===0?testimonies.length-1:prevTestimony-1;
      }else{
        return prevTestimony===testimonies.length-1?0:prevTestimony+1;
      }
    });
    setCurrentTestimoner((prevTestimoner)=>{
      if(direction==="prev"){
        return prevTestimoner===0?testimoners.length-1:prevTestimoner-1;
      }else{
        return prevTestimoner===testimoners.length-1?0:prevTestimoner+1;
      }
    });
  }

// deals section
  const changedealImage=(direction)=>{
    setCurrentdealImage((prevDealImage)=>{
      if(direction==="prev"){
        return prevDealImage===0?dealimages.length-1:prevDealImage-1;
      }else{
        return prevDealImage===dealimages.length-1?0:prevDealImage+1;
      }
    });
    setImageName((prevImageName)=>{
      if(direction==="prev"){
        return prevImageName===0?imageName.length-1:prevImageName-1;
      }else{
        return prevImageName===imageName.length-1?0:prevImageName+1
      }
    })
    setImagePrice((prevImagePrice)=>{
      if(direction==="prev"){
        return prevImagePrice===0?imagePrices.length-1:prevImagePrice-1;
      }else{
        return prevImagePrice===imagePrices.length-1?0:prevImagePrice+1
      }
    })
    }
// decoration advert section
    const changedecorImage=(direction)=>{
      setDecorImage((prevDecorImage)=>{
        if(direction==="prev"){
          return prevDecorImage===0?decorImages.length-1:prevDecorImage-1;
        }else{
          return prevDecorImage===decorImages.length-1?0:prevDecorImage+1;
        }
      })
      }
      const homeBannerImages=[banner1,banner2,banner3]
  return (
    <div >
      <div className='max-w-[1400px] h-[780px] w-full m-auto'>
        {/* home carousel */}
      <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {
          homeBannerImages.map((image,index)=>(
            <div key={index}>
              <img className='w-full h-auto' src={image} alt={`Banner ${index+1}`}/>
            </div>
          ))
        }
        </Carousel>
          {/* Dark Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 max-w-[1400px] h-[305px] -mt-[20px] md:h-[780px] w-full m-auto"></div>
          {/* Text Overlay */}
      <div className="-mt-72 md:-mt-0 absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className='flex w-full md:w-96 mx-auto pt-0 md:pt-28'>
          <div className='w-52 mx-auto border-r-4 border-white z-50 p-0 md:p-3 font-bold'>
          <h1 className=' text-center text-orange-500 font-semibold text-4xl md:text-7xl font-dancing'>Mzedu</h1>
          </div>
          <div className='w-64 text-sm md:text-xl font-semibold text-white z-50 p-3'>
            <h2>Where quality meets passion</h2>
          </div>
          </div>
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-5xl pt-5'>Furniture <span className='text-orange-500'>&</span> Deco</h2>
        <div className='hidden md:flex gap-5 justify-center mt-5 md:mt-10'>
          <Button gradientDuoTone="pinkToOrange" className='text-xs'>Make an Order</Button>
          <Button gradientDuoTone="pinkToOrange">New Arrivals</Button>
        </div>
      </div>
      </div>
      </div>
      <section>
        {/* home banner */}
        <div className="w-10/12 mx-auto block md:grid grid-cols-3 -mt-[560px] md:-mt-56 z-50 relative mb-10">
          <div className="bg-orange-500">
            <h2 className="p-5 text-xl text-white font-semibold">DEALS OF THE DAY</h2>
            <hr />
            <p className="p-4 text-white leading-relaxed">
              We offer valuable deals every day, our exclusive offers are available to all users,
              you can visit our store today to grab your offer or order online!
            </p>
          </div>
          <div className="pb-3 border-r-4 border-white bg-gray-300">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {
          dealimages.map((dealImage,index)=>(
            <div key={index}>
              <img className='w-full h-auto' src={dealImage} alt={`Banner ${index+1}`}/>
            </div>
          ))
        }
        </Carousel>
            <div>
              <BsStars className='text-orange-500 mx-auto mt-2 text-2xl'/>
              <p className='text-center text-xl md:text-2xl p-2 md:p-1 font-dancing'>
              Exclusive Deals of the Day: Unbeatable Prices, Just for You!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-0 bg-gray-300">
            <h2 className="p-5 text-lg font-semibold">POPULAR PRODUCT</h2>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular1} alt="" />
              <div className="block">
              <h2 className="font-semibold">Packing Spur</h2>
              <span className="text-red-600">Ksh 12,000 <span className="line-through text-sm text-black">Ksh 16,000</span></span>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular2} alt="" />
              <div className="block">
              <h2 className="font-semibold">Flowers Holder</h2>
              <span className="text-red-600">Ksh 10,000 <span className="line-through text-sm text-black">Ksh 14,000</span></span>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular3} alt="" />
              <div className="block">
              <h2 className="font-semibold">Office desk</h2>
              <span className="text-red-600">Ksh 22,000 <span className="line-through text-sm text-black">Ksh 28,000</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ads section */}
      <section>
        <div className='w-11/12 m-auto mt-5 mb-0 md:mb-5'>
        <div className='flex justify-center'>
          <div className='block md:flex gap-10'>
            <div className='flex gap-10' id='block1'>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={bedsAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Beds</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={sofasAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Sofas</h2>
              </a>
            </div>
            </div>
            <div className='flex gap-10 mt-6 md:mt-0' id='block2'>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={diningAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Dining</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={officeAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Office</h2>
              </a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* decore section */}
      <section>
        <div className='hidden md:block'>
        <div className='w-10/12 block md:flex m-auto pt-10 pb-10 gap-0 md:gap-14'>
          <a href='#'>
          <div className='' id='decor'>
            <img src={Decor1}/>
          </div>
          </a>
          <a href='#'>
          <div id='decor'>
            <img src={Decor2}/>            
          </div>
          </a>
        </div>
        </div>

        <div className="w-10/12 m-auto block md:hidden -mt-8 md:-mt-0">
              <div className="flex gap-2 pt-10 pb-10 m-auto ">
                <Button className='h-10 my-auto w-6' onClick={()=>changedecorImage('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <div id='decor'>
                <img className='w-60 h-60 object-contain mx-auto' src={decorImages[decorImage]}/>
                </div>
                <Button className='h-10 my-auto w-6' onClick={()=>changedecorImage('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </Button>
              </div>
            </div>
            <div className='text-white bg-teal-900 p-6 w-11/12 m-auto Wmb-5 -mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                SAVE UP TO 25% OFF SOFAS!
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on almost everything with exclusive prices and offers
              </h2>
            </div>
      </section>
      {/* explanation one */}
      <hr className='w-10/12 m-auto'/>
      <section>
        <div className='w-11/12 pt-10 m-auto'>
          <h2 className='text-3xl font-Dancing text-center pb-10'>Your choice,Our command!</h2>
          <p className='leading-relaxed pb-5'>
          At Mzedu Furniture & Deco, we offer an extensive selection of furniture, 
          ranging from cool and captivating accents to eye-catching centrepieces, we ensure that you
          find everything necessary to shape your dream home. We understand that your living space
          is a personal expedition, we have thoughtfully designed a diverse range of products,
          showcasing exceptional craftsmanship that allows you to weave your own narrative.
          All you desire,we deliver.Your choice will forever be our command!
          </p>
        </div>
      </section>
      <hr className='w-11/12 m-auto'/>
      {/* Featured Products */}
      <section>
        <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Featured Products</h2>
        <Link to="/featuredProducts">
        <Label className='pt-3 right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='flex flex-col gap-2 mt-2 md:mt-0'>
          {/* first features products div */}
          <div className={`w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100 `} id='visibleBig'>
          {/* Grid 1 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div className=''>
            <img className='w-40 md:w-52 h-[155px] object-fill' src={featured1}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Gamming Chair</h2>
            <h3 className=' text-red-500'>Ksh 10,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
          <img className='w-40 md:w-52 h-[155px] object-fill' src={featured2}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Outdoor Shade</h2>
            <h3 className=' text-red-500'>Ksh 12,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
          {/* grid 2 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div>
          <img className='w-40 md:w-52 h-[155px] object-cover' src={featured3}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Rounded Table</h2>
            <h3 className=' text-red-500'>Ksh 8,900</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>

          <div>
          <img className='w-40 md:w-52 h-[155px] object-cover' src={featured4}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Flower Holder</h2>
            <h3 className=' text-red-500'>Ksh 6,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
          {/* grid 3 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div>
          <img className='w-40 md:w-52 h-[155px] object-fill' src={featured5}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Flower Grid</h2>
            <h3 className=' text-red-500'>Ksh 8,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
            <img className='w-40 md:w-52 h-[155px] object-fill' src={featured6}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Office Desk</h2>
            <h3 className=' text-red-500'>Ksh 14,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='block md:hidden'/>
        </div>
      </section>
      <section>
      <div className=' text-white bg-red-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                WE OFFER FREE DELIVERY FOR ABOVE 100,000!
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      </section>
      {/* New Arrivals Section */}
      <section>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>New Arrivals</h2>
        <Link to="/newArrivals">
        <Label className='right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 sm:text-sm mt-1'>
          <p className='leading-relaxed'>
          Discover the elegance in every detail with our latest furniture arrivals, where timeless design meets modern comfort. Elevate your space with pieces that inspire and invite warmth into your home. Embrace the perfect blend of style and function, crafted to make every moment unforgettable.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-5 pb-5 hidden md:flex gap-6 transition-opacity duration-100`} id='visibleBig'>
        {/* first arrival */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={Arrival1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>DINING SET</h2>
              <h3 className='line-through text-sm'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 12,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second arrival */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={Arrival2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>TABLE SET</h2>
              <h3 className='line-through text-sm'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* third arrival */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={Arrival3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>WALL CLOCK</h2>
              <h3 className='line-through text-sm'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 10,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fourth arrival */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={Arrival4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>INFINITY CUP</h2>
              <h3 className='line-through text-sm'>Ksh.7,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 2,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
{/* fifth arrival */}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={Arrival5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>WALL DECO</h2>
              <h3 className='line-through text-sm'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <div className=' text-white bg-cyan-700 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                WE OFFER FREE DELIVERY FOR PURCHASES AROUND DIANI-UKUNDA
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      {/* Living room section */}
      <section>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Living Room Elegance</h2>
        <Link to="/newArrivals">
        <Label className='right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 sm:text-sm mt-1'>
          <p className='leading-relaxed'>
          Step into Living Room Elegance, where comfort meets style in every corner. Discover timeless pieces that transform your space into a sanctuary of sophistication. Elevate your home with designs crafted to inspire and impress.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-5 pb-5 hidden md:flex gap-6 transition-opacity duration-100`} id='visibleBig'>
        {/* first livingRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>French Sofas</h2>
              <h3 className='line-through text-sm'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 24,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second livingroom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>3-set Sofas</h2>
              <h3 className='line-through text-sm'>Ksh. 22,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* thid livingRoom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>Reeds Table</h2>
              <h3 className='line-through text-sm'>Ksh. 12,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 10,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fourth livingRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>Coffee Table</h2>
              <h3 className='line-through text-sm'>Ksh.7,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 2,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
{/* fifth livingRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div>
              <h2 className='text-sm font-semibold'>Africana Sofas</h2>
              <h3 className='line-through text-sm'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonies section */}
      <hr className='w-11/12 m-auto' />
      <section>
      <h2 className={`text-center font-Dancing text-2xl md:text-3xl pt-6 md:pt-10 pb-6 md:pb-10`}>~What Our Customers Have To Say~</h2>
        <div className='w-11/12 flex gap-6 m-auto pb-10'>
          <div className={`bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500`}>
            <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
            <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>{testimonies[currentTestimony]}</p>
            <h2 className='font-semibold'>@{testimoners[currentTestimoner]}<span className='font-normal pl-2 text-blue-600 hidden md:block'>/Facebook</span></h2>
            <div className='flex md:hidden justify-between pt-5'>
            <Button className='h-10 my-auto w-14' onClick={()=>changeTestimony('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </Button>
            <Button className='h-10 my-auto w-14' onClick={()=>changeTestimony('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Button>
            </div>
          </div>
          <div className={`bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600' />
            </Rating>
            </div>
            <p>
            Mzedu furniture and Deco never disappoints. Their executive desks and chairs turned my office into a sophisticated
            workspace. Their wide selection and commitment to excellence and perfection make them
            the go-to for furniture in Kenya.
            </p>
            <h2 className='font-semibold pt-7'>John Kimani/<span className='font-normal pl-2 text-blue-600'>Instagram</span></h2>
          </div>
          <div className={` bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-white' filled={false}/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>
            I rely on Mzedu furniture and Deco to bring my visions to life. Their collection allows
            me to create bespoke spaces that exude sophistication. Their dedication to
            quality craftsmanship and timeless design is amazing.
            </p>
            <h2 className='font-semibold'>Judy Mwende/ <span className='font-normal pl-2 text-blue-600'>Facebook</span></h2>
          </div>
        </div>
      </section>
      </div>
  )
}
