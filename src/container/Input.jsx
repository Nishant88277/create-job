import React from 'react'

// components
import Radio from './radio'

function Input({
    label,
    name,
    required,
    placeholder,
    type,
    className,
    InputClassName,
    handleChange,
    value,
    onClick,
    error
}) {
    return (
       <div className={className}>
            {label && <label>
                {label} {' '}
                {required && <span className='text-rose-500'>*</span>}
            </label>}
            {type !== 'radio' ? 
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    className={InputClassName} 
                    onChange={handleChange}
                    name={name}
                    value={value}
                    onClick={onClick}
                    autoComplete="off"
                /> : 
                <Radio onChange={handleChange} name={name} value={value}/>
            }
            {error && <p className='text-rose-500'>{error}</p>}
       </div>
    )
}

export default Input
