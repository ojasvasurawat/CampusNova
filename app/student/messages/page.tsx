"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import {  AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MessageSquare } from "lucide-react"

import AppTopbar from "@/components/topbar"




  export default function Messages(){

    return(
        <>
        <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarFaculty />
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
                  <CardTitle className="text-xl font-bold">Join a room to Start Chatting</CardTitle>
                  <CardDescription>
                    Join a room using room code to start chatting with your friends.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="flex items-center justify-center h-100">
  <a href="https://chat-app-frontend-psi-six.vercel.app/" className="p-4 bg-black text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black hover:border-2 cursor-pointer">
    
      Join a room

  </a>
</div>


            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }