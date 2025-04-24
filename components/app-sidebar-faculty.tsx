import {Home, Calendar, Settings, Bell, MessageSquare, BookOpen, Folder, Award, ChartNoAxesColumnIncreasing, Video, User, LogOut } from "lucide-react"

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
    title: "Home",
    url: "/faculty/homepage",
    icon: Home,
    notification: null,
  },
  {
    title: "Calender",
    url: "/faculty/calender",
    icon: Calendar,
    notification: null,
  },
  {
    title: "Notices",
    url: "/faculty/notices",
    icon: Bell,
    notification: 3,
  },
  {
    title: "Messages",
    url: "/faculty/messages",
    icon: MessageSquare,
    notification: 4,
  },
  {
    title: "Subjects",
    url: "/faculty/subjects",
    icon: BookOpen,
    notification: null,
  },
  {
    title: "Resources",
    url: "/faculty/resources",
    icon: Folder,
    notification: null,
  },
  {
    title: "Achivements",
    url: "/faculty/achivements",
    icon: Award,
    notification: null,
  },
  {
    title: "My Attendance",
    url: "/faculty/attendance",
    icon: ChartNoAxesColumnIncreasing,
    notification: null,
  },
  {
    title: "Classes",
    url: "/faculty/classes",
    icon: Video,
    notification: null,
  },
]

const footerItems =[
  {
    title: "Profile",
    url: "/student/profile",
    icon: User,
    notification: null,
  },
  {
    title: "Settings",
    url: "/student/settings",
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
        <a href="/student/homepage"> CampusNova</a>
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
