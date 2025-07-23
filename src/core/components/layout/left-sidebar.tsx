"use client"

import React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/core/components/ui/sidebar"
import Image from 'next/image'
import { BookOpen, Bot, Home, Plus, Settings2, SquareTerminal, Tv, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { NavUser } from './nav-user'

const data = {
  navMain: [
    {
      title: "Mama Earth",
      url: "#",
      src: "/images/mama_earth.png",
      isActive: true,
    },
    {
      title: "Boat",
      url: "#",
      src: "/images/boat.png",
      isActive: false,
    }
  ]
}

function LeftSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" side="left" className='border-none'>
      <SidebarHeader className="pt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#" >
              <div className="flex aspect-square items-center justify-center rounded-xl overflow-clip border-2 border-green-700">
                <Image src={"/images/perfora.png"} alt="Perfora" width={40} height={40} className="p-0 m-0" />
              </div>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupContent className="px-0 md:px-0">
            <SidebarMenu className='gap-2.5'>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title} className="p-0 flex items-center justify-center cursor-pointer hover:opacity-90">
                  <div className="flex aspect-square items-center justify-center rounded-xl overflow-clip border-1">
                    <Image src={item.src} alt="Perfora" width={48} height={48} className="p-0 m-0" />
                  </div>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem key={"add"} className="p-0 flex items-center justify-center cursor-pointer hover:opacity-90">
                <div className="flex aspect-square items-center justify-center rounded-lg overflow-clip border-1 h-[44px] w-[44px]">
                  {/* Plus Icon */}
                  <Plus className="size-5 text-green-600" />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu className='gap-3'>
              <SidebarMenuItem key={"users"} className="p-0 flex items-center justify-center">
                <div className="cursor-pointer flex aspect-square items-center justify-center rounded-full overflow-clip w-10 h-10 hover:bg-gray-100">
                  <Users className='text-gray-400' size={24} />
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem key={"user"} className="p-0 flex items-center justify-center">
                <NavUser user={{
                  name: "Siddharth Singh",
                  email: "si@gmail.com",
                  avatar: "/avatars/shadcn.jpg",
                }} />
              </SidebarMenuItem>


            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

export default LeftSidebar
