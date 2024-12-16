import React from 'react'

const Button = ({ type, onclick, extraClass, title }) => {
    return (
        <button type={'type'} onClick={onclick} className={`${extraClass} py-[4px] font-medium text-[12px] leading-[18px] text-center text-white bg-[#111B47] rounded-[2px]`}>
            {title}
        </button>
    )
}

export default Button