"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// banner
import banner1 from '../images/Black Yellow Bold Bag Fashion Sale Banner (1).png';
import banner2 from '../images/Black Yellow Bold Bag Fashion Sale Banner (2).png';
import banner3 from '../images/newArrivalsbanner3.png'
import banner4 from '../images/newArrivalsbanner4.png'
import freeDeliveryImg from '../images/freeDelivery.png'
import featuredBunner2 from '../images/featuredBunner2.png'
import featuredBunner3 from '../images/featuredBunner3.png'
import featuredBunner4 from '../images/featuredBunner4.png'
// featured furniture
import featured1 from '../images/featured1.webp';
import featured2 from '../images/featured2.webp';
import featured3 from '../images/featured3.webp';
import featured4 from '../images/featured4.webp';
import featured5 from '../images/featured5.webp';
import featured6 from '../images/featured6.webp';
import featured7 from '../images/featured7.webp';
import featured8 from '../images/featured8.webp';
import featured9 from '../images/featured9.webp';
import featured10 from '../images/featured10.webp';

import featured11 from '../images/Arrival3.webp';
import featured12 from '../images/Arrival4.webp'
import { Alert, Button } from 'flowbite-react';
import { AiOutlineGift } from "react-icons/ai";

export default function NewArrivals() {
  return (
    <div className="">
      {/* carousel div */}
      <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img className='w-full h-auto' src={banner1} alt="Banner 1"/>
        </div>
        <div>
          <img className='w-full h-auto' src={banner2} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-auto' src={banner3} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-auto' src={banner4} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-auto' src={banner2} alt="Banner 2"/>
        </div>
      </Carousel>
      </div>
      <section>
        {/* new arrivals products section */}
        <div className='w-11/12 mx-auto'>
          <h2 className='font-semibold text-2xl p-4 flex gap-1'><AiOutlineGift className='text-red-600 text-2xl'/>New Arrivals</h2>
          <p className='text-lg text-center p-3'>
          Discover the latest in style and innovation with our New Arrivals collection. Each product is carefully curated to bring you the freshest trends, blending quality and elegance in every piece. Elevate your shopping experience with items that are as unique as you are, and be the first to own the must-haves of the season.
            </p>
          {/* first div */}
          <div>
          <div className={`w-11/12 m-auto pt-10 pb-5 grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100 `} id='visibleBig'>
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
          </div>

          {/* free delivery banner */}
          <div className='w-full h-auto'>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img className='w-full h-[80%]' src={freeDeliveryImg} alt="Banner 1"/>
        </div>
        <div>
          <img className='w-full h-[80%]' src={featuredBunner2} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-[80%]' src={featuredBunner3} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-[80%]' src={featuredBunner4} alt="Banner 2"/>
        </div>
        <div>
          <img className='w-full h-[80%]' src={featuredBunner4} alt="Banner 2"/>
        </div>
      </Carousel>
      </div>
        </div>
        {/* second div */}
          <div className={`w-11/12 m-auto pt-10 pb-5 grid grid-row-3 md:flex gap-3 md:gap-6 transition-opacity duration-100 `} id='visibleBig'>
          {/* Grid 1 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div className=''>
            <img className='w-40 md:w-52 h-[155px] object-fill' src={featured7}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Office Desk</h2>
            <h3 className=' text-red-500'>Ksh 14,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
          <img className='w-40 md:w-52 h-[155px] object-fill' src={featured8}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Office chair</h2>
            <h3 className=' text-red-500'>Ksh 9,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
          {/* grid 2 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div>
          <img className='w-40 md:w-52 h-[155px] object-fill' src={featured9}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Gamming Chair</h2>
            <h3 className=' text-red-500'>Ksh 7,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>

          <div>
          <img className='w-40 md:w-52 h-[155px] object-cover' src={featured10}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Dining Set</h2>
            <h3 className=' text-red-500'>Ksh 16,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
          {/* grid 3 */}
          <div className='grid grid-cols-2 gap-4 mb-2'>
          <div>
          <img className='w-40 md:w-52 h-[155px] object-fill' src={featured11}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Wall clock</h2>
            <h3 className=' text-red-500'>Ksh 3,100</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
            <img className='w-40 md:w-52 h-[155px] object-fill' src={featured12}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Desk Deco</h2>
            <h3 className=' text-red-500'>Ksh 6,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
