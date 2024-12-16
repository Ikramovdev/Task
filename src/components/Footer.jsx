import React from 'react'
import Button from './Button'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YouTubeIcon } from '../assets/images/Icon'
import Aos from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
    Aos.init()
    return (
        <footer data-aos="fade-down" id='footer' className='bg-[#E7ECFF]'>
            <div className='w-md lg:w-[1110px] mx-5 lg:mx-auto pt-10 lg:pt-[67px] pb-[36px]'>
                <div className='flex items-center justify-between border-b-[1px] border-[#CDD1D4] pb-10'>
                    <p className='font-medium text-[14px] leading-[24px] text-[#939EA4]'>©2023 Yourcompany</p>
                    <p className='hidden lg:inline-block font-black text-[26px] leading-[38px] text-[#37447E]'>Landing</p>
                    <Button extraClass={`w-[100px] md:w-[160px] relative hover:scale-[1.1] lg:hover:scale-[1.2] duration-300 border-[2px] border-transparent hover:scale-[1.1] duration-300 hover:bg-white hover:text-[#111B47] hover:border-[#111B47]`} title={'Purchase now'} />
                </div>
                <div className='pt-[20px] FooterMenu flex items-center justify-between'>
                    <ul className='flex items-center space-x-[80px]  md:space-x-[60px]'>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-[#929ECC] hover:text-[#111B47]' href={'#hero'}>Home</a>
                        </li>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-[#929ECC] hover:text-[#111B47]' href={'#about'}>About</a>
                        </li>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-[#929ECC] hover:text-[#111B47]' href={'#footer'}>Contact</a>
                        </li>
                    </ul>
                    <ul className='flex items-center space-x-[65px] mx-auto md:mx-0 md:space-x-[30px]'>
                        <li className='text-[#B0B8BC] hover:scale-[1.2] duration-300 hover:text-blue-700'>
                            <a href='https://www.facebook.com/'>
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className='text-[#B0B8BC] hover:scale-[1.2] duration-300 hover:text-blue-500'>
                            <a href='https://www.Linkedin.com/'>
                                <LinkedinIcon />
                            </a>
                        </li>
                        <li className='text-[#B0B8BC] hover:scale-[1.2] duration-300 hover:text-blue-500'>
                            <a href='https://x.com/'>
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className='text-[#B0B8BC] hover:scale-[1.2] duration-300 hover:text-red-500'>
                            <a href='https://www.YouTube.com/'>
                                <YouTubeIcon />
                            </a>
                        </li>
                        <li className='text-[#B0B8BC] hover:scale-[1.2] duration-300 hover:text-pink-500'>
                            <a href='https://www.instagram.com/'>
                                <InstagramIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer