import Image from 'next/image'

import {BsTwitter} from 'react-icons/bs'
import {BiHash, BiMoney} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import{BiHomeCircle} from 'react-icons/bi'
import {SlOptions} from 'react-icons/sl'
import FeedCard from '@/components/FeedCard'

interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode;
}

const SidebarMenuItems : TwitterSidebarButton[] = [
  {
    title:'Home',
    icon:<BiHomeCircle />
  },
  {
    title:'Explore',
    icon:<BiHash/>
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  },
  {
    title:'Twitter Blue',
    icon:<BiMoney/>
  },
  {
    title:'More',
    icon:<SlOptions/> 
  }
]

export default function Home() {
  return (

    <div className=' dark:bg-slate-900 grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3  pt-2   ml-15'>
        <div className='text-3xl h-fit w-fit hover:bg-gray-400  rounded-full p-4 cursor-pointer transition-all pr-4'>
        <BsTwitter />
        </div>
        <div className='mt-4 text-xl font-semibold mr-4'>
          <ul>
          {SidebarMenuItems.map((item)=>(
          <li className='flex justify-start items-center gap-4 hover:bg-gray-400 rounded-full px-4 py-2 w-fit cursor-pointer mt-2' 
          key={item.title}>
            <span className='text-3xl'>{item.icon}</span>
            <span>{item.title}</span>
            </li>))}
          </ul>
          <div>
            <button className='bg-[#1d9bf0] hover:bg-[#59bdff]  text-lg rounded-full py-3 px-2 text-white font-semibold mt-4 w-full'>Tweet</button>
          </div>
        </div>
    
      </div>
      <div className='col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll no-scrollbar border-gray-400'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-3'></div>
    </div>
  )
}
