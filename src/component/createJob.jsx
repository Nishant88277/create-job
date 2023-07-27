import React, {useState, useEffect} from 'react'

// component
import Form from '../container/form'

// services
import {fetchJobByID} from '../services/createjob'

function CreateJob({open, id, close}) {
    const [step, setStep] = useState(1)
    const [data, setData] = useState()

    useEffect(() => {
      fetchJobByID(id).then(res => setData(res))
    }, [id, open])

    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className='bg-white p-8 w-4.5/12'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>Create a job</h1>
                    <p className='text-base'>Step {step}</p>
                </div>
                <Form 
                  next={() => setStep(2)} 
                  step={step} 
                  open={open} 
                  close={() => {
                    close();
                    setData()
                  }} 
                  data={data}
                  id={id}
                />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
    )
}

export default CreateJob
