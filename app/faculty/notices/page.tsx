"use client"

import { useState, useEffect } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
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

import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import NoticeForm from "./notice-overlay/page"
import NoticeBox from "./notice-box/page"
import ProfileFormContent from "../profile/profile-overlay.tsx/page"

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
            <Dialog>
        <SidebarProvider>
          <AppSidebarFaculty />
          <main className="flex-1">
            <AppTopbar />

            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-between">
              <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <Bell/> 
                <span>Notices & Announcements</span>
              </div>
              
                <DialogTrigger asChild>
                  <button><NoticeBox/></button>
                </DialogTrigger>
                
              
            </div>

            
              <DialogContent className=" max-w-screen mx-15">
                <NoticeForm />
              </DialogContent>
    


            <div className="grid grid-cols-1 gap-5 m-5">
              {notices.map((notice) => (
                <Card key={notice.id} className="w-full">
                  <CardHeader>
                    <CardTitle>{notice.title}</CardTitle>
                    <CardDescription>{notice.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{notice.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </SidebarProvider>
        </Dialog>
        </div>
        </>
    )
  }