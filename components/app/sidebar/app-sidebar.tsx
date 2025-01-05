"use client"

import * as React from "react"
import {
  BookCheck,
  BookOpenCheck,
  CircleUser,
  Contact,
  FileUser,
  GraduationCap,
  Home,
  MicVocal,
  NotepadText,
  PartyPopper,
  Send,
  Settings,
  Shapes,
  Users,
} from "lucide-react"

import { NavMenu } from "./nav-menu"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Profile",
      url: "#",
      icon: CircleUser,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  navMenu: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "Teachers",
      url: "/teachers",
      icon: FileUser,
    },
    {
      name: "Students",
      url: "#",
      icon: Contact,
    },
    {
      name: "Parents",
      url: "#",
      icon: Users,
    },
    {
      name: "Classes",
      url: "#",
      icon: Shapes,
    },
    {
      name: "Lessons",
      url: "#",
      icon: NotepadText,
    },
    {
      name: "Exams",
      url: "#",
      icon: BookOpenCheck,
    },
    {
      name: "Assignments",
      url: "#",
      icon: BookCheck,
    },
    {
      name: "Events",
      url: "#",
      icon: PartyPopper,
    },
    {
      name: "Messages",
      url: "#",
      icon: Send,
    },
    {
      name: "Announcement",
      url: "#",
      icon: MicVocal,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Praxis</span>
                  <span className="truncate text-xs">University</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMenu projects={data.navMenu} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

