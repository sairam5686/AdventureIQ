import { Budget, traver_options } from '@/constants/Option';
import { Input } from '../components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';




const Tripform = () => {

    const [Place, setPlace] = useState();
    const [Days, setDays] = useState();

  return (
    <div className='lg:px-60  sm:px-25  mt-10 '>
        <div className=' text-wrap text-left mt-12'>
            <h2 className='text-3xl font-bold text-balance '>Tell us your travel preferences 🏕️🌴</h2>
            <p className='text-xl text-zinc-300 mt-5'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
        </div>

        <div className='mt-20'>
        <h2 className='text-2xl font-semibold text-balance'>What is destination of choice?</h2>
        <Input type='text' className='bg-neutral-800 text-white mt-4' value={Place} onChange={(e)=>{setPlace(e.target.value);}} placeholder="Enter the  Destination that you want to visit " />
        </div>

        <div className='mt-20'>
        <h2 className='text-2xl font-semibold text-balance'>How many days are you planning your trip?</h2>
        <Input type='number' className='bg-neutral-800 text-white mt-4' value={Days} onChange={(e)=>{setDays(e.target.value); }} placeholder="Enter the  Destination that you want to visit " />
        </div>
        
        <div className='mt-20'>
            <h2  className='text-2xl font-semibold text-balance' >What is Your Budget?</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10'>
                    {Budget.map((item,index)=>{
                    return (<div key={index} className='p-4 border-zinc-50 border rounded-lg hover:shadow-white hover:shadow-lg'>
                            <div className=' text-4xl mb-2 '>{item.icon}</div>
                            <div className='text-lg font-semibold'>{item.title}</div>
                            <div className='text-base font-light  text-zinc-300'>{item.desc}</div>
                        </div>)
                    })}
                </div>
        </div>


        
        <div className='mt-20'>
            <h2  className='text-2xl font-semibold text-balance' >Who do you plan on traveling with on your next adventure?</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 '>
                    {traver_options.map((item,index)=>{
                    return (<div key={index} className='p-4 border-zinc-50 border rounded-lg hover:shadow-white hover:shadow-lg '>
                            <div className=' text-4xl mb-2 '>{item.icon}</div>
                            <div className='text-lg font-semibold'>{item.title}</div>
                            <div className='text-base font-light  text-zinc-300'>{item.desc}</div>
                        </div>)
                    })}
                </div>
        </div>

        <div className='lg:mt-20 p-5 flex justify-end'>
            <Button>Generate Trip</Button>
        </div>


    </div>
  )
}

export default Tripform