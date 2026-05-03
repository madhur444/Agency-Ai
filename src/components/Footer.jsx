import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
const Footer = ({theme}) => {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
    className='bg-slate-50  dark:bg-gray-900  text-gray-400 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/*footer top*/}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

              <div  className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme=== 'dark'?assets.logo_dark : assets.logo} className='w-32 sm:w-44' />
                <p className='max-w-md'>From startegy to execution, we craft digital solutoins that move your business forward </p>
               <ul className='flex gap-8'>
                <li> <a href="#hero" className='hover:text-primary'>Home</a></li>
                <li> <a href="#services" className='hover:text-primary'>Services</a></li>
                <li> <a href="#our-work" className='hover:text-primary'>Our Work</a></li>
                <li> <a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>
               </ul>
</div>
<motion.div
initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
className='text-gray-600 dark:text-gray-400'>
<h3 className='font-semibold'>
    Subscribe to our news letter
</h3>
<p className='text-sm mt-2 mb-6'>
    The latest news, articles, and resources, sent to your inbox weekly
</p>
</motion.div>
<div>
    <input type="email" placeholder='Enteryour email'
     className='w-full p-3 text-sm outline-none rounded 
     dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
     <button className='bg-primary text-white rounded px-6 '>
        Subscribe
     </button>

</div>
             <div>

             </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6' />
{/*footer bottom */}
<div>
    <p>
        Copyright 2025 C agency.io-Greatstack- All right Reserved.</p>
</div>
<motion.div 
initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
className='flex items-center  gap-4  mt-1.5'>
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.instagram_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</motion.div>
    </motion.div>
  )
}

export default Footer