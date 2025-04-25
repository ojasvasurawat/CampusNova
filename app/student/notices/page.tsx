"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarStudent } from "@/components/app-sidebar-student"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
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

  export default function Notices(){
        const [notices, setNotices] = useState<{ id: string; title: string; desc: string; audience:string; date: string }[]>([])
    
        useEffect(() => {
          const fetchNotices = async () => {
            const response = await fetch("/api/v1/notices")
            if (!response.ok) {
              throw new Error("Failed to fetch notices")
            }
            const data = await response.json()
            setNotices(data)
          }
          fetchNotices()
        }, [])
    return(
        <>
            <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
           <AppTopbar />
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <Bell/> 
                <span>Notices & Announcements</span>
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Imoprtant Exam Schedule</CardTitle>
                  <CardDescription>Friday, April 18, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You have 2 classes scheduled today. Don't Forget to check your notification for recent updates.</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Good Morning, Jhon Doe Student!</CardTitle>
                  <CardDescription>Friday, April 18, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You have 2 classes scheduled today. Don't Forget to check your notification for recent updates.</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Good Morning, Jhon Doe Student!</CardTitle>
                  <CardDescription>Friday, April 18, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You have 2 classes scheduled today. Don't Forget to check your notification for recent updates.</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>  

            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }