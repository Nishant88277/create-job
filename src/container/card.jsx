import React from 'react'

// services
import {deleteJob} from '../services/createjob'

// icons
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

function Card({
    id,
    jobTitle,
    logo,
    industry,
    companyName,
    jobVariant,
    experienceMin,
    experienceMax,
    location,
    remoteType,
    timings,
    currency,
    salaryMax,
    salaryMin,
    amountDuration,
    employeeCount,
    applyType,
    update,
    edit
}) {

    const handleDelete = () => {
        if (confirm("Are you sure to delete this job posting?")) {
            deleteJob(id).then(res => update()).catch(err => console.log(err))
        }
    }

    const handleUpdate = () => {

    }

    return (
        <div className='flex bg-white w-[49.2%] h-fit px-6 py-4 rounded-lg justify-between my-2'>
            <div className='flex gap-2'>
                <img src={logo} alt='Logo' className='h-12 w-12' />
                <div>
                    <h1 className='text-2xl'>{jobTitle}</h1>
                    <p className='text-base'>{companyName} - {industry}</p>
                    <p className='text-base text-gray-40'>{location} ({remoteType})</p>
                    <div className='my-6 flex gap-2 flex-col'>
                        <p className='text-base'>{jobVariant} ({timings})</p>
                        {(experienceMin || experienceMax) && <p className='text-base'>Experience ({experienceMin} - {experienceMax} years)</p>}
                        {(salaryMin || salaryMax) && <p className='text-base'>{currency} {salaryMin} - {salaryMax} / {amountDuration}</p>}
                        {employeeCount && <p className='text-base'>{employeeCount} employees</p>}
                    </div>
                    <div className='flex gap-6'>
                    <button 
                        className='bg-blue-100 hover:bg-white text-white hover:text-blue-100 hover:border-blue-100 border-2 transition 
                                duration-150 ease-out hover:ease-in rounded-md py-2 px-4'
                    >
                        Apply Now
                    </button>
                    <button 
                        className='hover:bg-blue-100 hover:text-white text-blue-100 border-blue-100 border-2 transition 
                                duration-150 ease-out hover:ease-in rounded-md py-2 px-4'
                    >
                        External Apply
                    </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-4'>
                <PencilSquareIcon onClick={() => edit(id)} className="h-6 w-6 text-purple-500 cursor-pointer" />
                <TrashIcon onClick={handleDelete} className="h-6 w-6 text-purple-500 cursor-pointer" />
            </div>
        </div>
    )
}

export default Card
