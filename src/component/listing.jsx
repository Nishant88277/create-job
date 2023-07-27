import React, { useState, useEffect } from 'react'

// services
import {fetchJob} from '../services/createjob'

// component
import Card from '../container/card'

function Listing({open, edit}) {
    const [data, setData] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        fetchJob().then(res => setData(res)).catch(err => console.log(err))
    }, [open, update])
    
    return (
       <div className='px-6 pb-4 pt-2 flex flex-wrap gap-2 justify-between overflow-auto'>
            {
                data && data.map((item, index) => {
                    return <Card
                        key={index}
                        id={item.id}
                        jobTitle={item?.jobTitle}
                        companyName={item?.companyName}
                        logo={item.logo}
                        industry={item?.industry}
                        location={item?.location}
                        jobVariant={'Part-Time'}
                        timings={'9.00 am - 5.00 pm IST'}
                        experienceMin={item?.experienceMin}
                        experienceMax={item?.experienceMax}
                        salaryMax={item?.salaryMax}
                        salaryMin={item?.salaryMin}
                        currency={'INR (₹)'}
                        amountDuration={'Month'}
                        employeeCount={item?.totalEmployee}
                        remoteType={item?.remoteType}
                        applyType={item?.applyType}
                        update={() => setUpdate(!update)}
                        edit={edit}
                    />
                })
            }
       </div>
    )
}

export default Listing
