
"use client"
import * as React from "react"
 
import { Calendar } from "@/components/ui/calendar"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {  AppSidebarStudent } from "@/components/app-sidebar-student"
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
import { Clock } from "lucide-react";
import { ScrollText } from 'lucide-react';
import { ChartColumn } from 'lucide-react';

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




export default function CalendarDemo(){

    const [date, setDate] = React.useState<Date | undefined>(new Date())
 
    return(
        <>
        <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
           <AppTopbar />
            <div>

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="place-items-center"
            />
            </div>
            
             

          </main>
        </SidebarProvider>
        </div>
        </>
    )
}