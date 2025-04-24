"use client"

import { useState, useEffect } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar-faculty"
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
          <AppSidebar />
          <main className="flex-1">
            <div className="flex gap-10 m-5">
              <SidebarTrigger />
              <Input type="text" placeholder="Search..." />
              <DropdownMenu>
                <DropdownMenuTrigger><Bell/></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Card >
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    

                    <CardContent className="grid gap-4">
                      {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                        <Switch />
                      </div> */}
                      <div>
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                          >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {notification.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter>
                      <Button className="w-full">
                        <Check /> Mark all as read
                      </Button>
                    </CardFooter> */}
                  </Card>

                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger><MessageSquare/></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Card >
                    <CardHeader>
                      <CardTitle>Messages</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                        <Switch />
                      </div> */}
                      <div>
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                          >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1 ">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <p className="text-sm font-medium leading-none">
                                {notification.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter>
                      <Button className="w-full">
                        <Check /> Mark all as read
                      </Button>
                    </CardFooter> */}
                  </Card>

                </DropdownMenuContent>
              </DropdownMenu>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

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