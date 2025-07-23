"use client"

import * as React from "react"
import { ArchiveX, AudioWaveform, BookOpen, Bot, ChevronRight, CircleQuestionMark, Command, File, GalleryVerticalEnd, Home, Inbox, Plus, Send, Settings, Settings2, SquareTerminal, Trash2, Tv } from "lucide-react"

import { NavUser } from "@/core/components/layout/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarInput,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger,
    useSidebar,
} from "@/core/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/core/components/ui/collapsible"
import { TeamSwitcher } from "../team-switcher"

// This is sample data
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Test_Brand",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
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
    ],
    midNav: [
        {
            title: "Overview",
            url: "#",
            icon: Home,
            isActive: true,
        },
        {
            title: "Channels",
            url: "#",
            icon: Tv,
            items: [
                {
                    title: "Meta Ads",
                    url: "#",
                },
                {
                    title: "Google Ads",
                    url: "#",
                },
                {
                    title: "Quick Commerce",
                    url: "#",
                    isActive: true,
                },
            ],
            isActive: true,
        },
        {
            title: "Creatives",
            url: "#",
            icon: BookOpen,
        }
    ],
    bottomNav: [
        {
            title: "Help",
            url: "#",
            icon: CircleQuestionMark,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props} className="border-none" >
            <SidebarHeader className="pt-5">
                <div className={`h-12 flex justify-center items-center ${open ? 'gap-4' : 'gap-8'}`}>
                    {open && <TeamSwitcher teams={data.teams} />}
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent className="px-2 bg-gray-100 rounded-sm mt-4">
                <SidebarGroup className="px-2 py-4">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {data.midNav.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        {!item.items && (
                                            <SidebarMenuButton tooltip={item.title} size={"default"} className="cursor-pointer hover:bg-[#DFEAE8]">
                                                {item.icon && <item.icon size={14} />}
                                                <span className="text-base">{item.title}</span>
                                                {item.items && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                                            </SidebarMenuButton>
                                        )}
                                        {item.items && <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title} size={"default"} className="cursor-pointer hover:bg-[#DFEAE8]">
                                                {item.icon && <item.icon size={14} />}
                                                <span className="text-base">{item.title}</span>
                                                {item.items && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>}
                                        {item.items && <CollapsibleContent className="pl-4">
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title} className="pt-1">
                                                        <SidebarMenuSubButton className={`cursor-pointer hover:bg-[#DFEAE8] ${subItem.isActive && 'bg-[#DFEAE8] text-[#027056]'} `} asChild>
                                                            <a href={subItem.url} className="p-2">
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                        }
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="px-2 py-4 mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-4.5">
                            {data.bottomNav.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton tooltip={item.title} size={"default"} className="cursor-pointer hover:bg-[#DFEAE8]">
                                        {item.icon && <item.icon size={12} />}
                                        <span className="text-base">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
