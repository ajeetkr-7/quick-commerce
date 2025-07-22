"use client"

import React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/core/components/ui/sidebar"
import Image from 'next/image'
import { BookOpen, Bot, Home, Plus, Settings2, SquareTerminal, Tv } from 'lucide-react'

const data = {
  navMain: [
    {
      title: "Mama Earth",
      url: "#",
      src: "/assets/images/mama_earth.png",
      isActive: true,
    },
    {
      title: "Boat",
      url: "#",
      src: "/assets/images/boat.png",
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
                  <Image src={"/assets/images/perfora.png"} alt="Perfora" width={40} height={40} className="p-0 m-0" />
                </div>
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="pt-3">
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu className='gap-2.5'>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title} className="p-0 flex items-center justify-center">
                      <div className="flex aspect-square items-center justify-center rounded-xl overflow-clip border-1">
                        <Image src={item.src} alt="Perfora" width={40} height={40} className="p-0 m-0" />
                      </div>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem key={"add"} className="p-0 flex items-center justify-center">
                    <div className="flex aspect-square items-center justify-center rounded-lg overflow-clip border-1 h-[40px] w-[40px]">
                      {/* Plus Icon */}
                      <Plus className="size-5 text-green-600" />
                    </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
  )
}

export default LeftSidebar
