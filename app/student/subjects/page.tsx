import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar-student"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"
import AppTopbar from "@/components/topbar"



const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]

  export default function Subjects(){
    return(
        <>
          <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <AppTopbar  />
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <BookOpen/> 
                <span>My Sybjects</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Mathematics</CardTitle>
                  <CardDescription>Dr. Michale Brown</CardDescription>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">95%</div>  
                  </div>
                  <Progress value={95} />
                </CardContent>
                <CardFooter className="grid grid-rows-2">
                  <div>Next Class</div>
                  <p>Today, 10:00 AM</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Physics</CardTitle>
                  <CardDescription>Dr. Jhon Smith</CardDescription>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">70%</div>  
                  </div>  
                  <Progress value={70} />
                </CardContent>
                <CardFooter className="grid grid-rows-2">
                  <div>Next Class</div>
                  <p>Today, 02:00 PM</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Computer Science</CardTitle>
                  <CardDescription>Prof. Jhon Doe</CardDescription>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">85%</div>  
                  </div>
                  <Progress value={85} />
                </CardContent>
                <CardFooter className="grid grid-rows-2">
                  <div>Next Class</div>  
                  <div>Today, 11:30 AM</div>
                </CardFooter>
              </Card>
             

            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }