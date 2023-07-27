import React, { useEffect, useState } from 'react'

// services
import {postJob, updateJob} from '../services/createjob'

// component
import Input from './Input'

function Form({next, step, open, close, data, id}) {
    const [form, setForm] = useState({
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: '',
        experienceMin: '',
        experienceMax: '',
        salaryMin: '',
        salaryMax: '',
        totalEmployee: '',
        applyType: ''
    })

    const [error, setError] = useState({
        jobTitle: '',
        companyName: '',
        industry: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateForm()){
            if(step === 1){
                next()
            } else {
                if(data){
                    updateJob(parseInt(id), form).then(res => open()).catch(err => console.log(err))
                } else{
                    postJob(form).then(res => open()).catch(err => console.log(err))
                }
            }
        }
    }

    const handleChange = (e, name) => {
        if(name !== 'applyType'){
            setForm( {...form, [e.target.name]: e.target.value} )
        } else {
            setForm({...form, [name]: e})
        }
    }

    function validateForm() {
        if (form.jobTitle.length == 0) {
            setError({jobTitle: 'Job title can not be empty'})
            return false
        }
    
        if (form.companyName.length == 0) {
            setError({companyName: 'Company name can not be empty'})
            return false
        }

        if (form.industry.length == 0) {
            setError({industry: 'Industry can not be empty'})
            return false
          }
    
        return true
      }

      useEffect(() => {
        if(data){
            setForm({
                jobTitle: data?.jobTitle,
                companyName: data?.companyName,
                industry: data?.industry,
                location: data?.location,
                remoteType: data?.remoteType,
                experienceMin: data?.experienceMin,
                experienceMax: data?.experienceMax,
                salaryMin: data?.salaryMin,
                salaryMax: data?.salaryMax,
                totalEmployee: data?.totalEmployee,
                applyType: data?.applyType
            })
        }
      }, [data])

    return (
        <form className='mb-6' onSubmit={handleSubmit}>
            {step === 1 && <div>
                <Input
                    label={'Job title'}
                    name="jobTitle" 
                    required={true}
                    placeholder={'ex. UX UI Designer'}
                    type={'text'}
                    className={'flex gap-1 flex-col mt-6'}
                    InputClassName={`${error?.jobTitle?.length > 0 && 'border-rose-800'} block border-[1px] rounded h-9 py-2 px-3`}
                    handleChange={(e) => handleChange(e)}
                    value={form.jobTitle}
                    error={error.jobTitle}
                />
                <Input
                    label={'Company name'}
                    name="companyName" 
                    required={true}
                    placeholder={'ex. Google'}
                    type={'text'}
                    className={'flex gap-1 flex-col mt-6'}
                    InputClassName={`${error?.companyName?.length > 0 && 'border-rose-800'} block border-[1px] rounded h-9 py-2 px-3`}
                    handleChange={(e) => handleChange(e)}
                    value={form.companyName}
                    error={error.companyName}
                />
                <Input
                    label={'Industry'}
                    name="industry" 
                    required={true}
                    placeholder={'ex. Information Technology'}
                    type={'text'}
                    className={'flex gap-1 flex-col mt-6'}
                    InputClassName={`${error?.industry?.length > 0 && 'border-rose-800'} block border-[1px] rounded h-9 py-2 px-3`}
                    handleChange={(e) => handleChange(e)}
                    value={form.industry}
                    error={error.industry}
                />
                <div className='flex justify-between mt-6 gap-6'>
                    <Input
                        label={'Location'}
                        name="location" 
                        required={false}
                        placeholder={'ex. Chennai'}
                        type={'text'}
                        className={'flex gap-1 flex-col w-full'}
                        InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                        handleChange={(e) => handleChange(e)}
                        value={form.location}
                    />
                    <Input
                        label={'Remote type'}
                        name="remoteType" 
                        required={false}
                        placeholder={'ex. In-office'}
                        type={'text'}
                        className={'flex gap-1 flex-col w-full'}
                        InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                        handleChange={(e) => handleChange(e)}
                        value={form.remoteType}
                    />
                </div>
            </div>}
            {
                step === 2 && 
                    <>
                        <div className='flex justify-between mt-6 gap-6'>
                            <Input
                                label={'Experience'}
                                name="experienceMin" 
                                required={false}
                                placeholder={'Minimum'}
                                type={'text'}
                                className={'flex gap-1 flex-col w-full'}
                                InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                                handleChange={(e) => handleChange(e)}
                                value={form.experienceMin}
                            />
                            <Input
                                name="experienceMax" 
                                required={false}
                                placeholder={'Maximum'}
                                type={'text'}
                                className={'flex gap-1 flex-col w-full mt-auto'}
                                InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                                handleChange={(e) => handleChange(e)}
                                value={form.experienceMax}
                            />
                        </div>
                        <div className='flex justify-between mt-6 gap-6'>
                            <Input
                                label={'Salary'}
                                name="salaryMin" 
                                required={false}
                                placeholder={'Minimum'}
                                type={'text'}
                                className={'flex gap-1 flex-col w-full'}
                                InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                                handleChange={(e) => handleChange(e)}
                                value={form.salaryMin}
                            />
                            <Input
                                name="salaryMax" 
                                required={false}
                                placeholder={'Maximum'}
                                type={'text'}
                                className={'flex gap-1 flex-col w-full mt-auto'}
                                InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                                handleChange={(e) => handleChange(e)}
                                value={form.salaryMax}
                            />
                        </div>
                        <Input
                            label={'Total employee'}
                            name="totalEmployee" 
                            required={false}
                            placeholder={'ex. 100'}
                            type={'text'}
                            className={'flex gap-1 flex-col mt-6'}
                            InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                            handleChange={(e) => handleChange(e)}
                            value={form.totalEmployee}
                        />
                        <Input
                            label={'Apply type'}
                            name="applyType" 
                            required={false}
                            placeholder={'ex. 100'}
                            type={'radio'}
                            className={'flex gap-1 flex-col mt-6'}
                            InputClassName={'block border-[1px] rounded h-9 py-2 px-3'}
                            handleChange={(e, name) => handleChange(e, name)}
                            value={form.applyType}
                        />
                    </>
            }
            <div className='mt-24 flex ml-auto justify-end w-full gap-3'>
                {step === 1 && <Input
                    type={'button'}
                    className={'flex gap-1 flex-col w-16'}
                    InputClassName={'bg-rose-500 text-white w-full h-10 rounded-md cursor-pointer'}
                    value={'Close'}
                    onClick={close}
                />}
                <Input
                    type={'button'}
                    className={'flex gap-1 flex-col w-16'}
                    InputClassName={'bg-blue-100 text-white w-full h-10 rounded-md cursor-pointer'}
                    value={step === 1 ? 'Next' : 'Save'}
                    onClick={handleSubmit}
                />
            </div>
        </form>
    )
}

export default Form
