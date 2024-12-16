import React from 'react'
import ServiseItemImg1 from "../assets/images/ServiseItem1Img.png"
import ServiseItemImg2 from "../assets/images/ServiseItem2Img.png"
import ServiseItemImg3 from "../assets/images/ServiseItem3Img.png"
import UpArrow from "../assets/images/upArrow.svg"

import Button from "./Button"
import Aos from 'aos'
import "aos/dist/aos.css";

const Service = () => {
  Aos.init()
  return (
    <section className='mb-[100px] lg:mb-[163px] relative'>
      <div className='w-md lg:w-[1110px] mx-5 lg:mx-auto'>
        <ul className='space-y-[100px] lg:space-y-[130px]'>
          <li data-aos="fade-up" className='serviceitem flex items-center justify-between'>
            <img className='w-[350px] lg:w-[480px] h-[270px] lg:h-[315px] mb-5 lg:mb-0' src={ServiseItemImg1} alt="ServiseItemImg1" width={480} height={315} />
            <div className='w-full lg:w-[445px]'>
              <h3 className='font-medium text-[30px] text-center lg:text-left lg:text-[36px] leading-[48px] mb-[16px] text-[#091133]'>Light, Fast & Powerful</h3>
              <p className='font-regular text-[16px] text-center lg:text-center leading-[26px] text-[#6F7CB2]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
          </li>
          <li data-aos="fade-up" className='flex items-center justify-between serviceitem'>
            <img className='w-[350px] lg:w-[480px] h-[270px] lg:h-[315px] mb-5 lg:mb-0' src={ServiseItemImg2} alt="ServiseItemImg2" width={480} height={315} />
            <div className='w-full lg:w-[445px]'>
              <h3 className='font-medium text-[30px] text-center lg:text-left lg:text-[36px] leading-[48px] mb-[16px] text-[#091133]'>Light, Fast & Powerful</h3>
              <p className='font-regular text-[16px] text-center lg:text-center leading-[26px] text-[#6F7CB2]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
          </li>
          <li data-aos="fade-up" className='flex items-center justify-between serviceitem'>
            <img className='w-[350px] lg:w-[480px] h-[270px] lg:h-[315px] mb-5 lg:mb-0' src={ServiseItemImg3} alt="ServiseItemImg3" width={480} height={315} />
            <div className='w-full lg:w-[445px]'>
              <h3 className='font-medium text-[30px] text-center lg:text-left lg:text-[36px] leading-[48px] mb-[16px] text-[#091133]'>Light, Fast & Powerful</h3>
              <p className='font-regular text-[16px] text-center lg:text-center leading-[26px] text-[#6F7CB2]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
              <Button extraClass={'w-full md:w-[300px] block mx-auto lg:w-[180px] mt-5 md:mt-[30px] lg:mt-[44px] hover:bg-white hover:text-[#111B47] hover:scale-[1.1] border-[2px] border-transparent hover:border-[#111B47] duration-300 '} title={'Purchase Now'}/>
            </div>
          </li>
        </ul>
      </div>
      <a href='#hero' className='w-[50px] fixed bottom-[50px] z-50 right-[100px]'><img src={UpArrow} alt="UpArrow" /></a>
    </section>
  )
}

export default Service