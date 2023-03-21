import React from 'react'
import Story from './Story'
import WhatsOnYourMind from './WhatsOnYourMind'

const Feed = () => {
  return (
    <div className='mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10'>
        <Story />
        <WhatsOnYourMind />
    </div>
  )
}

export default Feed
