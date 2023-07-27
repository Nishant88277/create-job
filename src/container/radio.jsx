import React from 'react'

function Radio({onChange, name, value}) {
    return (
        <div className='flex gap-4 mt-3'>
            <div className='flex gap-1 items-center cursor-pointer' onClick={() => onChange('Quick apply', name)}>
                <div className={value === 'Quick apply' ? 'bg-gray-40 border-[1px] rounded-full w-5 h-5' : 'border-[1px] rounded-full w-5 h-5'}/>
                <p className='text-gray-40'>Quick apply</p>
            </div>
            <div className='flex gap-1 items-center cursor-pointer' onClick={() => onChange('External apply', name)}>
                <div className={value === 'External apply' ? 'bg-gray-40 border-[1px] rounded-full w-5 h-5' : 'border-[1px] rounded-full w-5 h-5'}/>
                <p className='text-gray-40'>External apply</p>
            </div>
        </div>
    )
}

export default Radio
