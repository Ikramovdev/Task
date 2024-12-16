import React, { useEffect, useRef } from 'react'
import Button from "./Button"
import { CountUp } from 'countup.js';
const Price = () => {
    // count animatsiya 
    const counterRef = useRef(null);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const countUp = new CountUp(counterRef.current, 40, { duration: 3 });
                        if (!countUp.error) {
                            countUp.start(0);
                        } else {
                            console.error(countUp.error);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
     // count animatsiya 
    return (
        <section className='mt-0 md:mt-[50px] priceBg'>
            <div className='w-sm md:w-md lg:w-[1110px] mx-5 lg:mx-auto'>
                <div className='text-center w-full md:w-[600px] pt-[100px] md:pt-[220px] mx-auto flex flex-col'>
                    <h2 className='font-medium text-[27px] md:text-[36px] laeding-[30px] md:leading-[48px] mb-[13px] md:mb-[16px] text-[#091133]'>A Price To Suit Everyone</h2>
                    <p className='font-regular text-[14px] md:text-[16px] leading-[20px] md:leading-[26px] text-[#6F7CB2] mb-5 md:mb-[35px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <div ref={sectionRef} className='font-medium text-[50px] leading-[66px] text-[#091133] flex mx-auto'>
                        <p ref={counterRef}></p>
                        <span>$</span>
                    </div>
                    <span className='font-regular text-[16px] leading-[26px] text-[#37447E] mb-[60px]'>UI Design Kit</span>
                    <p className='font-regular text-[14px] leading-[24px] text-[#5D6970] mb-[9px]'>See, One price. Simple.</p>
                    <Button extraClass={'w-full md:w-[250px] lg:w-[190px] block mx-auto border-[2px] border-transparent hover:scale-[1.1] duration-300 hover:bg-white hover:text-[#111B47] hover:border-[#111B47] mb-[70px] lg:mb-[172px]'} title={'Purchase Now'} />
                </div>
            </div>
        </section>
    )
}

export default Price