import React from 'react'
import {Label, Textarea, TextInput } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import { BsStars } from "react-icons/bs";
import { BiShoppingBag, BiSolidPurchaseTagAlt } from "react-icons/bi";
// banners
import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner2.webp'
import banner3 from '../images/banner3.webp'
// popular section
import dinningTable1 from '../images/dinningTable1.webp'
import popular1 from '../images/popular1.webp'
import popular2 from '../images/popular2.webp'
import popular3 from '../images/officeAd.webp'

import dinningTable2 from '../images/dinningTable2.webp'
import bedsAd from '../images/bedsAds.webp'
import diningAd from '../images/diningAd.webp'
import sofasAd from '../images/sofasAd.webp'
import Decor1 from '../images/luxurydecor.webp'
import Decor2 from '../images/decor2.webp'
// featured funiture
import featured1 from '../images/featured1.webp'
import featured2 from '../images/featured2.webp'
import featured3 from '../images/featured3.webp'
import featured4 from '../images/featured4.webp'
import featured5 from '../images/featured5.webp'
import featured6 from '../images/featured6.webp'
// arrivals
import Arrival1 from '../images/Arrival1.webp'
import Arrival2 from '../images/Arrival2.webp'
import Arrival3 from '../images/Arrival3.webp'
import Arrival4 from '../images/Arrival4.webp'
import Arrival5 from '../images/Arrival5.webp'
// living room
import livingRoom1 from '../images/living Room/living room 1.webp'
import livingRoom2 from '../images/living Room/living room 2.webp'
import livingRoom3 from '../images/living Room/living room 3.webp'
import livingRoom4 from '../images/living Room/living room 4.webp'
import livingRoom5 from '../images/living Room/living room 5.webp'
// dining room
import dining1 from '../images/dining room/dining 1.webp'
import dining2 from '../images/dining room/dining 2.webp'
import dining3 from '../images/dining room/dining 3.webp'
import dining4 from '../images/dining room/dining 4.webp'
import dining5 from '../images/dining room/dining 5.webp'
// bedroom 
import bed1 from '../images/bed room/bed1.webp'
import bed2 from '../images/bed room/bed2.webp'
import bed3 from '../images/bed room/bed3.webp'
import bed4 from '../images/bed room/bed4.webp'
import bed5 from '../images/bed room/bed5.webp'
// outdoor
import outdoor1 from '../images/outdoor/outdoor1.webp'
import outdoor2 from '../images/outdoor/outdoor2.webp'
import outdoor3 from '../images/outdoor/outdoor3.webp'
import outdoor4 from '../images/outdoor/outdoor4.webp'
import outdoor5 from '../images/outdoor/outdoor5.webp'
// testimoners
import testimoner from '../images/testimoner.webp'
import testimoner2 from '../images/testimoner2.webp'
import testimoner3 from '../images/testimoner3.webp'
import { Button,Rating } from 'flowbite-react'
import { Link } from 'react-router-dom';
import contactUsImg from '../images/contactUs.svg'

