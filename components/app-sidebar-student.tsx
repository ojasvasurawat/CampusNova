import {Home, Calendar, Settings, Bell, MessageSquare, BookOpen, Folder,  Video, User, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"



// Menu items.
const items = [
  {
    title: "Home",
    url: "/student/homepage",
    icon: Home,
    notification: null,
  },
  {
    title: "Calender",
    url: "/student/calender",
    icon: Calendar,
    notification: null,
  },
  {
    title: "Notices",
    url: "/student/notices",
    icon: Bell,
    notification: null,
  },
  {
    title: "Messages",
    url: "/student/messages",
    icon: MessageSquare,
    notification: null,
  },
  {
    title: "Subjects",
    url: "/student/subjects",
    icon: BookOpen,
    notification: null,
  },
  {
    title: "Resources",
    url: "/student/resources",
    icon: Folder,
    notification: null,
  },
  // {
  //   title: "Placement Offers",
  //   url: "/student/placement",
  //   icon: Award,
  //   notification: null,
  // },
  // {
  //   title: "My Attendance",
  //   url: "/student/my-attendance",
  //   icon: ChartNoAxesColumnIncreasing,
  //   notification: null,
  // },
  {
    title: "Classes",
    url: "/student/classes",
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



export function AppSidebarStudent() {



 
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
