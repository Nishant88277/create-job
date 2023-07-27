import React from 'react'

function Header({open}) {
    return (
        <div className='bg-white flex justify-between items-center h-16 p-2.5 px-6 border-b-slate-300 border-b-2'>
            <img className='h-10' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"></img>
            <button className="shadow-sm bg-purple-500 rounded h-fit p-2 text-white text-sm" onClick={open}>Create Job</button>
        </div>
    )
}

export default Header
