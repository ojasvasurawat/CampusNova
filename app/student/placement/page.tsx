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
import { Award } from "lucide-react"
import { Trophy } from 'lucide-react'
import { Medal } from 'lucide-react'
import { Star } from 'lucide-react'
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

  export default function Achivements(){
    return(
        <>
            <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <AppTopbar/>
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <Award/> 
                <span>Achivements</span>
            </div>
            <div className="grid grid-cols-3 gap-5 m-5">
              <Card>
                <CardHeader>
                  <Trophy />
                  <CardTitle className="text-xl font-bold">Academic Excellence</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent >
                  <div>Achive highest grade in mathematics</div>
                </CardContent>
                <CardFooter >
                  <p>March 2024</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Medal />
                  <CardTitle className="text-xl font-bold">Sports Champion</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent >
                  <div>Winner of Inter-collage Basketball Tournament</div>
                </CardContent>
                <CardFooter >
                  <p>February 2024</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Star />
                  <CardTitle className="text-xl font-bold">Perfect Attendance</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent >
                    <div>100% attendance for the semester</div>
                </CardContent>
                <CardFooter >
                  <div>January 2024</div>
                </CardFooter>
              </Card>
             

            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }