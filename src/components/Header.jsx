import React, { useState, useRef } from 'react';
import HamburgerIcon from "../assets/images/hamburgerIcon.svg"
import Button from "./Button"
import BackIcon from "../assets/images/back.svg"
import "aos/dist/aos.css";
import Aos from 'aos';
const Header = () => {
    Aos.init()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hide, setHide] = useState()

    function handelMenuBtnClick() {
        setIsMenuOpen(true)
        setHide(true)
    }
    function handleBackBtnCLick() {
        setIsMenuOpen(false)
        setHide(false)
    }
    return (
        <header data-aos="fade-down">
            <div className={`w-md lg:w-[1110px] mx-5 lg:mx-auto py-[20px] relative ${hide == true ? "flex justify-end" : "flex items-center justify-between"}`}>
                <div id='wrapper' className={`md:hidden absolute menu w-[150px] h-[200px] bg-[#111B47] rounded-md duration-300 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}>
                    <button onClick={handleBackBtnCLick} className={`absolute left-[10px] top-[20px] hover:scale-[1.1] duration-300`}>
                        <img className='w-[20px] h-[20px]' src={BackIcon} alt="BackIcon" />
                    </button>
                    <ul className={`flex flex-col text-left md:text-center my-[40px] gap-5 p-[10px] absolute left-[50px]`}>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-white' href={'/'}>Home</a>
                        </li>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-white' href={'/about'}>About</a>
                        </li>
                        <li className='hover:scale-[1.2] duration-300'>
                            <a className='font-regular text-[14px] leading-[24px] text-white' href={'/contact'}>Contact</a>
                        </li>
                    </ul>
                </div>
                <button onClick={handelMenuBtnClick} className={`${hide == true ? "hidden" : "inline-block"} md:hidden hover:scale-[1.1] duration-300`}>
                    <img className='w-[30px] h-[30px]' src={HamburgerIcon} alt="HamburgerIcon" />
                </button>
                <ul className='hidden md:flex items-center space-x-[60px]'>
                    <li className='hover:scale-[1.2] duration-300'>
                        <a className='font-regular text-[14px] leading-[24px] text-[#505F98]' href={'#hero'}>Home</a>
                    </li>
                    <li className='hover:scale-[1.2] duration-300'>
                        <a className='font-regular text-[14px] leading-[24px] text-[#505F98]' href={'#about'}>About</a>
                    </li>
                    <li className='hover:scale-[1.2] duration-300'>
                        <a className='font-regular text-[14px] leading-[24px] text-[#505F98]' href={'#footer'}>Contact</a>
                    </li>
                </ul>
                <p className='hidden lg:inline-block font-black text-[26px] leading-[38px] text-[#37447E]'>Landing</p>
                <Button extraClass={`w-[100px] md:w-[160px] relative hover:scale-[1.1] lg:hover:scale-[1.2] duration-300 border-[2px] border-transparent hover:scale-[1.1] duration-300 hover:bg-white hover:text-[#111B47] hover:border-[#111B47]`} title={'Buy Now'} />
            </div>
        </header>
    );
};
export default Header;


