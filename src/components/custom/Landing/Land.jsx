import React from 'react'
import './Land.css'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];



 

const Land = () => {
  const color = useMotionValue(COLORS_TOP[0]);


  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);


  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (

    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >

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
    </motion.section>
  )
}

export default Land