export default function Home() {

const dealimages=[popular1,popular2,popular3,dinningTable1,dinningTable2];
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
              <a href='#bedRoom'>
              <img className='w-40 md:w-44' src={bedsAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Beds</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#livingRoom'>
              <img className='w-40 md:w-44' src={sofasAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Sofas</h2>
              </a>
            </div>
            </div>
            <div className='flex gap-10 mt-6 md:mt-0' id='block2'>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#diningRoom'>
              <img className='w-40 md:w-44' src={diningAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Dining</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#outDoor'>
              <img className='w-40 md:w-44' src={outdoor2}/>
              <h2 className='font-semibold text-lg text-center p-1'>Shades</h2>
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
        <div className="w-10/12 mx-auto block md:hidden mb-4">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div id='decor'>
                <img className='w-60 h-60 object-contain mx-auto' src={Decor1}/>
                </div>
                <div id='decor'>
                <img className='w-60 h-60 object-contain mx-auto' src={Decor1}/>
                </div>
        </Carousel>
            </div>
            <div className='text-white bg-teal-900 p-6 w-11/12 m-auto Wmb-5 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-normal md:text-lg'>
                SAVE UP TO 25% OFF SOFAS!
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on almost everything with exclusive prices and offers
              </h2>
            </div>
      </section>
      {/* explanation one */}
      <hr className='w-10/12 m-auto'/>
      <section>
        <div className='w-11/12 pt-10 m-auto'>
          <h2 className='text-3xl font-Dancing text-center pb-5'>Your choice,Our command!</h2>
          <p className='leading-relaxed pb-5 text-sm md:text-lg'>
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
      <section id='featured'>
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
          <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Gamming Chair</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 10,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300  h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2 text-xs md:text-sm'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Outdoor Shade</h2>
              <h3 className='line-through'>Ksh. 12,500</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>

          </div>
          {/* grid 2 */}
          <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0'>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Rounded Table (set)</h2>
              <h3 className='line-through'>Ksh. 8,900</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='text-sm font-semibold'>Flower Holder (set)</h2>
              <h3 className='line-through text-sm'>Ksh. 6,300</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          </div>
          {/* grid 3 */}
          <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0'>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Flower Grid (Love)</h2>
              <h3 className='line-through'>Ksh. 8,300</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={featured6}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Office Desk M2R</h2>
              <h3 className='line-through'>Ksh. 14,500</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='block md:hidden w-11/12 mx-auto '/>
        </div>
      </section>
      <section>
      <div className=' text-white bg-red-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-normal md:text-lg'>
                WE OFFER FREE DELIVERY FOR ABOVE 100,000!
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      </section>
      {/* New Arrivals Section */}
      <section>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>New Arrivals</h2>
        <Link to="/newArrivals">
        <Label className=' right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 text-sm md:text-lg mt-1'>
          <p className='leading-relaxed'>
          Discover the elegance in every detail with our latest furniture arrivals, where timeless design meets modern comfort. Elevate your space with pieces that inspire and invite warmth into your home. Embrace the perfect blend of style and function, crafted to make every moment unforgettable.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100 `} id='visibleBig'>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
            {/* first arrival */}
            <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Dining Set</h2>
              <h3 className='line-through'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 12,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
            {/* second arrival */}
            <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Table Set</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 15,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* third arrival */}
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid2'>
        <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Wall Clock</h2>
              <h3 className='line-through'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 10,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
            {/* fourth arrival */}
            <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Infinity Cup</h2>
              <h3 className='line-through'>Ksh.7,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 2,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-2' id='grid3'>
          {/* fifth arrival */}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className=' font-semibold'>Wall Deco</h2>
              <h3 className='line-through'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={Arrival5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>WALL DECO</h2>
              <h3 className='line-through'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='mt-6 mb-2 w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
      </section>
      <hr className='w-11/12 mx-auto '/>
      <div className=' text-white bg-cyan-700 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-sm md:text-lg'>
                WE OFFER FREE DELIVERY FOR PURCHASES AROUND DIANI-UKUNDA
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      {/* Living room section */}
      <section id='livingRoom'>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Living Room Elegance</h2>
        <Link to="/newArrivals">
        <Label className='right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 text-sm md:text-lg mt-1'>
          <p className='leading-relaxed'>
          Step into Living Room Elegance, where comfort meets style in every corner. Discover timeless pieces that transform your space into a sanctuary of sophistication. Elevate your home with designs crafted to inspire and impress.
          </p>
        </div>
        <div className={"w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100"} id='visibleBig'>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
          {/* first livingRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>French Sofas</h2>
              <h3 className='line-through'>Ksh. 14,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 24,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second livingroom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>3-Set Sofas</h2>
              <h3 className='line-through'>Ksh. 22,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid2'>
          {/* thid livingRoom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Reeds Table</h2>
              <h3 className='line-through'>Ksh. 12,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 10,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fourth livingRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={livingRoom4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Coffee Table</h2>
              <h3 className='line-through'>Ksh.7,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 2,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-6 md:mb-0' id='grid3'>
          {/* fifth livingRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={livingRoom5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Africana Sofas</h2>
              <h3 className='line-through'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fifth livingRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={livingRoom5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Africana Sofas</h2>
              <h3 className='line-through'>Ksh. 25,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='mt-3 md:mt-0 w-11/12 mx-auto'/>
      <div className=' text-white bg-red-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
      <BiSolidPurchaseTagAlt className='text-xl md:text-3xl'/>
              <p className='text-center leading-relaxed font-semibold text-sm md:text-lg'>
                WHAT ARE YOU WAITING FOR? MAKE YOUR ORDER TODAY!
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      </section>
      {/* dining room section */}
      <section id='diningRoom'>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Dining Elegance</h2>
        <Link to="/newArrivals">
        <Label className=' right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 text-sm md:text-lg mt-1'>
          <p className='leading-relaxed'>
          Step into Dining Elegance, where every meal becomes an occasion. Discover timeless pieces that blend style and comfort, creating the perfect ambiance for unforgettable gatherings.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100 `} id='visibleBig'>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
        {/* first diningRoomImg */}
        <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={dining1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Africana Set</h2>
              <h3 className='line-through'>Ksh. 24,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 24,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second diningroom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={dining2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>French Set</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 20,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid2'>
          {/* thid diningRoom Img */}
            <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={dining3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Coffee pub</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 18,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fourth diningRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={dining4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Blue Africana</h2>
              <h3 className='line-through'>Ksh.27,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 25,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid3'>
          {/* fifth diningRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={dining5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Coffe Pub</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 18,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fifth diningRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={dining5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Coffe Pub</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 18,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='mt-3 md:mt-0 w-11/12 mx-auto'/>
      </section>
      <div className=' text-white bg-cyan-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-normal md:text-lg'>
                WE OFFER FREE DELIVERY FOR ABOVE 100,000!
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
            {/* bedroom section */}
            <section id='bedRoom'>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Serenity Haven</h2>
        <Link to="/newArrivals">
        <Label className='right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 text-sm md:text-lg mt-1'>
          <p className='leading-relaxed'>
          Welcome to Serenity Haven, where every detail is designed for restful nights and peaceful mornings. Discover bedroom furniture that transforms your space into a sanctuary of comfort and style.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100`} id='visibleBig'>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
        {/* first bedRoomImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={bed1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Queen Medium</h2>
              <h3 className='line-through'>Ksh. 10,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 8,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second bedroom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={bed2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Queen Large</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 18,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid2'>
          {/* thid bedRoom Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={bed3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>King Medium</h2>
              <h3 className='line-through'>Ksh. 10,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 9,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
            {/* fourth bedRoomImg */}
            <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={bed4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>King Large</h2>
              <h3 className='line-through'>Ksh.20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 16,300</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid3'>
          {/* fifth diningRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={bed5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>King Large</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 17,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fifth diningRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={bed5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>King Large</h2>
              <h3 className='line-through'>Ksh. 20,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 17,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='mt-3 md:mt-0 w-11/12 mx-auto'/>
      </section>
      <div className=' text-white bg-green-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
      <BiShoppingBag className='text-xl md:text-3xl'/>
              <p className='text-center leading-relaxed font-semibold text-sm md:text-lg'>
                WE HAVE ALL YOU NEED...LOOK NO FURTHER, SHOP WITH US TODAY!
              </p>
              <h2 className='text-center text-xs md:text-sm'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
{/* outdoor section */}
    <section id='outDoor'>
      <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Breezescape</h2>
        <Link to="/newArrivals">
        <Label className='right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </Link>
        </div>
        <div className='w-11/12 mx-auto p-3 text-sm md:text-lg mt-1'>
          <p className='leading-relaxed'>
          Transform your outdoor space into a serene retreat with our Breezescape collection. Discover elegantly crafted furniture designed to bring comfort and style to your open-air oasis.
          </p>
        </div>
        <div className={`w-11/12 m-auto pt-10 pb-5 fl grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100`} id='visibleBig'>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid1'>
        {/* first outdoorImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={outdoor1}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Silk Tent(Red)</h2>
              <h3 className='line-through'>Ksh. 8,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 6,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* second outdoor Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={outdoor2}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Tent K2V</h2>
              <h3 className='line-through'>Ksh. 16,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 14,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid2'>
          {/* third outdoorImg */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={outdoor4}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Silk Tent(Blue)</h2>
              <h3 className='line-through'>Ksh.8,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 6,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
          {/* fourth diningRoom Img*/}
<div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill hover:scale-110 duration-300' src={outdoor5}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Table Shade</h2>
              <h3 className='line-through'>Ksh. 6,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 5,500</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-10 md:mb-0' id='grid3'>
        {/* fifth outdoor Img */}
        <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={outdoor3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Stand TentC02</h2>
              <h3 className='line-through'>Ksh. 16,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 14,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        {/* fifth outdoor Img */}
          <div className='shadow-md hover:shadow-sm relative shadow-gray-300 h-[265px]' id='decor'>
            <img className='w-52 h-[200px] object-fill' src={outdoor3}/>
            <div className='p-3 flex justify-between bg-gray-200 relative gap-0 md:gap-2'>
              <div className='text-xs md:text-sm'>
              <h2 className='font-semibold'>Stand TentC02</h2>
              <h3 className='line-through'>Ksh. 16,000</h3>
              </div>
              <div>
              <h3 className=' text-red-500 text-sm font-semibold'>Ksh. 14,000</h3>
              <FaCartArrowDown className='text-xl text-orange-600 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Link to="/featuredProducts"> 
        <Button className='w-40 mx-auto md:hidden' gradientDuoTone="pinkToOrange">Browse More <span><FaArrowRight className='ml-2 text-xl'/></span></Button>
        </Link>
        <hr className='mt-3 md:mt-0 w-11/12 mx-auto'/>
      </section>
      {/* testimonies section */}
      <hr className='w-11/12 m-auto' />
      <section className='bg-gray-100'>
      <h2 className={`text-center font-dancing text-2xl md:text-3xl pt-6 md:pt-10 pb-6 md:pb-10`}>~What Our Customers Have To Say~</h2>
      <div className='w-11/12 mx-auto h-auto'>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      {/* first testi */}
      <div className={` bg-gray-300 w-96 mx-auto h-auto p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500`}>
        <img src={testimoner3} className='w-10 h-16 object-contain rounded-full mx-auto' alt="" />
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-yellow-400' />
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-white' filled={false}/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>
            I rely on Mzedu furniture and Deco to bring my visions to life. Their collection allows
            me to create bespoke spaces that exude sophistication. Their dedication to
            quality craftsmanship and timeless design is amazing.
            </p>
            <h2 className='font-semibold'>Wilfred Mutwiri/ <span className='font-normal pl-2 text-blue-600'>Facebook</span></h2>
          </div>
          {/* second testi */}
          <div className={`bg-gray-300 w-96 h-auto mx-auto p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <img src={testimoner2} className='w-10 rounded-full h-16 object-contain mx-auto' alt="" />
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-yellow-400' />
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400' />
            </Rating>
            </div>
            <p>
            Mzedu furniture and Deco never disappoints. Their executive desks and chairs turned my office into a sophisticated
            workspace. Their wide selection and commitment to excellence and perfection make them
            the go-to for furniture in Kenya.
            </p>
            <h2 className='font-semibold pt-7'>John Doe/<span className='font-normal pl-2 text-blue-600'>Instagram</span></h2>
          </div>
          {/* third testi */}
          <div className={` bg-gray-300 w-96 h-auto mx-auto p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <img src={testimoner} className='w-10 rounded-full h-16 object-contain mx-auto' alt="" />
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-yellow-400' />
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-yellow-400'/>
            <Rating.Star className='text-white' filled={false}/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>
            Mzedu Furniture & Deco have a remarkable attention to detail skillset.I just purchased a sofa set from then and I still can't beleive the awesome appearance of my living room. Thank you!
            </p>
            <h2 className='font-semibold'>Elias Kimani/ <span className='font-normal pl-2 text-blue-600'>Facebook</span></h2>
          </div>
        </Carousel>
        </div>
        </section>
        {/* contact us section */}
        <section id='contact'>
          <div className='w-11/12 mx-auto block md:flex gap-6 pt-10 pb-5'>
          <div className='flex-1'>
            <h2 className='text-lg md:text-xl'>Do You have any question or would like to know more about us?</h2>
            <h3 className='text-sm md:text-lg text-center pb-4'>We'd love to hear from you!</h3>
            <img src={contactUsImg} className='h-80 w-full mx-auto'/>
          </div>
          <div className='flex-1'>
            <form className=' flex flex-col gap-4 mt-4'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                <Label>First Name</Label>
                <TextInput
                type='text'
                required
                placeholder='Your First Name'/>
                </div>
                <div className='flex-1'>
                <Label>Last Name</Label>
                <TextInput
                required
                placeholder='Your Last Name'
                type='text'/>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                <Label>Email</Label>
                <TextInput 
                type='email'
                required
                placeholder='Your Email Address'/>
                </div>
                <div className='flex-1'>
                <Label>Phone Number</Label>
                <TextInput 
                type='text'
                required
                placeholder='+254 700 000 000'
                />
                </div>
              </div>
              <Textarea
              placeholder='Hello Mzedu furniture, I would like to ...'
              required
              className='h-52'/>
            </form>
            <Button className='w-full mt-4' gradientDuoTone="pinkToOrange" outline>Send Message</Button>
          </div>
          </div>
        </section>
      </div>
  )
}
