import React from 'react'

const Button = ({bgColor,color,size,text,borderRadius}) => {
    return (
        <button type="button"
        style={{backgroundColor:bgColor,color,borderRadius}}
        className={`text-${size} p-2 w-40 h-10 hover:dro-shadow-xl`}>{text}</button>
    )
}

export default Button