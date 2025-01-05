import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 '>
        <div >
           <h2 className='text-2xl font-bold'>Logo</h2>
        </div>
        <div>
            <Button>Sign in</Button>
        </div>
    </div>
  )
}

export default Navbar