import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'


const FeedCard :React.FC=()=>{
    return (
        <div className ='border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-400 transition-all cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image src='https://avatars.githubusercontent.com/u/52657917?v=4' alt='user-Image' height={50} width={50} style={{borderRadius: "100px"}}></Image>
                </div>
                <div className='col-span-11'>
                    <h5>Abdul baseer</h5>
                    <p>
                    This is some random text that I am writing to test the feed card component
                    This is some random text that I am writing to test the feed card component
                </p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[80%]'>
                    <div>
                        <BiMessageRounded/></div>
                    <div>
                        <FaRetweet/>   
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default FeedCard