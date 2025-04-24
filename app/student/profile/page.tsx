import { Pencil,Calendar, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar-student"
import { Input } from "@/components/ui/input"
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
import ProfileFormContent from "./profile-overlay.tsx/page"
import App from "next/app"
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

export default function DashboardGrid() {
  return (

    <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <AppTopbar />
    <div className="p-6 space-y-6">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card 1 - 2/3 width */}
        <div className="md:w-2/3 bg-white shadow rounded-lg p-6">

          <div className="grid grid-cols-3 items-center">
            <Avatar className="w-20 h-20 ml-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <h2 className="ml-5 text-4xl text-black font-bold">John Doe</h2>
            <Dialog>
      <DialogTrigger asChild>
          <Pencil className="w-5 h-5" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <ProfileFormContent />
      </DialogContent>
    </Dialog>
          </div>
          <div className="grid grid-cols-3 mt-10">
            <div>
              <p className="text-gray-500">Course</p>
              <p className="font-semibold">M.Tech IT</p>
            </div>
            <div>
              <p className="text-gray-500">Year</p>
              <p className="font-semibold">3rd Year</p>
            </div>
            <div>
              <p className="text-gray-500">Enrollment</p>
              <p className="font-semibold">2021CS1234</p>
            </div>
          </div>
        </div>

        {/* Card 2 - 1/3 width */}
        <div className="md:w-1/3 bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">Attendance</p>
          <p className="text-xl font-bold">85%</p>
          <p className="text-gray-500 mt-4">CGPA</p>
          <p className="text-xl font-bold">8.5</p>
          <p className="text-gray-500 mt-4">Subjects</p>
          <p className="text-xl font-bold">6</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card 3 - 2/3 width */}
        <div className="md:w-2/3 bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-start mb-4">
            <Award />
          <h2 className="ml-2 text-lg font-semibold">Achievements</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-purple-700">
            <li>Dean's List 2023</li>
            <li>First Prize in Coding Competition</li>
            <li>Best Project Award</li>
          </ul>
        </div>

        {/* Card 4 - 1/3 width */}
        <div className="md:w-1/3 bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-start mb-4">
            <Calendar />
          <h2 className="ml-2 text-lg font-semibold">Upcoming Events</h2>
          </div>
          <div className="bg-purple-100 p-4 rounded mb-3">
            <p className="font-medium">Mid-Term Exam</p>
            <p className="text-sm text-gray-600">March 25, 2024</p>
          </div>
          <div className="bg-purple-100 p-4 rounded">
            <p className="font-medium">Project Submission</p>
            <p className="text-sm text-gray-600">April 1, 2024</p>
          </div>
        </div>
      </div>
    </div>

    </main>
        </SidebarProvider>
        </div>

  )
}
