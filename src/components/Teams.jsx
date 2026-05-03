import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from 'motion/react'

const Teams = () => {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        viewport={{once:true}}
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-800 dark:text-white'>
      <Title
        title='Meet The team'
        desc='A passionate team of digital experts dedicated to your brands success.'
      />

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {teamData.map((team, index) => (
          <div
            key={index}
            className='flex max-sm:flex-col items-center gap-9 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300'
          >
            <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
            <div>
              <h3 className='font-bold text-sm'>{team.name}</h3>
              <p className='text-xs opacity-60'>{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Teams
