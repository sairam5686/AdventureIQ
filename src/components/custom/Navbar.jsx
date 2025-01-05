import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 '>
        <div >
           <h2 className='text-2xl font-bold'>AdventureIQ</h2>
        </div>
        <div>
            <Button variant="link" size="lg" >Sign in</Button>
        </div>
    </div>
  )
}

export default Navbar