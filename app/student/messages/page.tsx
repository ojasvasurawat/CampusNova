"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

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

import AppTopbar from "@/components/topbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ChatOverlay from "./dms/page"
import { AppSidebarStudent } from "@/components/app-sidebar-student"

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

  export default function Messages(){
    const [showChat, setShowChat] = useState(false);
    return(
        <>
        <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
            <AppTopbar />
            <div className="grid grid-cols-2 m-5">
                <div className="flex mx-5 text-2xl font-bold items-center gap-3 justify-start">
                <MessageSquare/> 
                <span>Messages</span>
                </div>
                <Input type="text" placeholder="Search messages..." />
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Recent Messages</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-5">
                
                        
                    <Card className="grid grid-cols-2">
                      <CardHeader>
                          <CardTitle className="flex gap-4">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Jhon Smith
                            <CardDescription>
                              <p>Regarding the assignment submission...</p>
                              <p className="mt-1">10:30</p>
                              </CardDescription>
                            </span>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="content-center justify-self-end">
                        <ChatOverlay>
                       <Button variant="outline" className="w-24 bg-black text-white pointer hover:bg-gray-800 hover:text-white">Reply</Button>
                       </ChatOverlay>
                    </CardContent>
                    </Card>

                    


                    


                    <Card className="grid grid-cols-2">
                      <CardHeader>
                          <CardTitle className="flex gap-4">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Jhon Smith
                            <CardDescription><p>Regarding the assignment submission...</p>
                            <p>08:30</p>
                            </CardDescription>
                            </span>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="content-center justify-self-end">
                        <ChatOverlay>
                       <Button variant="outline" className="w-24 bg-black text-white pointer hover:bg-gray-800 hover:text-white">Reply</Button>
                       </ChatOverlay>
                    </CardContent>
                    </Card>


                    <Card className="grid grid-cols-2">
                      <CardHeader>
                          <CardTitle className="flex gap-4">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Jhon Smith
                            <CardDescription><p>Regarding the assignment submission...</p>
                            <p>08:30</p>
                            </CardDescription>
                            </span>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="content-center justify-self-end">
                        <ChatOverlay>
                       <Button variant="outline" className="w-24 bg-black text-white pointer hover:bg-gray-800 hover:text-white">Reply</Button>
                       </ChatOverlay>
                    </CardContent>
                    </Card>


                </CardContent>
              </Card>
             

            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }