import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'
import { Tweet } from '../../typings'
import Tweetcomponent from './Tweetcomponent'


interface Props{
    tweets:Tweet[]
}

const Feed = ({tweets}: Props) => {
  return (
    <div className='col-span-7 border-x lg:col-span-5'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 text-xl pb-0 font-bold'>Home</h1>
         <RefreshIcon className='h-8 w-8 cursor-pointer text-blue-300 mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
        <div>
          

        
         <TweetBox/>
         </div>
         <div>
          {tweets.map(tweet=>(
                   <Tweetcomponent key={tweet._id} tweet={tweet}/>
          ))}
         </div>
    </div>
  )
}

export default Feed