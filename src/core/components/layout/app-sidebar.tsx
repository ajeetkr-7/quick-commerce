"use client"

import * as React from "react"
import { ArchiveX, AudioWaveform, BookOpen, Bot, ChevronRight, Command, File, GalleryVerticalEnd, Home, Inbox, Plus, Send, Settings2, SquareTerminal, Trash2, Tv } from "lucide-react"

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
            name: "Acme Inc",
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
            title: "Inbox",
            url: "#",
            src: "/assets/images/mama_earth.png",
            isActive: true,
        },
        {
            title: "Drafts",
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
                },
            ],
        },
        {
            title: "Creatives",
            url: "#",
            icon: BookOpen,
        }
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // Note: I'm using state to show active item.
    // IRL you should use the url/router.
    return (
        <Sidebar collapsible="icon" {...props} className="border-none" >
            <SidebarHeader className="pt-5">
                <div className="flex justify-center items-center gap-8">
                    <TeamSwitcher teams={data.teams} />
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent className="px-2 bg-gray-100 rounded-sm">
                <SidebarGroup className="px-0 py-5">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.midNav.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title} size={"md"}>
                                                {item.icon && <item.icon size={12} />}
                                                <span>{item.title}</span>
                                                {item.items && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        {item.items && <CollapsibleContent className="pl-4">
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title} className="pt-1">
                                                        <SidebarMenuSubButton asChild>
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
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
