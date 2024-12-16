import React from 'react'
import { PowerItem1 } from '../assets/images/Icon'
import PowerImg from "../assets/images/PowerImg.png"
import Aos from 'aos'
import "aos/dist/aos.css"


const PowerFull = () => {
    Aos.init()
    return (
        <section id='about'>
            <div className='w-sm md:w-md lg:w-[1110px] powerContainer mx-5 lg:mx-auto py-[110px] md:flex md:items-center md:justify-between overflow-hidden'>
                <div data-aos="fade-right" className='my-5 lg:my-[50px]'>
                    <div className='mb-[50px] md:mb-[80px] w-sm md:w-[350px] lg:w-[540px] text-center md:text-left'>
                        <h2 className='font-medium text-[30px] md:text-[25px] lg:text-[36px] leading-[35px] lg:leading-[48px] text-[#091133] mb-[16px]'>Light, Fast & Powerful</h2>
                        <p className='font-regular text-[13px] lg:text-[16px] leading-[23px] md:leading-[20px] lg:leading-[26px] text-[#6F7CB2]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <ul className='md:flex md:items-center space-y-[20px] md:space-y-0  md:gap-[30px]'>
                        <li className='item w-sm md:w-[170px] lg:mx-auto text-center md:text-left lg:w-[255px]'>
                            <div><PowerItem1/></div>
                            <h3 className='font-medium text-[20px] md:text-[17px] lg:text-[16px] leading-[26px] text-[#091133] mb-[6px] mt-[14px]'>Title Goes Here</h3>
                            <p className='font-regular text-[13px] md:text-[12px] lg:text-[13px] leading-[18px] text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </li>
                        <li className='item w-sm md:w-[170px] lg:mx-auto text-center md:text-left lg:w-[255px]'>
                            <div><PowerItem1/></div>
                            <h3 className='font-medium text-[20px] md:text-[17px] lg:text-[16px] leading-[26px] text-[#091133] mb-[6px] mt-[14px]'>Title Goes Here</h3>
                            <p className='font-regular text-[13px] md:text-[12px] lg:text-[13px] leading-[18px] text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </li>
                    </ul>
                </div>
                <img data-aos="fade-left" className='w-full md:w-[400px] lg:w-[540px] h-full md:h-[400px] lg:h-[520px]' src={PowerImg} alt="PowerImg" width={540} height={520} />
            </div>
        </section>
    )
}

export default PowerFull