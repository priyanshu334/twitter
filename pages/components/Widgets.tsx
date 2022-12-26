import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
type Props = {}


const Widgets = (props: Props) => {
  return (
      <div className='mt-2 px-2 col-span-2 hidden lg:inline mb-7 bg-white'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-all mt-2 mb-2'>
            <SearchIcon className='h-5 w-5 text-black  '/>
            <input type="text" placeholder='Search Twitter' name="" id="" className=' flex-1 outline-none bg-transparent'/>
        </div>
        <TwitterTimelineEmbed
         
         sourceType="profile"
         screenName='Priyans35353551'
         options={{height:1000}}
        
        />
    </div>
    
  )
}

export default Widgets