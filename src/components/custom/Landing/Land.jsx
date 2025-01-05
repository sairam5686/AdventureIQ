import React from 'react'
import './Land.css'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const Land = () => {
  return (
    <div className='flex items-center justify-center flex-wrap text-center mt-20'>
        {/* this is for heading  */}
        <div className=''>
        <h1 className='text-5xl font-bold leading-relaxed'><span className='land_heading'>Discover Your Next Adventure with AI:</span></h1>
        <h1 className='text-5xl font-semibold' > Personalized Itineraries at Your Fingertips</h1>
        </div>

        {/* this is for sub para */}
        <div className='my-12 '>
            <p className='text-xl text-zinc-300 mb-9'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
            <Link to={'/trip-form'}>
            <Button className="Land_button "  > Get Started !</Button>
            </Link>
        </div>
        
    </div>
  )
}

export default Land