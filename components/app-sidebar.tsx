import { Calendar, Settings, Bell, MessageSquare, BookOpen, Folder, Award, ChartNoAxesColumnIncreasing, Video, User, LogOut } from "lucide-react"

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
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
    title: "My Attendance",
    url: "/my-attendance",
    icon: ChartNoAxesColumnIncreasing,
    notification: null,
  },
  {
    title: "Classes",
    url: "/classes",
    icon: Video,
    notification: null,
  },
]

const footerItems =[
  {
    title: "Profile",
    url: "/profile",
    icon: User,
    notification: null,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings ,
    notification: null,
  },
  {
    title: "Logout",
    url: "/auth/login",
    icon: LogOut ,
    notification: null,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="text-2xl font-bold mx-2 mt-3">
        <a href="/homepage"> CampusNova</a>
        </div>
        <div className="mx-2">
          <div className="text-lg">Jhon Doe</div>
          <div className="font-thin">Student</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
      <SidebarFooter>
        {footerItems.map((item) => (
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
      </SidebarFooter>  
    </Sidebar>
  )
}
