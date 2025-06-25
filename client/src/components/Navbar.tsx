"use client"

import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'aws-amplify/auth'
import { Bell, MessageCircle, Plus, Search } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {

  const {data:authUser} = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage = pathname.includes("/managers") || pathname.includes("/tenants");

  const handleSignOut = async() => {
    await signOut();
    window.location.href = "/";
  }
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-xl' style={{height: `${NAVBAR_HEIGHT}px`}}>
      <div className='flex justify-between items-center w-full py-3 px-8 bg-[#27272a] text-white'>
        <div className="flex items-center gap-4 md:gap-6">
          {isDashboardPage && (
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          )}
            <Link href="/" className='cursor-pointer hover:!text-[#c7c7cc]' scroll={false}>
                <div className="flex items-center gap-3">
                    <Image src='/logo.svg' alt='Rentaway Logo' width={24} height={24} className='w-6 h-6' />
                    <div className="text-xl font-bold">
                        RENT
                        <span className="text-[#eb8686] font-light hover:!text-[#c7c7cc]">AWAY</span>
                    </div>
                </div>
            </Link>
            {isDashboardPage && authUser && (
              <Button
                variant="secondary"
                className='md:ml-4 bg-[#fcfcfc] text-[#27272a] hover:bg-[#eb8686] hover:text-[#fcfcfc] cursor-pointer'
                onClick={() => 
                  router.push(
                    authUser.userRole?.toLowerCase() === "manager" ? "/managers/newproperty" : "/search"
                  )
                }>
                  {authUser.userRole?.toLowerCase() === "manager" ? (
                    <>
                      <Plus className='h-4 w-4' />
                      <span className="hidden md:block ml-2">Add New Property</span>
                    </>
                  ) : (
                    <>
                      <Search className='h-4 w-4'/>
                      <span className="hidden md:block ml-2">Search Properties</span>
                    </>
                  )}
                </Button>
            )}
        </div>
        {!isDashboardPage && (<p className="text-[#e0e0e2] hidden md:block">Discover your perfect rental appartment with our advanced search</p>)}
        <div className="flex items-center gap-5">
          {authUser ? (
            <>
              <div className='relative hidden md:block'>
                <MessageCircle className='w-6 h-6 cursor-pointer text-[#e0e0e2] hover:text-[#a8a8af]' />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#dc2828] rounded-full"></span>
              </div>
              <div className='relative hidden md:block'>
                <Bell className='w-6 h-6 cursor-pointer text-[#e0e0e2] hover:text-[#a8a8af]' />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#dc2828] rounded-full"></span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center gap-2 focus:outline-none'>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src={authUser.userInfo?.image}/>
                    <AvatarFallback className='bg-[#57575f]'>
                      {authUser.userRole?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className='text-[#e0e0e2] hidden md:block'>
                    {authUser.userInfo?.name}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white text-[#27272a]'>
                  <DropdownMenuItem
                    className='cursor-pointer hover:!bg-[#27272a] hover:!text-[#f1f1f2] font-bold'
                    onClick={() => {
                      router.push(authUser.userRole?.toLowerCase() === "manager" ? "/managers/properties" : "/tenants/favorites",
                      {scroll:false}
                    )}}
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className='bg-[#e0e0e2]'/>
                  <DropdownMenuItem
                    className='cursor-pointer hover:!bg-[#27272a] hover:!text-[#f1f1f2]'
                    onClick={() =>
                      router.push(
                        `/${authUser.userRole?.toLowerCase()}s/settings`,
                        { scroll: false }
                      )
                    }
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer hover:!bg-[#27272a] hover:!text-[#f1f1f2]'
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="outline" className='text-white border-white bg-transparent hover:bg-white hover:text-[#27272a] rounded-lg cursor-pointer'>Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="secondary" className='text-white bg-[#e45a5a] hover:bg-white hover:text-[#27272a] rounded-lg cursor-pointer'>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
