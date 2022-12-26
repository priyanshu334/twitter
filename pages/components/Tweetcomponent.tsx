import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
import { Content } from '@next/font/google'
import React, { useEffect, useState } from 'react'
import { Tweet } from '../../typings'
import { fetchComments } from '../../utils/fetchComments'
interface Props{
    tweet:Tweet
}

const Tweetcomponent = ({tweet}: Props) => {
    const {comments,setComments} = useState<Comment[]>([])
    const refreshComments = async()=>{
        const comments: Comment[] = await fetchComments(tweet._id)
        setComments(comments)
    }
    useEffect(()=>{
              refreshComments();
    },[])
  return (
     <div className='flex flex-col space-x-3 border-y my-3 border-gray-300 p-5 shadow-md hover:shadow-lg shadow-black  hover:bg-gray-900 hover:text-white'>
        <div className='flex space-x-3'>
            <img className='h-10 w-10 rounded-full ' src={tweet.profileImg} alt="" />

             <div>
            <div className='flex items-center space-x-1'> 
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username}</p>
            </div>
            <p className='pt-1'>{tweet.text}</p>
            {tweet.image && (
                <img className='m-5 ml-0 max-h-60 rounded-lg object-cover shadow-xl shadow-black' src={tweet.image} alt="h"/>
            )}
        </div>
          
         

        </div>
        <div className='mt-5 flex justify-between'>
            <div  className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <ChatAlt2Icon className='h-5 w-5'/>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
              <SwitchHorizontalIcon className='h-5 w-5'/>

            </div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <HeartIcon className='h-5 w-5'/>
            </div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <UploadIcon className='h-5 w-5'/>

            </div>
        </div>
        {comments?.length>0 &&(
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-3'>
                {comments.map((comment)=>(
                    <div key={comment._id} className='relative flex space-x-2'>
                       <img 
                       className='h-7 w-7 rounded-full object-cover'
                       src={comment.profileImg}/>
                          <div className='flex items-center space-x-1'>
                            <p className='mr-1 font-bold'>{Comment.username}</p>
                            <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username}</p>


                        </div>
                          <p>{comment.comment}</p>
                        </div>
                      
                ))}

                </div>
        )}
       
     </div>
  )
}

export default Tweetcomponent