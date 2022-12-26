import React, { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
type Props = {}

const TweetBox = (props: Props) => {
    const [input,setInput] = useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
        <img className='mt-4 h-14 w-14 rounded-full object-cover' src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=" alt='profile'/>

        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'  action="">
                <input type="text" 
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder='What is happning' name="" id=""  className='h-20 mb-5 rounded-[90px] w-full text-xl outline-none placeholder:text-xl'/>
             
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-blue-300 '>
                          <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                          <SearchCircleIcon className='h-5 w-5'/>
                          <EmojiHappyIcon className='h-5 w-5'/>
                          <CalendarIcon className='h-5 w-5'/>
                          <LocationMarkerIcon className='h-5 w-5'/>

                    </div>
                    <button 
                    disabled={!input}
                    className='bg-blue-400/95 rounded-full px-5 py-2 font-bold text-white disabled:opacity-40'>Tweet</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default TweetBox