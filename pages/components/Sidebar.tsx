import React, { SVGProps } from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline' 



const Sidebar = () => {
  return (
    <div className='flex col-span-2 flex-col items-center px-4 md:items-start'>
        <img  className='m-3 h-24 w-24' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
           <SidebarRow Icon = {HomeIcon} title="Home"/>
           <SidebarRow Icon = {HashtagIcon} title="Explore"/>
           <SidebarRow Icon = {BellIcon} title="Notification"/>
           <SidebarRow Icon = {MailIcon} title="Messages"/>
           <SidebarRow Icon = {BookmarkIcon} title="Bookmarks"/>
           <SidebarRow Icon = {CollectionIcon} title="Lists"/>
          <SidebarRow Icon = {UserIcon} title="SignIn"/>
          <SidebarRow Icon = {DotsCircleHorizontalIcon} title="More"/>

    </div>
  )
}

export default Sidebar
