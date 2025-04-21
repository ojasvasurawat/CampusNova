import { Calendar, Settings, Bell, MessageSquare, BookOpen, Folder, Award, ChartNoAxesColumnIncreasing, Video} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Calender",
    url: "/calender",
    icon: Calendar,
    notification: null,
  },
  {
    title: "Notices",
    url: "/notices",
    icon: Bell,
    notification: 3,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageSquare,
    notification: 4,
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: BookOpen,
    notification: null,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: Folder,
    notification: null,
  },
  {
    title: "Achivements",
    url: "/achivements",
    icon: Award,
    notification: null,
  },
  {
    title: "My Attendence",
    url: "#",
    icon: ChartNoAxesColumnIncreasing,
    notification: null,
  },
  {
    title: "Classes",
    url: "#",
    icon: Video,
    notification: null,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><a href="/homepage">Application</a> </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.notification}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
