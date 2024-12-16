import React from 'react'
import HeroImg from "../assets/images/HeroImg.png"


const Hero = () => {
    return (
        <section id='hero' className='mt-10 md:mt-[65px] lg:mb-[85px]'>
            <div className='w-sm md:w-md lg:w-[1110px] mx-5 lg:mx-auto heroContainer flex items-center justify-between'>
                <div className='w-sm md:w-[450px] lg:w-[539px]'>
                    <h1 className='font-medium text-[25px] md:text-[40px] lg:text-[50px] text-[#091133] leading-[30px] text-center md:text-left md:leading-[50px] lg:leading-[66px] mb-3 md:mb-5'>Introduce Your Product Quickly & Effectively</h1>
                    <p className='font-regular text-[15px] md:text-[18px] leading-[25px] text-center md:text-left md:leading-[30px] text-[#505F98] mb-10 md:mb-[50px] lg:mb-[70px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className='md:flex md:items-center space-y-[15px] md:space-y-0 md:space-x-[30px]'>
                        <button className={'w-full md:w-[190px] py-[4px] font-medium text-[12px] leading-[18px] text-center text-white bg-[#111B47] rounded-[2px] hover:bg-white hover:text-[#111B47] border-[2px] border-transparent hover:border-[#111B47] duration-300'} type={'button'}>Purchase UI Kit</button>
                        <button className='w-full md:w-[190px] py-[4px] font-medium text-[12px] leading-[18px] text-center text-[#111B47] bg-white rounded-[2px] border-[2px] border-[#111B47] hover:bg-[#111B47] hover:text-white hover:border-white duration-300'>Learn More</button>
                    </div>
                </div>
                <img className='w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]' src={HeroImg} alt="HeroImg" width={500} height={300} />
            </div>
        </section>
    )
}

export default Hero